const routeruser = require('express').Router();
const itemControllerUser = require("../controllers/item-controller");
 

routeruser.get("/all", itemControllerUser.selectAll);
routeruser.get("/one", itemControllerUser.selectOne);
routeruser.post("/addOne", itemControllerUser.addOne);
routeruser.put("/updateOne", itemControllerUser.updateOne);
routeruser.delete("/deleteOne", itemControllerUser.deleteOne);

module.exports = routeruser;