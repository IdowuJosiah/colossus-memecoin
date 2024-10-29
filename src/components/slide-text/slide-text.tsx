"use client"
import React, { useState, useEffect } from 'react';
import './slide-text.scss'

interface SlideOutWordsProps {
  words: string[]; // Array of words to animate
  onComplete?: () => void; // Optional callback when animation completes
}

const SlideOutWords: React.FC<SlideOutWordsProps> = ({ words, onComplete }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (isAnimating && activeIndex < words.length) {
      const timer = setTimeout(() => {
        setActiveIndex((prevIndex) => prevIndex + 1);
      }, 1000); // Adjust timing as needed
      return () => clearTimeout(timer);
    } else if (activeIndex >= words.length) {
      setIsAnimating(false);
      if (onComplete) {
        onComplete();
      }
    }
  }, [activeIndex, isAnimating, words.length, onComplete]);

  return (
    <div className='slide-out-words-container'>
      {words.map((word, index) => (
        <div key={index}>
          {index === activeIndex && <span>{word}</span>}
        </div>
      ))}
    </div>
  );
};

export default SlideOutWords;
