import React from "react";
import { Title } from "../components/styled/Title.styled";

const Category = () => {
  return (
    <div className="category-container">
      <div className="home-info-container category-info-container">
        <div className="home-info">
          <Title className="title" align="center">
            <h2>Food Category</h2>
            <h1>
              <span>Ch</span>oose Food Item
            </h1>
          </Title>
        </div>
        <div className="category-images">
            <img src="images/category-image1.png" alt="category-image" />
            <img src="images/category-image2.png" alt="category-image" />
            <img src="images/category-image3.png" alt="category-image" />
            <img src="images/category-image4.png" alt="category-image" />
        </div>
      </div>
    </div>
  );
};

export default Category;
