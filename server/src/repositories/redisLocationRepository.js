const redisClient=require('../config/redis');
const GEO_KEY="drivers:location";

class RedisLocaitonRepository{
    async updateDriverLocation(driverId,latitude,longitude){
        
        await redisClient.geoAdd(GEO_KEY, [{
            longitude: longitude,
            latitude: latitude,
            member: driverId.toString()
        }]);
        console.log("📍 Updating driver:", driverId, latitude, longitude);
    }
    
    
async findNearByDrivers(latitude, longitude, radius = 5) {
  const drivers = await redisClient.sendCommand([
    'GEOSEARCH',
    'drivers:location',
    'FROMLONLAT', longitude.toString(), latitude.toString(),
    'BYRADIUS', radius.toString(), 'km',
    'WITHDIST'
  ]);

  console.log("Nearby drivers:", drivers);
  return drivers;
}

}


module.exports=new RedisLocaitonRepository();