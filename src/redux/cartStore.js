import { configureStore } from "@reduxjs/toolkit";
import productSlice from'./slices/productslice'
import wishlistSlice from './slices/wishlistSlice';
import cartSlice from "./slices/cartSlice";

const cartStore = configureStore({
    reducer:{
        productReducer:productSlice,
        WishlistReducer:wishlistSlice,
        cartReducer:cartSlice
    }
})

export default cartStore