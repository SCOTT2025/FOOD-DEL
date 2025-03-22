import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import LoginPopUp from '../LoginPopUp/LoginPopUp';
import { StoreContext } from '../../context/StoreContext';
import { useContext, useEffect } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext); // get total cart amount from context
  const [showPopup, setShowPopup] = useState(false);

  const location = useLocation();

  // Scroll to the top of the page when navigating to a new route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className='navbar'>
      <Link to="/" onClick={() => setMenu("home")}>
        <img src={assets.logo} alt="" className="logo" />
      </Link> {/* Navigate to home page */}
      <ul className="navbar-menu">
        <li>
          <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
            home
          </Link> {/* Navigate to home page */}
        </li>
        <li>
          <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>
            menu
          </a>
        </li>
        <li>
          <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>
            mobile-app
          </a>
        </li>
        <li>
          <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>
            contact us
          </a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-seach-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </div>
        <button onClick={() => setShowPopup(true)}>Sign Up</button>
        {showPopup && <LoginPopUp closePopup={() => setShowPopup(false)} />}
      </div>
    </div>
  );
};

export default Navbar;
