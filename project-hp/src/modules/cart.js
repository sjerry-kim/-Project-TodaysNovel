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
    incrementItem : (state, action) => {
      let num = state.find((item)=>item.itemId === action.payload.itemId)
      num.itemCount ++;
    },
    decrementItem : (state, action) => {
      let num = state.find((item)=>item.itemId === action.payload.itemId)
      if(num.itemCount>1){
        num.itemCount --;
      }
    },
    checkItem : (state, action) => {
      const checkedProduct = state.find((item)=>(
      item.itemId === action.payload.itemId
      ))
      checkedProduct.checked = !checkedProduct.checked;
      if(!checkedProduct.checked){
        checkedProduct.itemCount = 0;
        console.log(checkedProduct.checked)
      }else{
        checkedProduct.itemCount = action.payload.itemTotalCount;
        console.log(checkedProduct.checked)
      }
    },
    checkAllItem : (state, action) => {
      const isChecked = action.payload;
      state.forEach(item => {
        item.checked = isChecked
      })
      if(isChecked === false){
        state.forEach(item=>{
          item.itemCount = 0;
        })
      }else{
        state.forEach(item=>{
          item.itemCount = 1;
        })
      }
    },
    deleteCheckedItem : (state) =>{
      return state.filter(item => !item.checked)
    },
    EmptyCart : (state, action) => {
      state = initialState;
      test = action.payload;
      test = !test;
    }
  }
})

export const {addItem, deleteItem, incrementItem, decrementItem, checkItem, checkAllItem, deleteCheckedItem, EmptyCart} = cart.actions;

export default cart.reducer;