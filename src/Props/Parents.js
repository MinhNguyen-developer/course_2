/** @format */

import React, { Component } from "react";
import Child from "./Child";
import ChildFunctional from "./ChildFunctional";

class Parents extends Component {
  state = {
    title: "Hello",
  };

  changeTitle = () => {
    this.setState({ title: "Minh" });
  };
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>

        <h3>DANH SACH SAN PHAM</h3>
        {this.props.children}
      </div>
    );
  }
}

export default Parents;
