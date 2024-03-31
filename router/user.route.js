const {
  createPermissionDeviceIdNumber,
} = require("../controller/Device.controller");
const {
  findUserTimeLimitController,
  createUserWithTimeLimitController,
} = require("../controller/User.controller");

const router = require("express").Router();

router.post("/createUserWithTimeLimit", createUserWithTimeLimitController);

router.post("/findUserTimeLimit", findUserTimeLimitController);

router.post("/RequestDeviceId", createPermissionDeviceIdNumber);

module.exports = router;
