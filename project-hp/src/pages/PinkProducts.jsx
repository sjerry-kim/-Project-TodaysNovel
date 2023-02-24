import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PinkProductsComment from "../components/PinkProductsComment";
import PinkProductsReview from "../components/PinkProductsReview";

import '../css/PinkProducts.css';

const PinkProducts = () => {
  const {id} = useParams();
  const pinkItems = useSelector((state) => state.pinkState);
  const products = pinkItems.find((p)=> p.itemId == id );
  const productsReviews = products.reviews;
  const pinkReviews = useSelector((state) => state.pinkReview);
  const reviews = pinkReviews.filter((r)=>r.itemId == id);

  useEffect(()=>{
    console.log(products);
  })

  return (  
    <div className="PinkProducts-wp">
      <div className="PinkProducts-product-div">
        <img src={require(`../img/${products.image}`)} alt="no image" />
        <div className="PinkProducts-product-detaildiv">
          <h1>{products.title}</h1>
          <p>{products.price}</p>
        </div>
      </div>
      <PinkProductsReview reviews={reviews} productsReviews={productsReviews}/>
      <PinkProductsComment id={id} pinkItems={pinkItems} products={products} />
    </div>
  );
}

export default PinkProducts;