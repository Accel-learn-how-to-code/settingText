import React, { Component } from "react";
import "./App.css";

//add boostrap and JQuery
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";

//import components
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
import Result from "./components/Result";
import Reset from "./components/Reset";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "tomato",
    };
  }

  changeColor = (color) => {
    this.setState({
      color: color,
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row mb-3">
          <div className="col-6">
            <ColorPicker
              color={this.state.color}
              changeColor={this.changeColor}
            />
          </div>
          <div className="col-6">
            <SizeSetting />
            <Reset />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Result color={this.state.color} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
