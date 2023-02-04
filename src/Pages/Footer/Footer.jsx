import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from "../Images/logo.png";
const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <img src={Logo} alt="" />
          <p className="footer-details">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
        </div>
        <div className="col">
          <h3>Office <div className="underline"><span></span></div></h3>
          <p>Area</p>
          <p>Street</p>
          <p>LandMark</p>
          <p className="emailId">mukul.rawat@mailinator.com</p>
          <h4>+91 - 9807654321</h4>
        </div>
        <div className="col">
          <h3>Links <div className="underline"><span></span></div></h3>
          <ul>
            <li>
              <a href="#">Home</a>{" "}
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FeedBack</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>NewsLetter <div className="underline"><span></span></div></h3>
          <form action="">
            <FontAwesomeIcon className="envelop-icon" icon={faEnvelope}/>
            <input type="email" placeholder="Enter your Email Id" required />
            <button type="submit"><FontAwesomeIcon className="button-icon" icon={faArrowRight}/></button>
          </form>
          <div className="social-icons">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-linkedin"></i>
            <i className="fa fa-instagram"></i>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright-content">
        Mukul rawat © 2023 - All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
