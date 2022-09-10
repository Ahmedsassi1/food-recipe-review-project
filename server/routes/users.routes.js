const routeruser = require('express').Router();
const itemControllerUser = require("../controllers/Admins-controllers");
 

routeruser.get("/allu", itemControllerUser.selectAllu);
routeruser.get("/oneu", itemControllerUser.selectOneu);
routeruser.post("/addOneu", itemControllerUser.addOneu);
routeruser.put("/updateOneu", itemControllerUser.updateOneu);
routeruser.delete("/deleteOneu", itemControllerUser.deleteOneu);

module.exports = routeruser;