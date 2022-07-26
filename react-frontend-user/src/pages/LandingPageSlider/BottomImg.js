import React, { Component } from "react";
import { Link } from "react-router-dom";

class BottomImg extends Component {
  render() {
    return (
      <div className="row  landingpage-slider panel-bottom">
          <div className="row page-content  ">
            <div className="col-md-4 bottom-col-1">
              <Link to="/"><img
                  className="page-content row-panel-bottom-img-col-1 img1"
                  src={require(`../../img/LandingPage/1.jpg`)}/>
              </Link>
            </div>

            <div className="col-md-4 bottom-col-2">
              <div className="row">

                <div className="col-md-12" style={{padding: "0px", margin: "0px"}}>
                  <Link to="/"><img
                    className="page-content row-panel-bottom-img-col2 img2"
                    src={require(`../../img/LandingPage/2.jpg`)}/>
                  </Link>
                </div>
                <div className="col-md-12" style={{padding: "0px", margin: "0px"}}>
                  <Link to="/"><img
                    className="page-content row-panel-bottom-img-col2 img3"
                    src={require(`../../img/LandingPage/3.png`)}/>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 bottom-col-3">
              <Link to="/"><img
                className="page-content row-panel-bottom-img img4"
                src={require(`../../img/LandingPage/4.png`)}/>
              </Link>
            </div>
          </div>
      </div>
    );
  }
}

export default BottomImg;
