import React from "react";
import MainRoute from "../../../MainRoute";
import Header from "../Header-Footer/Header";
import Footer from "../Header-Footer/Footer";
import useForceUpdate from "use-force-update";
import { getCart } from "../../../redux/actions/cartAction";

function HomePage({ products, cart, categories, categoriesRoot }) {
  const forceUpdate = useForceUpdate();

  const updateCart = () => {
    getCart();
    forceUpdate();
  };

  return (
    <div>
      <Header
        cart={cart}
        categoriesRoot={categoriesRoot}
        categories={categories}
        updateCart={updateCart}
      />
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8" style={{ padding: "0px", margin: "0px" }}>
          <MainRoute
            products={products}
            cart={cart}
            categoriesRoot={categoriesRoot}
            categories={categories}
            updateCart={updateCart}
          />
        </div>
        <div className="col-md-2"></div>
      </div>
      <Footer />
    </div>
  );
}
export default HomePage;
