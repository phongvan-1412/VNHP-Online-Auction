import React, { Component } from "react";
import LandingPageSlider1 from "./LandingPageSlider1";
import LandingPageSlider2 from "./LandingPageSlider2";
import LandingPageSlider3 from "./LandingPageSlider3";
import TopSlider from "./TopSlider";
import BottomImg from "./BottomImg";

class LandingPage extends Component {
  render() {
    const { products, category, categoryRoot } = this.props;

    return (
      <div className="container" style={{padding: '0px', margin: '0px'}}>
        <TopSlider />
        <LandingPageSlider1 products={products} category={category} categoryRoot={categoryRoot}/>
        <LandingPageSlider2 products={products}/>
        <LandingPageSlider3 products={products}/>
        <BottomImg />
      </div>
    );
  }
}

export default LandingPage;
