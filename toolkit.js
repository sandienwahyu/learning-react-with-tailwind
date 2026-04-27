import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction('ADD_TO_CART');
const loginAction = createAction('LOGIN_ACTION');

const cartReducer = createReducer([], (builder)=> {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload);
    });
});

const loginReducer = createReducer({status: false}, (builder)=> {
    builder.addCase(loginAction, (state, action) => {
        state.status = action.payload;
    });
});

const store = configureStore({
    reducer: {
        cart: cartReducer,
        login: loginReducer,
    }
})
console.log('oncreate store: ', store.getState());

store.subscribe(()=> {
    console.log('STORE_CHANGE :', store.getState());
});

store.dispatch(addToCart({id: 2, qty: 5}));
store.dispatch(addToCart({id: 3, qty: 20}));
store.dispatch(loginAction({status: true}));