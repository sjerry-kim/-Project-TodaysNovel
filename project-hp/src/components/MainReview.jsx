import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../modules/mainReview";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const MainReview = (props) => {
  const {productsReviews, reviews} = props;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const sessionId = sessionStorage.getItem("id");
  const currentUser = user.userList.find((user) => user.id == sessionId);

  useEffect(()=>{
    console.log(reviews);
  },[])

  return (  
    <div>
      {
        reviews.length != 0 ?
        reviews.map((r,i)=>{
          let star = r.rate;
          const showStar = () => {
            switch(star){
              case 1 : 
                return(
                  <Stars>
                    <FaStar className="yellowStar"/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </Stars>
                  )
              case 2 :
                return (
                    <Stars>
                      <faStar className="yellowStar"/>
                      <faStar className="yellowStar"/>
                      <faStar/>
                      <faStar/>
                      <faStar/>
                    </Stars>
                    )
              case 3 :
                return (
                    <Stars>
                      <FaStar className="yellowStar"/>
                      <FaStar className="yellowStar"/>
                      <FaStar className="yellowStar"/>
                      <FaStar/>
                      <FaStar/>
                    </Stars>
                    )
              case 4 : 
                return (
                    <Stars>
                      <FaStar className="yellowStar"/>
                      <FaStar className="yellowStar"/>
                      <FaStar className="yellowStar"/>
                      <FaStar className="yellowStar"/>
                      <FaStar/>
                    </Stars>
                    )
              case 5 :
                return (
                    <Stars>
                      <FaStar className="yellowStar"/>
                      <FaStar className="yellowStar"/>
                      <FaStar className="yellowStar"/>
                      <FaStar className="yellowStar"/>
                      <FaStar/>
                    </Stars>
                    )
            }
          }
          return(
          <div key={i}>
            <p>{r.userId}</p>
            <p>{r.date}</p>
            <p>
            {showStar()}
            </p>
            <p>{r.text}</p>
            {
              currentUser? 
                currentUser.id == r.userId ?
                <button onClick={()=>{
                  dispatch(deleteReview(r));
                }}>X</button>
                : ""
              : ""
            }
            <hr />
          </div>
          )
          }) : "no reviews"
      }
    </div>
  );
}

export default MainReview;

const Stars = styled.div`
  padding-top: 5px;

  & svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;