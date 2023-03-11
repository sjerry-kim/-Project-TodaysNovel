import { NavLink } from "react-router-dom";

import '../css/NavbarLists.css';

const NavbarLists = () => {
  return (  
    <div className="NavbarLists-wp">
      <input type="checkbox" id="NavbarLists-hamburger" />
      <label class="NavbarLists-menuicon" for="NavbarLists-hamburger">
        <span onClick={()=>{
          // sessionStorage.setItem("navbar", true);
          // if(sessionStorage.getItem("navbar") == true){
          //   sessionStorage.setItem("navbar", !sessionStorage.getItem("navbar"))
          // }
        }}
        ></span>
      </label>
      <div className="NavbarLists-menu">
        <NavLink to="/main">Main</NavLink>
        <NavLink to="/about">About this site</NavLink>
      </div>
      <div className={`NavbarLists-transparents ${sessionStorage.getItem("navbar") ? ("display-none"):("display-block")}` }
        onClick={()=>{sessionStorage.setItem("navbar",false)}}
        ></div>
    </div>
  );
}

export default NavbarLists;