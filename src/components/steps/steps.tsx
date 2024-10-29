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
    <div className="steps-section">
      <div className="step-line"></div>
      <div className="step-container">
        <div className="step"></div>
      </div>
      <div className="step-container right">
        <div className="step"></div>
      </div>
      <div className="step-container">
        <div className="step"></div>
      </div>
      <div className="step-container right">
        <div className="step"></div>
      </div>
    </div>
  );
};

export default Steps;
