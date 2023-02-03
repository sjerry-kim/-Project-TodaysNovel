import NavbarLists from "./NavbarLists";
import NavbarLogo from "./NavbarLogo";
import NavbarSide from "./NavbarSide";

import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar-wp">
      <NavbarSide />
      <NavbarLogo />
      <NavbarLists />
    </div>
  );
};

export default Navbar;
