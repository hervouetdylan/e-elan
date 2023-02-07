import { Route, Routes } from "react-router-dom"
import Menu from './components/menu/menu.js';
import Cart from './components/cart/cart.js';
import Footer from './components/footer/footer.js';
import Header from './components/header/header.js';
import Home from './components/home/home.js';
import LoginPage from './components/loginPage/loginPage.js';
import SignUp from './components/signUp/signup.js';

export function App() {
  return (
    <Routes>
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/footer" element={<Footer/>} />
      <Route path="/header" element={<Header/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/loginPage" element={<LoginPage/>} />
      <Route path="/signUp" element={<SignUp/>} />
    </Routes>
  )
};

export default App;
