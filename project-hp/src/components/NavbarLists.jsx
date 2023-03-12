import { useEffect, useRef } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import '../css/NavbarLists.css';

const NavbarLists = () => {
  const [bodyOverflow, setBodyOverflow] = useState(false);
  const navRef = useRef(null);
  
  useEffect(()=>{
    if(bodyOverflow){
      document.querySelector("body").style.overflow = "hidden"
    }else{
      document.querySelector("body").style.overflow = "auto"
    }
  },[bodyOverflow])

  useEffect(()=>{
    const handler = (event) => {
      if(navRef.current && !navRef.current.contains(event.target)){
        setBodyOverflow(false)
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
      <label class="NavbarLists-menuicon" for="NavbarLists-hamburger">
        <span onClick={()=>{
          setBodyOverflow(!bodyOverflow);
          console.log(bodyOverflow);
        }}
        ref={navRef}
        ></span>
      </label>
      <div className="NavbarLists-menu" >
        <NavLink to="/main">Main</NavLink>
        <NavLink to="/about">About this site</NavLink>
      </div>
      {/* <div className="NavbarLists-transparents"
        onClick={()=>{
          const handler = (event) => {
            if(navRef.current && !navRef.current.contains(event.target)){
              setBodyOverflow(false)
              document.querySelector("#NavbarLists-hamburger").checked = false
            }
          };
          document.addEventListener("mousedown", handler);
      
          return () => {
            document.removeEventListener("mousedown", handler);
          };
        }}></div> */}
    </div>
  );
}

export default NavbarLists;