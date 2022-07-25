import React, { Component } from "react";
import $ from "jquery";

import TopSlider from "./TopSlider";
import LandingPageSlider1 from "./LandingPageSlider1";
import LandingPageSlider2 from "./LandingPageSlider2";
import LandingPageSlider3 from "./LandingPageSlider3";
import LandingPageCategories from "./LandingPageCategories";

const LandingPage = () => {
  return (
    <div className="row" style={{ padding: "0px", margin: "0px" }}>
      <TopSlider style={{ padding: "0px", margin: "0px" }}/>
      <div className="col-md-1" style={{ padding: "0px", margin: "0px" }}></div>
      <div className="col-md-10" style={{ padding: "0px", margin: "0px" }}>
        <LandingPageSlider1 />
        <LandingPageSlider2 />
        <LandingPageSlider3 />
        <LandingPageCategories />
      </div>
      <div className="col-md-1" style={{ padding: "0px", margin: "0px" }}></div>
    </div>
      
  );
}

export default LandingPage;
