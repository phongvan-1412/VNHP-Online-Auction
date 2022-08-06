import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

import { BsClockFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    const [feedback_content, setFeedbackContent] = useState("");
    const result = $("#result")

    const setTime = () => {
        $("#result").text("")
    }
    const onKeyUp = (e) => {
        const feedbackContent = e.target.value;
        
        if(feedbackContent.length > 0){
            setFeedbackContent(feedbackContent);
        }
    }

    const onClick = (e) => {
        const click = e.target.name;

        if (click === "submit") {
            if (JSON.parse(localStorage.getItem("customer_info")) == null) {
                result.text("Please login before comment.");
                result.css("color", "red");
                setInterval(setTime, 5000)
                return;
            }
            
            const customer_id = JSON.parse(localStorage.getItem("customer_info")).customer_id;

            if (customer_id == null){
                result.text("You have to login first");
            }
            const feedback_date = new Date().toLocaleString();

            const feedback = {  feedback_content, customer_id, feedback_date }
           

            axios
                .post("http://127.0.0.1:8000/api/addfeedback", feedback)
                .then(function (response) {
                    if (response.data.length > 0) {
                        result.css("color", "green");
                        alert("Your response was recorded.");
                        $("#message-text").val("");
                        setInterval(setTime, 3000);
                    } else {
                        result.text("Please try again.");
                        result.css("color", "red");
                    }
                });
        }
    }
    return(
        <div className="row contact-wrapper" style={{margin: "0px", padding: "0px"}}>
            <div className="col-md-1" style={{margin: "0px", padding: "0px"}}></div>

            <div className="col-md-10 contact-content-wrapper" style={{margin: "0px", padding: "0px"}}>
                
                <div className="contact-map embed-responsive">
                    <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31354.520974994266!2d106.65631927377615!3d10.787159215500305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529ed00409f09%3A0x11f7708a5c77d777!2zQXB0ZWNoIENvbXB1dGVyIEVkdWNhdGlvbiAtIEjhu4cgVGjhu5FuZyDEkMOgbyB04bqhbyBM4bqtcCBUcsOsbmggVmnDqm4gUXXhu5FjIHThur8gQXB0ZWNo!5e0!3m2!1svi!2s!4v1658497598453!5m2!1svi!2s"></iframe>
                </div>

        
                <div className="contact-send-massage">
                    
                    <div className="form">
                        <div className="message">SEND US A MESSAGE</div>
                        <div className="message-content">
                            <span>Message</span>
                            <span id="result"></span>
                            <textarea name="feedback" id="message-text" cols="30" rows="10" placeholder="Tell us what you think..." onKeyUp={onKeyUp}></textarea>
                        </div>
                        <button type="submit" name="submit" onClick={onClick}>SUBMIT</button>
                    </div>
                </div>

                <div className="info">

                    <div className="location">
                        <div className="location-content">
                            <span className="title"><MdLocationOn /> LOCATION</span>
                            <span className="content">7th floor-35/6 D5 Str-Binh Thanh Dist-HCM city</span>
                        </div>
                    </div>

                    <div className="callus">
                        <div className="callus-content">
                            <span className="title"><FaPhoneAlt /> CALL US</span>
                            <span className="content">(+84) 99 999 9999</span>
                        </div>
                    </div>

                    <div className="opening">
                        <div className="opening-content">
                            <span className="title"><BsClockFill /> OPENING HOURS</span>
                            <span className="content">
                                Weekdays 07:30 - 22:30 <br />
                                Weekends 07:00 - 22:30
                            </span>
                        </div>
                    </div>
                </div>

                
  
            </div>
            <div className="col-md-1" style={{margin: "0px", padding: "0px"}}></div>
            <div className="about-register">
            <div className="register-content">SPECIALS SIGN UP</div>
                <input type="email" name="email" id="email" placeholder="Enter your email" />
                <Link to="./register">SIGN-UP</Link>
            </div>
        </div>
    );
}

export default Contact;