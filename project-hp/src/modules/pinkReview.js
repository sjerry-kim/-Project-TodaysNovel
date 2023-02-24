import {createSlice} from '@reduxjs/toolkit'

const name = "pinkReview";
const initialState = [
];

export const pinkReview = createSlice({
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

export const {addReview, deleteReview} = pinkReview.actions;

export default pinkReview.reducer;