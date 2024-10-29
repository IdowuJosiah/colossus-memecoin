import React from 'react';
import './navbar.scss';

const NavigationBar = () => {
  return (
    <div className='navigation-bar'>
        <div className="navigation-content">
            <a href="#home">Home</a>
            <a href="#about">About Coin</a>
            <a href="#gallery">Images</a>
            <a href="#contact">Contact</a>
        </div>
    </div>
  );
}

export default NavigationBar;
