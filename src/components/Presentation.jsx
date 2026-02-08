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

const TOTAL_SLIDES = 15;

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isSlideshowMode, setIsSlideshowMode] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true); // Add theme state

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
        // Add T key for theme toggle
        e.preventDefault();
        toggleTheme();
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
    <Slide15 />
  ];

  return (
    <div className={`presentation-container ${isSlideshowMode ? 'slideshow-mode' : ''} ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      {React.cloneElement(slides[currentSlide - 1], { isSlideshowMode, isDarkTheme })}

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
            <span>T Theme</span> {/* Add theme hint */}
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
            >
              ◀ Previous
            </button>

            <div className="slide-indicators">
              {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => goToSlide(i + 1)}
                  className={`slide-indicator ${currentSlide === i + 1 ? 'active' : ''}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === TOTAL_SLIDES}
              className="nav-button next-button"
            >
              Next ▶
            </button>

            <button
              onClick={toggleSlideshowMode}
              className="nav-button slideshow-button"
            >
              ⛶ Slideshow
            </button>

            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="nav-button theme-button"
              title={`Switch to ${isDarkTheme ? 'light' : 'dark'} theme`}
            >
              {isDarkTheme ? (
                <>
                  <i className="fas fa-sun"></i> Light
                </>
              ) : (
                <>
                  <i className="fas fa-moon"></i> Dark
                </>
              )}
            </button>
          </div>

          <div className="keyboard-hint">
            <span>← → Space Enter</span>
            <span style={{ margin: '0 10px', color: '#EE0000' }}>|</span>
            <span>F Slideshow</span>
            <span style={{ margin: '0 10px', color: '#EE0000' }}>|</span>
            <span>T Theme</span> {/* Add theme hint */}
          </div>
        </>
      )}
    </div>
  );
};

export default Presentation;