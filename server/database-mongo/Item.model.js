const mongoose = require("mongoose");


const itemSchema = new mongoose.Schema({
  name : String,
  ImageUrl : String,
  FavRate : { type : Number , default : 0},
  BadRate :{ type : Number , default : 0},
  ingredients:Array,
  howTo:String,
});

const plate = mongoose.model("plate", itemSchema);

module.exports = plate;