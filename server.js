const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/pizzaOrderDB", {
  useNewUrlParser: true,
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
