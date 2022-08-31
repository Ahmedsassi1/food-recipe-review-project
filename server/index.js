const express = require("express");
const itemRoutes = require('./routes/item.routes')
// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('./database-mysql');
var plate = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.use("/api/items", itemRoutes);

app.get("/all",itemRoutes);
app.get("one",itemRoutes);
app.post("/addOne",itemRoutes);
app.put("/updateOne",itemRoutes);
app.delete("/deleteOne",itemRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
