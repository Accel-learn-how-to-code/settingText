import React, { Component } from "react";

export default class SizeSetting extends Component {
  render() {
    return (
      <div className="card mb-1">
        <div className="card-header">FontSize: {this.props.fontSize} px</div>
        <div className="card-body">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => this.props.changeSize(2)}
            >
              Increase
            </button>
            <button
              className="btn btn-primary ml-1"
              type="button"
              onClick={() => this.props.changeSize(-2)}
            >
              Decrease
            </button>
          </div>
        </div>
      </div>
    );
  }
}
