import React from "react";
import { Title } from "../components/styled/Title.styled";
import { AiFillStar } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <Title className="title" align="left">
        <h2>Testimonials</h2>
        <h1>
          <span>Wh</span>at our client are saying
        </h1>
      </Title>
      <div className="testimonials-carousel">
        <div className="testimonials-info-container">
          <div className="testimonials-info">
            <img src="images/testimonials-image.png" alt="testimonial-person" />
            <img src="images/quotes-image.png" alt="quote" />
            <p className="testimonials-info-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <div className="testimonials-stars">
              <AiFillStar className="fill" size={25} />
              <AiFillStar className="fill" size={25} />
              <AiFillStar className="fill" size={25} />
              <AiFillStar className="fill" size={25} />
              <AiFillStar className="outline" size={25} />
            </div>
            <h3>Alamin Hasan</h3>
            <p>Food Specialist</p>
          </div>
        </div>
        <div className="testimonials-dots">
          <BsFillCircleFill color="#ff9f0d" size={10} />
          <BsFillCircleFill color="#ff9f0d80" size={10} />
          <BsFillCircleFill color="#ff9f0d80" size={10} />
          <BsFillCircleFill color="#ff9f0d80" size={10} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
