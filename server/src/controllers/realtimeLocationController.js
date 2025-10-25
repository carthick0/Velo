const realtimeLocationService = require("../services/realtimeLocationService");

class RealtimeLocationController{
    async updateLocationRedis(req,res){
        try {
           const { driverId, latitude, longitude } = req.body;
            const result=await realtimeLocationService.updateLocation(driverId,latitude,longitude);
            res.status(200).json({ message: "Driver location updated in Redis", result });
        }catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async getNearByDrivers(req,res){
        try {
            const {latitude,longitude,radius}=req.query;
            const drivers=await realtimeLocationService.getNearByDrivers(latitude,longitude,radius ||5);
            res.status(200).json({ message: "Nearby drivers fetched successfully", drivers });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
module.exports=new RealtimeLocationController();