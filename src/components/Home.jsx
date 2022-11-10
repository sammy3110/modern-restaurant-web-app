import React from "react";
import Navbar from "./Navbar";
import { Button } from "../components/styled/Button.styled";
import { Title } from "../components/styled/Title.styled";

const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="home-image-container">
        <div className="home-inner-container">
          <Navbar />
          <div className="home-info-container">
            <div className="home-info">
              <Title align="left">
                <h2>Its Quick &amp; Amusing!</h2>
                <h1>
                  <span>Th</span>e Art of speed food Quality
                </h1>
              </Title>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                sed pharetra dictum neque massa congue
              </p>
              <Button>See Menu</Button>
            </div>
            <img src="images/home-image.png" alt="plate-of-food" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
