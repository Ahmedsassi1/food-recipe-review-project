const mongoose = require("mongoose");
const db = require("./index.js");

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const user = mongoose.model("user", UserSchema);

module.exports = user;