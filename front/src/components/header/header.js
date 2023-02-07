import './header.css';
import React from 'react';
import image from '../../assets/logo.png';
import { Link } from "react-router-dom"



export const Header = () => {

  return (
    <body>
      <div class="header">
        <ul id="menu-deroulant">
	        <li>
            <Link to="/home"><a>Home</a></Link>
	        </li>
          <li>
          <Link to="/menu"><a>Product</a></Link>
	        </li>
        </ul>
        <Link to="/home"><img class="logoFooter" src={image} alt="image"/></Link>
          <forms class="SignUp">
            <Link to="/signUp"><button type="text">Sign up</button></Link>
          </forms>
          <forms class="LogIn">
            <Link to="/loginPage"><button type="text">Log in</button></Link>
          </forms>
      </div>
    </body>
  );
}

export default Header;
