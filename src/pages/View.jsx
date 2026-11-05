import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
FontAwesomeIcon
import React from 'react'

function View() {
  return (
    <div className='container my-5 pt-5'> 
      <div style={{height:"90vh"}} className='row align-items-center'>
        <div className='col-lg-6 text-center'>
         <img className='img-fluid h-75 ' src="https://secretperfumes.in/cdn/shop/files/10_d7407c37-0d86-4e10-9b1a-413ee8df85b8.png?v=1782045470" alt="Product" />

         <div className='d-flex justify-content-evenly mt-5'>
          <button className='btn btn-info'>ADD TO WISHLIST</button>
          <button className='btn btn-success'>ADD TO CART</button>
         </div>
        </div>
         <div className='col-lg-6 mt-5 '>
           <h3 className='fw-bold'>Title</h3>
           <h2 className='fw-bold'>$ 40</h2>
           <h4 className='fw-bold'>Brand :</h4>
           <h4 className='fw-bold'>Category :</h4>
           <h4 className='fw-bold'>Description :</h4>
           <h5 className='fw-bold'>Client Reviews</h5>
           <div className='border rounded shadow p-2 my-4'>
              <p><span className='fw-bold'>Name :</span>Message</p>

              <p>Rating : <FontAwesomeIcon icon={faStar} className='text-warning' /></p>
           </div>
        </div>

      </div>
     
    </div>
  )
}

export default View
