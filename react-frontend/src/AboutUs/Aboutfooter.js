import { Link } from "react-router-dom";
import React, { Component } from "react";
import $ from "jquery";


function Aboutfooter(){
    return(
        <footer className="u-clearfix u-footer u-gradient u-footer" id="sec-9dee">
            <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-clearfix u-gutter-30 u-layout-wrap u-layout-wrap-1">
                    <div className="u-gutter-0 u-layout">
                        <div className="u-layout-row">
                            <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-22 u-layout-cell-1">
                                <div className="u-container-layout u-container-layout-1">
                                    <div data-position="" className="u-position u-position-1">
                                        <div className="u-block">
                                            <div className="u-block-container u-clearfix">
                                                <h6 className="u-block-header u-text u-text-body-alt-color">&nbsp;
                                                    <span style={{fontSize: "1.25rem"}}>CONTACT US</span>
                                                    <br/>
                                                    <span style={{fontSize: "0.875rem"}}>
                                                        <span className="u-file-icon u-icon u-text-white">
                                                            <img src="../images/1250663.png" alt=""/>
                                                        </span>&nbsp;&nbsp;vnhp.auction@aptech.com
                                                    </span>
                                                    <br/>
                                                    <span style={{fontSize: "0.875rem"}}>
                                                        <span className="u-file-icon u-icon u-text-white">
                                                            <img src="../images/1034131.png" alt="" />
                                                        </span>&nbsp;&nbsp;09.9929.0999
                                                    </span>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/> &nbsp;
                                                    <span style={{fontSize: "1.25rem"}}>ADDRESS</span>
                                                    <br/>
                                                    <span style={{fontSize: "0.875rem"}}>
                                                        <span className="u-file-icon u-icon u-text-white">
                                                            <img src="../images/927667.png" alt=""/>
                                                        </span>&nbsp;&nbsp;35/6 d5 street, 25th ward, Binh Thanh district, HCM
                                                    </span>
                                                    <br/>
                                                </h6>
                                                <div className="u-block-content u-text"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="u-align-left u-container-style u-layout-cell u-shape-rectangle u-size-38 u-layout-cell-2">
                                <div className="u-container-layout u-container-layout-2">
                                    <div className="u-form u-form-1">
                                        <div className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form" style={{padding: "15px"}}>
                                            <div className="u-form-email u-form-group u-label-none">
                                                <label htmlFor="email-ef64" className="u-label">Email</label>
                                                <input type="email" placeholder="Email" id="email-ef64" name="email" className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required="" />
                                            </div>
                                            <div className="u-form-group u-form-name u-label-none">
                                                <label htmlFor="name-ef64" className="u-label">Name</label>
                                                <input type="text" placeholder="Name" id="name-ef64" name="name" className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required=""/>
                                            </div>
                                            <div className="u-form-group u-form-submit">
                                                <Link to="#" className="u-btn u-btn-submit u-button-style">Register<br/></Link>
                                                <input type="submit" value="submit" className="u-form-control-hidden" />
                                            </div>
                                            <div className="u-form-send-message u-form-send-success">#FormSendSuccess</div>
                                            <div className="u-form-send-error u-form-send-message">#FormSendError</div>
                                            <input type="hidden" value="" name="recaptchaResponse"/>
                                        </div>
                                    </div>
                                    <p className="u-text u-text-3">
                                        <span className="u-text-body-alt-color">
                                            Home <br/>
                                            Product <br/>
                                            About Us <br/>
                                            Term &amp; Policy<br/>
                                            Map 
                                        </span>
                                        <br/>
                                        <br/>
                                    </p>
                                    <div className="u-grey-light-2 u-map u-map-1">
                                        <div className="embed-responsive">
                                            <iframe className="embed-responsive-item" src="//maps.google.com/maps?output=embed&amp;q=Manhattan%2C%20New%20York&amp;z=10&amp;t=m" data-map="JTdCJTIyYWRkcmVzcyUyMiUzQSUyMk1hbmhhdHRhbiUyQyUyME5ldyUyMFlvcmslMjIlMkMlMjJ6b29tJTIyJTNBMTAlMkMlMjJ0eXBlSWQlMjIlM0ElMjJyb2FkJTIyJTJDJTIybGFuZyUyMiUzQW51bGwlMkMlMjJhcGlLZXklMjIlM0FudWxsJTJDJTIybWFya2VycyUyMiUzQSU1QiU1RCU3RA=="></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Aboutfooter;