import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Room from '../component/Room';
import Loading from '../component/Loading';
import { DatePicker } from 'antd';
import moment from 'moment';

function HomeScreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [duplicateRoom, setDupicateRoom] = useState();
  const { RangePicker } = DatePicker;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = (await axios.get('/api/rooms/getallrooms')).data;
        setRooms(data);
        setDupicateRoom(data);
        setLoading(false);
      } catch (err) {
        setError(error);
        console.log(err);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  function filterByDate(dates) {
    console.log(dates[0].$d);
    const from = moment(dates[0].$d).format('YYYY-MM-DD');
    const to = moment(dates[1].$d).format('YYYY-MM-DD');
    setFromDate(from);
    setToDate(to);


    var temprooms=[];
    var availability=false;
    for(const room of duplicateRoom){
      if(room.currentBookings.length>0){
        for(const booking of room.currentBookings){
          const d1=moment(moment(booking.fromDate)._i).format('YYYY-MM-DD');
          const d2=moment(moment(booking.toDate)._i).format('YYYY-MM-DD');
          console.log(from);
          console.log(to);
          console.log(d1);
          console.log(d2);
          if(!(from>d1 && from<d2)&& !(to>d1 && to<d2)){
            if(from!==d1 && from!==d2 && to!==d1 && from!==d2){
              availability=true;
            }
          }
        }
      }
      if(availability===true || room.currentBookings.length===0){
        temprooms.push(room);
      }
      setRooms(temprooms);
    }

  }
  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-md-3'>
          <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
        </div>
      </div>
      <div className='row justify-content-center mt-5'>
        {loading ? (<h1><Loading /></h1>) : error ? (<h1>Error</h1>) : (rooms.map(room => {
          return <div className='col-md-9 mt-2'>
            <Room room={room} fromDate={fromDate} toDate={toDate} />
          </div>;
        }))}
      </div>
    </div>
  )
}

export default HomeScreen