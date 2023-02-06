import React from 'react';
import './cart.css'

const testProduct = [
    'chips',
    'laptop',
]
const Cart = ()=>(

    <div class="allcartdiv">
        <img alt="Cart IMG" src='../assets/cart.png'></img>
        <div class="shopingcartlist" >
        <ul>
            {testProduct.map((product) => (
                <li>{product}</li>
            ))}
        </ul>
        </div>
    </div>
);
export default Cart