import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../css/Cart.css";
import {
  checkItem,
  decrementItem,
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
                <input type="checkbox" />{" "}
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
                    defaultChecked
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
                  <p>{item.price * item.itemTotalCount}</p>
                </td>
                <td>
                  <p>{item.price}$</p>
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
          "Your Cart Is Empty."
        )}
        {cart.length !== 0 ? <p>{total}</p> : " "}
      </div>
    </div>
  );
};

export default Cart;
