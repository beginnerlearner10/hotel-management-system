import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Carousel } from 'react-bootstrap';

function Room({ room, fromDate, toDate }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='row bs'>
      <div className='col-md-4'>
        <img src={room.imageUrls[0]} className='smallimg' />
      </div>
      <div className='col-md-7'>
        <h1>{room.name}</h1>
        <b>
          {" "}
          <p>Max Count : {room.maxCount}</p>
          <p>Phone Number : {room.phoneNumber}</p>
          <p>Type : {room.type}</p>
        </b>
        <div style={{ float: "right" }}>
          {fromDate && toDate && (
            <Link to={`/book/${room._id}/${fromDate}/${toDate}`}>
              <button className='btn btn-dark m-2'>Book Now</button>
            </Link>
          )}
          <button className='btn btn-dark' onClick={handleShow}>View Details</button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {room.imageUrls.map(url => {
              return <Carousel.Item>
                <img className='d-block w-100 bigimg'
                  src={url}
                />
              </Carousel.Item>;
            })}
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Room