import React from 'react';
import './Slide14.css';

const Slide14 = ({ isSlideshowMode, isDarkTheme = true }) => {
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
          <p className="header-subtitle">Summary</p>
          <h1 className="header-title">Key Takeaways</h1>
        </div>
        {/* Icon */}
        <div className="header-icon">
          <i className="fa-solid fa-flag-checkered"></i>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content-wrapper">
        {/* Full Center Content */}
        <div className="center-content">
          <div className="text-center">
            {/* Big Conclusion Text */}
            <div className="conclusion-wrapper">
              <div className="conclusion-title">
                CONCLUSION
              </div>
              
              {/* Subtle shadow effect */}
              <div className="conclusion-shadow">
                CONCLUSION
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

export default Slide14;