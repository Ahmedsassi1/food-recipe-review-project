var jwt = require('jsonwebtoken');


module.exports = {
    NewToken: function (userObject) {
        const token = jwt.sign(userObject,'secret', { expiresIn: '10s' });
        return token
    }
}
