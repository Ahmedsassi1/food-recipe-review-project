var jwt = require('jsonwebtoken');

module.exports = {
    TokenGet: (req, res, next) => {
        const token = req.header('auth-token');
        if (!token) res.status(401).send('acces denied');
        try {
            const verified = jwt.verify(token, ACCESS_TOKEN_SECRET);
            req.user = verified;
            next()
        } catch (err) {
            res.status(400).send('invalid Token')
        }
    }
}