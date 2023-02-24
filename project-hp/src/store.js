import {configureStore} from '@reduxjs/toolkit';
import cart from './modules/cart';
import pinkComment from './modules/pinkComment';
import pinkState from './modules/pinkState'
import user from './modules/user';

// redux persist
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session'
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist'
import myPage from './modules/myPage';
import pinkReview from './modules/pinkReview';

const reducers = combineReducers({
    cart: cart,
    pinkState: pinkState,
    pinkComment: pinkComment,
    user: user,
    myPage: myPage,
    pinkReview: pinkReview
})

const persistConfig = {
  key : "root",
  storage : storageSession,
  list : ["cart", "pinkState", "pinkComment", "user", "myPage", "pinkReview"], 
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer : persistedReducer
})

export default store;

// export default configureStore({
//   reducer:{
//     cart: cartReducer,
//     pinkState: pinkStateReducer,
//     pinkComment: pinkCommentReducer,
//     user: userReducer,
//   }
// })