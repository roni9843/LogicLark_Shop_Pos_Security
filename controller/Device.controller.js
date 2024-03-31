const PermissionDeviceIdNumber = require("../models/Device.model");

// Controller function to handle POST request
const createPermissionDeviceIdNumber = async (req, res) => {
  try {
    // Extracting data from request body
    const { deviceId } = req.body;

    // Creating a new PermissionDeviceIdNumber document
    const newPermissionDeviceIdNumber = new PermissionDeviceIdNumber({
      deviceId: deviceId,
    });

    // Saving the document to the database
    await newPermissionDeviceIdNumber.save();

    // Sending success response
    res
      .status(201)
      .json({
        message: "PermissionDeviceIdNumber created successfully",
        data: newPermissionDeviceIdNumber,
      });
  } catch (error) {
    // Handling errors
    console.error("Error creating PermissionDeviceIdNumber:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createPermissionDeviceIdNumber };
