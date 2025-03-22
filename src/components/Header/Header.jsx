import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted by chefs from all around the world.</p>
        <button>View Menu</button>
      </div>
    </header>
  );
};

export default Header;