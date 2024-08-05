import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../component/Loading';
import moment from 'moment';

function BookingScreen({ match }) {
    const [room, setRoom] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [totalAmt,setTotalAmt]=useState();
    let { roomid, fromdate, todate } = useParams();
    const firstdate = moment(fromdate, 'DD-MM-YYYY')
    const lastdate = moment(todate, 'DD-MM-YYYY')

    const totaldays = moment.duration(lastdate.diff(firstdate)).asDays() + 1;
    useEffect(() => {
        const fetchRoomData = async () => {
            try {
                setLoading(true);
                const data = (await axios.post("/api/rooms/getroombyid", { roomid: roomid })).data;
                setTotalAmt(totaldays*data.rentPerDay);
                setRoom(data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError(err);
            }
        };
        fetchRoomData();
    }, []);
    async function bookRoom(){
        const bookingDetails={
            room,
            userId:JSON.parse(localStorage.getItem('currentUser'))._id,
            fromdate,
            todate,
            totalAmt,
            totaldays
        };
        try {
            const result=await axios.post('/api/bookings/bookingroom',bookingDetails);
        } catch (error) {
            
        }
    }
    return (
        <div className='m-5'>
            {loading ? (<h1><Loading /></h1>) : error ? (<h1>Error</h1>) : (
                <div>
                    <div className='row justify-content-center mt-5 bs'>
                        <div className='col-md-6'>
                            <h1>{room.name}</h1>
                            <img src={room.imageUrls[0]} className='bigimg' />
                        </div>

                        <div className='col-md-6'>
                            <div style={{ textAlign: "right" }}>
                                <h1>Booking Details</h1>
                                <hr />
                                <b>
                                    <p>Name: {JSON.parse(localStorage.getItem("currentUser")).name}</p>
                                    <p>From Date: {fromdate}</p>
                                    <p>To Date: {todate}</p>
                                    <p>Max Count: {room.maxCount}</p>
                                </b>
                            </div>
                            <div style={{ textAlign: "right" }}>
                                <h1>Amount</h1>
                                <hr />
                                <b>
                                    <p>Total Days :{totaldays}</p>
                                    <p>Rent per day : {room.rentPerDay}</p>
                                    <p>Total Amount :{totalAmt}</p>
                                </b>
                            </div>
                            <div style={{ float: "right" }}>
                                <button className='btn btn-dark' onClick={bookRoom}>Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}

export default BookingScreen