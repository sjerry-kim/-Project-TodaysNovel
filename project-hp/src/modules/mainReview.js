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
    },
    modifyReview : (state, action) => {
      const review = action.payload;
      const sameReview = state.find((r)=>r.reviewId == review.reviewId );
      sameReview.text = review.text;
    }
  }
})

export const {addReview, deleteReview, modifyReview} = mainReview.actions;

export default mainReview.reducer;