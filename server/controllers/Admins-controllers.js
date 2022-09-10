var user = require('../database-mongo/users.models.js');

var selectAll = function (req, res) {
    user.find({})
        .then((items) => {
            res.status(200).send(items);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

var selectOne = (req, res) => {
    user.findOne(req.body).then((done) => {
        res.status(200).send(done);
    })
        .catch((error) => {
            res.status(500).send(error);
        });
};

var addOne = (req, res) => {
    user.create(req.body).then((done) => {
        res.status(201).send(done);
    })
        .catch((error) => {
            res.send(error);
        });
};

var updateOne = (req, res) => {
    user.findOneAndUpdate(req.body[0],req.body[1]).then((done) => {
        res.send(done);
    })
        .catch((error) => {
            res.send(error);
        });
};

var deleteOne = (req, res) => {
    user.findOneAndDelete(req.body).then((done) => {
        res.send(done);
    })
        .catch((error) => {
            res.send(error);
        });
};

module.exports = { selectAll,selectOne,addOne,deleteOne};