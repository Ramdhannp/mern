import Header from "parts/Header";
import React, { Component } from "react";
import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header pathName={window.location.pathname}></Header>
        <Hero data={landingPage.hero} />
      </>
    );
  }
}
