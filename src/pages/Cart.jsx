import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import {  decrementCart, emptycart, incrementCart, removeCartItem } from '../redux/slices/cartSlice'
import Swal from 'sweetalert2'





function Cart() {

  const userCart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  const [cartTotal,setCartTotal] = useState(0)
  const navigate = useNavigate()

  useEffect(()=>{
    setCartTotal(userCart?.reduce((accu,curr)=>accu+curr.totalPrice,0))
  },[userCart])

  const handleDecrementCart = (product)=>{
    if(product.quantity>1){
      dispatch(decrementCart(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }

  const handlecheckout = () =>{
    dispatch (emptycart())
    Swal.fire({
      title:"order placed successfully",
      text:"thankYou for purchasing with us",
      icon:"success",
      confirmButtonText:"OK"


    })
    navigate("/")
  }


  return (
    <>
      <Header />
      {
        userCart?.length > 0 ?
          <div className='container my-5'>
            <h1>  <h1 className='pt-5 text-primary fw-bold'>Users Cart</h1></h1>
            <div className='row'>
              <div className="col-lg-8 border shadow">
                <table className='table'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Image</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>...</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      userCart.map((item, index) => (
                        <tr key={item?.id}>
                          <td>{index + 1}</td>
                          <td>{item?.title}</td>
                          <td><img width={'50px'} height={'50px'} src={item?.thumbnail} alt="" /></td>
                          <td>
                            <div className='d-flex'>
                              <button onClick={()=>dispatch(handleDecrementCart(item))} className='btn fs-1'>-</button>
                              <input style={{ width: '50px' }} value={item?.quantity} type="text" className='form-control' readOnly />
                              <button onClick={()=>dispatch(incrementCart(item?.id))} className='btn fs-1'>+</button>
                            </div>
                          </td>
                          <td>${item?.totalPrice}</td>
                          <td><button onClick={()=>dispatch(removeCartItem(item?.id))} className='btn text-danger fs-1 fw-bold'>X</button>  </td>
                        </tr>
                      ))
                    }

                  </tbody>

                </table>
                <div className='float-end p-3'>
                  <button onClick={()=>dispatch(emptycart())} className='btn btn-danger '>EMPTY CART</button>
                  <Link to={"/"} className='btn btn-info ms-5'>SHOP MORE</Link>

                </div>
              </div>
              <div className="col-lg-4 ">
                <div className='border shadow rounded p-5 text-center'>
                  <h3>Total Amount : <span className='text-danger'> $ {cartTotal}</span></h3>
                  <hr />
                  <button onClick={handlecheckout} className='btn btn-success w-75'>Check Out</button>
                </div>
              </div>
            </div>
          </div>


          :
          // empty
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <img className='img-fluid' src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-svg-download-png-6024626.png" alt=""
            />
            <h1>Your Cart is empty</h1>
            <Link to={"/"} className='btn btn-primary'>Add More</Link>

          </div>
      }
    </>
  )
}

export default Cart

