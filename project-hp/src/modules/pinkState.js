import {createSlice} from '@reduxjs/toolkit'

const name = "pinkState";
const initialState = [
  {
    title: "Lovehate",
    itemId:0,
    image: "pink01.jpeg",
    price: 3,
    effect : "★★★"
  },
  {
    title: "Loss",
    itemId:1,
    image: "pink02.jpeg",
    price: 2,
    effect : "★"
  }
];

export const pinkState = createSlice({
  name,
  initialState,
  reducers: {
  }
})

export const {} = pinkState.actions;

export default pinkState.reducer;