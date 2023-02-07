import React from 'react';

import './cart.css';
import cartimg from '../../assets/cart.png';
import Header from '../header/header';
import Footer from '../footer/footer';

// a changer
const Product = [["chips","amazon","3"],["","",""],["","",""],["","",""],["","",""]
]

export const Cart = ()=>(

    <div>
        <Header/>
        <div class="cartdiv">
            <img id="cartimg" src={cartimg} alt="cartIMG" />
            <div class="shopinglist">
                {Product.map((product) => (
                    <div id="product">
                        <ul>
                            <li>
                            <img id="productimg"src={cartimg} alt="product Image" />
                            <p id="item">{product}</p>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
    </div>
);
export default Cart