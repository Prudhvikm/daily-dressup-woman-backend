const mongoose = require("mongoose");

const itemsSchema = mongoose.Schema(
  {
    brand: { type: String, required: true },
    poster: { type: String, required: true },
    price: { type: String, required: true },
    rating: { type: Number, required: true },
    productdetails: { type: String, required: true },
    category: { type: String, required: true }
  },
  { timestamps: true }
);

const itemModel = mongoose.model("items", itemsSchema);

module.exports = itemModel
