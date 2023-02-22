import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../css/Cart.css";
import {
  checkAllItem,
  checkItem,
  decrementItem,
  deleteCheckedItem,
  deleteItem,
  incrementItem,
} from "../modules/cart";
import { buyCheckedProduct, changeCart } from "../modules/user";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const [total, setTotal] = useState(0);
  let totalPriceArray = [];
  const allChecked = cart.every((item) => item.isChecked);
  const sessionId = sessionStorage.getItem("id");
  const currentUser = user.userList.find((user) => user.id == sessionId);
  const sessionCart = sessionStorage.getItem("cart");
  let parseCart = JSON.parse(sessionCart);
  // const [changeCart, setChangeCart] = useState(currentUser.cart);
  // const [remainCart, setRemainCart] = useState(cart);
  // const [parseCartState, setParseCartState] = useState();
  let purchaseArray = [];

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

  useEffect(() => {
    console.log(cart);
    const stringfyCart = JSON.stringify(cart);
    sessionStorage.setItem("cart", stringfyCart);
    // let parseCart = JSON.parse(sessionCart);
    // console.log(parseCart[0]);
    if (parseCart?.[0] == undefined) {
      console.log("장바구니 추가 상품 없음");
    } else if (currentUser && parseCart[0].id != "null") {
      console.log(parseCart[0]);
      dispatch(changeCart(parseCart));
      console.log(currentUser.cart);
    } else if (currentUser && parseCart[0].id == "null") {
      console.log("로그인 하기 전 추가한 상품 있음");
      // cart.forEach((p)=>(p.id = sessionId))
      console.log(cart);
    }
  }, [cart, sessionCart]);

  const handleCheckboxChange = () => {
    console.log(allChecked);
    dispatch(checkAllItem(!allChecked));
  };

  const handleDelete = () => {
    dispatch(deleteCheckedItem());
  };

  const buyCheckedProducts = () => {
    cart.forEach((p) => {
      if (p.isChecked) {
        // ... 이거 사용해보기! 🔥
        let newPurchaseArray = purchaseArray.concat(p);
        purchaseArray = newPurchaseArray;
      }
    });
    console.log(purchaseArray);
    dispatch(buyCheckedProduct(purchaseArray));
    dispatch(deleteCheckedItem());
    console.log(currentUser.orderedProducts);
    alert("상품 주문하였습니다")
    navigate('/mypage');
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
                <input
                  type="checkbox"
                  defaultChecked
                  checked={allChecked}
                  onChange={() => {
                    handleCheckboxChange();
                  }}
                />{" "}
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
                    checked={item.isChecked}
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
            <button
              onClick={() => {
                handleDelete();
              }}
            >
              Delete Selection
            </button>
            <p>{total}</p>
            <button
              onClick={() => {
                if (currentUser && parseCart[0].id == "null") {
                  cart.forEach((p) => (p.id = sessionId));
                  console.log(cart);
                }
                buyCheckedProducts();
              }}
            >
              {" "}
              Buy{" "}
            </button>
          </div>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default Cart;
