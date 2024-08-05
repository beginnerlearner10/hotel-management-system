const mon=require('mongoose');

const userSchema=mon.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
},{
    timpeStamps:true
});

const userModel=mon.model("user",userSchema);

module.exports=userModel;