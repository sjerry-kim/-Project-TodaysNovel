import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/SignUp.css";
import useInput from "../hooks/useInput";
import { signUp } from "../modules/user";
import PostModal from "../components/PostModal";
import NotFound from "./NotFound";

const SignUp = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sessionId = sessionStorage.getItem("id");
  const currentUser = user.userList.find((user) => user.id == sessionId);
  const [id, setId] = useInput("");
  const [pw, setPw] = useInput("");
  const [name, setName] = useInput("");
  const [tel, setTel] = useInput("");
  const [email, setEmail] = useInput("");
  const [post, setPost] = useState("");
  const [restAdress, setRestAdress] = useState("");
  const [additionalAdress, setAdditionalAdress] = useInput("");
  const [isActive, setIsActive] = useState(false);
  // Modal
  const [postModal, setPostModal] = useState(false);

  useEffect(() => {
    if (
      id &&
      pw &&
      name &&
      tel &&
      email &&
      post &&
      restAdress &&
      additionalAdress
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [id, pw, name, tel, email, post, restAdress, additionalAdress]);

  const findUser = (newUser) => {
    const sameId = user.userList.find((user) => user.id == id && user.pw == pw);
    const sameEmail = user.userList.find((user) => user.email == email);

    if (sameId) {
      alert("이미 가입한 아이디입니다");
    } else if (sameEmail) {
      alert("이미 사용된 이메일입니다");
    } else {
      dispatch(signUp(newUser));
      navigate("/signin");
    }
  };

  return (
    <>
      {currentUser ? (
        <NotFound />
      ) : (
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
                post: post,
                restAdress: restAdress,
                additionalAdress: additionalAdress,
                cart: [],
                qnaComment: [],
                orderedProducts: [],
              };
              findUser(newUser);
              sessionStorage.removeItem("signPost");
              sessionStorage.removeItem("signAddress");
            }}
          >
            <label htmlFor="">ID</label>
            <input type="text" required onChange={setId} value={id} />
            <label htmlFor="">PW</label>
            <input type="password" required onChange={setPw} value={pw} />
            <label htmlFor="">NAME</label>
            <input type="text" required onChange={setName} value={name} />
            <label htmlFor="">TEL</label>
            <input type="tel" required onChange={setTel} value={tel} />
            <label htmlFor="">E-MAIL</label>
            <input type="email" required onChange={setEmail} value={email} />
            {/* 우편번호 */}
            <label htmlFor="">adress</label>
            <input
              type="text"
              required
              disabled
              placeholder="post number"
              value={post}
            />
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
              required
              disabled
              placeholder="rest adress"
              value={restAdress}
            />{" "}
            <br />
            <input
              type="text"
              required
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
            <button
              disabled={isActive ? false : true}
              onClick={() => {
                setPostModal(false);
              }}
            >
              sign up
            </button>
          </form>
          {postModal ? (
            <PostModal
              postModal={postModal}
              setPostModal={setPostModal}
              setPost={setPost}
              setRestAdress={setRestAdress}
            />
          ) : null}
        </div>
      )}
    </>
  );
};

export default SignUp;
