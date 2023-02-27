import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../css/ReviewModal.css";
import { addReview } from "../modules/pinkReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

let reviewId = 0;

const ReviewModal = (props) => {
  const { reviewModal, setReviewModal} = props;
  const {id} = useParams();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const sessionId = sessionStorage.getItem("id");
  const currentUser = user.userList.find((user) => user.id == sessionId);
  // const pinkItems = useSelector((state) => state.pinkState);
  const sameProduct = currentUser.orderProducts;
  // Modal 창을 useRef로 취득
  const modalRef = useRef(null);
  // Modal 내부 내용
  const [userId, setUserId] = useState(currentUser.id);
  const [userRate, setUserRate] = useState("");
  const [userText, setUserText] = useState("");
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2,"0");
  const day = String(date.getDate()).padStart(2,"0")
  const [userDate, setUserDate] = useState(`${year}-${month}-${day}`);

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (event) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setReviewModal(false);
      }
    };

    // 이벤트 핸들러 등록
    document.addEventListener("mousedown", handler);
    // document.addEventListener('touchstart', handler); // 모바일 대응

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener("mousedown", handler);
      // document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  });

  return (
    <div>
      <div
        ref={modalRef}
        className={`ReviewModal-div ${reviewModal ? "ReviewModal-open" : ""}`}
      >
        <h1>일윤아 보고싶엉</h1>
        <p>{userId}</p>
        <p>{userDate}</p>
        <div>
          <FontAwesomeIcon icon={faStar} style={{}}/>
          <FontAwesomeIcon icon={faStar} style={{}}/>
          <FontAwesomeIcon icon={faStar} style={{}}/>
          <FontAwesomeIcon icon={faStar} style={{}}/>
          <FontAwesomeIcon icon={faStar} style={{}}/>
        </div>
        <textarea name="" id="" cols="30" rows="10" onChange={(e)=>{setUserText(e.target.value)}}></textarea>
        <button onClick={()=>{
          dispatch(addReview({
            itemId: id,
            reviewId: reviewId++,
            userId: userId,
            rate: userRate,
            text: userText,
            date: userDate,
          }))
        }}
        >save</button>
      </div>
    </div>
  );
};

export default ReviewModal;
