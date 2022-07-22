import React from 'react';
import { Link } from 'react-router-dom';

const AboutFounder = () => {
    return(
        <div className="about-founders">
            <div className="title1">Meet Our</div>

            <div className="title2">FOUNDERS</div>

            <br />
            <div className="founders-info">
                <div className="info-content">
                    <div className="name"><Link  to="">Phong Van</Link> </div>
                    <div className="position">VIP-MEMBER</div>
                    <br />
                    <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptates pariatur, laboriosam eius ea minima.</div>
                    <img src={require('../../img/About/founder1.jpg')} alt="Founder 1" />
                </div>

                <div className="info-content">
                    <div className="name"><Link  to="#">Xuan Phuong</Link> </div>
                    <div className="position">LEADER</div>
                    <br />
                    <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptates pariatur, laboriosam eius ea minima.</div>
                    <img src={require('../../img/About/founder2.jpg')} alt="Founder 2" />
                </div>

                <div className="info-content">
                    <div className="name"><Link  to="#">Duc Nhan</Link> </div>
                    <div className="position">VIP-MEMBER</div>
                    <br />
                    <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptates pariatur, laboriosam eius ea minima.</div>
                    <img src={require('../../img/About/founder3.jpg')} alt="Founder 3" />
                </div>

                <div className="info-content">
                    <div className="name"><Link  to="#">Thi Hanh</Link> </div>
                    <div className="position">MAIN</div>
                    <br />
                    <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptates pariatur, laboriosam eius ea minima.</div>
                    <img src={require('../../img/About/founder4.jpg')} alt="Founder 4" />
                </div>
            </div>
        </div>
    )
}

export default AboutFounder;