import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import Header from './header/header';
=======
import Footer from './components/footer/footer';
import Home from './components/home/home';
>>>>>>> 9dee4234ca45c9f0751facbc321a548bcc803cf1

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Header />
=======
    <App />
    <Home />
    <Footer />
    {/* <LoginPage /> */}
    {/* <SignUp /> */}
>>>>>>> 9dee4234ca45c9f0751facbc321a548bcc803cf1
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
