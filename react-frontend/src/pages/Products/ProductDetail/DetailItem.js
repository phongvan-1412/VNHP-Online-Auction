// import React from "react";
// import { BsFillBagCheckFill } from "react-icons/bs";
// import { FaHeart } from "react-icons/fa";
// import { Link } from "react-router-dom";

// function DetailItem({ product }) {
//   return (
//     <div className="row">
//       <div className="col-md-6 product-detail-img-wrapper">
//         <img
//           className="product-detail-img"
//           src={require(`../.././../../../../LaravelAPI/public/ProductImage/${product.product_img_name}`)}
//         />
//       </div>

//       <div className="col-md-6 product-detail-info-wrapper">
//         <div className="product-detail-product-name">
//           <h1>{product.product_name.replace(/-/g, " ")}</h1>
//         </div>

//         <div className="product-detail-info-price">
//           <div className="product-detail-product-SKU">
//             {product.product_SKU}
//           </div>

//           <div className="product-detail product-info-review-wrapper">
//             <div className="reviews-action">
//               <Link to="/blog">Be the first to review this product</Link>
//             </div>

//             <div className="stock">
//               <BsFillBagCheckFill className="meta-instock" />
//               <span>In Stock</span>
//             </div>
//           </div>
//           <div className="product-detail-product-price">
//             {(parseInt(product.product_price_per_unit)).toLocaleString()}đ
//           </div>
//         </div>

//         <div className="product-detail-product-add-form">
//           <div className="box-tocart">
//             <div className="field-qty">
//               <label className="label" htmlFor="qty">
//                 <span>Quantity</span>
//               </label>

//               <input
//                 type="number"
//                 name="qty"
//                 id="qty"
//                 max="12"
//                 min="1"
//                 step="1"
//                 className="input-text-qty"
//               />
//             </div>

//             <div className="actions">
//               <button type="submit">
//                 <span className="mr-1 meta-addtocart">Add to cart</span>
//               </button>
//               <button>
//                 <FaHeart className="meta-wishlist" />
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="product-detail-description mt-5">
//           <span className="description">{product.product_information}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DetailItem;
