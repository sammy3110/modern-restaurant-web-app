import React from "react";
import { Title } from "../components/styled/Title.styled";

const Clients = () => {
  return (
    <div className="clients-container">
      <div className="clients-data">
        <img src="images/clients-image1.png" alt="clients-image" />
        <strong>Professional Chefs</strong>
        <h3>420</h3>
      </div>
      <div className="clients-data">
        <img src="images/clients-image2.png" alt="clients-image" />
        <strong>Items Of Food</strong>
        <h3>320</h3>
      </div>
      <div className="clients-data">
        <img src="images/clients-image3.png" alt="clients-image" />
        <strong>Years Of Experienced</strong>
        <h3>30+</h3>
      </div>
      <div className="clients-data">
        <img src="images/clients-image4.png" alt="clients-image" />
        <strong>Happy Customers</strong>
        <h3>220</h3>
      </div>
    </div>
  );
};

export default Clients;
