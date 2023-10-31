import React from "react";
import { images } from "../../constants";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";

import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links" id="footer">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9, Elm Street, London</p>
        <p className="p__opensans">+123 012-224-45</p>
        <p className="p__opensans">+123 012-224-46</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          alt="spoon_img"
          style={{ marginTop: "15px" }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday</p>
        <p className="p__opensans">08:00 am -12:00 am</p>
        <p className="p__opensans">Saturday-Sunday</p>
        <p className="p__opensans">07:00am -11:00 pm</p>
      </div>
    </div>
    <div className="app__footer_copyright">
      <p className="p__opensans">2023 Gericht. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
