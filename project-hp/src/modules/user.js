import {createSlice} from '@reduxjs/toolkit'

const name = "user";
const initialState = {
  userList : [
    {
      id: "jinhye01",
      pw: "a1!0000",
      name : "김진혜",
      tel : "01000000000",
      email: "vipisu_976@naver.com",
      adress : "부산광역시 동구",
      cart: [],
      comment: [],
    },
  ]
}
;

export const user = createSlice({
  name,
  initialState,
  reducers: {
    signUp : (state, action)=>{
      const newUser = action.payload;
      const newUserList = state.userList.concat(newUser);
      state.userList = newUserList;
      console.log(state.userList);
    }
  }
})

export const {signUp} = user.actions;

export default user.reducer;