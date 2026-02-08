import React from 'react';
import './Slide6.css';

const Slide6 = ({ isSlideshowMode, isDarkTheme = true }) => {
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
          <h1 className="header-title">Les Rôles</h1>
        </div>
        {/* Icon */}
        <div className="header-icon">
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content-wrapper">
        {/* Icons Container */}
        <div className="slide6-icons-container">
          {/* Left Icon */}
          <div className="slide6-left-icon">
            <i className="fas fa-user-tie"></i>
          </div>
          
          {/* Right Icon */}
          <div className="slide6-right-icon">
            <i className="fas fa-user-shield"></i>
          </div>
        </div>
        
        {/* Full Center Content */}
        <div className="center-content">
          <div className="text-center">
            {/* Large Number */}
            <div className="large-number">
              <div className="number-text">2.</div>
            </div>
            
            {/* Large Title Text */}
            <div className="title-wrapper">
              <div className="main-title">
                LES RÔLES
              </div>
              
              {/* Subtle shadow effect */}
              <div className="title-shadow">
                LES RÔLES
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

export default Slide6;