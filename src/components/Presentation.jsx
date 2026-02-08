import React, { useState, useEffect, useCallback } from 'react';
import './Presentation.css';

// Import all your slides
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
import Slide16 from './Slide16';

const TOTAL_SLIDES = 16;

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isSlideshowMode, setIsSlideshowMode] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  /* =====================
     Navigation callbacks
     ===================== */

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < TOTAL_SLIDES ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 1 ? prev - 1 : prev));
  }, []);

  const goToSlide = useCallback((slide) => {
    setCurrentSlide(slide);
  }, []);

  /* =====================
     Theme toggle
     ===================== */

  const toggleTheme = useCallback(() => {
    setIsDarkTheme((prev) => !prev);
  }, []);

  /* =====================
     Fullscreen / Slideshow
     ===================== */

  const toggleSlideshowMode = useCallback(() => {
    if (!document.fullscreenElement) {
      try {
        document.documentElement.requestFullscreen();
        setIsSlideshowMode(true);
      } catch (err) {
        console.warn('Fullscreen denied:', err);
        setIsSlideshowMode(true);
      }
    } else {
      try {
        document.exitFullscreen();
      } catch (err) {
        console.warn('Exit fullscreen denied:', err);
      }
      setIsSlideshowMode(false);
    }
  }, []);

  /* =====================
     Progress bar animation on slide change
     ===================== */

  useEffect(() => {
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
      progressFill.classList.add('changing');
      const timer = setTimeout(() => {
        progressFill.classList.remove('changing');
      }, 500);

      // Add complete class when at 100%
      if (currentSlide === TOTAL_SLIDES) {
        progressFill.classList.add('complete');
      } else {
        progressFill.classList.remove('complete');
      }

      return () => clearTimeout(timer);
    }
  }, [currentSlide]);

  /* =====================
     Keyboard navigation
     ===================== */

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape' && isSlideshowMode) {
        toggleSlideshowMode();
      } else if (e.key === 'F5' || e.key.toLowerCase() === 'f') {
        e.preventDefault();
        toggleSlideshowMode();
      } else if (e.key >= '1' && e.key <= '9') {
        const slideNum = Number(e.key);
        if (slideNum <= TOTAL_SLIDES) {
          goToSlide(slideNum);
        }
      } else if (e.key.toLowerCase() === 't') {
        e.preventDefault();
        toggleTheme();
      } else if (e.key === '0') {
        // Go to last slide (slide 16)
        goToSlide(TOTAL_SLIDES);
      } else if (e.key.toLowerCase() === 'p') {
        // P key to go to progress bar (for accessibility)
        e.preventDefault();
        const progressBar = document.querySelector('.progress-bar-container');
        if (progressBar) {
          progressBar.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, toggleSlideshowMode, isSlideshowMode, toggleTheme]);

  /* =====================
     Fullscreen exit sync
     ===================== */

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsSlideshowMode(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () =>
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  /* =====================
     Theme class on body
     ===================== */

  useEffect(() => {
    const body = document.body;
    if (isDarkTheme) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  /* =====================
     Slides list
     ===================== */

  const slides = [
    <Slide1 />,
    <Slide2 />,
    <Slide3 />,
    <Slide4 />,
    <Slide5 />,
    <Slide6 />,
    <Slide7 />,
    <Slide8 />,
    <Slide9 />,
    <Slide10 />,
    <Slide11 />,
    <Slide12 />,
    <Slide13 />,
    <Slide14 />,
    <Slide15 />,
    <Slide16 />
  ];

  // Calculate progress percentage
  const progressPercentage = Math.round((currentSlide / TOTAL_SLIDES) * 100);
  const progressWidth = (currentSlide / TOTAL_SLIDES) * 100;

  return (
    <div className={`presentation-container ${isSlideshowMode ? 'slideshow-mode' : ''} ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      {React.cloneElement(slides[currentSlide - 1], { isSlideshowMode, isDarkTheme })}

      {/* Progress Bar - Visible in both normal and slideshow modes */}
      <div 
  className="progress-bar-container floating"
  tabIndex={-1}
>
        <div className="progress-header">
          <span className="progress-title">
            {isSlideshowMode ? 'Progress' : 'Presentation Progress'}
          </span>
          <span className="progress-percentage">
            {progressPercentage}%
          </span>
        </div>
        <div className="progress-bar">
          <div 
            className={`progress-fill ${currentSlide === TOTAL_SLIDES ? 'complete' : ''}`}
            style={{ width: `${progressWidth}%` }}
            aria-label={`Progress: ${progressPercentage}% complete, Slide ${currentSlide} of ${TOTAL_SLIDES}`}
          />
        </div>
        {!isSlideshowMode && (
          <div className="progress-info">
            <span>Slide {currentSlide} of {TOTAL_SLIDES}</span>
            <span>
              {progressPercentage}% Complete
            </span>
          </div>
        )}
      </div>

      {/* Slideshow overlay */}
      {isSlideshowMode && (
        <div className="slideshow-overlay">
          <div className="slideshow-timer">
            <span className="current-slide">{currentSlide}</span>
            <span className="total-slides">/{TOTAL_SLIDES}</span>
          </div>
          <div className="slideshow-help">
            <span>← → Navigate</span>
            <span>ESC Exit</span>
            <span>F Fullscreen</span>
            <span>T Theme</span>
          </div>
        </div>
      )}

      {/* Controls (hidden in slideshow mode) */}
      {!isSlideshowMode && (
        <>
          <div className="navigation-buttons">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 1}
              className="nav-button prev-button"
              aria-label="Go to previous slide"
            >
              <span className="nav-button-icon">◀</span>
              <span className="nav-button-text">Previous</span>
            </button>

            <div className="slide-indicators" role="tablist" aria-label="Slide navigation">
              {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => goToSlide(i + 1)}
                  className={`slide-indicator ${currentSlide === i + 1 ? 'active' : ''}`}
                  role="tab"
                  aria-selected={currentSlide === i + 1}
                  aria-label={`Go to slide ${i + 1}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === TOTAL_SLIDES}
              className="nav-button next-button"
              aria-label="Go to next slide"
            >
              <span className="nav-button-text">Next</span>
              <span className="nav-button-icon">▶</span>
            </button>

            <button
              onClick={toggleSlideshowMode}
              className="nav-button slideshow-button"
              aria-label="Enter slideshow mode"
            >
              <span className="nav-button-icon">⛶</span>
              <span className="nav-button-text">Slideshow</span>
            </button>

            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="nav-button theme-button"
              aria-label={`Switch to ${isDarkTheme ? 'light' : 'dark'} theme`}
              title={`Switch to ${isDarkTheme ? 'light' : 'dark'} theme`}
            >
              {isDarkTheme ? (
                <>
                  <span className="nav-button-icon">
                    <i className="fas fa-sun"></i>
                  </span>
                  <span className="nav-button-text">Light</span>
                </>
              ) : (
                <>
                  <span className="nav-button-icon">
                    <i className="fas fa-moon"></i>
                  </span>
                  <span className="nav-button-text">Dark</span>
                </>
              )}
            </button>
          </div>

          <div className="keyboard-hint">
            <span>← → Space Enter: Navigate</span>
            <span style={{ margin: '0 10px', color: '#EE0000' }}>|</span>
            <span>F: Slideshow</span>
            <span style={{ margin: '0 10px', color: '#EE0000' }}>|</span>
            <span>T: Theme</span>
            <span style={{ margin: '0 10px', color: '#EE0000' }}>|</span>
            <span>P: Focus Progress</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Presentation;