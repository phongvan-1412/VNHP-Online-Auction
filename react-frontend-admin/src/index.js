import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './layout/Layout';
import { BrowserRouter, Router, Route } from "react-router-dom"
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('page-top'));
root.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);


reportWebVitals();
