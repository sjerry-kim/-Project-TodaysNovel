import {createSlice} from '@reduxjs/toolkit'

const name = "pinkState";
const initialState = [
  {
    title: "Lovehate",
    itemId: 0,
    image: "pink01.jpeg",
    price: 3,
    effect : "★★★",
    checked: true
  },
  {
    title: "Loss",
    itemId: 1,
    image: "pink02.jpeg",
    price: 2,
    effect : "★",
    checked: true
  },
  {
    title: "Crush",
    itemId: 2,
    image: "pink03.jpeg",
    price: 1,
    effect : "★",
    checked: true
  },
  {
    title: "Like",
    itemId: 3,
    image: "pink04.jpeg",
    price: 10,
    effect : "★",
    checked: true
    
  },
  {
    title: "Love",
    itemId: 4,
    image: "pink05.jpeg",
    price: 20,
    effect : "★",
    checked: true
    
  },
  {
    title: "break",
    itemId: 25,
    image: "pink06.jpeg",
    price: 5,
    effect : "★",
    checked: true
    
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