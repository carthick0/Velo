const mongoose = require("mongoose");
const DriverLocation = require("../models/driver-location");
const CrudRepository = require("./crudRepository");

class DriverLocationRepository extends CrudRepository {
  constructor() {
    super(DriverLocation);
  }

  async upsertDriverLocation(driverId, latitude, longitude) {
    const objectId = new mongoose.Types.ObjectId(driverId);

    return await DriverLocation.findOneAndUpdate(
      { driverId: objectId },
      { latitude, longitude, updatedAt: new Date() },
      { upsert: true, new: true }
    );
  }
}

module.exports = new DriverLocationRepository();
