// import React, { useRef } from "react";
// import $ from "jquery";
// import Slider from "react-slick";
// import { GiNextButton, GiPreviousButton} from 'react-icons/gi'

// import SliderItem2 from "./SliderItem2";

// const LandingPageSlider2 = ({products}) => {
//   const ref = useRef({});

//   const next = () => {
//     ref.current.slickNext();
//   };

//   const previous = () => {
//     ref.current.slickPrev();
//   };

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 350,
//     slidesToShow: 5,
//     slidesToScroll: 5,
//   };

  
  
//     return (
//         <div className=" landingpage-slider slide-title">
//           <div className="slide-title top-content">
//             <h4>
//               <b>BUY IT NOW</b>
//             </h4>
//           </div>

//           <Slider ref={ref} {...settings}>
//             {products.map((product) => (
//                <SliderItem2
//                key={product.product_SKU}
//                product={product}
//              ></SliderItem2>
//             ))}
//           </Slider>
          
//           <div className="btn-click">
//             <button type="button" className="btn-previous" onClick={previous}>
//               <GiPreviousButton />
//             </button>
//             <button type="button" className=" btn-next" onClick={next}>
//               <GiNextButton />
//             </button>
//           </div>
//         </div>
//     );
//   }


// export default LandingPageSlider2;
