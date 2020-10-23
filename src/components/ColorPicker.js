import React, { Component } from "react";

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ["tomato", "lightgreen", "lightblue", "lightgray"],
      fontSize: 15,
    };
  }

  colorStyle = (color) => {
    return {
      display: "inline-block",
      height: 50,
      width: 50,
      backgroundColor: color,
      marginLeft: 10,
    };
  };

  render() {
    let currentColor = this.props.color;
    let colorElement = this.state.color.map((color, index) => {
      return (
        <span
          key={index}
          style={this.colorStyle(color)}
          className={currentColor === color ? "active" : ""}
          onClick={() => this.props.changeColor(color)}
        ></span>
      );
    });
    return (
      <div className="card">
        <div className="card-header">Color Picker</div>
        <div className="card-body">{colorElement}</div>
      </div>
    );
  }
}
