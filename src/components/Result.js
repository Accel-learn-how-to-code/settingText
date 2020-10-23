import React, { Component } from "react";

export default class Result extends Component {

  resultStyle = () => {
    return {
      color: this.props.color,
      fontWeight: 'bold',
      border: '2px solid ' + this.props.color,
    };
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">Color: {this.props.color} - Fontsize: 15px</div>
        <div style={this.resultStyle()} className="card-body">
          <div>This is the result</div>
        </div>
      </div>
    );
  }
}
