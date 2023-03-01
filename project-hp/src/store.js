import {configureStore} from '@reduxjs/toolkit';
import cart from './modules/cart';
import mainComment from './modules/mainComment';
import mainState from './modules/mainState'
import user from './modules/user';

// redux persist
// import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session'
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist'
import myPage from './modules/myPage';
import mainReview from './modules/mainReview';

const reducers = combineReducers({
    cart: cart,
    mainState: mainState,
    mainComment: mainComment,
    user: user,
    myPage: myPage,
    mainReview: mainReview
})

const persistConfig = {
  key : "root",
  storage : storageSession,
  list : ["cart", "mainState", "pinkComment", "user", "myPage", "mainReview"], 
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