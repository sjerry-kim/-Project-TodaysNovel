import { NavLink } from "react-router-dom";

import '../css/NavbarLists.css';

const NavbarLists = () => {
  return (  
    <div className="NavbarLists-wp">
      <NavLink to='/pink'>Pink</NavLink>
      <NavLink to='/blue'>Blue</NavLink>
      <NavLink to='/Yellow'>Yellow</NavLink>
      <NavLink to='/about'>About this site</NavLink>
    </div>
  );
}

export default NavbarLists;