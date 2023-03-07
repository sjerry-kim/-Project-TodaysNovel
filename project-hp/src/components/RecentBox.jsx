import { useEffect } from 'react';
import '../css/RecentBox.css';

const RecentBox = () => {
  const sessionRecentBox = sessionStorage.getItem("recentBox");
  const parseRecentBox = JSON.parse(sessionRecentBox);

  useEffect(()=>{
    console.log(parseRecentBox)
  },[])

  return (  
    <div className='DetailRecentBox-wp'>
      {
        sessionRecentBox != null ?
        parseRecentBox.map((item, i)=>(
          <div className='DetailRecentBox-div' key={i}>
            <img src={require(`../img/${item.image}`)} alt="" />
            <p>{item.title}</p>
          </div>
        )):(
          <p>"없음"</p>
        )
      }
    </div>
  );
}

export default RecentBox;