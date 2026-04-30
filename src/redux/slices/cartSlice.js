import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: JSON.parse(localStorage.getItem("cart")) || [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.data.find((item)=> item.id === action.payload);
            itemInCart 
                ? itemInCart.qty++ 
                : state.data.push({id: action.payload, qty: 1});
        },
        deleteCart: (state, action) => {
            state.data = action.payload;
        }
    },
});

export const {addToCart, deleteCart} = cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
