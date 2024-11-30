import {configureStore} from '@reduxjs/toolkit';
import ProductReducer from './reducers/products/ProductSlice'
import CartReducer from './reducers/cart/cartReducer'
const store = configureStore({
    reducer: {
       Products:ProductReducer,
       Cart:CartReducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

