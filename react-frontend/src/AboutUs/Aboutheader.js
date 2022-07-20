import { Link } from "react-router-dom";
import React, { Component } from "react";

class Aboutheader extends Component{
    render(){
    return(
        <div>
            <header className="u-clearfix u-header u-header" id="sec-bbc9">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <nav className="u-menu u-menu-one-level u-offcanvas u-menu-1">
                        <div className="menu-collapse" style={{fontSize: "1rem", letterSpacing: "0px"}}>
                            <Link className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" to="#">
                                <svg className="u-svg-link" viewBox="0 0 24 24">
                                    <use></use>
                                </svg>
                                <svg className="u-svg-content" version="1.1" id="menu-hamburger" viewBox="0 0 16 16" x="0px" y="0px">
                                    <g>
                                        <rect y="1" width="16" height="2"></rect>
                                        <rect y="7" width="16" height="2"></rect>
                                        <rect y="13" width="16" height="2"></rect>
                                    </g>
                                </svg>
                            </Link>
                        </div>
                        <div className="u-custom-menu u-nav-container">
                            <ul className="u-nav u-unstyled u-nav-1">
                                <li className="u-nav-item" >
                                    <Link className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" to="Home.html" style={{padding: "10px 18px"}}>Home</Link>
                                </li>   
                                <li className="u-nav-item">
                                    <Link className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" to="/about" style={{padding: "10px 18px"}}>About</Link>
                                </li>   
                                <li className="u-nav-item">
                                    <Link className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" to="/contact" style={{padding: "10px 18px"}}>Contact</Link>
                                </li>
                                <li className="u-nav-item">
                                    <Link className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" to="#" style={{padding: "10px 18px"}}>Login</Link>
                                </li>
                                <li className="u-nav-item">
                                    <Link className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" to="#" style={{padding: "10px 18px"}}>Register</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="u-custom-menu u-nav-container-collapse">
                            <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                                <div className="u-inner-container-layout u-sidenav-overflow">
                                    <div className="u-menu-close"></div>
                                    <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                                        <li className="u-nav-item " >
                                            <Link className="u-button-style u-nav-link"  to="Home.html">Home</Link>
                                        </li>
                                        <li className="u-nav-item">
                                            <Link className="u-button-style u-nav-link" to="/about">About</Link>
                                        </li>
                                        <li className="u-nav-item">
                                            <Link className="u-button-style u-nav-link" to="/contact">Contact</Link>
                                        </li>
                                        <li className="u-nav-item">
                                            <Link className="u-button-style u-nav-link" to="#">Login</Link>
                                        </li>
                                        <li className="u-nav-item">
                                            <Link className="u-button-style u-nav-link" to="#">Register</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
                        </div>
                    </nav>
                    <h1 className="u-text u-text-default u-text-palette-1-dark-2 u-text-1">VNHP Auction
                        <span style={{fontWeight: "700"}}>
                            <span style={{fontWeight: "400"}}></span>
                        </span>
                    </h1>
                </div>
            </header>
            <section className="u-align-center u-clearfix u-image u-shading u-section-1" src="" data-image-width="4095" data-image-height="2730" id="sec-7945">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <h1 className="u-text u-text-default u-title u-text-1">{this.props.title}</h1>
                        <a href="#" className="u-btn u-button-style u-palette-1-dark-2 u-btn-1">Read More</a>
                </div>
            </section>
        </div>
    )
}
}
export default Aboutheader;