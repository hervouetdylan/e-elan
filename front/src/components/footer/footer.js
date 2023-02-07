import React from 'react';
import './footer.css';
import image from '../../assets/logo.png';

const Footer = () => (
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
                    <li><a href="#">High tech</a></li>
                    <li><a href="#">Books</a></li>
                    <li><a href="#">Furnitures</a></li>
                    <li><a href="#">Cosmetics</a></li>
                    <li><a href="#">Sports</a></li>
                </ul>
            </div>
            <div class="colonne">
                <h3>Help</h3>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Report a probleme</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>
            <div class="colonne">
                <h3>About us</h3>
                <ul>
                    <li><a href="#">Our missions</a></li>
                    <li><a href="#">Our values</a></li>
                    <li><a href="#">Legal notice</a></li>
                </ul>
            </div>
            <div class="colonne">
                <h3>Contact</h3>
                <ul>
                    <li><a href="#">Email</a></li>
                    <li><a href="#">Our socials</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>
        </div>
    </footer>
  </div>
);

export default Footer;