import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalcartAmount } = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="Logo" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-product' onClick={() => setMenu("product")} className={menu === "product" ? "active" : ""}>Product</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" className="navbar-search-icon" />
        <div className="navbar-cart-icon">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="Basket Icon" />
            {getTotalcartAmount() > 0 && <div className="dot"></div>}
          </Link>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
