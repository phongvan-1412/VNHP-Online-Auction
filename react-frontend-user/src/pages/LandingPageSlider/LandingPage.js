import React, { Component } from "react";
import LandingPageSlider1 from "./LandingPageSlider1";
import LandingPageSlider2 from "./LandingPageSlider2";
import LandingPageSlider3 from "./LandingPageSlider3";
import LandingPageCategories from "./LandingPageCategories";
import TopSlider from "./TopSlider";

class LandingPage extends Component {
  render() {
    const { products, categories } = this.props;

    return (
      <div className="row" style={{padding: '0px', margin: '0px'}}>
          <TopSlider />

          <div className="col-md-1" style={{padding: '0px', margin: '0px'}}></div>

          <div className="col-md-10" style={{padding: '0px', margin: '0px'}}>
            <LandingPageSlider1 products={products}/>
            <LandingPageSlider2 products={products}/>
            <LandingPageSlider3 products={products}/>
            <LandingPageCategories categories={categories} />
          </div>

          <div className="col-md-1" style={{padding: '0px', margin: '0px'}}></div>
        
      </div>
    );
  }
}

export default LandingPage;
