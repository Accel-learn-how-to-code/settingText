import React, { Component } from "react";
import "./App.css";

//add boostrap and JQuery
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

class App extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row mb-3">
          <div className="col-6">
            <div className="card">
              <div className="card-header">Color Picker</div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <footer className="blockquote-footer"></footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card mb-1">
              <div className="card-header">Change Fontsize</div>
              <div className="card-body">
                <div className="btn-group" role="group" aria-label="Basic example">
                  <button className="btn btn-primary" type="button">Increase</button>
                  <button className="btn btn-primary ml-1" type="button">Decrease</button>
                </div>
              </div>
            </div>
            <button className="btn btn-success ml-7" type="button">Reset</button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">Result</div>
              <div className="card-body">
                <div>This is the result</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
