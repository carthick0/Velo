const express=require('express');
const realtimeLocationController = require('../controllers/realtimeLocationController');
const router=express.Router();

router.post("/update",realtimeLocationController.updateLocationRedis);
router.get('/nearby',realtimeLocationController.getNearByDrivers);
module.exports=router;