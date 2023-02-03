import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import '../css/Cart.css';
import { decrementItem, deleteItem, incrementItem } from "../modules/cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [priceSum, setPriceSum] = useState(0);
  let price = 0;

  useEffect(()=>{
    cart.forEach((item,i)=>{
      price = item.price*item.itemCount;
    })
    console.log(price)
  },[cart])

  return (  
    <div className="Cart-wp">
      <h1><FontAwesomeIcon icon={faCartShopping} /></h1>
      <div className="Cart-itembox">
      {
        cart.map((item)=>(
          <div className="Cart-itemdiv">
            <img src={require(`../img/${item.image}`)} alt="no image" />
            <p>{item.title}</p>
            <div className="Cart-itemdiv-modifynum">
              <button onClick={()=>{dispatch(incrementItem(item))}}> + </button>
              <p>{item.itemCount}</p>
              <button onClick={()=>{dispatch(decrementItem(item))}}> - </button>
            </div>
            <p>{item.price}$</p>
            <p>{price}</p>
            <button onClick={()=>{dispatch(deleteItem(item.itemId))}}>delete</button>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default Cart;