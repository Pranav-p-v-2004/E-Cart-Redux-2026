import { faCartPlus, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../redux/slices/productslice';



function Header({insideproduct}) {
  const userWishlist = useSelector(state=>state.WishlistReducer)
  const dispatch = useDispatch()
  return (
     <Navbar expand="lg" className=" fixed-top" style={{backgroundColor:'#1b2e3a'}}>
      <Container>
        <Navbar.Brand ><Link to={"/"} className='text-light text-decoration-none '><FontAwesomeIcon icon={faTruckFast} className='me-1' />E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item className="ms-auto">
              {
                insideproduct &&
            <input onChange={e=>dispatch(searchProduct(e.target.value))} type="text" className="form-control" placeholder="search your products" />
              }
          </Nav.Item>
          <Link to={"/wishlist"} className='text-light text-decoration-none fw-bold ms-5 mt-1'><FontAwesomeIcon icon={faHeart} className='btn btn-danger me-2' />
          Wishlist <Badge bg="secondary">{userWishlist?.length}</Badge></Link>
          <Link to={"/cart"} className='text-light text-decoration-none fw-bold ms-5 mt-1'><FontAwesomeIcon icon={faCartPlus} className='btn btn-success me-3' />
          Cart <Badge bg="secondary">0</Badge></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
  

export default Header