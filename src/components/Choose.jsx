import React from "react";
import { Title } from "../components/styled/Title.styled";

const Choose = () => {
  return (
    <div className="choose-container">
      <div className="home-info-container choose-info-container">
        <img src="images/choose-image.png" alt="choose-image" />
        <div className="home-info choose-info">
          <Title align="left">
            <h2>Why Choose us</h2>
            <h1>
              <span>Ex</span>ta ordinary taste And Experience
            </h1>
          </Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <div className="choose-icon-box">
            <div className="choose-icon">
              <img src="images/Hamburger.png" alt="icon" /> <p>Fast Food</p>
            </div>
            <div className="choose-icon">
              <img src="images/Cookie.png" alt="icon" /> <p>Lunch</p>
            </div>
            <div className="choose-icon">
              <img src="images/Wine.png" alt="icon" /> <p>Dinner</p>
            </div>
          </div>
          <div className="choose-experience">
            <h1>30+</h1>
            <div className="choose-experience-text">
              <p>Years of</p>
              <p>
                <strong>Experience</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
