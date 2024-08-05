const mon=require('mongoose');

const bookingSchema= mon.Schema({
    room:{
        type:String,
        required:true,
    },
    roomId:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },
    fromDate:{
        type:String,
        required:true,
    },
    toDate:{
        type:String,
        required:true,
    },
    totalAmount:{
        type:String,
        required:true,
    },
    totalDays:{
        type:String,
        required:true,
    },
    transactionId:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
        default:"booked",
    },
},{
    timestamps:true,
});

const bookingModel=mon.model("bookings",bookingSchema);
module.exports=bookingModel;