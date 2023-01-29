import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './modules/counter';
import dataStateReducer from './modules/dataState'

export default configureStore({
  reducer:{
    counter: counterReducer,
    dataState: dataStateReducer,
  }
})