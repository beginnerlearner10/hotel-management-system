import React, { useState } from 'react'
import { Tabs } from 'antd';
import axios from 'axios';

const { TabPane } = Tabs;
function AdminScreen() {
    return (
        <div>
            <h1>AdminScreen</h1>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Bookings" key="1"><h1>Bookings</h1></TabPane>
                <TabPane tab="Rooms" key="2"><h1>Rooms</h1></TabPane>
                <TabPane tab="Add Room" key="3"><Addroom /></TabPane>
                <TabPane tab="Users" key="4"><h1>Users</h1></TabPane>
            </Tabs>
        </div>
    )
}

export default AdminScreen;



export function Addroom() {
    const [name,setName]=useState();
    const [rent,setRent]=useState();
    const [maxCount,setMaxCount]=useState();
    const [description,setDescription]=useState();
    const [phoneNumber,setPhoneNumber]=useState();
    const [type,setType]=useState();
    const [imageUrl1,setImageurl1]=useState();
    const [imageUrl2,setImageurl2]=useState();
    const [imageUrl3,setImageurl3]=useState();

    async function addRoom(){
        const newRoom={
            name,rent,maxCount,description,phoneNumber,type,imageUrls:[imageUrl1,imageUrl2,imageUrl3]
        }
        console.log(newRoom);
        try {
            const result=await(await axios.post("/api/rooms/addroom",newRoom)).data;
            console.log(result);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='row'>
            <div className='col-md-5'>
                <input type='text' className='form-control mb-3' placeholder='room name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <input type='text' className='form-control mb-3' placeholder='rent perday' value={rent} onChange={(e)=>{setRent(e.target.value)}}/>
                <input type='text' className='form-control mb-3' placeholder='max count' value={maxCount} onChange={(e)=>{setMaxCount(e.target.value)}}/>
                <input type='text' className='form-control mb-3' placeholder='desription' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                <input type='text' className='form-control' placeholder='phone number' value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
            </div>
            <div className='col-md-5'>
                <input type='text' className='form-control mb-3' placeholder='type' value={type} onChange={(e)=>{setType(e.target.value)}}/>
                <input type='text' className='form-control mb-3' placeholder='image url 1' value={imageUrl1} onChange={(e)=>{setImageurl1(e.target.value)}}/>
                <input type='text' className='form-control mb-3' placeholder='image url 2' value={imageUrl2} onChange={(e)=>{setImageurl2(e.target.value)}}/>
                <input type='text' className='form-control mb-3' placeholder='image url 3' value={imageUrl3} onChange={(e)=>{setImageurl3(e.target.value)}}/>
                <div className='text-right'>
                    <button className='btn btn-dark mr-5' onClick={addRoom}>Add Room</button>
                </div>
            </div>

        </div>
    )
}