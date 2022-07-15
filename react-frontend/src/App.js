import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./user/css/style-mobile.css";
import "./user/css/style-tablet.css";
import "./user/css/style-laptop.css"


import store from "./redux/store";
import { Provider } from "react-redux";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
  }
}

export default App;
