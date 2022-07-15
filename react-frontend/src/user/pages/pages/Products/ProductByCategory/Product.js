import React from "react";
import ProductView from "./ProductView";

const Product = ({ products, loading }) => {
  if (loading != true) {
    return <h2>Products not found</h2>;
  }
  return (
    <div className="products-grid">
      <div className="row">
        {products.map((product) => (
          <ProductView
            key={product.product_SKU}
            className="list-group-item"
            product={product}
          ></ProductView>
        ))}
      </div>
    </div>
  );
};

export default Product;
