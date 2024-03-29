const {
  findUserTimeLimitController,
  createUserWithTimeLimitController,
} = require("../controller/User.controller");

const router = require("express").Router();

router.post("/createUserWithTimeLimit", createUserWithTimeLimitController);

router.post("/findUserTimeLimit", findUserTimeLimitController);

module.exports = router;
