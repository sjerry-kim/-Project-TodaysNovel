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
    // limitReview : (state, action) => {
    //   console.log(action.payload);
    //   console.log(state[0].isReviewed)
    //   const reviewed = state.find((r)=>(
    //     r.myPageId == action.payload
    //   ))
    //   console.log(reviewed);
    //   reviewed.isReviewed = true;
    // }
  }
})

export const {addReview, deleteReview} = mainReview.actions;

export default mainReview.reducer;