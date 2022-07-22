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
      <div className="about-founders">
        <div className="title1">Meet Our</div>

        <div className="title2">FOUNDERS</div>

        <br />
        {this.state.founder.map((founder) => {
          return (
              <div className="founders-info">
                <div className="info-content">
                  <div className="name">
                    <Link to="">{founder.founder_name}</Link>
                  </div>
                  <div className="position">{founder.founder_position}</div>
                  <br />
                  <div className="content">{founder.founder_info}</div>
                  <img
                    src={require(`../../img/About/${founder.founder_img}`)}
                    alt="Founder Image"
                  />
                </div>
              </div>
          );
        })}
      </div>
    );
  }
}

export default AboutFounder;
