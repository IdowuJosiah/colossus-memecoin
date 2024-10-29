"use client"
import React, { useState } from 'react';
import './footer.scss';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const code = "8SuMAjoZeLGaaekNHP235Dv4soXsrcseFXefT3A9pump";

  const handleCopy = () => {
    console.log('clicked');
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    });
  };

  return (
    <div className='footer-section' id='contact'>
      <header className='footer-header'>Contact COLOSSUS</header>
      <span>Ready to do this? Let&apos;s get rich</span>
      <button className='copy-button' onClick={handleCopy}>COPY CODE</button>

      <span className={`tooltip ${copied ? 'show' : ''}`}>Copied to clipboard</span>
    </div>
  );
};

export default Footer;
