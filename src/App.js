import React, { Component } from "react";
import NumberButton from "./components/NumberButton";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {resultsText: ""}
  }

  addNumber(number) {
    this.setState(prevState => {
      return {
        resultsText: prevState.resultsText + number
      }
    })
  }
  render() {
    return (
      <div className="App">
        <textarea readOnly={true} className="results-box" value={this.state.resultsText}/>
        <div>
          <NumberButton number={1} parentCallbackFn={this.addNumber.bind(this)}></NumberButton>
          <NumberButton number={2} parentCallbackFn={this.addNumber.bind(this)}></NumberButton>
          <NumberButton number={3} parentCallbackFn={this.addNumber.bind(this)}></NumberButton>
        </div>
        <div>
          <NumberButton number={4} parentCallbackFn={this.addNumber.bind(this)}></NumberButton>
          <NumberButton number={5} parentCallbackFn={this.addNumber.bind(this)}></NumberButton>
          <NumberButton number={6} parentCallbackFn={this.addNumber.bind(this)}></NumberButton>
        </div>
        <div>
          <NumberButton number={7} parentCallbackFn={this.addNumber.bind(this)}></NumberButton>
          <NumberButton number={8} parentCallbackFn={this.addNumber.bind(this)}></NumberButton>
          <NumberButton number={9} parentCallbackFn={this.addNumber.bind(this)}></NumberButton>
        </div>
        <div>
          <NumberButton number={0} parentCallbackFn={this.addNumber.bind(this)}></NumberButton>
          <button className="number-tile">.</button>
          <button className="number-tile">=</button>
        </div>
      </div>
    );
  }
}

export default App;
