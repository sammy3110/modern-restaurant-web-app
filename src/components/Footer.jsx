import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-copyright">
          <p>Copyright © 2022 by Foodtuck. All Rights Reserved.</p>
        </div>
        <div className="footer-social">
          <ul>
            <li>
              <FaFacebookF size={15} />
            </li>
            <li>
              <FaTwitter size={15} />
            </li>
            <li>
              <FaInstagram size={15} />
            </li>
            <li>
              <FaYoutube size={15} />
            </li>
            <li>
              <FaPinterest size={15} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
