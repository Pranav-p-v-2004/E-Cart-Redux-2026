import React from 'react'
import { Link } from 'react-router-dom'

function PagesNotFound() {
  return (
      <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <img className='w-50' src="https://www.innonet.nl/wp-content/uploads/2017/11/Page-not-found.png" alt="Page Not Found" />
      <h1 className='fw-bold'>WE ARE SOORY , LOOK LIKE YOUR ARE LOST</h1> 
      <Link to={'/'} className = 'btn btn-dark my-3'>BACK TO HOME</Link>
    </div>
  )
}

export default PagesNotFound
