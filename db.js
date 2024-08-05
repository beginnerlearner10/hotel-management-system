const mongoose=require('mongoose');

const URL="mongodb+srv://rajrupsamanta2002:pTyuRqFqWEiZqZ0V@cluster0.9ll5sc4.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URL,{});

var con=mongoose.connection

con.on('error',()=>{
    console.log("MongoDB connection failed");
});

con.on("connected",()=>{
    console.log("MongoDB connection successful!");
});

module.exports=mongoose;

