import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Button.css";
export class Button extends Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    return (
      <button className="component-button" onClick={this.handleClick}>
        {this.props.name}
      </button>
    );
  }
}
Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func
};
export default Button;
