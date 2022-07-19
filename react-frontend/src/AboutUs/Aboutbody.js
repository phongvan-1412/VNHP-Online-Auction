import { Link } from "react-router-dom";
import React, { Component } from "react";


const Aboutbodyitems = props => (
    <div className={props.classcontainer}>
    <div className={props.classlayout}>
        <h2 className={props.classfounder}>{props.founder}</h2>
        <p className={props.classcontent}>
            <b>{props.foundercontent}</b>{props.content}
        </p>
        <Link to="#" className={props.classlink}>learn more</Link>
    </div>
    </div>
)
function Aboutbody(){
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

export default Aboutbody