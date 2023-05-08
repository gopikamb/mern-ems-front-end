import React from 'react';
import './Profile.css';
import { Card,Row} from 'react-bootstrap';

function Profile() {
  return (
    <>
    <div className="container">
   <Card className="shadow col-lg-6 mx-auto mt-5">
  <Card.Body>
<Row>
  <div className="col">
    <div className="profile_img d-flex justify-content-center">
    <img className="border p-1 rounded-circle" width={'300px'} height={'300px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCXNh9OsJ5FQZPljU_-rLiND2_9XogYnyxQ&usqp=CAU" alt="profile picture" />

    </div>
  </div>
</Row>
<div className="text-center mt-3">
  <h3>Max Miller</h3>
  
</div>
  </Card.Body>
   </Card>
    </div>

    </>
  )
}

export default Profile