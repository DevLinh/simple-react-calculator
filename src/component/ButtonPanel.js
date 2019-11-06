import React, { Component } from "react";
import Button from "./Button";
import PropsTypes from "prop-types";
import "./ButtonPanel.css";
export class ButtonPanel extends Component {
  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };
  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button id="clear" name="AC" clickHandler={this.handleClick} />
          <Button name="+/-" clickHandler={this.handleClick} />
          <Button name="%" clickHandler={this.handleClick} />
          <Button id="devide" name="/" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button id="seven" name="7" clickHandler={this.handleClick} />
          <Button id="eight" name="8" clickHandler={this.handleClick} />
          <Button id="nine" name="9" clickHandler={this.handleClick} />
          <Button id="multiply" name="x" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button id="four" name="4" clickHandler={this.handleClick} />
          <Button id="five" name="5" clickHandler={this.handleClick} />
          <Button id="six" name="6" clickHandler={this.handleClick} />
          <Button id="subtract" name="-" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button id="zero" name="0" clickHandler={this.handleClick} />
          <Button id="decimal" name="." clickHandler={this.handleClick} />
          <Button id="equal" name="=" clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}
ButtonPanel.propTypes = {
  clickHandler: PropsTypes.func
};
export default ButtonPanel;
