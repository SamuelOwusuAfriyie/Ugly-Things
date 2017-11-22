import React from "react";
import "./Item.css";

let Item = (props) => (
  <div className="card">
    <img className="card-img-top" src={props.data.url} alt="Card image cap"/>
    <div className="card-body">
      <h4 className="card-title">{props.data.title}</h4>
      <p className="card-text">{props.data.description}</p>
      <a href="#" class="btn btn-primary" onClick={props.handleRemove}>Remove</a>
    </div>
  </div>

)
export default Item;
