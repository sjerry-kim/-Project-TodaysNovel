import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RecentBox from "../components/RecentBox";
import MainProductsComment from "../components/MainProductsComment";
import MainReview from "../components/MainReview";

import '../css/Detail.css';

const Detail = () => {
  const {id} = useParams();
  const mainItems = useSelector((state) => state.mainState);
  const products = mainItems.find((p)=> p.itemId == id );
  const productsReviews = products.reviews;
  const mainReviews = useSelector((state) => state.mainReview);
  const reviews = mainReviews.filter((r)=>r.itemId == id);

  useEffect(()=>{
    console.log(products);
  })

  return (  
    <div className="Detail-wp">
      <div className="Detail-product-div">
        <img src={require(`../img/${products.image}`)} alt="no image" />
        <div className="Detail-product-detaildiv">
          <h1>{products.title}</h1>
          <p>{products.price}</p>
        </div>
      </div>
      <MainReview reviews={reviews} productsReviews={productsReviews}/>
      <MainProductsComment id={id} mainItems={mainItems} products={products} />
      <RecentBox />
    </div>
  );
}

export default Detail;