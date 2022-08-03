import React from "react";
import { Link } from "react-router-dom";

const WrapBreadcrumbDetail = ({ product, category }) => {
  return (
    <div className="wrap-breadcrumb">
      <ul>
        <li className="item-link">
          <Link to="#" className="home-link">HOME</Link>
        </li>

        <li className="item-link categoryName" key={category.category_id}>
          <Link to={`/category/${category.category_name}`} replace>{product.category_name.replace(/-/g, " ")}</Link>
        </li>

        <li className="item-link" key={product.product_id}>
          <span>{product.product_name.replace(/-/g, " ")}</span>
        </li>
      </ul>
    </div>
  );
};

export default WrapBreadcrumbDetail;
