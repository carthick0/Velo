const express=require("express");
const adminController = require("../controllers/adminController");
const router=express.Router();
router.get("/",adminController.getAllDriverDetails);
router.get("/:driverId", adminController.getDriverById);
module.exports=router;
