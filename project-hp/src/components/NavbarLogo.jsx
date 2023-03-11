import { useNavigate } from "react-router-dom";
import '../css/NavbarLogo.css';

const NavbarLogo = () => {
  const navigate = useNavigate();

  return (  
    <div className="NavbarLogo-wp">
      <h1 onClick={()=>{navigate('/')}} >Today's Novel</h1>
    </div>
  );
}

export default NavbarLogo;