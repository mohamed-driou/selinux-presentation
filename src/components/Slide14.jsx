import React from 'react';
import './Slide14.css';

const Slide14 = ({ isSlideshowMode }) => {
  return (
    <div className={`slide-container ${isSlideshowMode ? 'slideshow-mode' : ''}`}>
      {/* Background Pattern */}
      <div className="bg-grid"></div>
      
      {/* Red top bar */}
      <div className="top-bar"></div>
      
      {/* Header */}
      <div className="header">
        <div className="red-vertical-bar"></div>
        <div className="header-text">
          <p className="header-subtitle">Transition</p>
          <h1 className="header-title">Conclusion</h1>
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
            {/* Large "CONCLUSION" Text */}
            <div className="title-wrapper">
              <div className="main-title-conclusion">
                CONCLUSION
              </div>
              
              {/* Subtle shadow effect */}
              <div className="title-shadow-conclusion">
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