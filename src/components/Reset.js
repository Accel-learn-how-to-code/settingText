import React, { Component } from "react";

export default class Reset extends Component {
  render() {
    return (
      <button className="btn btn-success ml-7" type="button" onClick={this.props.setDefault}>Reset</button>
    );
  }
}

