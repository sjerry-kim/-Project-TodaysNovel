import {createSlice} from '@reduxjs/toolkit'

const name = "cart";
const initialState = [];

export const cart = createSlice({
  name,
  initialState,
  reducers :{
    addItem: (state, action) => {
      state.push(action.payload);
      console.log(state)
    },
    deleteItem : (state, action) => {
      return state.filter((item) => (
        item.itemId !== action.payload
      ))
    },
    incrementItem: (state, action) => {
      let num = state.find((item)=>item.itemId === action.payload.itemId)
      num.itemCount ++;
    },
    decrementItem: (state, action) => {
      let num = state.find((item)=>item.itemId === action.payload.itemId)
      if(num.itemCount>1){
        num.itemCount --;
      }
    }
  }
})

export const {addItem, deleteItem, incrementItem, decrementItem} = cart.actions;

export default cart.reducer;