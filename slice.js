import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {state.push(action.payload);}
    }
});

const loginSlice = createSlice({
    name: 'login',
    initialState: false,
    reducers: {
        setLogin: (state, action) => action.payload
    }
});

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        login: loginSlice.reducer,
    },
});

console.log('oncreate store: ', store.getState());

store.subscribe(()=> {
    console.log('STORE_CHANGE :', store.getState());
});

store.dispatch(cartSlice.actions.addToCart({id: 2, qty: 10}));
store.dispatch(cartSlice.actions.addToCart({id: 3, qty: 50}));
store.dispatch(loginSlice.actions.setLogin(true));