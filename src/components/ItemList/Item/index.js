import React from "react";
import Item from "./Item";
import {connect} from "react-redux";
import {removeItem} from "../../../actions";

class ItemContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove() {
    this.props.removeItem(this.props.index);
  }

  render() {
    return (<Item {...this.props} handleRemove={this.handleRemove} />)
  }
}
export default connect(null, {removeItem})(ItemContainer);
