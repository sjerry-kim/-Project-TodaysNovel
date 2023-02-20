import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/NavbarSide.css";
import { EmptyCart } from "../modules/cart";

const NavbarSide = () => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const sessionId = sessionStorage.getItem("id");
  const currentUser = user.userList.find((user) => user.id == sessionId);
  const [load, setLoad] = useState(true);
  const [test, setTest] = useState(true);

  useEffect(() => {
    setLoad(true);
  }, [test, load]);

  return (
    <div className="NavbarSide-wp">
      {
        // sessionStorage.getItem("Login") == "true" ? (
        currentUser == null ? (
          <Link to="/signin">Sign in</Link>
        ) : (
          <div>
            <p>Welcome,{currentUser.name}</p>
            <button
              onClick={() => {
                sessionStorage.setItem("id", null);
                sessionStorage.setItem("name", null);
                sessionStorage.setItem("Login", false);
                // ⬇️ 얘 때문에 빈 페이지 에러 생김 🔥
                // sessionStorage.setItem("cart", []);
                setTest(!test);
                dispatch(EmptyCart());
              }}
            >
              Sign out
            </button>
            <Link to="/mypage">My Page</Link>
          </div>
        )
      }
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default NavbarSide;
