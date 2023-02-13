import NavbarLists from "./NavbarLists";
import NavbarLogo from "./NavbarLogo";
import NavbarSide from "./NavbarSide";

import "../css/Navbar.css";

const Navbar = (props) => {
  const {load, setLoad} = props;
  return (
    <div className="Navbar-wp">
      <NavbarSide load={load} setLoad={setLoad} />
      <NavbarLogo />
      <NavbarLists />
    </div>
  );
};

export default Navbar;
