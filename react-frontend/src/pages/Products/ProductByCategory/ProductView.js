// import React, { useState, useEffect } from "react";
// import ProductItem from "./ProductItem";
// import DetailItem from "../ProductDetail/DetailItem";

// const ProductView = ({ product }) => {
//   const [productQV, setProductQV] = useState(false);
//   const [productShow, setProductShow] = useState(false);

//   const onCLick = () => {
//     setProductShow(false);
//     setProductQV(false);
//   };
//   return (
//     <div className="product-grid-wrapper col-xl-3 col-md-4 col-xs-6"
//     onMouseEnter={() => setProductQV(true)} 
//     onMouseLeave={() => setProductQV(false)}>
//       {/* {productQV ? (
//         <div style={{ position: "absolute", marginTop: "160px" }}>
//           <div
//             style={{ background: "red", textAlign: "center", width: "160px" }}
//           >
//             <button onClick={() => setProductShow(true)}>Quick View</button>
//           </div>
//         </div>
//       ) : null} */}
//       {/* {productShow ? (
//         <div>
//           <div
//             style={{
//               marginLeft: "-550px",
//               marginTop: "-112px",
//               width: "2000px",
//               height: "2000px",
//               position: "absolute",
//             }}
//           >
//             <div
//               style={{
//                 background: "whitesmoke",
//                 position: "absolute",
//                 width: "1000px",
//                 height: "550px",
//                 marginTop: "0px",
//                 marginLeft: "150px",
//                 boxShadow: "5px 5px 5px 5px #888888",
//               }}
//             >
//               <DetailItem productShow={productShow} product={product} />
//             </div>
//           </div>
//           <div
//             style={{
//               position: "absolute",
//               marginTop: "-100px",
//               marginLeft: "550px",
//             }}
//           >
//             <button onClick={onCLick}>close</button>
//           </div>
//         </div>
//       ) : null} */}
//       <ProductItem product={product}/>
//     </div>
//   );
// };

// export default ProductView;
