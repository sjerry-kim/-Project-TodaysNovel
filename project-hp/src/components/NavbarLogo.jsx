import { useNavigate } from "react-router-dom";

const NavbarLogo = () => {
  const navigate = useNavigate();

  return (  
    <div>
      <h1 onClick={()=>{navigate('/')}} >Today's Novel</h1>
    </div>
  );
}

export default NavbarLogo;