import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../css/Cart.css";
import {
  ChangeCartId,
  checkAllItem,
  checkItem,
  decrementItem,
  deleteCheckedItem,
  deleteItem,
  incrementItem,
} from "../modules/cart";
import { buyCheckedProduct, changeCart } from "../modules/user";

let myPageId = 0;

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const [total, setTotal] = useState(0);
  let totalPriceArray = [];
  const allChecked = cart.every((item) => item.isChecked);
  const checkedList = cart.filter((item)=> item.isChecked);
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
    let parseCart = JSON.parse(sessionCart);
    console.log(currentUser);
    // 옵셔널 체이닝 (optional chaining)🔥
    if (parseCart?.[0] == undefined) {
      console.log("장바구니 추가 상품 없음");
    } else if (currentUser && parseCart[0].id != currentUser.id) {
      dispatch(ChangeCartId(sessionId));
      console.log("로그인 하기 전 장바구니 있음");
      console.log(cart);
    } else if (currentUser && parseCart[0].id == currentUser.id) {
      console.log(parseCart[0].id);
      console.log('장바구니 id 변경됨')
      dispatch(changeCart(parseCart));
      console.log(currentUser.cart);
    }
    console.log("왕짜증");
  }, [cart, sessionCart]);

  const handleCheckboxChange = () => {
    console.log(allChecked);
    dispatch(checkAllItem(!allChecked));
  };

  const handleDelete = () => {
    dispatch(deleteCheckedItem());
  };

  const buyCheckedProducts = () => {
    console.log()
    cart.forEach((p) => {
      if (p.isChecked) {
        let newPurchaseArray = purchaseArray.concat(
          {...p,
            myPageId: myPageId++,
            isReviewed: false
          }
          );
        purchaseArray = newPurchaseArray;
        console.log(newPurchaseArray);
        console.log(purchaseArray);
      }
    });
    dispatch(buyCheckedProduct(purchaseArray));
      dispatch(deleteCheckedItem());
      // console.log(currentUser.orderedProducts);
      let sPurchaseArray = JSON.stringify(purchaseArray);
      sessionStorage.setItem("reviewAble",sPurchaseArray);
        alert("주문완료!")
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
                  <p>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
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
                  <p>{(item.price * item.itemCount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
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
            <p>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
            <button
              onClick={() => {
                if(checkedList.length == 0){
                  alert("주문할 상품을 선택하세요")
                }else{
                  if(window.confirm("주문하시겠습니까?")){
                    buyCheckedProducts();
                  }else{
                    alert("주문이 취소되었습니다")
                  }
                }
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
