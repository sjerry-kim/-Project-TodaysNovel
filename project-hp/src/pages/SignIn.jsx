import { useNavigate } from 'react-router-dom';
import '../css/SignIn.css';

const SignIn = () => {
  const navigate = useNavigate();

  return (  
    <div className='SignIn-wp'>
      <form action="" onSubmit={(e)=>{e.preventDefault()}}>
        <label htmlFor="">Id</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="text" />
        <input type="submit" value={"submit"} />
      </form>
      <button onClick={()=>{
        navigate('/signup');
      }}
      >Sign up</button>
    </div>
  );
}

export default SignIn;