
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './pages/Products'
import View from './pages/View'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import PagesNotFound from './pages/PagesNotFound'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/products/:id' element={<View />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/*' element={<PagesNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
