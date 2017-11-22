import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header bg-info">
        <div className="row justify-content-center">
          <h1 className="my-5">UGLY THINGS</h1>
        </div>
        <div className="row justify-content-center">
          <h3>Some Things are not meant to be beautiful</h3>
        </div>
      </div>
    )
  }
}
export default Header;
