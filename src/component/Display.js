import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Display.css";
export class Display extends Component {
  render() {
    return <div className="component-display">{this.props.value}</div>;
  }
}
Display.propTypes = {
  value: PropTypes.string
};

export default Display;
