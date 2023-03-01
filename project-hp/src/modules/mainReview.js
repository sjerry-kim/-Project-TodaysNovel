import {createSlice} from '@reduxjs/toolkit'

const name = "mainReview";
const initialState = [];

export const mainReview = createSlice({
  name,
  initialState,
  reducers :{
    addReview : (state, action) => {
      const review = action.payload;
      state.push(review);
      console.log(review);
    },
    deleteReview : (state, action) => {
      return state.filter((r) => (
        r.reviewId !== action.payload.reviewId
      ))
    }
  }
})

export const {addReview, deleteReview} = mainReview.actions;

export default mainReview.reducer;