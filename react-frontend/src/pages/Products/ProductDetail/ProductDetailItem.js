// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// import { useState, useEffect } from "react";
// import DetailItem from "./DetailItem";

// const ProductDetailItem = ({ product }) => {
//   const [verticalState, setVerticalState] = useState(1);

//   const verticalTab = (index) => {
//     setVerticalState(index);
//   };
//   return (
//     <div
//       className="product-detail-item-wrapper"
//       style={{ margin: "0px", padding: "0px" }}
//     >
//       <div
//         className="container mb-5 product-detail-item-info"
//         style={{ margin: "0px", padding: "0px" }}
//       >
//         <DetailItem product={product} />
//       </div>

//       <div
//         className="container mb-5 product-detail-item-more-info"
//         style={{ margin: "0px", padding: "0px" }}
//       >
//         <div className="card-box">
//           <div className="row">
//             <div
//               className="col-sm-3"
//               style={{ margin: "0px", paddingRight: "0px" }}
//             >
//               <div
//                 className="nav flex-column nav-pills nav-pills-tab"
//                 id="v-pills-tab"
//                 role="tablist"
//                 aria-orientation="vertical"
//               >
//                 <Link
//                   className={
//                     verticalState === 1 ? "nav-link active show" : "nav-link"
//                   }
//                   onClick={() => verticalTab(1)}
//                   id="v-pills-home-tab"
//                   data-toggle="pill"
//                   to="#v-pills-home"
//                   role="tab"
//                   aria-controls="v-pills-home"
//                   aria-selected="true"
//                 >
//                   DETAILS
//                 </Link>

//                 <Link
//                   className={
//                     verticalState === 2 ? "nav-link active show" : "nav-link"
//                   }
//                   onClick={() => verticalTab(2)}
//                   id="v-pills-profile-tab"
//                   data-toggle="pill"
//                   to="#v-pills-profile"
//                   role="tab"
//                   aria-controls="v-pills-profile"
//                   aria-selected="false"
//                 >
//                   INGREDIENTS
//                 </Link>

//                 <Link
//                   className={
//                     verticalState === 3 ? "nav-link active show" : "nav-link"
//                   }
//                   onClick={() => verticalTab(3)}
//                   id="v-pills-messages-tab"
//                   data-toggle="pill"
//                   to="#v-pills-messages"
//                   role="tab"
//                   aria-controls="v-pills-messages"
//                   aria-selected="false"
//                 >
//                   INSTRUCTIONS FOR USE
//                 </Link>

//                 <Link
//                   className={
//                     verticalState === 4 ? "nav-link active show" : "nav-link"
//                   }
//                   onClick={() => verticalTab(4)}
//                   id="v-pills-settings-tab"
//                   data-toggle="pill"
//                   to="#v-pills-settings"
//                   role="tab"
//                   aria-controls="v-pills-settings"
//                   aria-selected="false"
//                 >
//                   STORAGE INSTRUCTIONS
//                 </Link>
//               </div>
//             </div>

//             <div className="col-sm-9">
//               <div className="tab-content pt-0">
//                 <div
//                   className={
//                     verticalState === 1
//                       ? "tab-pane fade active show"
//                       : "tab-pane fade"
//                   }
//                   id="v-pills-home"
//                   role="tabpanel"
//                   aria-labelledby="v-pills-home-tab"
//                 >
//                   <span>{product.product_information}</span>
//                 </div>

//                 <div
//                   className={
//                     verticalState === 2
//                       ? "tab-pane fade active show"
//                       : "tab-pane fade"
//                   }
//                   role="tabpanel"
//                   aria-labelledby="v-pills-profile-tab"
//                 >
//                   <span>{product.product_instruction_use}</span>
//                 </div>

//                 <div
//                   className={
//                     verticalState === 3
//                       ? "tab-pane fade active show"
//                       : "tab-pane fade"
//                   }
//                   id="v-pills-messages"
//                   role="tabpanel"
//                   aria-labelledby="v-pills-messages-tab"
//                 >
//                   <span>{product.product_instruction_store}</span>
//                 </div>

//                 <div
//                   className={
//                     verticalState === 4
//                       ? "tab-pane fade active show"
//                       : "tab-pane fade"
//                   }
//                   id="v-pills-settings"
//                   role="tabpanel"
//                   aria-labelledby="v-pills-settings-tab"
//                 >
//                   <span>{product.product_information}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// ProductDetailItem.propTypes = {
//   product: PropTypes.object.isRequired,
// };

// export default ProductDetailItem;
