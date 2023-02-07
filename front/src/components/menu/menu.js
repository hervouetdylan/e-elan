import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

import './menu.css';
import Header from '../header/header';
import Footer from '../footer/footer';

  
export function Menu() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);
  
  return (
    <div>
      <Header/>
      <div className='recherche'>
      <form>
        <input
          type="text"
          placeholder="Rechercher un produit"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      </div>

      <div class="allProducts">
      {filteredProducts.map((product) => (
            <div class = "objectCart " key={product.product_id}>
              <div className='center'>
                <u>
                <h3>{product.product_name}</h3>
                </u>
              </div>
                <div className='center'>
                  <img class="imageProduct" src={product.product_image} alt={product.product_name} />
                </div>
                  <div className='center'>
                    <p>{product.product_description}</p>
                  </div>
                   <div className='center'>
                    <b>
                    <p>Prix : {product.price}$</p>
                    </b>
                  </div>
                <div className='center'>
                  <Link to="/cart"><button class="boutonCart">add to cart</button></Link>
                </div>
            </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Menu;
