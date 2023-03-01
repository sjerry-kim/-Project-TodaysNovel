import { NavLink } from "react-router-dom";

import '../css/NavbarLists.css';

const NavbarLists = () => {
  return (  
    <div className="NavbarLists-wp">
      <NavLink to='/main'>Main</NavLink>
      <NavLink to='/about'>About this site</NavLink>
    </div>
  );
}

export default NavbarLists;