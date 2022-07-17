import React from "react";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
// import HeaderBody from "./layout/HeaderBody/HeaderBody";
// import Footer from "./layout/Footer";
import Header from "./Header";
import Body from "./Body";
import ReactDOM from "react-dom/client";
const headerBody1 = ReactDOM.createRoot(document.getElementById("root1"));


function showTime() {
  const myElement = (
    <div>
      <h2 style={{ marginLeft: "200px" }}>{new Date().toLocaleTimeString()}</h2>
    </div>
  );

  
  headerBody1.render(myElement);
}

setInterval(showTime, 1000);

const header = ReactDOM.createRoot(document.getElementById("header"));
header.render(<Header />);
const body = ReactDOM.createRoot(document.getElementById("body"));
body.render(<Body />);

// const footer = ReactDOM.createRoot(document.getElementById("footer"));
// footer.render(<Footer />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();