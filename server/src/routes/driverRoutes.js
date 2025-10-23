const express=require('express');
const driverController=require("../controllers/driverController");

const router=express.Router();

router.post('/location', driverController.handleLocationUpdate);

module.exports=router;