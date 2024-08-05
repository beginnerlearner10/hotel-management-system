import React from 'react';
import Alert from 'react-bootstrap/Alert';

function Success(props) {
  return (
    <div>
        <Alert key="success" variant='success'>{props.message}</Alert>
    </div>
  )
}

export default Success