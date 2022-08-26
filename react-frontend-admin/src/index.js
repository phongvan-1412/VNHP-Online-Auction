import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './layout/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import LogIn from './components/LogIn/LogIn';


const root = ReactDOM.createRoot(document.getElementById('page-top'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/*'  element={<Layout />}></Route>
      <Route path='/login' element={<LogIn />}></Route>
    </Routes>
  </BrowserRouter>
);

// localStorage.removeItem("admin_info");
reportWebVitals();
