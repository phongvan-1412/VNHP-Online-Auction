import React, { Component } from "react";
import LandingPageSlider1 from "./LandingPageSlider1";
import LandingPageSlider2 from "./LandingPageSlider2";
import LandingPageSlider3 from "./LandingPageSlider3";
import TopSlider from "./TopSlider";
import BottomImg from "./BottomImg";

const LandingPage = ({ products,categories }) => {
  let upComingProducts = [];

  let endingProducts = [];

  return (
    <div className="container" style={{ padding: "0px", margin: "0px" }}>
      <TopSlider />
      <LandingPageSlider1 products={products} />
      <LandingPageSlider2 products={products} />
      <LandingPageSlider3 products={products} categories={categories}/>
      <BottomImg />
    </div>
  );
};

export default LandingPage;
