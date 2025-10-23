const locationService=require("../services/driverLocationService");
class DriverController {
  async handleLocationUpdate(req, res) {
    try {
      // Get from body instead of query
      const { driverId, latitude, longitude } = req.body;

      if (!driverId || !latitude || !longitude) {
        return res.status(400).json({ error: "driverId, latitude, and longitude are required" });
      }

      const response = await locationService.updateDriverLocation(driverId, latitude, longitude);
      res.status(201).json({
        message: "Driver Location Updated Successfully",
        data: response
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports=new DriverController();