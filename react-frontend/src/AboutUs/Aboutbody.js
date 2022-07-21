import { Link } from "react-router-dom";
import React, { Component } from "react";


const Aboutbodyitems1 = props => (
    <div className={props.styleimage} data-image-width={props.width} data-image-height={props.height}>
        <div className="u-preserve-proportions-child" style={{paddingTop: "100%"}}></div>
    </div>
)
const Aboutbodyitems2 = props => (
    <div className={props.circle}></div>
)
const Aboutbodyitems3 = props => (
    <div className={props.rectangle}>
        <div className={props.layout}>
            <h2 className={props.title}>{props.foundertitles}</h2>
            <p className={props.styletext}>
                <b>{props.founder}</b>{props.about}
            </p>
        </div>
    </div>
)
class Aboutbody extends Component{
    state = [
        {
            styleimage1: "u-align-center-xs u-expanded-width-sm u-expanded-width-xs u-image u-image-circle u-preserve-proportions u-image-1",
            width1: "1200",
            height1: "1600",
            circle1: "u-palette-1-dark-2 u-shape u-shape-circle u-shape-1",
            rectangle1: "u-align-left u-container-style u-expanded-width-xs u-grey-10 u-group u-shape-rectangle u-group-1",
            layout1: "u-container-layout u-valign-top-xs u-container-layout-1",
            title1: "u-text u-text-1", //1-3-5-7
            foundertitles1: "Phong Van",
            styletext1: "u-text u-text-body-color u-text-2", //2-4-6-8
            founder1: "Phong Van",
            about1: ", the creator of VNHP Aution(LTC), one of the earliest bussiness man, is best known as a highly successful entrepreneur in the emerging cryptocurrency industry. Van has always described Litecoin as a complement—not a competitor—to VNHP : as “silver to VNHP's gold.”"
        },
        {
            styleimage: "u-align-center-xs u-expanded-width-sm u-expanded-width-xs u-image u-image-circle u-preserve-proportions u-image-2",
            width: "1920",
            height: "1920",
            circle: "u-palette-1-dark-2 u-shape u-shape-circle u-shape-2",
            rectangle: "u-align-left u-container-style u-expanded-width-xs u-grey-10 u-group u-shape-rectangle u-group-2",
            layout: "u-container-layout u-valign-top-xs u-container-layout-2",
            title: "u-text u-text-3", //1-3-5-7
            foundertitles: "Phong Van",
            styletext: "u-text u-text-body-color u-text-4", //2-4-6-8
            founder: "Phong Van",
            about: ", the creator of VNHP Aution(LTC), one of the earliest bussiness man, is best known as a highly successful entrepreneur in the emerging cryptocurrency industry. Van has always described Litecoin as a complement—not a competitor—to VNHP : as “silver to VNHP's gold.”"
        },
        {
            styleimage: "u-align-center-xs u-expanded-width-sm u-expanded-width-xs u-image u-image-circle u-preserve-proportions u-image-3",
            width: "1638",
            height: "2048",
            circle: "u-palette-1-dark-2 u-shape u-shape-circle u-shape-3",
            rectangle: "u-align-left u-container-style u-expanded-width-xs u-grey-10 u-group u-shape-rectangle u-group-3",
            layout: "u-container-layout u-valign-top-xs u-container-layout-3",
            title: "u-text u-text-5", //1-3-5-7
            foundertitles: "Phong Van",
            styletext: "u-text u-text-body-color u-text-6", //2-4-6-8
            founder: "Phong Van",
            about: ", the creator of VNHP Aution(LTC), one of the earliest bussiness man, is best known as a highly successful entrepreneur in the emerging cryptocurrency industry. Van has always described Litecoin as a complement—not a competitor—to VNHP : as “silver to VNHP's gold.”"
        },
        {
            styleimage: "u-align-center-xs u-expanded-width-sm u-expanded-width-xs u-image u-image-circle u-preserve-proportions u-image-4",
            width: "960",
            height: "960",
            circle: "u-palette-1-dark-2 u-shape u-shape-circle u-shape-4",
            rectangle: "u-align-left u-container-style u-expanded-width-xs u-grey-10 u-group u-shape-rectangle u-group-4",
            layout: "u-container-layout u-valign-top-xs u-container-layout-4",
            title: "u-text u-text-7", //1-3-5-7
            foundertitles: "Phong Van",
            styletext: "u-text u-text-body-color u-text-8", //2-4-6-8
            founder: "Phong Van",
            about: ", the creator of VNHP Aution(LTC), one of the earliest bussiness man, is best known as a highly successful entrepreneur in the emerging cryptocurrency industry. Van has always described Litecoin as a complement—not a competitor—to VNHP : as “silver to VNHP's gold.”"
        }
    ]
    render(){
        return(
            <section className="u-clearfix u-grey-10 u-section-2" id="carousel_cfb5">
                <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-align-center-xs u-expanded-width-sm u-expanded-width-xs u-image u-image-circle u-preserve-proportions u-image-1" data-image-width="1200" data-image-height="1600">
                    <div className="u-preserve-proportions-child" style={{paddingTop: "100%"}}></div>
                    </div>
                    <div className="u-palette-1-dark-2 u-shape u-shape-circle u-shape-1"></div>
                    <div className="u-align-left u-container-style u-expanded-width-xs u-grey-10 u-group u-shape-rectangle u-group-1">
                        <div className="u-container-layout u-valign-top-xs u-container-layout-1">
                            <h2 className="u-text u-text-1">Phong Van</h2>
                            <p className="u-text u-text-body-color u-text-2">
                                <b>Phong Van</b>, the creator of VNHP Aution(LTC), one of the earliest bussiness man, is best known as a highly successful entrepreneur in the emerging cryptocurrency industry. Van has always described Litecoin as a complement—not a competitor—to VNHP : as “silver to VNHP's gold.”
                            </p>
                        </div>
                    </div>
                    <div className="u-expanded-width u-list u-list-1">
                        <div className="u-repeater u-repeater-1"></div>
                    </div>
                    <div className="u-expanded-width-sm u-expanded-width-xs u-image u-image-circle u-preserve-proportions u-image-2" data-image-width="1920" data-image-height="1920">
                        <div className="u-preserve-proportions-child" style={{paddingTop: "100%"}}></div>
                    </div>
                    <div className="u-palette-1-dark-2 u-shape u-shape-circle u-shape-2"></div>
                    <div className="u-align-left u-container-style u-expanded-width-xs u-grey-10 u-group u-shape-rectangle u-group-2">
                        <div className="u-container-layout u-container-layout-2">
                            <h2 className="u-text u-text-3">Phuong Vu</h2>
                            <p className="u-text u-text-body-color u-text-4">
                                <b>Phuong Vu</b>, the creator of VNHP Aution(LTC), one of the earliest bussiness man, is best known as a highly successful entrepreneur in the emerging cryptocurrency industry. Van has always described Litecoin as a complement—not a competitor—to VNHP : as “silver to VNHP's gold.”
                            </p>
                        </div>
                    </div>

                    <div className="u-expanded-width-sm u-expanded-width-xs u-image u-image-circle u-preserve-proportions u-image-3" data-image-width="1638" data-image-height="2048">
                        <div className="u-preserve-proportions-child" style={{paddingTop: "100%"}}></div>
                    </div>
                    <div className="u-palette-1-dark-2 u-shape u-shape-circle u-shape-3"></div>
                    <div className="u-align-left u-container-style u-expanded-width-xs u-grey-10 u-group u-shape-rectangle u-group-3">
                        <div className="u-container-layout u-valign-top-xs u-container-layout-3">
                            <h2 className="u-text u-text-5">Nhan Nguyen</h2>
                            <p className="u-text u-text-body-color u-text-6">
                                <b>Nhan Nguyen</b>, the creator of VNHP Aution(LTC), one of the earliest bussiness man, is best known as a highly successful entrepreneur in the emerging cryptocurrency industry. Van has always described Litecoin as a complement—not a competitor—to VNHP : as “silver to VNHP's gold.”
                            </p>
                        </div>
                    </div>

                    <div className="u-expanded-width-sm u-expanded-width-xs u-image u-image-circle u-preserve-proportions u-image-4" data-image-width="960" data-image-height="960">
                        <div className="u-preserve-proportions-child" style={{paddingTop: "100%"}}></div>
                    </div>
                    <div className="u-palette-1-dark-2 u-shape u-shape-circle u-shape-4"></div>
                    <div className="u-align-left u-container-style u-expanded-width-xs u-grey-10 u-group u-shape-rectangle u-group-4">
                        <div className="u-container-layout u-valign-top-xs u-container-layout-4">
                            <h2 className="u-text u-text-7">Hanh Tran</h2>
                            <p className="u-text u-text-body-color u-text-8">
                                <b>Hanh Tran</b>, the creator of VNHP Aution(LTC), one of the earliest bussiness man, is best known as a highly successful entrepreneur in the emerging cryptocurrency industry. Van has always described Litecoin as a complement—not a competitor—to VNHP : as “silver to VNHP's gold.”
                            </p>
                        </div>
                    </div>
                    </div>
            </section>
        )
    }
}

export default Aboutbody