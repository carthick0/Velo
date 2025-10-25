const { default: mongoose } = require("mongoose");
const DriverLocation=require("../models/driver-location");
const adminService = require("../services/adminService");

class AdminController {
  async getAllDriverDetails(req, res) {
    try {
      const drivers = await DriverLocation.aggregate([
        {
          $lookup: {
            from: "users", 
            localField: "driverId",
            foreignField: "_id",
            as: "driverInfo"
          }
        },
        {
          $unwind: "$driverInfo" 
        },
        {
          $project: {
            _id: 1,
            latitude: 1,
            longitude: 1,
            updatedAt: 1,
            "driverInfo._id": 1,
            "driverInfo.name": 1,
            "driverInfo.email": 1,
            "driverInfo.vehicleNumber": 1,
            "driverInfo.role": 1
          }
        }
      ]);

      res.status(200).json({
        message: "Drivers with location fetched successfully",
        data: drivers
      });
    } catch (error) {
      console.error("Error fetching drivers:", error);
      res.status(500).json({ error: error.message });
    }
  }

  async getDriverById(req, res) {
    try {
      const { driverId } = req.params;

      
      if (!mongoose.Types.ObjectId.isValid(driverId)) {
        return res.status(400).json({ error: "Invalid driver ID format" });
      }

      const driver = await DriverLocation.aggregate([
        { $match: { driverId: new mongoose.Types.ObjectId(driverId) } },
        {
          $lookup: {
            from: "users",
            localField: "driverId",
            foreignField: "_id",
            as: "driverInfo"
          }
        },
        { $unwind: "$driverInfo" },
        {
          $project: {
            _id: 1,
            latitude: 1,
            longitude: 1,
            updatedAt: 1,
            "driverInfo._id": 1,
            "driverInfo.name": 1,
            "driverInfo.email": 1,
            "driverInfo.vehicleNumber": 1,
            "driverInfo.role": 1
          }
        }
      ]);

      if (driver.length === 0) {
        return res.status(404).json({ error: "Driver not found" });
      }
      console.log(driver);
      res.status(200).json({
        message: "Driver details fetched successfully",
        data: driver[0]
      });
      console.log(res);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getAllDrivers(req,res){
    try {
      const response=await adminService.getAllDrivers();
      return res.status(200).json({
        message:"Drivers fetched successfully",
        response
      })
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.log(error);
    }
  }
}

module.exports = new AdminController();
