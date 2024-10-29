"use client"
import React, { useEffect, useRef, useState } from 'react';
import './slide-text.scss';

interface SlideOutWordsProps {
  words: string[]; // Array of words to animate
  onComplete?: () => void; // Optional callback when animation completes
}

const SlideOutWords: React.FC<SlideOutWordsProps> = ({ words, onComplete }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const elementData = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isAnimating && activeIndex < words.length) {
      setAnimate(true);
      const timer = setTimeout(() => {
        setActiveIndex((prevIndex) => prevIndex + 1);
        setAnimate(false);
      }, 2000); // Adjust timing as needed
      return () => clearTimeout(timer);
    } else if (activeIndex >= words.length) {
      setIsAnimating(false);
      if (onComplete) {
        onComplete();
      }
    }
  }, [activeIndex, isAnimating, words.length, onComplete]);

  useEffect(() => {
    if (elementData.current) {
      elementData.current.style.setProperty('--outline-width', `${elementData.current.clientWidth + 1}px`);
    }
  }, [words, activeIndex]);

  return (
   <section className='slide-out-section'>
     <div className="slide-out-words-container">
      {words.map((word, index) => (
        <div
          key={index}
          ref={(el) => {
            if (index === activeIndex) {
              elementData.current = el;
            }
          }}
          className="text-outline"
        >
          {index === activeIndex && (
            <>
              <span className="outline-text bg-text">{word}</span>
              <div className="outline-text main-text">
                <div className={`span-text ${animate ? 'animate' : ''}`}>
                  <span>{word}</span>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
   </section>
  );
};

export default SlideOutWords;
