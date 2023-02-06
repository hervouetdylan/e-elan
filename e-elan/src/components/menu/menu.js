import React from 'react';
import './menu.css';
import produit from './../../assets/produit.png'

const testProduct = ['chips', 'water', 'ordi','etiquette','plot','terreau', 'wagon','mayonnaise']
let nombreOfItem = 0

const Menu = () => (
    <div class="allProducts">
        {testProduct.map((product) => (
            <div class = "objectCart ">
                <img class="imageProduct"src={produit} alt="Produit" />
                <p class="productName">{product}</p>
                <button class="boutonCart">add to cart</button>
            </div>
        ))}
    </div>
);

export default Menu;
