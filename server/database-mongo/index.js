const mongoose = require("mongoose");
const mongoUri = "mongodb://localhost/mvp";

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log("db connected");
});
const db = mongoose.connection;

mongoose.set('useFindAndModify', false);


module.exports = db