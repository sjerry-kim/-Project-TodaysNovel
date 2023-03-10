import { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserInfo, setIndex } from "../modules/user";

import "../css/MyPage.css";
import MyPageReview from "../components/MyPageReview";
import { useNavigate } from "react-router-dom";
import PostModal from "../components/PostModal";
import NotFound from "./NotFound";

const MyPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const review = useSelector((state) => state.mainReview);
  const sessionId = sessionStorage.getItem("id");
  const currentUser = user.userList.find((user) => user.id == sessionId);
  const [changeInfo, setChageInfo] = useState(false);
  const [name, setName] = useState(currentUser.name);
  const [id, setId] = useState(currentUser.id);
  const [pw, setPw] = useState(currentUser.pw);
  const [checkPw, setChecekPw] = useState("");
  const [tel, setTel] = useState(currentUser.tel);
  const [email, setEmail] = useState(currentUser.email);
  const [post, setPost] = useState(currentUser.post);
  const [restAdress, setRestAdress] = useState(currentUser.restAdress);
  const [additionalAdress, setAdditionalAdress] = useState(currentUser.additionalAdress);
  const [reviewModal, setReviewModal] = useState(false);
  const [postModal, setPostModal] = useState(false);

  useEffect(() => {
    console.log(review[0]);
    console.log(currentUser);
  });

  const changeProfile = () => {
    const profile = {
      name: name,
      id: id,
      pw: pw,
      tel: tel,
      email: email,
      post: post,
      restAdress: restAdress,
      additionalAdress: additionalAdress,
    };
    dispatch(changeUserInfo(profile));
  };

  return (
        <div className="MyPage-wp">
          <div className="MyPage-Profile">
            <label htmlFor="">name</label>
            <input
              type="text"
              disabled={!changeInfo}
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <br />
            <label htmlFor="">Id</label>
            <input
              type="text"
              disabled={!changeInfo}
              onChange={(e) => {
                setId(e.target.value);
              }}
              value={id}
            />
            <br />
            <label htmlFor="">Pw</label>
            <input
              type="password"
              disabled={!changeInfo}
              onChange={(e) => {
                setPw(e.target.value);
              }}
              value={pw}
            />
            <br />
            <input
              type="password"
              onChange={(e) => {
                setChecekPw(e.target.value);
              }}
              placeholder="???????????? ??????"
            />
            <br />
            <label htmlFor="">tel</label>
            <input
              type="text"
              disabled={!changeInfo}
              onChange={(e) => {
                setTel(e.target.value);
              }}
              value={tel}
            />
            <br />
            <label htmlFor="">email</label>
            <input
              type="text"
              disabled={!changeInfo}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <br />
            {/* ???????????? */}
            <label htmlFor="">address</label>
            <input type="text" disabled value={post} />
            <button
              disabled={!changeInfo}
              onClick={() => {
                setPostModal(true);
              }}
            >
              Search Postnumber
            </button>{" "}
            <br />
            <input type="text" disabled value={restAdress} /> <br />
            <input
              type="text"
              disabled={!changeInfo}
              onChange={(e) => {
                setAdditionalAdress(e.target.value);
              }}
              value={additionalAdress}
            />
            <br />
            {changeInfo ? (
              <button
                onClick={() => {
                  if (checkPw == pw) {
                    setChageInfo(false);
                    changeProfile();
                    alert("?????????????????????");
                  } else if (checkPw == "") {
                    alert("??????????????? ??????????????????");
                  } else {
                    alert("??????????????? ???????????? ????????????");
                  }
                }}
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => {
                  if (checkPw == pw) {
                    setChageInfo(true);
                  } else if (checkPw == "") {
                    alert("??????????????? ??????????????????");
                  } else {
                    alert("??????????????? ???????????? ????????????");
                  }
                }}
              >
                Modify
              </button>
            )}
          </div>
          <div className="MyPage-purchasedProducts">
            {currentUser.orderedProducts[0] ? (
              currentUser.orderedProducts.map((p, i) => {
                console.log(p);
                return (
                  <div key={i} className="MyPage-purchasedProducts-div">
                    <p>{p.title}</p>
                    {/* <p>{p.myPageId}</p> */}
                    <p>????????????: {p.itemCount}</p>
                    <p>{p.isReviewed ? "?????? ?????? ??????" : "?????? ?????? ??????"}</p>
                    <img src={require(`../img/${p.image}`)} alt="no image" />
                    <p>{p.orderDate}</p>
                    <button
                      onClick={() => {
                        setReviewModal(true);
                        sessionStorage.setItem("myPageId", p.myPageId);
                        navigate(`/mypage/${p.itemId}`);
                      }}
                      disabled={p.isReviewed ? true : false}
                    >
                      review
                    </button>
                    {reviewModal ? (
                      <MyPageReview
                        reviewModal={reviewModal}
                        setReviewModal={setReviewModal}
                      />
                    ) : null}
                  </div>
                );
              })
            ) : (
              <p>????????? ?????? ??????</p>
            )}
          </div>
          {postModal ? (
            <PostModal
              postModal={postModal}
              setPostModal={setPostModal}
              setPost={setPost}
              setRestAdress={setRestAdress}
            />
          ) : null}
        </div>
  );
};

export default MyPage;
