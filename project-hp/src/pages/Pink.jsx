import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { decrement, increment } from "../modules/dataState";


const Pink = () => {
  const count = useSelector((state)=>state.counter);
  // const dataState = useSelector((state)=>state)
  const dispatch = useDispatch();
  const pinkVenom = 100;
  const [changeNum, setChangeNum] = useState(count);

  useEffect(()=>{console.log(count)})

  return (
    <div>
      <h1>pink venom</h1>
      <p>{count.map((m)=>(
        <p>{m.value}</p>
      ))}</p>
      <button onClick={()=>{dispatch(increment(count))}}>+1</button>
      <button onClick={()=>{dispatch(decrement(count))}}>-1</button>
      <h2>{pinkVenom}</h2>
    </div>
  );
}

export default Pink;