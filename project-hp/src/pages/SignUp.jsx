import '../css/SignUp.css';

const SignUp = () => {
  return (  
    <div className="SignUp-wp">
      <form action="" onSubmit={(e)=>{e.preventDefault()}} >
        <label htmlFor="">Id</label>
        <input type="text" />
        <label htmlFor="">password</label>
        <input type="text" />
        <label htmlFor="">name</label>
        <input type="text" />
        <label htmlFor="">email</label>
        <input type="email" />
        <label htmlFor="">adress</label>
        <input type="text" />
        <input type="submit" value='submit' />
      </form>
    </div>
  );
}

export default SignUp;