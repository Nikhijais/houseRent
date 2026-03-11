const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
  title: String,
  location: String,
  price: Number
});

module.exports = mongoose.model("House", houseSchema);