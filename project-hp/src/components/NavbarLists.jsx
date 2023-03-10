import { useEffect, useRef } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import '../css/NavbarLists.css';

const NavbarLists = () => {
  const [bodyOverflow, setBodyOverflow] = useState(false);
  // π§‘ β overflow : hidden κ΄λ ¨ state β μΆν μμ  μμ 
  // const [navbar, setNavbar] = useState(false);
  const navRef = useRef(null);

  // π§‘ β overflow : hidden κ΄λ ¨ useEffect
  // useEffect(()=>{
  //   if(bodyOverflow){
  //     document.querySelector("body").style.overflow = "hidden"
  //   }else{
  //     document.querySelector("body").style.overflow = "auto"
  //   }
  // },[bodyOverflow])

  useEffect(()=>{
    const handler = (e) => {
      if(navRef.current && !navRef.current.contains(e.target)){
          setBodyOverflow(!bodyOverflow)
        document.querySelector("#NavbarLists-hamburger").checked = false
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  })

  return (  
    <div className="NavbarLists-wp">
      <input type="checkbox" id="NavbarLists-hamburger" />
      <label 
        class="NavbarLists-menuicon" 
        for="NavbarLists-hamburger"
        >
        <span onClick={()=>{
          // π§‘ β overflow : hidden κ΄λ ¨ state setν¨μ
          // setBodyOverflow(!bodyOverflow);
          console.log(bodyOverflow);
        }}
        ref={navRef}
        ></span>
      </label>
      <div className="NavbarLists-menu" >
        <div className="NavbarLists-menu-div">
        <NavLink to="/main">Main</NavLink>
        <NavLink to="/about">About this site</NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavbarLists;