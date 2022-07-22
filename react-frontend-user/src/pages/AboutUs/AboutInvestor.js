import { Link } from "react-router-dom";
import React, { Component } from "react";

const InvestorImages = props => (
    <div className="u-container-style u-list-item u-repeater-item">
    <div className={props.keyClass}>
        <img alt="" className={props.Id} data-image-width={props.Width} data-image-height={props.Height} src={props.Source}/>
    </div>
</div>
)

class Aboutinvestor extends Component{
    state =[ 
        {
            keyClass: "u-container-layout u-similar-container u-valign-middle u-container-layout-2",
            Id: "u-expanded-width u-image u-image-contain u-image-default u-image-1",
            Width: "300",
            Height: "90",
            Source: "brand1.jpg"
        },
        {
            keyClass: "u-container-layout u-similar-container u-valign-middle u-container-layout-3",
            Id: "u-expanded-width u-image u-image-contain u-image-default u-image-2",
            Width: "300" ,
            Height: "90",
            Source: "brand2.jpg"
        },
        {
            keyClass: "u-container-layout u-similar-container u-valign-middle u-container-layout-4",
            Id: "u-expanded-width u-image u-image-contain u-image-default u-image-3",
            Width: "300" ,
            Height: "63",
            Source: "brand3.jpg"
        },
        {
            keyClass: "u-container-layout u-similar-container u-valign-middle u-container-layout-5",
            Id: "u-expanded-width u-image u-image-contain u-image-default u-image-4",
            Width: "300" ,
            Height: "39",
            Source: "brand4.jpg"
        },
        {
            keyClass: "u-container-layout u-similar-container u-valign-middle u-container-layout-6",
            Id: "u-expanded-width u-image u-image-contain u-image-default u-image-5",
            Width: "300" ,
            Height: "54",
            Source: "brand5.jpg"
        },
        {
            keyClass: "u-container-layout u-similar-container u-valign-middle u-container-layout-7",
            Id: "u-expanded-width u-image u-image-contain u-image-default u-image-6",
            Width: "300" ,
            Height: "65",
            Source: "brand6.jpg"
        },
        {
            keyClass: "u-container-layout u-similar-container u-valign-middle u-container-layout-8",
            Id: "u-expanded-width u-image u-image-contain u-image-default u-image-7",
            Width: "300" ,
            Height: "90",
            Source: "brand7.jpg"
        },
        {
            keyClass: "u-container-layout u-similar-container u-valign-middle u-container-layout-9",
            Id: "u-expanded-width u-image u-image-contain u-image-default u-image-8",
            Width: "300" ,
            Height: "87",
            Source: "brand8.jpg"
        },
        {
            keyClass: "u-container-layout u-similar-container u-valign-middle u-container-layout-10",
            Id: "u-expanded-width u-image u-image-contain u-image-default u-image-9",
            Width: "300" ,
            Height: "89",
            Source: "brand9.jpg"
        },
        {
            keyClass: "u-container-layout u-similar-container u-valign-middle u-container-layout-11",
            Id: "u-expanded-width u-image u-image-contain u-image-default u-image-10",
            Width: "300" ,
            Height: "89",
            Source: "brand10.jpg"
        },
        {
            keyClass: "u-container-layout u-similar-container u-valign-middle u-container-layout-12",
            Id: "u-expanded-width u-image u-image-contain u-image-default u-image-11",
            Width: "300" ,
            Height: "61",
            Source: "brand11.jpg"
        },
        {
            keyClass: "u-container-layout u-similar-container u-valign-middle u-container-layout-13",
            Id: "u-expanded-width u-image u-image-contain u-image-default u-image-11",
            Width: "300" ,
            Height: "61",
            Source: "brand12.jpg"
        }
    ]
    render(){
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
                            {this.state.map(investor=>{
                                return(
                                    <InvestorImages 
                                        keyClass={investor.keyClass}
                                        Id={investor.Id}
                                        Width={investor.Width}
                                        Height={investor.Height}
                                        Source={require(`../../img/About/${investor.Source}`)}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section> 
        )
    }
}

export default Aboutinvestor