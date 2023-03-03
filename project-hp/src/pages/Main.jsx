import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import "../css/Main.css";
import { addItem } from "../modules/cart";
import { changeCart } from "../modules/user";

const Main = () => {
  const mainItems = useSelector((state) => state.mainState);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sessionId = sessionStorage.getItem("id");
  const currentUser = user.userList.find((user) => user.id == sessionId);
  const sessionCart = sessionStorage.getItem("cart");
  const [searchWord, setSearchWord] = useState("");
  const [searchedItems, setSearchedItems] = useState("");

  useEffect(() => {
    console.log(cart);
    const stringfyCart = JSON.stringify(cart);
    sessionStorage.setItem("cart", stringfyCart);
    let parseCart = JSON.parse(sessionCart);
    console.log(currentUser);
    // 옵셔널 체이닝 (optional chaining)🔥
    if (parseCart?.[0] == undefined) {
      console.log("장바구니 추가 상품 없음");
    } else if (currentUser && parseCart[0].id != currentUser.id){
      // cart.forEach((p) => (p.id = sessionId));
      console.log("로그인 하기 전 장바구니 있음");
      console.log(cart);
    } else if (currentUser && parseCart[0].id == currentUser.id){
      console.log(parseCart[0].id);
      console.log('장바구니 id 변경됨');
      dispatch(changeCart(parseCart));
      console.log(currentUser.cart);
    }
    console.log("댕짜증");
  }, [cart, sessionCart]);

  const insertItem = (item) => {
    dispatch(
      addItem({
        id: sessionStorage.getItem("id"),
        title: item.title,
        itemId: item.itemId,
        image: item.image,
        price: item.price,
        effect: item.effect,
        itemCount: 1,
        itemTotalCount: 1,
        isChecked: item.isChecked,
      })
    );
    console.log(cart);
  };

  let newMainItems = mainItems.filter((item) => {
    return item.title
      .replace(" ", "")
      .toLocaleLowerCase()
      .includes(searchWord.toLocaleLowerCase().replace(" ", ""));
  });

  return (
    <div className="Main-wp">
      <h1>Main</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setSearchWord(searchedItems);
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setSearchedItems(e.target.value);
          }}
        />
        <input type="submit" value="search" />
      </form>
      <div className="Main-itembox">
        {newMainItems.map((item) => (
          <div className="Main-itemdiv">
            <img src={require(`../img/${item.image}`)} alt="no image" />
            <p>{item.title}</p>
            <button
              onClick={() => {
                navigate(`/main/${item.itemId}`);
              }}
            >
              detail
            </button>
            <button
              onClick={() => {
                const selectedItem = cart.find(
                  (si) => si.itemId == item.itemId
                );
                if (selectedItem) {
                  alert("이미 추가된 상품입니다");
                } else {
                  insertItem(item);
                }
              }}
            >
              Add Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
