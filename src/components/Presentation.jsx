import React, { useState } from 'react';
import './Presentation.css';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
import Slide5 from './Slide5'; // Import more slides as you create them
import Slide6 from './Slide6';
import Slide7 from './Slide7';
import Slide8 from './Slide8';
import Slide9 from './Slide9';
import Slide10 from './Slide10';
import Slide11 from './Slide11';
import Slide12 from './Slide12';
import Slide13 from './Slide13';
import Slide14 from './Slide14';
import Slide15 from './Slide15';



const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 15; // Update this as you add more slides

  const nextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key >= '1' && e.key <= '9') {
        const slideNum = parseInt(e.key);
        if (slideNum <= totalSlides) {
          goToSlide(slideNum);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="presentation-container">
      {/* Render current slide */}
      {currentSlide === 1 && <Slide1 />}
      {currentSlide === 2 && <Slide2 />}
        {currentSlide === 3 && <Slide3 />}
        {currentSlide === 4 && <Slide4 />}
        {currentSlide === 5 && <Slide5 />}
        {currentSlide === 6 && <Slide6 />}
        {currentSlide === 7 && <Slide7 />}
        {currentSlide === 8 && <Slide8 />}
        {currentSlide === 9 && <Slide9 />}
        {currentSlide === 10 && <Slide10 />}
        {currentSlide === 11 && <Slide11 />}
        {currentSlide === 12 && <Slide12 />}
        {currentSlide === 13 && <Slide13 />}
        {currentSlide === 14 && <Slide14 />}
        {currentSlide === 15 && <Slide15 />}
      
      {/* Add more slides here */}

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 1}
          className="nav-button prev-button"
        >
          <i className="fas fa-chevron-left"></i> Previous
        </button>
        
        <div className="slide-indicators">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => goToSlide(index + 1)}
              className={`slide-indicator ${currentSlide === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        
        <button 
          onClick={nextSlide}
          disabled={currentSlide === totalSlides}
          className="nav-button next-button"
        >
          Next <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* Keyboard shortcut hint */}
      <div className="keyboard-hint">
        <span>Use ← → arrows or Space to navigate</span>
      </div>
    </div>
  );
};

export default Presentation;