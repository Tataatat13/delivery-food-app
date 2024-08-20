import { configureStore } from '@reduxjs/toolkit'
import foods from './FoodsSlice';
import cart from './PaySlice';


export const store = configureStore({
   reducer: {
    foods,
    cart
},
})
