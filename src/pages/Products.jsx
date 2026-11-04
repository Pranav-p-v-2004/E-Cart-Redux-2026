import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className='m-5'>
        <div className='row'>
            {/* Duplicate  column according to products */}
            <div className='col-3 pt-5'>
                {/* card */}
                 <Card className='shadow p-2'>
      <Card.Img style={{height:"250px"}} variant="top" src="public/perfume1.png" />
      <Card.Body className='text-center'>
        <Card.Title>Card Title</Card.Title>
       <Link to={`/products/:id`} className='btn btn-primary'>View More</Link>
      </Card.Body>
    </Card>
</div>
        </div>
    </div>
  )
}

export default Products
