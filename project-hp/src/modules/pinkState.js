import {createSlice} from '@reduxjs/toolkit'

const name = "pinkState";
const initialState = [
  {
    // area: "pink",
    title: "Lovehate",
    itemId: 0,
    image: "pink01.jpeg",
    price: 3,
    effect : "★★★",
    isChecked: true,
  },
  {
    // area: "pink",
    title: "Loss",
    itemId: 1,
    image: "pink02.jpeg",
    price: 2,
    effect : "★",
    isChecked: true,
  },
  {
    // area: "pink",
    title: "Crush",
    itemId: 2,
    image: "pink03.jpeg",
    price: 1,
    effect : "★",
    isChecked: true,
  },
  {
    // area: "pink",
    title: "Like",
    itemId: 3,
    image: "pink04.jpeg",
    price: 10,
    effect : "★",
    isChecked: true,
  },
  {
    // area: "pink",
    title: "Love",
    itemId: 4,
    image: "pink05.jpeg",
    price: 20,
    effect : "★",
    isChecked: true,
  },
  {
    // area: "pink",
    title: "break",
    itemId: 5,
    image: "pink06.jpeg",
    price: 5,
    effect : "★",
    isChecked: true,
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