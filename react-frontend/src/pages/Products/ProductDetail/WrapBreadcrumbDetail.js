// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// import "../../../css/style-mobile.css";
// import "../../../css/style-tablet.css";
// import "../../../css/style-laptop.css";
// import { getProductsByCategory } from "../../../../redux/actions/productsActions";
// import { getCategoriesByRoot } from "../../../../redux/actions/categoriesActions";
// import { useDispatch } from "react-redux";

// const WrapBreadcrumbDetail = ({ product,categories }) => {
//     let category_root_name = "";
//     let category_name = "";
//     categories.forEach(category => {
//         if(product.category_id == category.category_id)
//         {
//             category_name = category.category_name;
//             category_root_name = category.category_root_name;
//         }
//     });
//   const dispatch = useDispatch();
//   const onClick = (event) => {
//     dispatch(getProductsByCategory(event.target.name));
//     dispatch(getCategoriesByRoot(event.target.name));
//   };
//   return (
//     <div className="wrap-breadcrumb">
//       <ul>
//         <li className="item-link">
//           <Link replace to="/" className="home-link">
//             HOME
//           </Link>
//         </li>
//         <li className="item-link categoryName">
//           <Link
//             to={`/${category_root_name}/${category_name}`}
//             replace
//             onClick={onClick}
//             name={category_name}
//           >
//             {product.category_name.replace(/-/g, " ")}
//           </Link>
//         </li>
//         <li className="item-link">
//           <span>{product.product_name.replace(/-/g, " ")}</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default WrapBreadcrumbDetail;
