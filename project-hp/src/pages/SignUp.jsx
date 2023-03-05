import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/SignUp.css";
import useInput from "../hooks/useInput";
import { signUp } from "../modules/user";
import PostModal from "../components/PostModal";

const SignUp = () => {
  const [id, setId] = useInput("");
  const [pw, setPw] = useInput("");
  const [name, setName] = useInput("");
  const [tel, setTel] = useInput("");
  const [email, setEmail] = useInput("");
  const [post, setPost] = useState("")
  const [restAdress, setRestAdress] = useState("")
  const [additionalAdress, setAdditionalAdress] = useInput("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Modal
  const [postModal, setPostModal] = useState(false);

  const findUser = (newUser) => {
    const sameAccount = user.userList.find(
      (user) => user.id == id && user.pw == pw
    );
    if (sameAccount) {
      alert("이미 가입한 아이디입니다");
    } else {
      dispatch(signUp(newUser));
      navigate("/signin");
    }
  };

  return (
    <div className="SignUp-wp">
      <form
        action=""
        onSubmit={(e)=>{e.preventDefault()}}
      >
        <label htmlFor="">ID</label>
        <input type="text" onChange={setId} value={id} />
        <label htmlFor="">PW</label>
        <input type="text" onChange={setPw} value={pw} />
        <label htmlFor="">NAME</label>
        <input type="text" onChange={setName} value={name} />
        <label htmlFor="">TEL</label>
        <input type="tel" onChange={setTel} value={tel} />
        <label htmlFor="">E-MAIL</label>
        <input type="email" onChange={setEmail} value={email} />
        {/* 우편번호 */}
        <label htmlFor="">adress</label>
        <input 
          type="text" 
          disabled 
          placeholder="post number" 
          value={post}/>
        <button
          onClick={() => {
            setPostModal(true);
          }}
        >
          Search Postnumber
        </button>{" "}
        <br />
        <input
          type="text"
          disabled
          placeholder="rest adress"
          value={restAdress}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="additional adress"
          onChange={setAdditionalAdress}
          value={additionalAdress}
        />
        {/* <label htmlFor="">ADRESS</label>
        <input
        type="text"
        onChange={setAdress}
        value={adress}
      /> */}
        <button onClick={() => {
          setPostModal(false);
          const newUser = {
            login: false,
            id: id,
            pw: pw,
            name: name,
            tel: tel,
            email: email,
            post : post,
            restAdress: restAdress,
            additionalAdress: additionalAdress,
            cart: [],
            qnaComment: [],
            orderedProducts: [],
          };
          findUser(newUser);
          sessionStorage.removeItem("signPost");
          sessionStorage.removeItme("signAddress");
        }}>sign up</button>
      </form>
      {postModal ? (
        <PostModal 
          postModal={postModal} 
          setPostModal={setPostModal}
          setPost={setPost}
          setRestAdress={setRestAdress} />
      ) : null}
    </div>
  );
};

export default SignUp;
