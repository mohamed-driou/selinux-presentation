import React from 'react';
import './Slide2.css';

const Slide2 = ({ isSlideshowMode, isDarkTheme = true }) => {
  return (
    <div className={`slide-container ${isSlideshowMode ? 'slideshow-mode' : ''} ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      {/* Background Pattern */}
      <div className="bg-grid"></div>
      
      {/* Red top bar */}
      <div className="top-bar"></div>
      
      {/* Header with slide2 specific class */}
      <div className="slide2-header">
        <div className="red-vertical-bar"></div>
        <div className="header-text">
          <p className="header-subtitle">Transition</p>
          <h1 className="header-title">Introduction</h1>
        </div>
        {/* Icon */}
        <div className="header-icon">
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content-wrapper">
        <div className="slide2-content">
          {/* Linux Icon - Ubuntu */}
          <div className="slide2-linux-icon">
            <i className="fab fa-ubuntu"></i>
          </div>
          
          {/* Center Content */}
          <div className="slide2-center">
            <div className="slide2-title-wrapper">
              <div className="slide2-main-title">
                LE SYSTÈME<br />SELINUX
              </div>
              
              <div className="slide2-title-shadow">
                LE SYSTÈME<br />SELINUX
              </div>
            </div>
            
            <div className="slide2-arrow-indicator">
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
          
          {/* Shield Icon */}
          <div className="slide2-shield-icon">
            <i className="fas fa-user-shield"></i>
          </div>
        </div>
      </div>
      
      {/* Bottom dark bar */}
      <div className="slide2-bottom-bar">
        {/* Empty bottom bar as per original */}
      </div>
    </div>
  );
};

export default Slide2;