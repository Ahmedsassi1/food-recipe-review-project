const mongoose = require("mongoose");
const db = require("./index.js");

const itemSchema = new mongoose.Schema({
  name : String,
  Id : Number,
  ImageUrl : String,
  FavRate : Number,
  BadRate :Number,
  ingredients:Array,
  howTo:String,
});

const plate = mongoose.model("plate", itemSchema);

module.exports = plate;