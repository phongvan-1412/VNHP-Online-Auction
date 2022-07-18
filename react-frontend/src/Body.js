import React from "react";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import $ from "jquery";

const Body = () => {
  function onClick(e) {
    $("#test-header").val($("#test-text").val());
    // $("#test-text").data("index", [
    //   { name: "phuong", age: 1 },
    //   { name: "van", age: 2 },
    //   { name: "nhan", age: 1 },
    //   { name: "hanh", age: 2 },
    // ]);
    if($("#test-text").data("index") == null) return;
    $("#test-text")
      .data("index")
      .forEach((item) => {
        console.log(item.product_name);
      });
  }
  return (
    <div>
      <button onClick={onClick}>submit </button>
    </div>
  );
};
export default Body;

const body1 = ReactDOM.createRoot(document.getElementById("body"));
body1.render(<Body />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
