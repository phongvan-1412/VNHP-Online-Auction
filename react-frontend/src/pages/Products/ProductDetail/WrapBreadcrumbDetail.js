import React from "react";
import { Link } from "react-router-dom";

const WrapBreadcrumbDetail = ({product,category}) => {
  return (
    <div className="wrap-breadcrumb">
      <ul>
        <li className="item-link">
          <Link replace to="/" className="home-link">
            HOME
          </Link>
        </li>
        <li className="item-link categoryName">
          <Link
            to={`/${category.category_root_name}/${category.category_name}`}
            replace
            // onClick={onClick}
            name={category.category_id}
          >
            {product.category_name.replace(/-/g, " ")}
          </Link>
        </li>
        <li className="item-link">
          <span>{product.product_name.replace(/-/g, " ")}</span>
        </li>
      </ul>
    </div>
  );
};

export default WrapBreadcrumbDetail;
