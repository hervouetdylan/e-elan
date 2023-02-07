import React from 'react';
import './footer.css';
import image from '../../assets/logo.png';
import { Link } from "react-router-dom"


export const Footer = () => (
  <div class="footer">
    <footer>
        <div class="row">
            <div class="colonne">
                <div >
                <img class="logoFooter" src={image} alt="image"/>
                </div>
            </div>
            <div class="colonne">
                <h2>E-ELAN COMMERCE</h2>
                <p>&copy; 2023 </p>
                <p> Company Name</p>   
            </div>
            <div class="colonne">
                <h3>Categories</h3>
                <ul>
                    <li><Link to="/menu"><a>High tech</a></Link></li>
                    <li><Link to="/menu"><a>Books</a></Link></li>
                    <li><Link to="/menu"><a>Furnitures</a></Link></li>
                    <li><Link to="/menu"><a>Cosmetics</a></Link></li>
                    <li><Link to="/menu"><a>Sports</a></Link></li>
                </ul>
            </div>
            <div class="colonne">
                <h3>Help</h3>
                <ul>
                    <li><Link to="/home"><a>FAQ</a></Link></li>
                    <li><Link to="/home"><a>Report a probleme</a></Link></li>
                    <li><Link to="/home"><a>Support</a></Link></li>
                </ul>
            </div>
            <div class="colonne">
                <h3>About us</h3>
                <ul>
                    <li><Link to="/home"><a>Our missions</a></Link></li>
                    <li><Link to="/home"><a>Our values</a></Link></li>
                    <li><Link to="/home"><a>Legal notice</a></Link></li>
                </ul>
            </div>
            <div class="colonne">
                <h3>Contact</h3>
                <ul>
                    <li><Link to="/home"><a>Email</a></Link></li>
                    <li><Link to="/home"><a>Our socials</a></Link></li>
                    <li><Link to="/home"><a>Contact us</a></Link></li>
                </ul>
            </div>
        </div>
    </footer>
  </div>
);

export default Footer;