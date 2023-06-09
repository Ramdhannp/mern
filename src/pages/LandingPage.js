import Header from "parts/Header";
import React, { Component } from "react";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header pathName={window.location.pathname}></Header>
      </>
    );
  }
}
