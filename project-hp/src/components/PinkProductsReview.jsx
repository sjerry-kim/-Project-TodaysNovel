import { useEffect } from "react";

const PinkProductsReview = (props) => {
  const {productsReviews, reviews} = props;

  useEffect(()=>{
    console.log(reviews);
  },[])

  return (  
    <div>
      {
        reviews.length != 0 ?
        reviews.map((r,i)=>(
          <div key={i}>
            <p>{r.userId}</p>
            <p>{r.date}</p>
            <p>{r.text}</p>
          </div>
        )) : "no reviews"
      }
    </div>
  );
}

export default PinkProductsReview;