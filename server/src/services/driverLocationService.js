const locationRepository = require("../repositories/driverLocationRepository");

class DriverLocationService{
    async updateDriverLocation(driverId,latitude,longitude){
        const response=await locationRepository.upsertDriverLocation(driverId,latitude,longitude);
        return response;
    }
}

module.exports=new DriverLocationService();