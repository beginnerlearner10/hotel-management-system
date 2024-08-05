const express = require('express');
const route = express.Router();
const Bookng = require('../models/booking');
const Room=require('../models/room');

route.post('/bookingroom', async (req, res) => {
    const { room,
        userId,
        fromdate,
        todate,
        totalAmt,
        totaldays } = req.body;
    try {
        const newBooking = new Bookng({
            room: room.name,
            roomId: room._id,
            userId:userId,
            fromDate:fromdate,
            toDate:todate,
            totalAmount:totalAmt,
            totalDays:totaldays,
            transactionId: "1234",
        });
        const booking = await newBooking.save();
        const roomTemp=await Room.findOne({_id:room._id});
        roomTemp.currentBookings.push({bookingId:booking._id,fromDate:fromdate,toDate:todate,userId:userId,status:booking.status});
        await roomTemp.save();
        res.send("Room booked successfully!");
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = route;