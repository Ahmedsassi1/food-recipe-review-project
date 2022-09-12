const routeruser = require('express').Router();
const itemControllerUser = require("../controllers/Admins-controllers");
 

routeruser.get("/allu", itemControllerUser.getAllUsers);
routeruser.post("/oneu", itemControllerUser.loggingIn);
routeruser.post("/addOneu", itemControllerUser.createNewUser);


module.exports = routeruser;