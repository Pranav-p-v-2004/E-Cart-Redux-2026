import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState :[],
    reducers :{
        // add to cart - view and wishlist component
        addCart:(state,action)=>{
            const existingItem = state.find(item=>item.id==action.payload.id)
            if(existingItem){
                existingItem.quantity +=1
                existingItem.totalPrice = existingItem.quantity*existingItem.price
                const remainingItem = state?.filter(item=>item.id!=existingItem)
                state = [...remainingItem,existingItem]
            }else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        // remove cart item

        removeCartItem:(state,action)=>{
           return  state.filter(item =>item.id!=action.payload)

        },
        //increment
        incrementCart:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload)
            const remainingProduct = state.filter(item=>item.id!=action.payload)
            existingProduct.quantity += 1
            existingProduct.totalPrice = existingProduct.quantity*existingProduct.price
            state =[...remainingProduct,existingProduct]
        },

            //decrement
        decrementCart:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload)
            const remainingProduct = state.filter(item=>item.id!=action.payload)
            existingProduct.quantity -= 1
            existingProduct.totalPrice = existingProduct.quantity*existingProduct.price
            state =[...remainingProduct,existingProduct]
        },
        //empty cart
        emptycart:(state)=>{
            return[]
        }
     

    }
})

export const {addCart,removeCartItem,incrementCart,decrementCart,emptycart} = cartSlice.actions
export default cartSlice.reducer
