import { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserInfo, setIndex } from "../modules/user";

import "../css/MyPage.css";
import MyPageReview from "../components/MyPageReview";
import { useNavigate } from "react-router-dom";
import PostModal from "../components/PostModal";

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
  const [tel, setTel] = useState(currentUser.tel);
  const [email, setEmail] = useState(currentUser.email);
  const [post, setPost] = useState(currentUser.post);
  const [restAdress, setRestAdress] = useState(currentUser.restAdress);
  const [additionalAdress, setAdditionalAdress] = useState(
    currentUser.additionalAdress
  );
  const [reviewModal, setReviewModal] = useState(false);
  const [postModal, setPostModal] = useState(false);

  useEffect(()=>{
    console.log(review[0])
  })

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
          type="text"
          disabled={!changeInfo}
          onChange={(e) => {
            setPw(e.target.value);
          }}
          value={pw}
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
        {/* 우편번호 */}
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
        <input 
          type="text" 
          disabled 
          value={restAdress} /> <br />
        <input 
          type="text" 
          disabled={!changeInfo} 
          onChange={(e)=>{
            setAdditionalAdress(e.target.value)
          }}
          value={additionalAdress} />
        <br />
        {changeInfo ? (
          <button
            onClick={() => {
              setChageInfo(false);
              changeProfile();
              alert("수정되었습니다");
              console.log(currentUser);
            }}
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => {
              setChageInfo(true);
              // checkUserInfo();
            }}
          >
            Modify
          </button>
        )}
      </div>
      <div className="MyPage-purchasedProducts">
        {currentUser.orderedProducts[0] ? (
          currentUser.orderedProducts.map((p, i) => {
            return(
              <div key={i} className="MyPage-purchasedProducts-div">
              <p>{p.title}</p>
              <p>{p.myPageId}</p>
              <p>{p.isReviewed ? "후기 작성 완료" : "후기 작성 필요"}</p>
              <img src={require(`../img/${p.image}`)} alt="no image" />
              <button
                onClick={() => {
                  setReviewModal(true);
                  sessionStorage.setItem("myPageId", p.myPageId)
                  navigate(`/mypage/${p.itemId}`);
                }}
                disabled={p.isReviewed? true : false}
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
            )
          })
        ) : (
          <p>주문한 상품 없음</p>
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
