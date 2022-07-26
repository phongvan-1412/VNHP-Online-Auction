import $ from "jquery";

const LandingPageSlider1 = () => {

  const slideItems = (
    <div className=" landingpage-slider slide-title">
      <div className="landingpage-slider slide-title top-content">
        <h4>
          <b>UP COMING AUCTIONS</b>
        </h4>
      </div>
      
      <div id="sliders">
        <button className="handle left-handle">&#8249;</button>
        <div id="product-grid-wrapper1">

        </div>
        <button className="handle right-handle">&#x203A;</button>
      </div>
      

    </div>
  );
  document.addEventListener("click", e => {
    let handle;
    if (e.target.matches(".handle")) {
      handle = e.target;
    }else{
      handle = e.target.closest(".handle")
    }
    if (handle != null){
      onHandleClick(handle)
    }
  })

  let index = 0;
  function onHandleClick(handle){
    
    let sliderIndex = $(':root').css("--slider-index")
    
    if (handle.classList.contains("left-handle")){
      if(--sliderIndex < 0){
        $(':root').css('--slider-index', 0);
      }else{
        $(':root').css('--slider-index', sliderIndex);
      }
      
    }
    if (handle.classList.contains("right-handle")){
      if(++sliderIndex > index/5){
        $(':root').css('--slider-index', 0);
      }else{
        $(':root').css('--slider-index', sliderIndex);

      }
    }
  }
  function getData() {
    fetch("http://127.0.0.1:8000/api/selectallproducts", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        res.map((products) => {
            var upcoming_auction = products.product_start_aution_day + " " + "24:00:00";
            var countDownDate = new Date(upcoming_auction).getTime();
                var slider1 = setInterval(function() {
                  var now = new Date();
                  var distance = countDownDate - now;
              
                  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                  var hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                  );
                  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                  if (
                    document.getElementById('slider1' + products.product_id + products.product_name) == null
                  )
                    return;
                  if (
                    document.getElementById('slider1' + products.product_id + products.product_name) ==
                      null ||
                    distance < 0
                  ) {
                    clearInterval(slider1);
                    document.getElementById('slider1' +  
                      products.product_id + products.product_name
                    ).innerHTML = "EXPIRED";
                  }
                  // Display the result in the element with id
              
                  document.getElementById('slider1' +  
                    products.product_id + products.product_name
                  ).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
                }, 1000);
          
          const tmp = document.createElement("div");
            tmp.id = "product-grid" + products.product_id;
            
          const tmp_countdown = document.createElement("div");
            tmp_countdown.id ='slider1' +  products.product_id + products.product_name;
            tmp_countdown.innerHTML = slider1;
            tmp.append(tmp_countdown);

          const tmp_img = document.createElement("a");
            tmp_img.className = "product-image";
            tmp.append(tmp_img);
            const tmp_img_src = document.createElement("img");
              tmp_img_src.src = require(`../../img/Product/Asian Art - Antiques/EdenFineAntiques.jpg`);
              tmp_img.append(tmp_img_src);

          const tmp_categoryname = document.createElement("div");
            tmp_categoryname.innerHTML = products.category_id;
            tmp_categoryname.className = "category-name";
            tmp.append(tmp_categoryname);

          const tmp_productname = document.createElement("div");
            tmp_productname.innerHTML = products.product_name.replace(/-/g, " ");
            tmp_productname.className = "product-name";
            tmp.append(tmp_productname);

          const tmp_producprice = document.createElement("a");
            tmp_producprice.innerHTML = products.product_start_price;
            tmp_producprice.className = "product-price";
            tmp.append(tmp_producprice);

          const tmp_icon = document.createElement("a");
            tmp_icon.className = "fa-solid fa-shopping-cart meta-cart";
            tmp.append(tmp_icon);


            tmp.className = "product-grid-item";
            
          $("#product-grid-wrapper1").append(tmp);
        });
        index = $(".product-grid-item").length;
      });
  }
  getData();
  

  return slideItems;
};

export default LandingPageSlider1;
