import React, { Component } from "react";

export default class SizeSetting extends Component {
  render() {
    return (
      <div className="card mb-1">
        <div className="card-header">Change Fontsize</div>
        <div className="card-body">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button className="btn btn-primary" type="button">
              Increase
            </button>
            <button className="btn btn-primary ml-1" type="button">
              Decrease
            </button>
          </div>
        </div>
      </div>
    );
  }
}

