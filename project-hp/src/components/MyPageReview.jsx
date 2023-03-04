import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "../css/Review.css";
import { addReview} from "../modules/mainReview";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { limitReview } from "../modules/user";

let reviewId = 0;

const MyPageReview = (props) => {
  const { reviewModal, setReviewModal } = props;
  const { id } = useParams();
  const [imgId, setImgId] = useState(1);
  const user = useSelector((state) => state.user);
  const review = useSelector((state) => state.mainReview);
  const navigate = useNavigate();
  const mainItems = useSelector((state) => state.mainState);
  const reviewItem = mainItems.find((item)=>item.itemId == id);
  const dispatch = useDispatch();
  const sessionId = sessionStorage.getItem("id");
  const currentUser = user.userList.find((user) => user.id == sessionId);
  // const mainItems = useSelector((state) => state.mainState);
  // const sameProduct = currentUser.orderProducts;
  // Modal 창을 useRef로 취득
  const modalRef = useRef(null);
  // Modal 내부 내용
  const [userId, setUserId] = useState(currentUser.id);
  const [userRate, setUserRate] = useState("");
  const [userText, setUserText] = useState("");
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const [userDate, setUserDate] = useState(`${year}-${month}-${day}`);
  // 별점
  const starArray = [0, 1, 2, 3, 4];
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [starScore, setStarScore] = useState();
  
  
  const handleStarClick = (sIdx) => {
    console.log(sIdx);
    let clickStates = [...clicked];
    // clicked 배열을 수정해주는 for문
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= sIdx ? true : false;
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    sendReview();
    console.log(starScore);
  }, [clicked]);

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
    setStarScore(score);
  };

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

  useEffect(()=>{
    setImgId(imgId+1)
    console.log(imgId);
  },[])


  return (
    <div>
      <div
        ref={modalRef}
        className={`ReviewModal-div ${reviewModal ? "ReviewModal-open" : ""}`}
      >
        <h1>Review</h1>
        <img src={require(`../img/${reviewItem.image}`)} alt="no image" />
        <p>{userId}</p>
        <p>{userDate}</p>
          {/* <RatingText>평가하기</RatingText> */}
          <Stars>
            {starArray.map((sIdx, i) => {
              return (
                <FaStar
                  key={i}
                  size="30"
                  onClick={() => handleStarClick(sIdx)}
                  className={clicked[sIdx] && "yellowStar"}
                />
              );
            })}
          </Stars>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={(e) => {
            setUserText(e.target.value);
          }}
        ></textarea>
        <button
          onClick={() => {
            console.log(starScore);
            dispatch(
              addReview({
                itemId: id,
                reviewId: reviewId++,
                userId: userId,
                rate: userRate,
                text: userText,
                date: userDate,
                rate: starScore
              })
              );
              dispatch(limitReview({
                currentUser : sessionId,
                myPageId: sessionStorage.getItem("myPageId")
              }))
              navigate('/mypage')
          }}
        >
          save
        </button>
      </div>
    </div>
  );
};

export default MyPageReview;

const Stars = styled.div`
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;
