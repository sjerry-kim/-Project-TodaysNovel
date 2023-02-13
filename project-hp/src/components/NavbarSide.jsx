import { useCallback } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/NavbarSide.css';

const NavbarSide = () => {
  const [load, setLoad] = useState(true);
  const [test, setTest] = useState();

  // const Loading = useCallback(()=>{
  //   if(load == true){
  //     setLoad(false)
  //   }else{
  //     setLoad(true)
  //   }
  // },[load])

  // useEffect(()=>{
  //   setLoad(!load)
  // },[load])

  return (  
    <div className="NavbarSide-wp">
      {
        sessionStorage.getItem("Login") == "true"? 
        <div>
          <p>Welcome,{sessionStorage.getItem("name")}</p>
          <button
          onClick={()=>{
            sessionStorage.setItem("id", null);
            sessionStorage.setItem("name", null);
            sessionStorage.setItem("Login", false);
            sessionStorage.setItem("cart", null);
            setLoad(false);
          }}
          >Sign out</button>
        </div> 
        :
        <Link to='/signin'>Sign in</Link>
      }
      <Link to='/cart'>Cart</Link>
    </div>
  );
}

export default NavbarSide;