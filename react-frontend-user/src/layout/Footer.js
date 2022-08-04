import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagramSquare, FaTwitter, FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';

class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="footer-container1">
                    <div className="footer-container1-col1">
                        <div className="contact">
                            <h4>CONTACT US</h4>
                            <Link to="#">
                                <MdLocationOn />
                                7th floor-35/6 D5 Str-Binh Thanh Dist-HCM city
                            </Link>
                            <br /><br />
                            <Link to="#">
                                <FaPhoneAlt />
                                (+84) 99 999 9999
                            </Link>
                            <br /><br />
                            <Link to="#">
                                <MdEmail /> 
                                vnhpgrocery.aptech@gmail.com
                            </Link>
                        </div>

                        <div className="openingtimes">
                            <h4>OPENING TIMES</h4>
                            <span>
                                <b>Weekdays</b> 07:30 - 22:30
                                <br />
                                <b>Weekends</b> 07:00 - 22:30
                            </span>
                        </div>
                    </div>

                    <div className="footer-container1-col2">
                        <h4>ABOUT US</h4>
                        <div className="latest-blog1">
                            <span>
                                <Link to="/about" className="meta-facebook"><FaFacebook /> About Us</Link>
                                <br />
                                <span id="blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, est labore deleniti eligendi officiis facere.</span> 
                                <br />
                                <Link to="/about" id="link">https://buff.ly/2zaSfAQ</Link>
                                <br />
                                <span id="date">12 May 2022</span>
                            </span>
                        </div>
                        <br /><br />

                        <div className="latest-blog2">
                            <span>
                                <Link to="/term-and-policy" className="meta-facebook"><FaFacebook /> Term and Policy</Link>
                                <br />
                                <span id="blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, est labore deleniti eligendi officiis facere.</span> 
                                <br />
                                <Link to="/term-and-policy" id="link">https://buff.ly/2zaSfAQ</Link>
                                <br />
                                <span id="date">12 May 2022</span> 
                            </span>
                        </div>
                    </div>

                    <div className="footer-container1-col3">
                        <h4>GALLERY</h4>
                        <div className="gallery1">
                            <img src={"http://localhost:8000/ProductImg/1659076532-product.jpg"} className="gallery1__img1" />
                            <img src={"http://localhost:8000/ProductImg/1659076619-product.jpg"} className="gallery1__img2" />
                            <img src={"http://localhost:8000/ProductImg/1659069718-product.jpg"} className="gallery1__img3" />
                            <img src={"http://localhost:8000/ProductImg/1659077239-product1.jpg"} className="gallery1__img4" />
                            <img src={"http://localhost:8000/ProductImg/1659069279-product.jpg"} className="gallery1__img5" />
                            <img src={"http://localhost:8000/ProductImg/1659071594-product1.jpg"} className="gallery1__img6" />
                            <img src={"http://localhost:8000/ProductImg/1659075965-product2.jpg"} className="gallery1__img7" />
                            <img src={"http://localhost:8000/ProductImg/1659066974-product.jpg"} className="gallery1__img8" />
                            <img src={"http://localhost:8000/ProductImg/1659071194-product3.jpg"} className="gallery1__img9" />
                        </div>
                    </div>
                </div>

                <div className="footer-containter2">
                    <div className="footer-icon">
                        <Link to="#"><FaFacebook /></Link>
                        <Link to="#"><FaInstagramSquare /></Link>
                        <Link to="#"><FaTwitter /></Link>
                    </div>

                    <div id="sentence">
                        @ 2017 VNHP Online Auction. <Link to="#">Register Now</Link>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
