import {createSlice} from '@reduxjs/toolkit'

const name = "pinkComment";
const initialState = [
];

export const pinkComment = createSlice({
  name,
  initialState,
  reducers :{
    addComment : (state, action) => {
      state.push(action.payload);
    },
    deleteComment : (state, action) => {
      return state.filter((c) => (
        c.commentId !== action.payload.commentId
      ))
    }
  }
})

export const {addComment, deleteComment} = pinkComment.actions;

export default pinkComment.reducer;