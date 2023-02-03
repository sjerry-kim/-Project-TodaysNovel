import { Link } from "react-router-dom";
import '../css/NavbarSide.css';

const NavbarSide = () => {
  return (  
    <div className="NavbarSide-wp">
      <Link to='/signin'>Sign in</Link>
      <button>Sign out</button>
      <Link to='/cart'>Cart</Link>
    </div>
  );
}

export default NavbarSide;