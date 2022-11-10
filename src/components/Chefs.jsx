import React from "react";
import { Title } from "../components/styled/Title.styled";
import { Button } from "../components/styled/Button.styled";

const Chefs = () => {
  return (
    <div id="chefs" className="chefs-container">
      <Title align="center">
        <h2>Chefs</h2>
        <h1>
          <span>Me</span>et Our Chefs
        </h1>
      </Title>
      <div className="chefs-list">
        <img src="images/chefs/chef-image1.png" alt="chef-image" />
        <img src="images/chefs/chef-image2.png" alt="chef-image" />
        <img src="images/chefs/chef-image3.png" alt="chef-image" />
        <img src="images/chefs/chef-image4.png" alt="chef-image" />
      </div>
      <Button varient="transparent">See More</Button>
    </div>
  );
};

export default Chefs;
