import React from "react";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import calculate from "../logic/calculate";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      next: null,
      operation: null
    };
  }
  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };
  render() {
    return (
      <div className="component-app">
        <Display value={this.state.result || this.state.next || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
