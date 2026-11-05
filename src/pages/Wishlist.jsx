import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Wishlist() {
  return (
    <div className='container my-5 '>
      <h1 className='pt-5 text-primary fw-bold'>Users Wishlists</h1>
      <div className='row'>
        {/* Duplicate  column according to products */}
        <div className='col-3 pt-5'>
          {/* card */}
          <Card className='shadow p-2'>
            <Card.Img style={{ height: "250px" }} variant="top" src="public/perfume1.png" />
            <Card.Body className='text-center'>
              <Card.Title>Card Title</Card.Title>
              <div className='d-flex justify-content-evenly'>
                <button className='btn text-danger fs-4'><FontAwesomeIcon icon={faHeartCircleXmark} className='me-2' /></button>
                 <button className='btn text-success fs-4'><FontAwesomeIcon icon={faCartPlus} className='me-2' /></button>

              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Wishlist
