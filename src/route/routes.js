const {
  insertData,
  getDataInPastWeek,
} = require("../controller/orderController");
const { db } = require("../database/db");

const router = require("express").Router();

router.post("/orders", insertData);

router.get("/orders", getDataInPastWeek);

module.exports = router;
