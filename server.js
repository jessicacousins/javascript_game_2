const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/pizzaOrderDB", { useNewUrlParser: true });

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
    .then((order) => res.json(order))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
