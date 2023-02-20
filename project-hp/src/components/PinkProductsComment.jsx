import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/PinkProductsComment.css';
import { addComment, deleteComment, modifyComment } from '../modules/pinkComment';

let commentId = 0;

const PinkProductsComment = (props) => {
  const {id, pinkItems, products} = props;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const sessionId = sessionStorage.getItem("id");
  const currentUser = user.userList.find((user) => user.id == sessionId);
  // const findUser = user.userList.find((a)=>a.id == );
  const pinkComment = useSelector((state)=>state.pinkComment);
  const pinkCommentId = pinkComment.filter((c)=>(
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
          pinkCommentId.map((c,i)=>(
            <div key={i}>
              <p>{c.userName}</p>
              <p>{c.commentText}</p>
              {
                currentUser.id == c.userId? (
                  <button 
                  onClick={()=>{
                    dispatch(deleteComment(c))
                    console.log(pinkComment)
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

export default PinkProductsComment;