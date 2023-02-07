import './header.css';
import React from 'react';
import image from '../../assets/logo.png';
import { Link } from "react-router-dom"



export const Header = () => {

  return (
    <body>
      <div class="header">
        <div>
            <Link to="/home"><button type="text">Home</button></Link>
            <Link to="/menu"><button type="text">Product</button></Link>
          </div>
        <Link to="/home"><img class="logoFooter" src={image} alt="image"/></Link>
        <div>
          <forms class="SignUp">
            <Link to="/signUp"><button type="text">Sign up</button></Link>
          </forms>
          <forms class="LogIn">
            <Link to="/loginPage"><button type="text">Log in</button></Link>
          </forms>
          </div>
      </div>
    </body>
  );
}

export default Header;
