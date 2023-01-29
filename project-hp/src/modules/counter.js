import {createSlice} from '@reduxjs/toolkit'

const name = "counter";
const initialState = [{value:0}]

export const counter = createSlice({
  name,
  initialState,
  reducers :{
    
  }
})

export const {} = counter.actions;

export default counter.reducer;