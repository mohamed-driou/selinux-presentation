import React from 'react';
import './Slide10.css';

const Slide10 = ({ isSlideshowMode, isDarkTheme = true }) => {
  return (
    <div className={`slide-container ${isSlideshowMode ? 'slideshow-mode' : ''} ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      {/* Background Pattern */}
      <div className="bg-grid"></div>
      
      {/* Red top bar */}
      <div className="top-bar"></div>
      
      {/* Header */}
      <div className="header">
        <div className="red-vertical-bar"></div>
        <div className="header-text">
          <p className="header-subtitle">Transition</p>
          <h1 className="header-title">Utilisateur et Niveau</h1>
        </div>
        {/* Icon */}
        <div className="header-icon">
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content-wrapper">
        {/* Full Center Content */}
        <div className="center-content">
          <div className="text-center">
            {/* Large Number */}
            <div className="large-number">
              <div className="number-text">4.</div>
            </div>
            
            {/* Large Title Text */}
            <div className="title-wrapper">
              <div className="main-title">
                UTILISATEUR ET NIVEAU
              </div>
              
              {/* Subtle shadow effect */}
              <div className="title-shadow">
                UTILISATEUR ET NIVEAU
              </div>
            </div>
            
            {/* Arrow indicator */}
            <div className="arrow-indicator">
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom dark bar */}
      <div className="bottom-bar">
        {/* Empty bottom bar as per original */}
      </div>
    </div>
  );
};

export default Slide10;