import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import '../css/Pink.css';
import { addItem } from "../modules/cart";

const Pink = () => {
  const pinkItems = useSelector((state) => state.pinkState);
  const dispatch = useDispatch();

  const insertItem = (item) => {
    dispatch(addItem({
      title: item.title,
      itemId: item.itemId,
      image: item.image,
      price: item.price,
      effect: item.effect,
      itemCount: 1,
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
            <button onClick={()=>{ insertItem(item) }}>Add Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pink;
