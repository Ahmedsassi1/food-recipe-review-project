var user = require('../database-mongo/users.models.js');

var selectAllu = function (req, res) {
    user.find({})
        .then((items) => {
            res.status(200).send(items);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

var selectOneu = (req, res) => {
    user.findOne(req.body).then((done) => {
        res.status(200).send(done);
    })
        .catch((error) => {
            res.status(500).send(error);
        });
};

var addOneu = (req, res) => {
    user.create(req.body).then((done) => {
        res.status(201).send(done);
    })
        .catch((error) => {
            res.send(error);
        });
};

var updateOneu = (req, res) => {
    user.findOneAndUpdate(req.body[0],req.body[1]).then((done) => {
        res.send(done);
    })
        .catch((error) => {
            res.send(error);
        });
};

var deleteOneu = (req, res) => {
    user.findOneAndDelete(req.body).then((done) => {
        res.send(done);
    })
        .catch((error) => {
            res.send(error);
        });
};

module.exports = { selectAllu,selectOneu,addOneu,deleteOneu,updateOneu};