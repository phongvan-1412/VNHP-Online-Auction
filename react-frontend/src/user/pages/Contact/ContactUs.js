import React, { Component } from "react";
import { MdLocationOn } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { BsClockFill } from "react-icons/bs";

import MapContainer from "./MapContainer";

class ContactUs extends Component {
  render() {
    return (
      <div className="container contact-wrapper" style={{padding: '0px', margin: '0px'}}>

        
        <MapContainer />
        

        <div className="row send-massage">
          <div className="message">SEND US A MESSAGE</div>
          <form className="form" style={{padding: '0px'}}>
            <div className="message-info">
              <div className="name">
                  <span>Name</span>
                  <input type="text" placeholder="Name"/>
              </div>

              <div className="email">
                  <span>Email</span>
                  <input type="email" placeholder="Email"/>
              </div>

              <div className="phone">
                  <span>Phone</span>
                  <input type="text" placeholder="Phone"/>
              </div>
            </div>

            <div className="message-content">
                <span>Message</span>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </form>

          <div className="btn-submit">
            <button type="submit">SUBMIT</button>
          </div>
        </div>

        <div className="row info">
            <div className="col-md-4 location">
                <MdLocationOn className="meta-location"/>
                <div className="location-content">
                    <span className="title">LOCATION</span>
                    <span className="content">7th floor-35/6 D5 Str-Binh Thanh Dist-HCM city</span>
                </div>
            </div>
            <div className="col-md-4 callus">
                <IoMdCall className="meta-callus"/>
                <div className="callus-content">
                    <span className="title">CALL US</span>
                    <span className="content">(+84) 99 999 9999</span>
                </div>
            </div>
            <div className="col-md-4 opening">
                <BsClockFill className="meta-clock"/>
                <div className="opening-content">
                    <span className="title">OPENING HOURS</span>
                    <span className="content">
                        Weekdays 07:30 - 22:30 <br/>
                        Weekends 07:00 - 22:30
                    </span>
                </div>
            </div>
        </div>
      </div>
      
    );
  }
}

export default ContactUs;
