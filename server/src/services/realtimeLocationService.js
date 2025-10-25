const redisRepo=require("../repositories/redisLocationRepository");
const driverLocationRepo=require("../repositories/driverLocationRepository");
class RealTimeLocationService{
    async updateLocation(driverId,latitude,longitude){
        await redisRepo.updateDriverLocation(driverId,latitude,longitude) //save in redis

        await driverLocationRepo.upsertDriverLocation(driverId,latitude,longitude); //save in DB also 

        return{driverId,latitude,longitude}
    }  
    async getNearByDrivers(latitude,longitude,radius){
        const drivers=await redisRepo.findNearByDrivers(latitude,longitude,radius);
        return drivers;
    } 
}

module.exports=new RealTimeLocationService();