const express=require('express');

const app=express();

const dbConfig=require('./db');

app.use(express.json());

const roomsRoute=require('./routes/roomsRoute');
const usersRoute=require("./routes/userRoute");
const bookingsRoute=require('./routes/bookingsRoute');

app.use("/api/rooms",roomsRoute);
app.use("/api/users",usersRoute);
app.use("/api/bookings",bookingsRoute);

const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
