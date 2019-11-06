import React from "react";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
class App extends React.Component {
  handleClick = buttonName => {
    console.log("You clicked", buttonName);
  };
  render() {
    return (
      <div>
        <Display value="1999" />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
