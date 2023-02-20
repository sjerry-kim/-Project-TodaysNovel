import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserInfo } from "../modules/user";

const MyPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const sessionId = sessionStorage.getItem("id");
  const currentUser = user.userList.find((user)=>(user.id == sessionId));
  const [changeInfo, setChageInfo] = useState(false);
  const [name,setName] = useState(currentUser.name);
  const [id, setId] = useState(currentUser.id);
  const [pw, setPw] = useState(currentUser.pw);
  const [tel, setTel] = useState(currentUser.tel);
  const [email, setEmail] = useState(currentUser.email);
  const [adress, setAdress] = useState(currentUser.adress);

  const checkUserInfo = () => {
    // 모달 추가해서 수정하기!
  }

  const changeProfile= () => {
    const profile = {
      name: name,
      id: id,
      pw: pw,
      tel: tel,
      email: email,
      adress: adress
    }
    dispatch(changeUserInfo(profile));
  }

  return (
    <div className="MyPage-wp">
      <div className="MyPage-Profile">
        <label htmlFor="">name</label>
        <input type="text" disabled={!changeInfo}
        onChange={(e)=>{setName(e.target.value)}}
        value={name} /><br />
        <label htmlFor="">Id</label>
        <input type="text" disabled={!changeInfo}
        onChange={(e)=>{setId(e.target.value)}}
        value={id} /><br />
        <label htmlFor="" >Pw</label>
        <input type="text" disabled={!changeInfo}
        onChange={(e)=>{setPw(e.target.value)}}
        value={pw} /><br />
        <label htmlFor="">tel</label>
        <input type="text" disabled={!changeInfo} 
        onChange={(e)=>{setTel(e.target.value)}}
        value={tel} /><br />
        <label htmlFor="">email</label>
        <input type="text" disabled={!changeInfo}
        onChange={(e)=>{setEmail(e.target.value)}}
        value={email}/><br />
        <label htmlFor="">adress</label>
        <input type="text" disabled={!changeInfo}
        onChange={(e)=>{setAdress(e.target.value)}}
        value={adress} />
        <br />
        {
          changeInfo? (
            <button onClick={()=>{
              setChageInfo(false);
              changeProfile();
              alert("수정되었습니다")
              console.log(currentUser);
            }}
            >Save</button>
          ):(
            <button onClick={()=>{
              setChageInfo(true);
              checkUserInfo();
            }}
            >Modify</button>
          )
        }
      </div>
    </div>
  );
}

export default MyPage;