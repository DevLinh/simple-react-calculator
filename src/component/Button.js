import React, { Component } from "react";
import PropTypes from "prop-types";
export class Button extends Component {
  render() {
    return <button>{this.props.name}</button>;
  }
}
Button.propTypes = {
  name: PropTypes.string
};
export default Button;
