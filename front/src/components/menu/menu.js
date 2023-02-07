import React from 'react';
import { Link } from "react-router-dom"

import './menu.css';
import produit from './../../assets/produit.png'
import Header from '../header/header';
import Footer from '../footer/footer';

  
const testProduct =[['chips',5], ['water',2], ['ordi',500],['etiquette',3],['plot',6],['terreau',90]];

export function Menu() {
  return (
    <div>
      <Header/>

      <div class="allProducts">
        {testProduct.map((product) => (
          <div class = "objectCart ">
            <img class="imageProduct"src={produit} alt="Produit" />
            <p class="productName">{product[0]}</p>
            <p class="productName">{product[1]}$</p>
            <Link to="/cart"><button class="boutonCart">add to cart</button></Link>
          </div>      
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Menu;
