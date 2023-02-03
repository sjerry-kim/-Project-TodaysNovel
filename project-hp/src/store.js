import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './modules/cart';
import pinkStateReducer from './modules/pinkState'

export default configureStore({
  reducer:{
    cart: cartReducer,
    pinkState: pinkStateReducer,
  }
})