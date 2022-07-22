import React from "react";

function Contact(){
    return(
        <section className="u-align-center u-clearfix u-image u-section-3" id="carousel_b381" data-image-width="1200" data-image-height="925">
            <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-expanded-width-xs u-grey-light-2 u-map u-map-1">
                    <div className="embed-responsive">
                    <iframe className="embed-responsive-item" src="//maps.google.com/maps?output=embed&amp;q=Manhattan%2C%20New%20York&amp;z=10&amp;t=m" data-map="JTdCJTIyYWRkcmVzcyUyMiUzQSUyMk1hbmhhdHRhbiUyQyUyME5ldyUyMFlvcmslMjIlMkMlMjJ6b29tJTIyJTNBMTAlMkMlMjJ0eXBlSWQlMjIlM0ElMjJyb2FkJTIyJTJDJTIybGFuZyUyMiUzQW51bGwlMkMlMjJhcGlLZXklMjIlM0FudWxsJTJDJTIybWFya2VycyUyMiUzQSU1QiU1RCU3RA=="></iframe>
                    </div>
                </div>
                <h1 className="u-custom-font u-font-montserrat u-text u-text-body-alt-color u-text-1">SEND US A MESSAGE</h1>
                <div className="u-expanded-width-xs u-form u-form-1">
                    <div className="u-clearfix u-form-spacing-30 u-form-vertical u-inner-form" style={{padding: "0px"}}>
                        <div className="u-form-group u-form-name">
                            <label for="name-3b9a" className="u-form-control-hidden u-label" wfd-invisible="true">Name</label>
                            <input type="text" placeholder="Enter your Name" id="name-3b9a" name="name" className="u-border-2 u-border-white u-input u-input-rectangle u-white u-input-1" required=""/>
                        </div>
                        <div className="u-form-email u-form-group">
                            <label for="email-3b9a" className="u-form-control-hidden u-label" wfd-invisible="true">Email</label>
                            <input type="email" placeholder="Enter a valid email address" id="email-3b9a" name="email" className="u-border-2 u-border-white u-input u-input-rectangle u-white u-input-2" required=""/>
                        </div>
                        <div className="u-form-group u-form-message">
                            <label for="message-3b9a" className="u-form-control-hidden u-label" wfd-invisible="true">Message</label>
                            <textarea placeholder="Enter your message" rows="4" cols="50" id="message-3b9a" name="message" className="u-border-2 u-border-white u-input u-input-rectangle u-white u-input-3" required=""></textarea>
                        </div>
                        <div className="u-align-left u-form-group u-form-submit">
                            <a href="#" className="u-active-palette-1-dark-2 u-border-none u-btn u-btn-submit u-button-style u-hover-palette-1-dark-1 u-palette-1-dark-2 u-text-hover-black u-text-white u-btn-1">Submit</a>
                            <input type="submit" value="submit" className="u-form-control-hidden" wfd-invisible="true"/>
                        </div>
                        <div className="u-form-send-message u-form-send-success" wfd-invisible="true"> Thank you! Your message has been sent. </div>
                        <div className="u-form-send-error u-form-send-message" wfd-invisible="true"> Unable to send your message. Please fix errors then try again. </div>
                        <input type="hidden" value="" name="recaptchaResponse" wfd-invisible="true"/>
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default Contact;