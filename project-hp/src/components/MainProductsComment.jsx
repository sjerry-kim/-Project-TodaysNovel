import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/MainProductsComment.css';
import { addComment, deleteComment, modifyComment } from '../modules/mainComment';

let commentId = 0;

const MainProductsComment = (props) => {
  const {id, mainItems, products} = props;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const sessionId = sessionStorage.getItem("id");
  const currentUser = user.userList.find((user) => user.id == sessionId);
  const mainComment = useSelector((state)=>state.mainComment);
  const mainCommentId = mainComment.filter((c)=>(
    c.productId == id
  ))
  const [comment, setComment] = useState("");

  useEffect(()=>{
    console.log(currentUser);
  },[])

  const InsertComment = () => {
    dispatch(addComment({
      productId : id,
      commentId: commentId++,
      commentText: comment,
      userName: currentUser.name,
      userId : currentUser.id
    }))
    document.querySelector(".PinkProductsComment-input").value = ""
  }

  return (  
    <div className="PinkProductsComment-wp">
      <div className="PinkProductsComment-typingdiv">
        <input className='PinkProductsComment-input' 
        disabled={currentUser? false : true} type="text"
        placeholder={currentUser? "" : "댓글 입력은 로그인 후 가능합니다"}
        onChange={(e)=>{setComment(e.target.value)}}/>
        <button onClick={()=>{
          InsertComment();
        }}>save</button>
      </div>
      <div className="PinkProductsComment-printdiv">
        {
          mainCommentId.map((c,i)=>(
            <div key={i}>
              <p>{c.userName}</p>
              <p>{c.commentText}</p>
              {
                currentUser.id == c.userId? (
                  <button 
                  onClick={()=>{
                    dispatch(deleteComment(c))
                    // console.log(mainComment)
                    }}>delete</button>
                ):(
                  ""
                )
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default MainProductsComment;