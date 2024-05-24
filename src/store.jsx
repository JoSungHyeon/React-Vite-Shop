import { configureStore } from '@reduxjs/toolkit';
import cart from './store/cartSlice';

export default configureStore({
    reducer: {
        cart: cart.reducer
    }
})