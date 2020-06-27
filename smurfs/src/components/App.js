import React, { Component } from "react";
import "./App.css";
import SmurfList from './smurfList'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Happy Smurf Village of cloads</h1>
        <SmurfList />
      </div>
    );
  }
}

export default App;
