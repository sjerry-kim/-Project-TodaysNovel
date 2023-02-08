import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/PinkProductsComment.css';
import { addComment, deleteComment, modifyComment } from '../modules/pinkComment';

let commentId = 0;

const PinkProductsComment = (props) => {
  const {id, pinkItems, products} = props;
  const dispatch = useDispatch();
  const pinkComment = useSelector((state)=>state.pinkComment)
  const pinkCommentId = pinkComment.filter((c)=>(
    c.productId == id
  ))
  const [comment, setComment] = useState("");

  const InsertComment = () => {
    dispatch(addComment({
      productId : id,
      commentId: commentId++,
      commentText: comment,
    }))
  }

  return (  
    <div className="PinkProductsComment-wp">
      <div className="PinkProductsComment-typingdiv">
        <input type="text" onChange={(e)=>{setComment(e.target.value)}}/>
        <button onClick={()=>{
          InsertComment();
        }}>save</button>
      </div>
      <div className="PinkProductsComment-printdiv">
        {
          pinkCommentId.map((c,i)=>(
            <div key={i}>
              <p>{c.commentText}</p>
              <button 
              onClick={()=>{
                dispatch(deleteComment(c))
                console.log(pinkComment)
                }}>delete</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default PinkProductsComment;