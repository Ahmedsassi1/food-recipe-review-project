const bcrypt = require('bcrypt');

 module.exports = {
  hashPassword: function (password, saltRounds) {
    return bcrypt.hashSync(password,saltRounds)
     
  },
  verifyPassword: function (password, hashedPassword) {
     return bcrypt.compareSync(password,hashedPassword)
   }
 };