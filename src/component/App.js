import React from "react";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
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
    console.log("You clicked", buttonName);
  };
  render() {
    return (
      <div>
        <Display value={this.state.result || this.state.next || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
