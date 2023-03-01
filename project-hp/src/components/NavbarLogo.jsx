import { useNavigate } from "react-router-dom";

const NavbarLogo = () => {
  const navigate = useNavigate();

  return (  
    <div>
      <h1 onClick={()=>{navigate('/')}} >Today's Book</h1>
    </div>
  );
}

export default NavbarLogo;