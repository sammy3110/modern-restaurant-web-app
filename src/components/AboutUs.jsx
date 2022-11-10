import React from "react";
import { Button } from "../components/styled/Button.styled";
import { Title } from "../components/styled/Title.styled";
import {TiTick} from 'react-icons/ti' 

const AboutUs = () => {
  return (
    <div id="about" className="about-us-container">
      <div className="home-info-container about-info-container">
        <div className="home-info">
          <Title align="left">
            <h2>About Us</h2>
            <h1>
              <span>We</span> Create the best foody product
            </h1>
          </Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <p><TiTick size={18}/> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
          <p><TiTick size={18}/> Quisque diam pellentesque bibendum non dui volutpat.</p>
          <p><TiTick size={18}/> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <Button>Read More</Button>
        </div>
        <div className="about-us-images">
          <img src="images/about-image1.png" alt="plate-of-food" />
          <div>
            <img src="images/about-image2.png" alt="plate-of-food" />
            <img src="images/about-image3.png" alt="plate-of-food" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
