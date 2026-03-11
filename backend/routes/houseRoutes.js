const express = require("express");
const router = express.Router();

const houseController = require("../controllers/housecontroller");

router.get("/", houseController.getHouses);
router.post("/", houseController.addHouse);

module.exports = router;