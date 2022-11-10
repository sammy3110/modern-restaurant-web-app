import React from "react";
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Title } from "./styled/Title.styled";

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* <h1>Navbar</h1> */}
      <Title className="navbar-title">
        <h1>
          <span>Food</span>tuck
        </h1>
      </Title>

      <div className="navbar-bottom">
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#chefs">Chefs</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="search-bar">
            <input type="text" name="search" id="search" placeholder="Search.." />
            <HiOutlineShoppingBag className="navbar-bag" size={25}/>
        </div> {/* search-bar end */}
      </div>
    </div>
  );
};

export default Navbar;
