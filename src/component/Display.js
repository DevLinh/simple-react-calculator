import React, { Component } from "react";
import PropTypes from "prop-types";
export class Display extends Component {
  render() {
    return <div>{this.props.value}</div>;
  }
}
Display.propTypes = {
  value: PropTypes.string
};

export default Display;
