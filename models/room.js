
const mon=require('mongoose');

const roomSchema=mon.Schema({
    name:{
        type:String,
        required:true
    },
    rentPerDay:{
        type:Number,
        required:true
    },
    maxCount:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true,
    },
    imageUrls:[],
    currentBookings:[],   
},  
{
    timestamps:true,
}
);

const roomModel=mon.model("rooms",roomSchema);

module.exports=roomModel;