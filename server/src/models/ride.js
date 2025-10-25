const mongoose=require("mongoose");

const rideSchema=new mongoose.Schema({
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    driverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        default:null
    },
    source:{
        latitue:{
            type:Number,
            required:true
        },
        longitude:{
            type:Number,
            required:true
        }
    },
    destination:{
        latitue:{
            type:Number,
            required:true
        },
        longitude:{
            type:Number,
            required:true
        }
    },
    status:{
        type:String,
        enum:["requested","accepted","ongoing","completed","cancelled"],
        default:"requested"
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('Ride',rideSchema);