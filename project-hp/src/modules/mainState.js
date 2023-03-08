import {createSlice} from '@reduxjs/toolkit'

const name = "MainState";
const initialState = [
  {
    title: "수수께끼 변주곡",
    itemId: 0,
    image: "book01.jpeg",
    price: 13800,
    isChecked: true,
  },
  {
    title: "오늘 밤, 세계에서 이 사랑이 사라진다 해도",
    itemId: 1,
    image: "book02.jpeg",
    price: 14000,
    isChecked: true,
  },
  {
    title: "파친코",
    itemId: 2,
    image: "book03.jpeg",
    price: 15800,
    isChecked: true,
  },
  {
    title: "대불호텔의 유령",
    itemId: 3,
    image: "book04.jpeg",
    price: 14000,
    isChecked: true,
  },
  {
    title: "너에게 이뤄질 수 없는 사랑을 하고 있어",
    itemId: 4,
    image: "book05.jpeg",
    price: 15000,
    isChecked: true,
  },
  {
    title: "내일의 으뜸",
    itemId: 5,
    image: "book06.jpeg",
    price: 13000,
    isChecked: true,
  },
  {
    title: "벚꽃나무 아래",
    itemId: 6,
    image: "book07.jpeg",
    price: 14000,
    isChecked: true,
  },
  {
    title: "파인드 미",
    itemId: 7,
    image: "book08.jpeg",
    price: 13800,
    isChecked: true,
  }
];

export const mainState = createSlice({
  name,
  initialState,
})

export const {} = mainState.actions;

export default mainState.reducer;