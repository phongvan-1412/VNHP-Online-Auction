import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import axios from "axios";

//Slider
import { Slider } from "@material-ui/core";

import ProductView from "./ProductView";

const Products = ({ products, category, categories }) => {

  //Filter by Price
  const [value, setVal] = useState([0, 20000]);

  let test = { min: value[0], max: value[1] };

  const updateRange = (e, value) => {
    setVal(value);
    const valueNow = $("#price-slider").children()[4].ariaValueNow;

    test = { min: value[0], max: value[1] };

    if (valueNow > test.min) {
      test.max = valueNow;
    } else {
      test.min = valueNow;
    }
  };

  //Filter by Date
  const [totalProducts, setTotalProducts] = useState(products);
  const [categoryId, setCategoryId] = useState(category.category_id);
  const onChange = (e) => {
    let option = e.target.value;
    axios
      .post("http://127.0.0.1:8000/api/sortproductselect", {
        option,
        categoryId,
      })
      .then(function (res) {
        setTotalProducts(res.data);
      });
  };
  // console.log(totalProducts);
  // let totalProducts = [];
  // products.forEach((product) => {
  //   if (product.category_id === category.category_id && product.product_start_price >= test.min && product.product_start_price <= test.max){
  //     totalProducts = [...totalProducts, product];
  //   }
  // });

  let filterProducts = [];
  totalProducts.forEach((product) => {
    if (
      product.category_id === category.category_id &&
      product.product_start_price >= test.min &&
      product.product_start_price <= test.max
    ) {
      filterProducts = [...filterProducts, product];
    }
  });
  let categoryItems = [];
  categories.forEach((currentCates) => {
    if (currentCates.category_id !== category.category_id) {
      categoryItems = [...categoryItems, currentCates];
    }
  });

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 12;

  const indexOfLastPage = currentPage * productsPerPage;
  const indexOfFirstPage = indexOfLastPage - productsPerPage;
  const currentProducts = filterProducts.slice(
    indexOfFirstPage,
    indexOfLastPage
  );

  let pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filterProducts.length / productsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <div
      className="container-fluid"
      style={{ padding: "0px", margin: "0px" }}
    >
      <div className="row" style={{ padding: "0px", margin: "0px 30px" }}>
        <div className="container" style={{ padding: "0px", margin: "0px" }}>
          <div className="row">
            {/* wrap-breadcrumb */}
            <div className="wrap-breadcrumb" style={{ margin: "50px 0px" }}>
              <ul>
                <li className="item-link">
                  <Link replace to="/" className="home-link">
                    HOME
                  </Link>
                </li>

                <li className="item-link1">
                  <Link to={`/category/${category.category_name}`}>
                    {category.category_name.replace(/-/g, " ")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            {/* sidebar-filter  */}
            <div className="col-md-2 sidebar-filter">
              <div className="product-filter-container">
                <div className="filter-title">Filter Products By</div>
                <div className="widget mercado-widget filter-widget brand-widget">
                  <h2 className="widget-title">CATEGORY</h2>
                  <div className="widget-content">
                    <ul
                      className="list-style vertical-list list-limited"
                      data-show="6"
                    >
                      {categoryItems.map((item) => {
                        return (
                          <li className="list-item" key={item.category_id}>
                            <Link
                              className="filter-link"
                              to={`/category/${item.category_name}`}
                            >
                              <i className="fa-solid fa-crown"></i>{" "}
                              {item.category_name.replace(/-/g, " ")}
                            </Link>
                            <span className="count">
                              ({item.product_quantity})
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="widget mercado-widget filter-widget brand-widget">
                    <h2 className="widget-title">PRICE</h2>
                    <div className="widget-content-price">
                      <div className="range-input-price">
                        <Slider
                          id="price-slider"
                          min={10}
                          max={20000}
                          step={10}
                          value={value}
                          onChange={updateRange}
                          valueLabelDisplay="auto"
                        />
                        <span>
                          Drag or pick price of product you want to look for.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="widget mercado-widget filter-widget brand-widget">
                    <h2 className="widget-title">DATE</h2>
                    <div className="widget-content-date">
                      <div className="range-date">
                        <select defaultValue="0" onChange={onChange}>
                          <option value="0">All Products</option>
                          <option value="1">On Bidding</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* display-products  */}

            <div className="col-md-10">
              <div className="row">
                {currentProducts.map((product) => {
                  return (
                    <ProductView key={product.product_id} product={product} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ padding: "0px", margin: "0px" }}>
          <div
            className="col-md-2"
            style={{ padding: "0px", margin: "0px" }}
          ></div>

          <div className="col-md-10" style={{ padding: "0px", margin: "0px" }}>
            <ul className="pagination">
              {pageNumbers.map((number) => (
                <li key={number} className="page-item">
                  <Link
                    to="#"
                    className="page-link"
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;

// import React, { Component, useState } from "react";
// import { Link } from "react-router-dom";
// import $ from 'jquery';
// import axios from "axios";

// //Slider
// import { Slider } from "@material-ui/core"

// import ProductView from "./ProductView";

// class Products extends Component {
//   state = {
//     products: [],
//     categories: [],
//     category: {},
//     val: { min: 10, max: 20000 },
//     currentPage: 1,
//     category_id: '',
//     totalProducts: [],
//   }
//   render() {
//     const { products, categories, category } = this.props;

//     this.setState({ category: category })
//     this.setState({ category_id: category.category_id })

//     let tmp = [];
//     products.forEach((productItems) => {
//       if (productItems.category_id !== category.category_id) {
//         tmp = [...tmp, productItems];
//       }
//     });
//     this.setState({ totalProducts: tmp });

//     let categoryItems = [];
//     categories.forEach((currentCates) => {
//       if (currentCates.category_id !== this.state.category_id) {
//         categoryItems = [...categoryItems, currentCates];
//       }
//     });
//     this.setState({ categories: categoryItems })

//     // Filter by Price

//     const updateRange = (e) => {
//       // const valueNow = $("#price-slider").children()[4].ariaValueNow;
//       let test = this.state.val;

//       if (valueNow > test.min) {
//         // test.max = valueNow;
//       } else {
//         // test.min = valueNow;
//       }
//       // this.setState({ val: test });

//     }

//     //Filter by Date
//     const categoryChange = (e) => {
//       this.setState({ category_id: e.target.name });
//     }

//     const onChange = (e) => {
//       const self = this;

//       axios
//         .post("http://127.0.0.1:8000/api/sortproductselect", { option:e.target.value, categoryId: this.state.category_id })
//         .then(function (res) {
//           // console.log(res.data)
//           self.setState({ totalProducts: res.data })
//         });

//     }

//     let filterProducts = [];
//     products.forEach((product) => {
//       if (product.category_id === category.category_id && product.product_start_price >= this.state.val.min && product.product_start_price <= this.state.val.max) {
//         filterProducts = [...filterProducts, product];
//       }
//     });

//     //Pagination
//     const productsPerPage = 12;

//     const indexOfLastPage = this.state.currentPage * productsPerPage;
//     const indexOfFirstPage = indexOfLastPage - productsPerPage;
//     const currentProducts = filterProducts.slice(indexOfFirstPage, indexOfLastPage);

//     let pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(filterProducts.length / productsPerPage); i++) {
//       pageNumbers.push(i);
//     }

//     const paginate = (number) => {
//       this.setState({ currentPage: number });
//     }

//     return (
//       <div className="container-fluid d-flex justify-content-center" style={{ padding: "0px", margin: "0px" }}>
//         <div className="row" style={{ padding: "0px", margin: "0px 30px" }}>
//           <div className="container" style={{ padding: "0px", margin: "0px" }}>
//             <div className="row">
//               {/* wrap-breadcrumb */}
//               <div className="wrap-breadcrumb" style={{ margin: "50px 0px" }}>
//                 <ul>
//                   <li className="item-link">
//                     <Link replace to="/" className="home-link">HOME</Link>
//                   </li>

//                   <li className="item-link1">
//                     <Link to={`/category/${category.category_name}`}>{category.category_name.replace(/-/g, " ")}</Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="row">
//               {/* sidebar-filter  */}
//               <div className="col-md-2 sidebar-filter">
//                 <div className="product-filter-container">
//                   <div className="filter-title">Filter Products By</div>
//                   <div className="widget mercado-widget filter-widget brand-widget">
//                     <h2 className="widget-title">CATEGORY</h2>
//                     <div className="widget-content">
//                       <ul className="list-style vertical-list list-limited" data-show="6">
//                         {this.state.categories.map((item) => {
//                           return (
//                             <li className="list-item" key={item.category_id}>
//                               <Link className="filter-link" to={`/category/${item.category_name}`} name={item.category_id} onClick={categoryChange}><i className="fa-solid fa-crown"></i> {item.category_name.replace(/-/g, " ")}</Link>
//                               <span className="count">({item.product_quantity})</span>
//                             </li>
//                           )
//                         })}
//                       </ul>
//                     </div>

//                     <div className="widget mercado-widget filter-widget brand-widget">
//                       <h2 className="widget-title">PRICE</h2>
//                       <div className="widget-content-price">
//                         <div className="range-input-price">
//                           <Slider
//                             id="price-slider"
//                             min={10}
//                             max={20000}
//                             step={10}
//                             // value={value}
//                             onChange={updateRange}
//                             valueLabelDisplay='auto'
//                           />
//                           <span>Drag or pick price of product you want to look for.</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="widget mercado-widget filter-widget brand-widget">
//                       <h2 className="widget-title">DATE</h2>
//                       <div className="widget-content-date">

//                         <div className="range-date" >
//                           <select defaultValue="0" onChange={onChange}>
//                             <option value="0">All Products</option>
//                             <option value="1">On Bidding</option>

//                           </select>
//                         </div>
//                       </div>
//                     </div>

//                   </div>
//                 </div>
//               </div>
//               {/* display-products  */}

//               <div className="col-md-10">
//                 <div className="row">
//                   {currentProducts.map((product) => {
//                     return (
//                       <ProductView key={product.product_id} product={product} />
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="row" style={{ padding: "0px", margin: "0px" }}>
//             <div
//               className="col-md-2"
//               style={{ padding: "0px", margin: "0px" }}
//             ></div>

//             <div className="col-md-10" style={{ padding: "0px", margin: "0px" }}>
//               <ul className="pagination">
//                 {pageNumbers.map((number) => (
//                   <li key={number} className="page-item">
//                     <Link to="#" className="page-link" onClick={() => paginate(number)}>
//                       {number}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

// }
// export default Products;
