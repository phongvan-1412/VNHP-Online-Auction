// import React from "react";
// import { Link } from "react-router-dom";
// import { FaShoppingCart, FaHeart } from "react-icons/fa";
// import $ from "jquery";

// const SliderItem1 = ({ product }) => {
//   const onProductClicked = (e) => {
//     $("#data").data("productid", e.target.name);
//   };

//   //countdown Up Coming
//   var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

//   // Update the count down every 1 second
//   var slider1 = setInterval(function() {
//     // Get today's date and time
//     var now = new Date().getTime();

//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor(
//       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//     if (
//       document.getElementById('slider1' + product.product_id + product.product_name) == null
//     )
//       return;
//     // If the count down is finished, write some text
//     if (
//       document.getElementById('slider1' + product.product_id + product.product_name) ==
//         null ||
//       distance < 0
//     ) {
//       clearInterval(slider1);
//       document.getElementById('slider1' + 
//         product.product_id + product.product_name
//       ).innerHTML = "EXPIRED";
//     }
//     // Display the result in the element with id

//     document.getElementById('slider1' + 
//       product.product_id + product.product_name
//     ).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
//   }, 1000);
//   const tmp = (
//     <div className="product-grid">
//       <div id={'slider1' + product.product_id + product.product_name}></div>

//       <Link
//         to={`/${product.category_name}/${product.product_name}`}
//         replace
//         id="product-name-item1"
//         className="product-name-item"
//         onClick={onProductClicked}
//       >
//         {/* <img
//           className="product-item-content product-img"
//           name={product.product_id}
//           src={require(`../../../../LaravelAPI/public/ProductImage/${product.product_img_name}`)}
//         /> */}
//       </Link>

//       <div className="category-name" id="category-name">
//           {/* {product.category_name.replace(/-/g, " ")} */}
//       </div>

//       <div className="product-name">
//         <Link
//           to={`/${product.category_name}/${product.product_name}`}
//           name={product.product_id}
//           replace
//           id="product-name-item2"
//           className="product-name-item"
//           onClick={onProductClicked}
//         >
//           {/* {product.product_name.replace(/-/g, " ")} */}
//         </Link>
//       </div>

//       <div className="product-price" id="product-price">
//       {/* {parseInt(product.product_price_per_unit).toLocaleString()}đ */}
//       </div>

//       <div className="cart-icons">
//         <FaShoppingCart
//           className="meta-cart"
//           style={{ cursor: "pointer" }}
//           // onClick={()=> {this.props.addProductToCart(product,1)}}
//         />
//         <FaHeart className="meta-wishlist" style={{ cursor: "pointer" }} />
//       </div>
//     </div>
//   );

//   getData();
//   console.log(tmp);
//   return tmp_img, tmp;
  
// };

// export default SliderItem1;

{/* <div id={'slider1' + product.product_id + product.product_name}></div> */}

          {/* <Link
        to={`/${product.category_name}/${product.product_name}`}
        replace
        className="product-name-item"
        onClick={onProductClicked}
      >
        <img
          className="product-item-content product-img"
          name={product.product_id}
          src={require(`../../../../LaravelAPI/public/ProductImage/${product.product_img_name}`)}
        />
      </Link> */}

          {/* <div className="category-name">
          {product.category_name.replace(/-/g, " ")}
      </div> */}

          {/* <div className="product-name">
        <Link
          to={`/${product.category_name}/${product.product_name}`}
          name={product.product_id}
          replace
          id="product-name-item2"
          className="product-name-item"
          onClick={onProductClicked}
        >
          {product.product_name.replace(/-/g, " ")}
        </Link>
      </div> */}

          {/* <div className="product-price">
        {parseInt(product.product_price_per_unit).toLocaleString()}đ
      </div> */}

      {/* {products.map((product) => (
          <div className="product-grid-wrapper">
            <SliderItem1
              key={product.product_SKU}
              product={product}
            ></SliderItem1>
          </div>
        ))} */}

        // const slideItem = (
        //   <div id="product-grid-wrapper">
            {/* <div id={'slider1' + product.product_id + product.product_name}></div> */}
      
            {/* <Link
              to={`/${product.category_name}/${product.product_name}`}
              replace
              className="product-name-item"
              onClick={onProductClicked}
            >
              <img
                className="product-item-content product-img"
                name={product.product_id}
                src={require(`../../../../LaravelAPI/public/ProductImage/${product.product_img_name}`)}
              />
            </Link> */}
      
            {/* <div className="category-name">
                {product.category_name.replace(/-/g, " ")}
            </div> */}
      
            {/* <div className="product-name">
              <Link
                to={`/${product.category_name}/${product.product_name}`}
                name={product.product_id}
                replace
                id="product-name-item2"
                className="product-name-item"
                onClick={onProductClicked}
              >
                {product.product_name.replace(/-/g, " ")}
              </Link>
            </div> */}
      
            {/* <div className="product-price">
              {parseInt(product.product_price_per_unit).toLocaleString()}đ
            </div> */}
      
            {/* <div className="cart-icons">
              <FaShoppingCart
                className="meta-cart"
                style={{ cursor: "pointer" }}
                // onClick={()=> {this.props.addProductToCart(product,1)}}
              />
              <FaHeart className="meta-wishlist" style={{ cursor: "pointer" }} />
            </div>
          </div>
        ); */}



        // const tmp_img = document.createElement("img");
            //   tmp.innerHTML = product.product_thumbnail_img_name;
            //   tmp.className = "product-name-item";
            //   document.getElementsByClassName("product-grid").append(tmp_img);
  
            // const tmp_categoryname = document.createElement("div")
            //   tmp.innerHTML = product.category_id;
            //   tmp.className = "category-name";
            //   document.getElementsByClassName("product-grid").append(tmp_categoryname);
  
            // const tmp_productname = document.createElement("a");
            //   tmp.innerHTML = product.product_name.replace(/-/g, " ");
            //   tmp.className = "product-name";
            //   document.getElementsByClassName("product-grid").append(tmp_productname);
  
            // const tmp_productprice = document.createElement("a");
            //   tmp.innerHTML = product.parseInt(product.product_price_per_unit).toLocaleString()
            //   tmp.className = "product-price";
            //   document.getElementByClassName("product-grid").append(tmp_productprice);
  
            // const tmp_productprice = React.createElement("a");
            //   tmp.innerHTML = product.parseInt(product.product_price_per_unit).toLocaleString()
            //   tmp.className = "product-price";
            //   document.getElementByClassName("product-grid").append(tmp_productprice);