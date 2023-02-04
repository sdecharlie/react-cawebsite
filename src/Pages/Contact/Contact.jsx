import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <div className="cntats-section" id="contact">
      <div className="cntats-info">
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          Mukul@mailinator.com
        </div>
        <div>
          <FontAwesomeIcon icon={faLocationDot} />
          Address, City, Country
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} />
          9807563423
        </div>
        <div>
          <FontAwesomeIcon icon={faClock} />
          Mon-Fri
        </div>
      </div>
      <div className="cntats-form">
        <h2 style={{textAlign:'center'}}>Contact us</h2>
        <form className="cntats-form-details">
          <input
            type="text"
            name=""
            className="cntats-text"
            placeholder="Enter Your name"
            required
          />
          <input
            type="email"
            name=""
            className="cntats-email"
            placeholder="Enter Your Email"
            required
            id=""
          />
          <br />
          <textarea name="" id="" placeholder="Enter your Message" cols="80" rows="8"></textarea><br />
          <input type="submit" name="submit" className="send-btn" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
