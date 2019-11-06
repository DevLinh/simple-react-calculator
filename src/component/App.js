import React from "react";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
class App extends React.Component {
  render() {
    return (
      <div>
        <Display value="1999" />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
