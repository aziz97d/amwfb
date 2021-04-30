import { faFacebook, faFacebookF, faGoogle, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faClock, faCoffee, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="nav__top">
                <div className="social__part">
                    <a className="social-icon" href=""><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
                    <a className="social-icon" href=""><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                    <a className="social-icon" href=""><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></a>
                    <a className="social-icon" href=""><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a>
                   
                </div>
                <div className="contact__part">
                    <p className="contact__part__item"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon><span> +880 125 125 125</span></p>
                    <p className="contact__part__item"><FontAwesomeIcon icon={faClock}></FontAwesomeIcon> <span>10.00AM - 10.00PM</span></p>
                    <p className="contact__part__item"><FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon><span> info@amwfb.org</span></p>
                    <button>Donate Now</button>
                </div>
            </div>
            <div className="nav__bottom">
                <div className="logo">
                    <h3>Al Manahil</h3>
                    <input type="checkbox" id="menu"/>
                    <label htmlFor="menu">
                        <FontAwesomeIcon className="menu-btn" icon={faBars}></FontAwesomeIcon>
                    </label>
                </div>
                <ul className="menu">
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Our Projects</a></li>
                    <li><a href="">News</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;