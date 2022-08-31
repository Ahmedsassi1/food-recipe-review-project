const router = require('express').Router();
const itemController = require("../controllers/item-controller");


router.get("/all", itemController.selectAll);
router.get("/one", itemController.selectOne);
router.post("/addOne", itemController.addOne);
router.put("/uodateOne", itemController.updateOne);
router.delete("/deleteOne", itemController.deleteOne);

module.exports = router;
