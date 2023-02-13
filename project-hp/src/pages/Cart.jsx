import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../css/Cart.css";
import {
  checkAllItem,
  checkItem,
  decrementItem,
  deleteCheckedItem,
  deleteItem,
  incrementItem,
} from "../modules/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  let totalPriceArray = [];
  const allChecked = cart.every((item) => item.checked);

  useEffect(() => {
    cart.forEach((item) => {
      let totalPrice = item.price * item.itemCount;
      totalPriceArray.push(totalPrice);
    });
    setTotal(
      totalPriceArray.reduce(function add(sum, currValue) {
        return sum + currValue;
      }, 0)
    );
  }, [cart]);

  const handleCheckboxChange = () => {
    console.log(allChecked);
    dispatch(checkAllItem(!allChecked));
  };

  const handleDelete = () => {
    dispatch(deleteCheckedItem());
  };

  return (
    <div className="Cart-wp">
      <h1>
        Cart
        {/* <FontAwesomeIcon icon={faCartShopping} /> */}
      </h1>
      <div className="Cart-itembox">
        {cart.length !== 0 ? (
          <table className="Cart-table">
            <tr className="Cart-table-head">
              <td>
                {" "}
                <input type="checkbox"
                defaultChecked
                checked={allChecked}
                onChange={() => {
                  handleCheckboxChange()
                }} />{" "}
              </td>
              <td>image</td>
              <td>title</td>
              <td>pirce</td>
              <td>count</td>
              <td>total</td>
              <td>delete</td>
            </tr>
            {cart.map((item) => (
              <tr className="Cart-itemdiv">
                <td>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onClick={() => {
                      dispatch(checkItem(item));
                    }}
                  />
                </td>
                <td>
                  <img src={require(`../img/${item.image}`)} alt="no image" />
                </td>
                <td>
                  <p>{item.title}</p>
                </td>
                <td>
                  <p>{item.price}$</p>
                </td>
                <td>
                  <div className="Cart-itemdiv-modifynum">
                    <button
                      onClick={() => {
                        dispatch(decrementItem(item));
                      }}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <p>{item.itemCount}</p>
                    <button
                      onClick={() => {
                        dispatch(incrementItem(item));
                      }}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                </td>
                <td>
                  <p>{item.price * item.itemCount}$</p>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(deleteItem(item.itemId));
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        ) : (
          "Your Cart is Empty."
        )}
        {cart.length !== 0 ? (
        <div>
          <button onClick={()=>{handleDelete()}}>Delete Selection</button>
          <p>{total}</p>
        </div>)
          : " "}
      </div>
    </div>
  );
};

export default Cart;
