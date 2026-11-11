import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeWishlistItem } from '../redux/slices/wishlistSlice';
import Swal from 'sweetalert2';
import { addCart } from '../redux/slices/cartSlice';



function Wishlist() {
  const userWishlist = useSelector(state => state.WishlistReducer)

  const dispatch = useDispatch()
      const userCart = useSelector(state=>state.cartReducer)
const handleCart = (product)=>{
  //check the product already in the wishlist
   const existingItem = userCart?.find(item=>item?.id==product.id)
     dispatch(addCart(product))
     dispatch(removeWishlistItem(product.id))
     Swal.fire({
     title : "Success",
     text : existingItem?`${existingItem.title} quantity incremented ` : "product added to your cart",
     icon : "Success",
     confirmButton : "OK"
     })
}





  return (
 <>
      <Header />
      <div className='container my-5 '>
    {
      userWishlist?.length>0 ?
      <>
          <h1 className='pt-5 text-primary fw-bold'>Users Wishlists</h1>
        <div className='row'>
          {/* Duplicate  column according to products */}
          {
            userWishlist?.map(item =>(
              <div className='col-3 pt-5'>
            {/* card */}
            <Card className='shadow p-2'>
              <Card.Img style={{ height: "250px" }} variant="top" src={item?.thumbnail} />
              <Card.Body className='text-center'>
                <Card.Title>{item?.title}</Card.Title>
                <div className='d-flex justify-content-evenly'>
                  <button onClick={()=>dispatch(removeWishlistItem(item?.id))} className='btn text-danger fs-4'><FontAwesomeIcon icon={faHeartCircleXmark} className='me-2' /></button>
                   <button onClick={()=>handleCart(item)}  className='btn text-success fs-4'><FontAwesomeIcon icon={faCartPlus} className='me-2' /></button>
  
                </div>
              </Card.Body>
            </Card>
          </div>
            ))
          }
        </div>
      </>
    
      
      
       :
       <div className='d-flex justify-content-center align-items-center flex-column'>
        <img className='img-fluid' src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-svg-download-png-6024626.png" alt=""   
  />
        <h1>Your wishlist is empty</h1>
        <Link to={"/"} className='btn btn-primary'>Add More</Link>

       </div>
       }
       </div>
        </>
    )
  }


export default Wishlist
