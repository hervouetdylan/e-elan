import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

import './menu.css';
import Header from '../header/header';
import Footer from '../footer/footer';

  
export function Menu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);


  return (
    <div>
      <Header/>
      <div className='recherche'>
      <form>
        <input
          type="text"
          placeholder="Rechercher un produit"
         
      
        />
      </form>
      </div>

      <div class="allProducts">

    
        {products.map((product) => (
          <div class = "objectCart ">
            <div key={product.product_id}>
          <h3>{product.product_name}</h3>
          <img class="imageProduct" src={product.product_image} alt={product.product_name} />
          <p>{product.product_description}</p>
          <p>Prix : {product.price}</p>
        </div>
            <Link to="/cart"><button class="boutonCart">add to cart</button></Link>
          </div>      
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Menu;
