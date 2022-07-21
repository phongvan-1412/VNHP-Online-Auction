import React, { Component } from "react";
import $ from "jquery";

import TopSlider from "./TopSlider";
import LandingPageSlider1 from "./LandingPageSlider1";
import LandingPageSlider2 from "./LandingPageSlider2";
import LandingPageCategories from "./LandingPageCategories";
// import LandingPageSlider3 from "./LandingPageSlider3";

class LandingPage extends Component {
  state = {
    upComingProducts: [],
    endingProducts: [],
    currentProducts: [],
    curStatus: false,
  };
  render() {
    const { products, categories } = this.props;

    if (this.state.curStatus == false) {
      let tmpProduct = [];

      products.forEach((product) => {
        if (product.category_id == 15) {
          console.log(product.category_id);

          tmpProduct = [...tmpProduct, product];
        }
      });
      this.setState({
        currentProducts: tmpProduct,
      });
      this.setState({ curStatus: true });
    }

    const test = () => {
      let tmpProduct = [];

      this.setState({ currentProducts: [] });

      products.forEach((product) => {
        if (product.category_id == $("#data").data("categoryid")) {
          tmpProduct = [...tmpProduct, product];
        }
      });
      this.setState({
        currentProducts: tmpProduct,
      });
    };

    
    return (
      <div className="row" style={{ padding: "0px", margin: "0px" }}>
        <TopSlider style={{ padding: "0px", margin: "0px" }}/>
        <div className="col-md-1" style={{ padding: "0px", margin: "0px" }}></div>
        <div className="col-md-10" style={{ padding: "0px", margin: "0px" }}>
          <LandingPageSlider1 products={products} />
          <LandingPageSlider2 products={products} />
          <LandingPageCategories categories={categories} />
        </div>
        <div className="col-md-1" style={{ padding: "0px", margin: "0px" }}></div>
      </div>
        
    );
  }
}

export default LandingPage;
