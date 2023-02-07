import React from 'react';
import './cart.css';
import cartimg from '../../assets/cart.png';
// a changer
const Product = [["chips","amazon","3"],["","",""],["","",""],["","",""],["","",""]
]

const Cart = ()=>(

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
);
export default Cart