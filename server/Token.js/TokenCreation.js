var jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_SECRET } = require('../config/authConfig')

module.exports = {
    NewToken: function (userObject) {
        const token = jwt.sign(userObject, ACCESS_TOKEN_SECRET, { expiresIn: '10s' });
        return token
    }
}
