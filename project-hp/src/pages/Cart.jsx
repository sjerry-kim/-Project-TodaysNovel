import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import '../css/Cart.css';
import { checkItem, decrementItem, deleteItem, incrementItem } from "../modules/cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  let totalPriceArray = [];

  useEffect(()=>{
    cart.forEach((item)=>{
      let totalPrice = item.price*item.itemCount;
      totalPriceArray.push(totalPrice);
    })
    setTotal(totalPriceArray.reduce(function add(sum, currValue) {
      return sum + currValue;
    }, 0))
  },[cart])

  return (  
    <div className="Cart-wp">
      <h1><FontAwesomeIcon icon={faCartShopping} /></h1>
      <div className="Cart-itembox">
      {
        cart.map((item)=>(
          <div className="Cart-itemdiv">
            <input type="checkbox" defaultChecked
            onClick={()=>{
              dispatch(checkItem(item))
            }}/>
            <img src={require(`../img/${item.image}`)} alt="no image" />
            <p>{item.title}</p>
            <div className="Cart-itemdiv-modifynum">
              <button onClick={()=>{dispatch(incrementItem(item))}}> + </button>
              <p>{item.itemCount}</p>
              <button onClick={()=>{dispatch(decrementItem(item))}}> - </button>
            </div>
            <p>{item.price}$</p>
            <p>{item.price * item.itemCount}</p>
            <button onClick={()=>{dispatch(deleteItem(item.itemId))}}>delete</button>
          </div>
        ))
      }
      <p>{total}</p>
      </div>
    </div>
  );
}

export default Cart;