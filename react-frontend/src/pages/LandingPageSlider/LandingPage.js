import React, { Component } from "react";
import LandingPageSlider1 from "./LandingPageSlider1";
import LandingPageSlider2 from "./LandingPageSlider2";
import LandingPageSlider3 from "./LandingPageSlider3";
import TopSlider from "./TopSlider";
import BottomImg from "./BottomImg";
import $ from "jquery";

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
      <div className="container" style={{ padding: "0px", margin: "0px" }}>
        <TopSlider />
        <LandingPageSlider1 products={products} />
        {/* <LandingPageSlider2 products={products} /> */}
        <LandingPageSlider3
          products={this.state.currentProducts}
          categories={categories}
          test={test}
        />

        <BottomImg />
      </div>
    );
  }
}

export default LandingPage;
