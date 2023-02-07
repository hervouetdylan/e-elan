import React from 'react';
import './menu.css';
import produit from './../../assets/produit.png'

const testProduct =[['chips',5], ['water',2], ['ordi',500],['etiquette',3],['plot',6],['terreau',90]];
let nombreOfItem = 0

const Menu = () => (
    
    <div class="allProducts">
        {testProduct.map((product) => (
            <div class = "objectCart ">
                <img class="imageProduct"src={produit} alt="Produit" />
                <p class="productName">{product[0]}</p>
                <p class="productName">{product[1]}$</p>
                <button class="boutonCart">add to cart</button>
            </div>
        ))}
    </div>
);

export default Menu;
