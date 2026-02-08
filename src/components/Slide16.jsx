import React, { useEffect, useRef } from 'react';
import './Slide16.css';

const Slide16 = ({ isSlideshowMode, isDarkTheme = true }) => {
  const containerRef = useRef(null);

  // Trigger animation when slide becomes active
  useEffect(() => {
    if (containerRef.current && isSlideshowMode) {
      // Add active class to trigger animation
      const timeout = setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.classList.add('slide-active');
        }
      }, 50); // Small delay to ensure slide is rendered

      return () => clearTimeout(timeout);
    }
  }, [isSlideshowMode]);

  return (
    <div 
      ref={containerRef}
      className={`slide16-container ${isSlideshowMode ? 'slideshow-mode' : ''} ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}
    >
      {/* Background Pattern */}
      <div className="slide16-bg-grid"></div>
      
      {/* Red top bar */}
      <div className="slide16-top-bar"></div>
      
      {/* Header */}
      <div className="slide16-header">
        <div className="slide16-red-vertical-bar"></div>
        <div className="slide16-header-text">
          <p className="slide16-header-subtitle">Fin</p>
          <h1 className="slide16-header-title">Présentation Terminée</h1>
        </div>
        {/* Icon */}
        <div className="slide16-header-icon">
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="slide16-main-content-wrapper">
        {/* Full Center Content */}
        <div className="slide16-center-content">
          <div className="slide16-text-center">
            {/* HUGE 150px Thank You Text */}
            <div className="slide16-thankyou-wrapper">
              <div className="slide16-thankyou-title">
                MERCI POUR<br />VOTRE ATTENTION
              </div>
              
              {/* HUGE shadow effect */}
              <div className="slide16-thankyou-shadow">
                MERCI POUR<br />VOTRE ATTENTION
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom dark bar with special effect */}
      <div className="slide16-bottom-bar">
        {/* Empty bottom bar */}
      </div>
    </div>
  );
};

export default Slide16;