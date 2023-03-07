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
      const sameUser = state.filter((r)=>r.userId == review.userId)
      console.log(sameUser.reviewId);
      console.log(typeof(sameUser));
      const sameReview = sameUser.find((r)=>r.reviewId == review.reviewId );
      sameReview.text = review.text;
    },
  }
})

export const {addReview, deleteReview, modifyReview} = mainReview.actions;

export default mainReview.reducer;