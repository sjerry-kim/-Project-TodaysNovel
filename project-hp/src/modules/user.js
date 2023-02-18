import {createSlice} from '@reduxjs/toolkit'

const name = "user";
const initialState = {
  userList : [
    {
      login: false,
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
    },
    signIn : (state, action)=>{
      const currentUser = action.payload;
      const stateCurrentUser= state.userList.find((user)=>(user.id==currentUser.id && user.pw==currentUser.pw));
      stateCurrentUser.login = true;
    },
    changeCart : (state, action) => {
      const parseCartState = action.payload;
      if(parseCartState[0].id != "null"){
        const sameUser = state.userList.find((user)=>(user.id == parseCartState[0].id));
        console.log(sameUser);
        console.log(parseCartState[0].id);
        sameUser.cart = parseCartState ;
      }
      // else{
      //   parseCartState[0].id = sessionStorage.getItem("id")
      // }
    }
  }
})

export const {signUp, signIn, changeCart} = user.actions;

export default user.reducer;