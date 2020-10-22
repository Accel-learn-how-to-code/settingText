import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//add boostrap and JQuery
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

class App extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
  }

  logTest = () => {
    console.log(this.name.value);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload 2.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <form>
            <div className="form-group">
              <label>Test</label>
              <input
                type="text"
                className="form-control"
                placeholder="Example label"
                ref={(value) => (this.name = value)}
              />
            </div>
          </form>

          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.logTest}
            >
              Button 1
            </button>
            <button
              className="btn btn-danger"
              type="button"
              onClick={this.logTest}
            >
              Button 2
            </button>
            <button
              className="btn btn-success"
              type="button"
              onClick={this.logTest}
            >
              Button 3
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
