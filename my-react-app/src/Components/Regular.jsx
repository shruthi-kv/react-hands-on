import React, { Component } from "react";

class RegularComp extends Component {
  render() {
    console.log("⚠️ Regular Component Rendered");
    return <p>Regular Component — {this.props.name}</p>;
  }
}

export default RegularComp;
