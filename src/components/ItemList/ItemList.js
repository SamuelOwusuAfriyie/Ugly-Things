import React from "react";
import Item from "./Item";
import "./ItemList.css";

let ItemList = (props) => (
  <div className="item-list">
    {
      props.data.map((item, index) => (<Item key={item.title + index} data={item} index={index}/>))
    }
  </div>
)
export default ItemList;
