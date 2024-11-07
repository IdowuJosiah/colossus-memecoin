"use client"
import React, { useState } from 'react';
import './footer.scss';
// import { FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaTelegramPlane } from 'react-icons/fa';
import Image from 'next/image';
import Dex from '../../../public/dex-screener-seeklogo.png'

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
      <header className='footer-header'>Get some COLOSSUS here</header>
      <span>Ready to do this? Let&apos;s get rich</span>
      <button className='copy-button' onClick={handleCopy}>CONTRACT ADDRESS</button>
      <div className="footer-icons">
          <div className="links">
              <a href="https://x.com/colossusctosol" className="">
                  <FaXTwitter/>
              </a>
          </div>
          <div className="links">
              <a href="https://t.me/ColossusPortalcto" className="">
                  <FaTelegramPlane />
              </a>
          </div>
          <div className="links">
              <a href="https://dexscreener.com/solana/8wgy9ke3yatcvoiw4engaxvukpqr2pmvhzcmyzavlbke" className="">
                  <Image src={Dex} alt=''/>
              </a>
          </div>
      </div>

      <span className={`tooltip ${copied ? 'show' : ''}`}>Copied to clipboard</span>
    </div>
  );
};

export default Footer;
