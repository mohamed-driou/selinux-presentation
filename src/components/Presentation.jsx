import React, { useState, useEffect, useCallback } from 'react';
import './Presentation.css';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
import Slide5 from './Slide5';
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
  const [isSlideshowMode, setIsSlideshowMode] = useState(false);
  const totalSlides = 15;

  // Wrap functions with useCallback
  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide]);

  const goToSlide = useCallback((slideNumber) => {
    setCurrentSlide(slideNumber);
  }, []);

  const toggleSlideshowMode = () => {
    setIsSlideshowMode(!isSlideshowMode);
    if (!isSlideshowMode && document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (isSlideshowMode && document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape') {
        if (isSlideshowMode) {
          toggleSlideshowMode();
        }
      } else if (e.key === 'F5' || e.key === 'f') {
        toggleSlideshowMode();
      } else if (e.key >= '1' && e.key <= '9') {
        const slideNum = parseInt(e.key);
        if (slideNum <= totalSlides) {
          goToSlide(slideNum);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, totalSlides, isSlideshowMode, toggleSlideshowMode]);

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsSlideshowMode(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className={`presentation-container ${isSlideshowMode ? 'slideshow-mode' : ''}`}>
      {/* Render current slide */}
      {currentSlide === 1 && <Slide1 isSlideshowMode={isSlideshowMode} />}
      {currentSlide === 2 && <Slide2 isSlideshowMode={isSlideshowMode} />}
      {currentSlide === 3 && <Slide3 isSlideshowMode={isSlideshowMode} />}
      {currentSlide === 4 && <Slide4 isSlideshowMode={isSlideshowMode} />}
      {currentSlide === 5 && <Slide5 isSlideshowMode={isSlideshowMode} />}
      {currentSlide === 6 && <Slide6 isSlideshowMode={isSlideshowMode} />}
      {currentSlide === 7 && <Slide7 isSlideshowMode={isSlideshowMode} />}
      {currentSlide === 8 && <Slide8 isSlideshowMode={isSlideshowMode} />}
      {currentSlide === 9 && <Slide9 isSlideshowMode={isSlideshowMode} />}
      {currentSlide === 10 && <Slide10 isSlideshowMode={isSlideshowMode} />}
      {currentSlide === 11 && <Slide11 isSlideshowMode={isSlideshowMode} />}
      {currentSlide === 12 && <Slide12 isSlideshowMode={isSlideshowMode} />}
      {currentSlide === 13 && <Slide13 isSlideshowMode={isSlideshowMode} />}
      {currentSlide === 14 && <Slide14 isSlideshowMode={isSlideshowMode} />}
      {currentSlide === 15 && <Slide15 isSlideshowMode={isSlideshowMode} />}
      
      {/* ... other slides with isSlideshowMode prop */}
      
      {/* Slideshow Mode Overlay */}
      {isSlideshowMode && (
        <div className="slideshow-overlay">
          <div className="slideshow-timer">
            <span className="current-slide">{currentSlide}</span>
            <span className="total-slides">/{totalSlides}</span>
          </div>
          <div className="slideshow-help">
            <span>← → : Navigate</span>
            <span>ESC : Exit</span>
            <span>F : Fullscreen</span>
          </div>
        </div>
      )}
      
      {/* Navigation Buttons - Hidden in slideshow mode */}
      {!isSlideshowMode && (
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

          {/* Slideshow Button */}
          <button 
            onClick={toggleSlideshowMode}
            className="nav-button slideshow-button"
          >
            <i className="fas fa-expand"></i> Slideshow
          </button>
        </div>
      )}

      {/* Keyboard shortcut hint - Hidden in slideshow mode */}
      {!isSlideshowMode && (
        <div className="keyboard-hint">
          <span>Use ← → arrows, Space, or Enter to navigate</span>
          <span style={{ marginLeft: '10px', color: '#EE0000' }}>|</span>
          <span style={{ marginLeft: '10px' }}>F: Start Slideshow</span>
        </div>
      )}
    </div>
  );
};

export default Presentation;