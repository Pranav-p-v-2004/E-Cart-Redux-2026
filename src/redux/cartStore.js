import { configureStore } from "@reduxjs/toolkit";
import productSlice from'./slices/productslice'
import wishlistSlice from './slices/wishlistSlice';

const cartStore = configureStore({
    reducer:{
        productReducer:productSlice,
        WishlistReducer:wishlistSlice,
        cartReducer:{}
    }
})

export default cartStore