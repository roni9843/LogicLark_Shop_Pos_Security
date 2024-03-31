const mongoose = require("mongoose");

// Define schema
const permissionDeviceIdNumberSchema = new mongoose.Schema({
  createdTime: { type: Date, default: Date.now },
  deviceId: { type: String, required: true },
  permission: { type: Boolean, default: false },
});

// Create model
const PermissionDeviceIdNumber = mongoose.model(
  "PermissionDeviceIdNumber",
  permissionDeviceIdNumberSchema
);

module.exports = PermissionDeviceIdNumber;
