import React, { Component } from "react";
import LandingPageSlider1 from "./LandingPageSlider1";
import LandingPageSlider2 from "./LandingPageSlider2";
import LandingPageSlider3 from "./LandingPageSlider3";
import LandingPageCategories from "./LandingPageCategories";
import TopSlider from "./TopSlider";

class LandingPage extends Component {
  state = {
    updateComingProducts: [],
    endingSoonProducts: [],
  };

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/upcomingproducts", { method: "GET" })
      .then((response) => response.json())
      .then((response) => {
        this.setState({ updateComingProducts: response });
      })
      .catch((err) => {
        console.log(err);
      });

    fetch("http://127.0.0.1:8000/api/endingsoonproducts", { method: "GET" })
      .then((response) => response.json())
      .then((response) => {
        this.setState({ endingSoonProducts: response });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { categories,hotAuctionProducts } = this.props;
    const updateComingProducts = () => {
      fetch("http://127.0.0.1:8000/api/upcomingproducts", { method: "GET" })
        .then((response) => response.json())
        .then((response) => {
          this.setState({ updateComingProducts: response });
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const endingSoonProduct = () => {
      fetch("http://127.0.0.1:8000/api/endingsoonproducts", { method: "GET" })
        .then((response) => response.json())
        .then((response) => {
          this.setState({ endingSoonProducts: response });
        })
        .catch((err) => {
          console.log(err);
        });
    };

    

    return (
      <div className="row" style={{ padding: "0px", margin: "0px" }}>
        <TopSlider />

        <div
          className="col-md-1"
          style={{ padding: "0px", margin: "0px" }}
        ></div>

        <div className="col-md-10" style={{ padding: "0px", margin: "0px" }}>
          <LandingPageSlider1 products={this.state.updateComingProducts} updateComingProducts={updateComingProducts}/>
          <LandingPageSlider2 endingSoonProducts={this.state.endingSoonProducts} endingSoonProduct={endingSoonProduct}/>
          <LandingPageSlider3 products={hotAuctionProducts} hotAuctionProducts={hotAuctionProducts}/>
          <LandingPageCategories categories={categories} />
        </div>

        <div
          className="col-md-1"
          style={{ padding: "0px", margin: "0px" }}
        ></div>
      </div>
    );
  }
}

export default LandingPage;
