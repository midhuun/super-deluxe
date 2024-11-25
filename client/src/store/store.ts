import {configureStore} from '@reduxjs/toolkit';
import ProductReducer from './reducers/products/ProductSlice'
const store = configureStore({
    reducer: {
       Products:ProductReducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

