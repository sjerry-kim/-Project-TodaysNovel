import { useCallback } from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/NavbarSide.css";

const NavbarSide = () => {
  const user = useSelector((state) => state.user);
  const sessionId = sessionStorage.getItem("id");
  const currentUser = user.userList.find((user) => user.id == sessionId);
  const [load, setLoad] = useState(true);
  const [test, setTest] = useState(true);

  useEffect(() => {
    setLoad(true);
  }, [test, load]);

  useEffect(()=>{
    if(currentUser){

    }
  }, [])

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
              setTest(!test);
              window.location.reload();
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
