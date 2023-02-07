import './header.css';
import React, { useState } from 'react';
import image from '../../assets/logo.png';
import { Link } from "react-router-dom"



export const Header = ({ setIsLogin }) => {

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  return (
    <body>
      <div class="header">
        <ul id="menu-deroulant">
	        <li><a href="#">Categories</a>
		        <ul>
              <li><a href="#">lien sous menu 1</a></li>
              <li><a href="#">lien sous menu 1</a></li>
		        </ul>
	        </li>
          <li><a href="#">Best-Sellers</a>
		        <ul>
              <li><a href="#">Lien sous menu 2</a></li>
              <li><a href="#">Lien sous menu 2</a></li>
		        </ul>
	        </li>
          <li><a href="#">Help</a>
            <ul>
              <li><a href="#">Lien sous menu 3</a></li>
              <li><a href="#">Lien sous menu 3</a></li>
            </ul>
          </li>
          <li><a href="#">About Us</a>
            <ul>
              <li><a href="#">Lien sous menu 3</a></li>
              <li><a href="#">Lien sous menu 3</a></li>
            </ul>
          </li>
          <li><a href="#">Contact</a>
            <ul>
              <li><a href="#">Lien sous menu 3</a></li>
              <li><a href="#">Lien sous menu 3</a></li>
            </ul>
          </li>
        </ul>
        <Link to="/home"><img class="logoFooter" src={image} alt="image"/></Link>
        <div class="buttonHeader">
          <form class="Sign Up">
            <Link to="/signUp"><button type="text">Sign up</button></Link>
          </form>
          <form class="login">
            <Link to="/loginPage"><button type="text">Login</button></Link>
          </form>
        </div>
      </div>
    </body>
  );
}

export default Header;
