import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/SignUp.css";
import useInput from "../hooks/useInput";
import { signUp } from "../modules/user";

const SignUp = () => {
  const [id, setId] = useInput("");
  const [pw, setPw] = useInput("");
  const [name, setName] = useInput("");
  const [tel, setTel] = useInput("");
  const [email, setEmail] = useInput("");
  const [adress, setAdress] = useInput("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const findUser = (newUser) => {
    const sameAccount = user.userList.find((user)=>(user.id == id && user.pw == pw))
    if(sameAccount){
      alert("이미 가입한 아이디입니다")
    }else{
      dispatch(signUp(newUser))
      navigate('/signin');
    }
  }

  return (
    <div className="SignUp-wp">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          const newUser = {
            login: false,
            id: id,
            pw: pw,
            name: name,
            tel: tel,
            email: email,
            adress: adress
          }
          findUser(newUser);
        }}
      >
        <label htmlFor="">ID</label>
        <input
          type="text"
          onChange={setId}
          value = {id}
        />
        <label htmlFor="">PW</label>
        <input
          type="text"
          onChange={setPw}
          value = {pw}
        />
        <label htmlFor="">NAME</label>
        <input
          type="text"
          onChange={setName}
          value = {name}
        />
        <label htmlFor="">TEL</label>
        <input
          type="tel"
          onChange={setTel}
          value = {tel}
        />
        <label htmlFor="">E-MAIL</label>
        <input
          type="email"
          onChange={setEmail}
          value={email}
        />
        <label htmlFor="">ADRESS</label>
        <input
          type="text"
          onChange={setAdress}
          value={adress}
        />
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default SignUp;
