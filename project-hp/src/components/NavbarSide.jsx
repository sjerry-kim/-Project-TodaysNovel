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

  // useEffect(()=>{
  //   if(currentUser){
  //   }
  // }, [])

  return (
    <div className="NavbarSide-wp">
      {sessionStorage.getItem("Login") == "true" ? (
        // currentUser == null ?
        <div>
          <p>Welcome,{sessionStorage.getItem("name")}</p>
          <button
            onClick={() => {
              sessionStorage.setItem("id", null);
              sessionStorage.setItem("name", null);
              sessionStorage.setItem("Login", false);
              sessionStorage.setItem("cart", []);
              dispatch(EmptyCart(test));
              setTest(!test);
            }}
          >
            Sign out
          </button>
        </div>
      ) : (
        <Link to="/signin">Sign in</Link>
      )}
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default NavbarSide;
