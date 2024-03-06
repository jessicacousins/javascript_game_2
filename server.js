require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const orderSchema = new mongoose.Schema({
  name: String,
  address: String,
  contact: String,
  instructions: String,
  items: Array,
  total: Number,
});

const Order = mongoose.model("Order", orderSchema);

app.post("/api/orders", (req, res) => {
  const newOrder = new Order(req.body);
  newOrder
    .save()
    .then((order) => {
      console.log("New order received:", order);
      res.json(order);
    })
    .catch((err) => {
      console.error("Error saving order:", err);
      res.status(400).json("Error: " + err);
    });
});

// GET orders
app.get("/api/orders", (req, res) => {
  console.log("GET /api/orders route hit");
  Order.find()
    .then((orders) => res.json(orders))
    .catch((err) => res.status(400).json("Error: " + err));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
