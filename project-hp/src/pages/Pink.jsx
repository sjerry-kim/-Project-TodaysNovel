import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import '../css/Pink.css';
import { addItem } from "../modules/cart";

const Pink = () => {
  const pinkItems = useSelector((state) => state.pinkState);
  const cart = useSelector((state)=>state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const insertItem = (item) => {
    dispatch(addItem({
      title: item.title,
      itemId: item.itemId,
      image: item.image,
      price: item.price,
      effect: item.effect,
      itemCount: 1,
      itemTotalCount: 1,
      checked: item.checked
    }))
  }

  return (
    <div className="Pink-wp">
      <h1>Pink</h1>
      <div className="Pink-itembox">
        {pinkItems.map((item) => (
          <div className="Pink-itemdiv">
            <img src={require(`../img/${item.image}`)} alt="no image" />
            <h3>{item.title}</h3>
            <button onClick={()=>{navigate(`/pink/${item.itemId}`)}}>detail</button>
            <button onClick={()=>{
              const selectedItem = cart.find((si)=>(si.itemId == item.itemId))
              if(selectedItem){
                alert("이미 추가된 상품입니다")
              }else{
                insertItem(item)
              }
              }}>Add Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pink;
