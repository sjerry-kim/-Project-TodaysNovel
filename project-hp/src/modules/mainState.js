import {createSlice} from '@reduxjs/toolkit'

const name = "MainState";
const initialState = [
  {
    title: "불편한 편의점",
    itemId: 0,
    image: "book01.jpeg",
    price: 3,
    // effect : "★★★",
    isChecked: true,
  },
  {
    title: "오늘 밤, 세계에서 이 사랑이 사라진다 해도",
    itemId: 1,
    image: "book02.jpeg",
    price: 2,
    // effect : "★★★★",
    isChecked: true,
  },
  {
    title: "파친코",
    itemId: 2,
    image: "book03.jpeg",
    price: 1,
    // effect : "★",
    isChecked: true,
  },
  {
    title: "대불호텔의 유령",
    itemId: 3,
    image: "book04.jpeg",
    price: 10,
    // effect : "★★★★",
    isChecked: true,
  },
  {
    title: "너에게 이뤄질 수 없는 사랑을 하고 있어",
    itemId: 4,
    image: "book05.jpeg",
    price: 20,
    // effect : "★★★★",
    isChecked: true,
  },
  {
    title: "내일의 으뜸",
    itemId: 5,
    image: "book06.jpeg",
    price: 5,
    // effect : "★",
    isChecked: true,
  },
  {
    title: "내일의 으뜸",
    itemId: 6,
    image: "book07.jpeg",
    price: 5,
    // effect : "★",
    isChecked: true,
  },
  {
    title: "내일의 으뜸",
    itemId: 7,
    image: "book08.jpeg",
    price: 5,
    // effect : "★",
    isChecked: true,
  }
];

export const mainState = createSlice({
  name,
  initialState,
})

export const {} = mainState.actions;

export default mainState.reducer;