import React, { Component } from "react";
import SimplySafe from './simplySafe/SimplySafe';
import "./App.css";
import Gear from './gear/Gear';
import DoubleGears from './doubleGears/DoubleGears.jsx';
import AbleLogo from './ableLogo/AbleLogo';

class App extends Component {
  render() {
    return (
      <div className="app--component">
        <svg id="triangle--svg" height="100" width="100" viewBox="0 0 100 100" fill="#1b5299">
          <path d="M 0 100 L 50 0 L 100 100 0 100" />
        </svg>
        <SimplySafe/>
        
        <div className="gearbox">
          <Gear />
          <Gear />
          <DoubleGears />
        </div>
        <AbleLogo />
      </div>
    );
  }
}

export default App;
