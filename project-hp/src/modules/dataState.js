import {createSlice} from '@reduxjs/toolkit'

const name = "dataState";
const initialState = []

export const dataState = createSlice({
  name,
  initialState,
  reducers: {
    increment : (state) => {
      state.value +=1;
    },
    decrement : (state) => {
      state.value -=1;
    },
  }
})

export const {increment, decrement} = dataState.actions;

export default dataState.reducer;