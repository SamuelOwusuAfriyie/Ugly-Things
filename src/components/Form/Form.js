import React from "react";
import "./Form.css";

let Form = (props) => (
  <form onSubmit={props.handleSubmit}>
    <div className="container offset-2 my-5">
      <div className="row">
        <div className="col-4">
          <input name="title" value={props.title} onChange={props.handleChange} placeholder="title" className="form-control p-3 "/>
        </div>
        <div col-4>
          <input name="url" value={props.url} onChange={props.handleChange} placeholder="img url" className="form-control p-3 "/>
        </div>
        <div col-4>
          <input name="description" value={props.description} onChange={props.handleChange} placeholder="Description" className="form-control p-3 mx-3"/>
        </div>
      </div>
      <button type="submit" className="btn btn-info form-control w-25 my-5 offset-3">Submit</button>
    </div>
    <hr/>
  </form>
)
export default Form;
