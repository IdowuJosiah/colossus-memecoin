"use client"
import React, { useEffect } from 'react';
import './steps.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Steps = () => {
  useEffect(() => {
    gsap.utils.toArray('.step-container').forEach((container) => {
      const element = container as HTMLElement; // TypeScript cast to HTMLElement
      const direction = element.classList.contains('right') ? '100' : '-100';

      gsap.fromTo(
        element,
        { x: direction, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          duration: 0.5,
          ease: 'power2.out',
        }
      );
    });
  }, []);

  return (
      <div className="step-section-header">
          <div className="step-section-header-overlay">

          </div>
          <div className="step-section-header-image-backdrop">
              <img src="/GbEioERbQAAEH3P.jpeg"/>
          </div>
          <div className="steps-section">
              <div className="step-line">

              </div>
              <div className="step-container">
                  <div className="step">
                      <div className="career-info-container">
                          <ul className="career-info-path">
                              <li className="step-header" style={{listStyle:"none"}}> Create a Wallet</li>
                              <li style={{listStyle:"none"}} className="mid">Download Phantom or your preferred wallet from the App Store or Google Play Store for free. For desktop users, download the Google Chrome extension by visiting the Phantom app website.</li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="step-container right">
                  <div className="step">
                      <div className="career-info-container  second">
                          <ul className = 'career-info-path'>
                              <li className="step-header" style={{listStyle:"none"}}>GET SOME SOL</li>
                              <li className="mid">Ensure you have SOL in your wallet to swap for $COLOSSUS. If you don’t have any SOL, you can purchase SOL from an exchange or use a cross-chain swap service to send SOL to your wallet.</li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="step-container">
                  <div className="step">
                      <div className="career-info-container">
                          <ul className = 'career-info-path'>
                              <li className="step-header" style={{listStyle:"none"}}> Go to <span><a style={{textDecoration:"none"}} href="https://jup.ag/">Jup.ag</a></span></li>
                              <li className="mid">Visit Jup.ag in Google Chrome or use the browser within your Phantom app. Connect your wallet, paste the $COLOSSUS token address into Jupiter, and confirm the swap. When prompted by Phantom for a wallet signature, approve it.</li>

                          </ul>
                      </div>
                  </div>
              </div>
              <div className="step-container right">
                  <div className="step">
                      <div className="career-info-container second">
                          <ul className="career-info-path">
                              <li className="step-header" style={{listStyle:"none"}}> SWAP</li>
                              <li className="mid">Download Phantom or your preferred wallet from the App Store or Google Play Store for free. For desktop users, download the Google Chrome extension by visiting the Phantom app website.</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Steps;
