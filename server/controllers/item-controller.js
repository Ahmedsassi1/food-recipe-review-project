// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var db = require("../database-mysql");
var plate = require('../database-mongo/Item.model.js');

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
// var selectAll = function (req, res) {
//   db.query("SELECT * FROM items", (err, items, fields) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(items);
//     }
//   });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES
var selectAll = function (req, res) {
    plate.find({})
        .then((items) => {
            res.status(200).send(items);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
// var selectAll = async function (req, res) {
//   try {
//     const items = await Item.find({});
//     res.status(200).send(items);
//   } catch (error) {
//     res.status(200).send(error);
//   }
// };

var selectOne = (req, res) => {
    plate.findOne(req.body).then((done) => {
        res.status(200).send(done);
    })
        .catch((error) => {
            res.status(500).send(error);
        });
};

var addOne = (req, res) => {
    plate.create(req.body).then((done) => {
        res.status(201).send(done);
    })
        .catch((error) => {
            res.send(error);
        });
};

var updateOne = (req, res) => {
    plate.updateOne(req.body).then((done) => {
        res.send(done);
    })
        .catch((error) => {
            res.send(error);
        });
};

var deleteOne = (req, res) => {
    plate.deleteOne(req.body).then((done) => {
        res.send(done);
    })
        .catch((error) => {
            res.send(error);
        });
};


module.exports = { selectAll,selectOne,addOne,updateOne,deleteOne};
