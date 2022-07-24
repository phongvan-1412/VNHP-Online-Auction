import React from 'react'
import Footer from './Footer'
import MenuBar from './MenuBar'
import { TopBar } from './TopBar'
import { Routes, Route } from "react-router-dom"
import DashBoard from "../components/Dashboard/DashBoard";
import Bill from '../components/Bill/Bill'
import "../css/admin1.css"
import "../css/sb-admin-2.min.css"
export const Layout = () => {
  return (
    <div id="wrapper">
        <MenuBar/>
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar />
                <div className="container-fluid">
                    <Routes>
                        <Route path='/bill' element={<Bill />}></Route>
                    </Routes>
                </div>
            </div>
            <Footer />
        </div>
    </div>

  )
}
