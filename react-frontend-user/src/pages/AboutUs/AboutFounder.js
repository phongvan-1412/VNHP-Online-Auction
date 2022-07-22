import React, { Component } from "react";
import { Link } from "react-router-dom";

class AboutFounder extends Component {
  state = {
    founder: [
      {
        founder_name: "Phong Van",
        founder_position: "CFO",
        founder_info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptates pariatur, laboriosam eius ea minima.",
        founder_img: "founder1.jpg",
      },
      {
        founder_name: "Xuan Phuong",
        founder_position: "CEO",
        founder_info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptates pariatur, laboriosam eius ea minima.",
        founder_img: "founder2.jpg",
      },
      {
        founder_name: "Duc Nhan",
        founder_position: "CEO",
        founder_info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptates pariatur, laboriosam eius ea minima.",
        founder_img: "founder3.jpg",
      },
      {
        founder_name: "Ngoc Hanh",
        founder_position: "Manager",
        founder_info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptates pariatur, laboriosam eius ea minima.",
        founder_img: "founder4.jpg",
      },
    ],
  };

  render() {
    return (
      <div className="row about-founders-wrapper" style={{margin: "0px", padding:"0px"}}>
        <div className="title1" style={{margin: "0px", padding:"0px"}}>Meet Our</div>

        <div className="title2" style={{margin: "0px", padding:"0px"}}>FOUNDERS</div>

        <br />
        {this.state.founder.map((founder) => {
          return (
            <div className="col-xl-3 col-md-6 col-xs-1 about-founders" >
              <div className="row founders-info" style={{margin: "0px", padding:"0px"}}>
                <div className="col-md-1" style={{margin: "0px", padding:"0px"}}></div>
                <div className="info-content" style={{margin: "0px", padding:"0px"}}>
                  <div className="name">
                    <Link to="">{founder.founder_name}</Link>
                  </div>
                  <div className="position">{founder.founder_position}</div>
                  <br />
                  <div className="content">{founder.founder_info}</div>
                  <Link to="#">
                    <img
                      src={require(`../../img/About/${founder.founder_img}`)}
                      alt="Founder Image"
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
    );
  }
}

export default AboutFounder;
