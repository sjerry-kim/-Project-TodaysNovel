import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './modules/cart';
import pinkCommentReducer from './modules/pinkComment';
import pinkStateReducer from './modules/pinkState'
import userReducer from './modules/user';

export default configureStore({
  reducer:{
    cart: cartReducer,
    pinkState: pinkStateReducer,
    pinkComment: pinkCommentReducer,
    user: userReducer,
  }
})