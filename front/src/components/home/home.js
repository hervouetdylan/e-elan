import React from 'react';

import './home.css';
import desktop from '../../assets/ordi.png';
import plante from '../../assets/plante.webp';
import banana from '../../assets/banane.webp';
import watch from '../../assets/montre.webp';
import ball from '../../assets/ball.webp';
import shoes from '../../assets/shoes.webp';
import Header from '../header/header';
import Footer from '../footer/footer';


const data = [
  { id: 1, name: 'Banana' ,price:'3€', description : 'Banana from Guadeloupe', src: banana},
  { id: 2, name: 'Desktop' , price:'2000€', description : "Screen : 15,6' Stockage : SSD 128 Go", src: desktop},
  { id: 3, name: 'Plante' , price:'32€' ,description:' Chamaedorea Elegans', src: plante},
];
const dataPromotion = [
  { id: 1, name: 'Watch' ,price:'150€', description : 'watch from switzerland', src: watch},
  { id: 2, name: 'Ball' , price:'10€', description : "Basket ball, age min :5", src: ball},
  { id: 3, name: 'Shoes' , price:'90€' ,description:'shoes demon slayer', src: shoes},
];

const listStyles = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};
const itemStyles = {
  marginRight: '16px',
};

export const Home = () => {

  return (
    <div>
      <Header/>
      <div className="fond">
        <h1 className='text'>
          #Best seller
        </h1>
      <div style={listStyles} >
          {data.map(item => (
            <div key={item.id} style={itemStyles}>
              <div className='center'>
                <img class = "imgBestSeller" src={item.src} alt={item.name} />
              </div>
              <div className='center'>
                <h3>
                  <u>
                {item.name}
                </u>
                </h3>
              </div> 
                <br />
              <ul>
                <li>
                <div className='gras'>
                {item.price}
                </div>
                </li>
                <br />
                <br /> 
                <li>
              Description :
              </li> 
              <div className='italic'>
               {item.description }
              </div>
              </ul>
              <br />
              <div className='center'>
                <button>Ajouter au panier</button>
              </div>
            </div>
          ))}
      </div>
      <br></br>
        <h1 className='text'>
      #Promotions
    </h1>
    <div style={listStyles} className=''>
          {dataPromotion.map(item => (
            <div key={item.id} style={itemStyles}>
              <div className='center'>
              <img class = "imgBestPromotion" src={item.src} alt={item.name} />
              </div>
              <br></br>
              <div className='center'>
              <h3>
              <u>
              {item.name}
              </u>
              </h3>
              </div>
              <br />
              <br />
              <ul>
                <li>
              <div className='gras'>
              {item.price}
               </div> 
                </li>
              <br></br>
              <li>
              Description :
              </li>
              
              <div className='italic'>
              {item.description }
              </div>
              </ul>
              <br></br>
              <div className='center'>
              <button>Ajouter au panier</button>
              </div>
            </div>
          ))}
      </div>
    </div>
    <Footer/>
  </div>
  );
  };

export default Home;