import { Link } from "react-router-dom";
import React, { Component } from "react";

const InvestorImages = props => (
    <div className="u-container-style u-list-item u-repeater-item">
    <div className={props.keyClass}>
        <img alt="" className={props.Id} data-image-width={props.Width} data-image-height={props.Height} src={props.Source}/>
    </div>
</div>
)
function Aboutinvestor(){
    return(
        <section className="u-align-center u-clearfix u-palette-1-base u-section-4 mb-5" id="carousel_829f">
            <div className="u-clearfix u-sheet u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-sheet-1">
                <div className="u-align-left u-container-style u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-group u-group-1">
                    <div className="u-container-layout u-container-layout-1">
                        <h2 className="u-text u-text-1"> INVESTORS</h2>
                        <p className="u-text u-text-2">
                            Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur.Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet. 
                        </p>
                    </div>
                </div>

                <div className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-list u-list-1">
                    <div className="u-repeater u-repeater-1">
                        <InvestorImages 
                            keyClass="u-container-layout u-similar-container u-valign-middle u-container-layout-2"
                            Id="u-expanded-width u-image u-image-contain u-image-default u-image-1"
                            Width="300" Height="90"
                            Source={require("../img/About/brand1.jpg")}/>
                        <InvestorImages 
                            keyClass="u-container-layout u-similar-container u-valign-middle u-con      tainer-layout-3"
                            Id="u-expanded-width u-image u-image-contain u-image-default u-image-2"
                            Width="300" Height="90"
                            Source={require("../img/About/brand2.jpg")}/>
                        <InvestorImages 
                            keyClass="u-container-layout u-similar-container u-valign-middle u-container-layout-4"
                            Id="u-expanded-width u-image u-image-contain u-image-default u-image-3"
                            Width="300" Height="63"
                            Source={require("../img/About/brand3.jpg")}/>
                        <InvestorImages 
                            keyClass="u-container-layout u-similar-container u-valign-middle u-container-layout-5"
                            Id="u-expanded-width u-image u-image-contain u-image-default u-image-4"
                            Width="300" Height="39"
                            Source={require("../img/About/brand4.jpg")}/>
                        <InvestorImages 
                            keyClass="u-container-layout u-similar-container u-valign-middle u-container-layout-6"
                            Id="u-expanded-width u-image u-image-contain u-image-default u-image-5"
                            Width="300" Height="54"
                            Source={require("../img/About/brand5.jpg")}/>
                        <InvestorImages 
                            keyClass="u-container-layout u-similar-container u-valign-middle u-container-layout-7"
                            Id="u-expanded-width u-image u-image-contain u-image-default u-image-6"
                            Width="300" Height="65"
                            Source={require("../img/About/brand6.jpg")}/>
                        <InvestorImages 
                            keyClass="u-container-layout u-similar-container u-valign-middle u-container-layout-8"
                            Id="u-expanded-width u-image u-image-contain u-image-default u-image-7"
                            Width="300" Height="90"
                            Source={require("../img/About/brand7.jpg")}/>
                        <InvestorImages 
                            keyClass="u-container-layout u-similar-container u-valign-middle u-container-layout-9"
                            Id="u-expanded-width u-image u-image-contain u-image-default u-image-8"
                            Width="300" Height="87"
                            Source={require("../img/About/brand8.jpg")}/>
                        <InvestorImages 
                            keyClass="u-container-layout u-similar-container u-valign-middle u-container-layout-10"
                            Id="u-expanded-width u-image u-image-contain u-image-default u-image-9"
                            Width="300" Height="89"
                            Source={require("../img/About/brand9.jpg")}/>
                        <InvestorImages 
                            keyClass="u-container-layout u-similar-container u-valign-middle u-container-layout-11"
                            Id="u-expanded-width u-image u-image-contain u-image-default u-image-10"
                            Width="300" Height="89"
                            Source={require("../img/About/brand10.jpg")}/>
                        <InvestorImages 
                            keyClass="u-container-layout u-similar-container u-valign-middle u-container-layout-12"
                            Id="u-expanded-width u-image u-image-contain u-image-default u-image-11"
                            Width="300" Height="61"
                            Source={require("../img/About/brand11.jpg")}/>
                        <InvestorImages 
                            keyClass="u-container-layout u-similar-container u-valign-middle u-container-layout-13"
                            Id="u-expanded-width u-image u-image-contain u-image-default u-image-11"
                            Width="300" Height="61"
                            Source={require("../img/About/brand12.jpg")}
                        />
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default Aboutinvestor