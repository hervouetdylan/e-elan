import React, { useState } from 'react';
import './home.css';
import produit from '../../assets/produit.png';
import LoginPage from '../loginPage/loginPage';
import Header from '../header/header';
import Footer from '../footer/footer';


const data = [
  { id: 1, name: 'Produit 1' , description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Donec auctor, nisl eget ultricies ultricies, nunc nisl aliquam nisl, eget ultricies nisl nisl eget nisl.', src: produit},
  { id: 2, name: 'Produit 2' , description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Donec auctor, nisl eget ultricies ultricies, nunc nisl aliquam nisl, eget ultricies nisl nisl eget nisl.', src: produit},
  { id: 3, name: 'Produit 3' , description:'zoefj', src: produit},
];

const listStyles = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};
const itemStyles = {
  marginRight: '16px',
};

const Home = () => {

  const [isLogin, setIsLogin] = useState(false);

 

return (
<div >
      <Header setIsLogin={setIsLogin} />
      {isLogin ? <LoginPage /> : 
      <div>
<div className="fond">
  <h1 className='text'>
    Best seller
  </h1>
  <div style={listStyles} >
      {data.map(item => (
        <div key={item.id} style={itemStyles}>
          <div className='center'>
          <img src={item.src} alt={item.name} />
          </div>
          <br></br>
          <div className='gras'>
          {item.name}
          </div>
          <br></br>
          Description :
          <div className='italic'>
          {item.description }
          </div>
          <br></br>
          <div className='center'>
          <button>Ajouter au panier</button>
          </div>
        </div>
      ))}
  </div>
  <br></br>
    <h1 className='text'>
  Promotions
</h1>
<div style={listStyles} className=''>
      {data.map(item => (
        <div key={item.id} style={itemStyles}>
          <div className='center'>
          <img src={item.src} alt={item.name} />
          </div>
          <br></br>
          <div className='gras'>
          {item.name}
          </div>
          <br></br>
          Description :
          <div className='italic'>
          {item.description }
          </div>
          <br></br>
          <div className='center'>
          <button>Ajouter au panier</button>
          </div>
        </div>
      ))}
  </div>
  
</div>
<Footer />
</div>}

</div>
);
      };

export default Home;
