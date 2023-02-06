import React from 'react';
import './cart.css';
import cartimg from '../../assets/cart.png';

const testProduct = [
    'chips',
    'laptop',
]
const Cart = ()=>(

    <div class="cartdiv">
        <img id="cartimg" src={cartimg} alt="cartIMG" />
        <div class="shopinglist">
        {testProduct.map((product) => (
        <div id="product">
            <ul>
                <li>
                <img id="productimg"src={cartimg} alt="product Image" />
                <p>{product}</p>
                </li>
            </ul>
        </div>
            ))}
        </div>
    </div>
);
export default Cart