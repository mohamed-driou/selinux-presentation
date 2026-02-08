import React from 'react';
import './Slide3.css';

const Slide3 = ({ isSlideshowMode, isDarkTheme = true }) => {
  return (
    <div className={`slide-container ${isSlideshowMode ? 'slideshow-mode' : ''} ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      {/* Background Grid */}
      <div className="bg-grid"></div>
      
      {/* Red Top Bar */}
      <div className="top-bar"></div>
      
      {/* Linux Icon Background */}
      <div className="linux-icon">
        <i className="fab fa-linux"></i>
      </div>
      
      {/* Shield Icon Background */}
      <div className="shield-icon">
        <i className="fas fa-shield-halved"></i>
      </div>
      
      {/* Header */}
      <div className="header">
        <div className="red-vertical-bar"></div>
        <div className="header-title-wrapper">
          <h1 className="header-main-title">Présenter le système SElinux</h1>
        </div>
        <div className="header-icon">
          <i className="fab fa-linux"></i>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content-container">
        <div className="content-card">
          {/* Red circle decoration */}
          <div className="red-circle-decoration"></div>
          
          {/* Card Header with Icon */}
          <div className="card-header-section">
            <div className="card-icon-wrapper">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="card-title-section">
              <h2 className="card-main-title">
                SELinux (Security-Enhanced Linux):
              </h2>
            </div>
          </div>
          
          {/* Content Box */}
          <div className="content-box">
            <p className="content-text">
              est un mécanisme de sécurité intégré au noyau Linux. Il renforce la sécurité du système en appliquant un <strong className="highlight-text">contrôle d'accès obligatoire (MAC)</strong> même pour l'utilisateur root.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bottom-bar">
        <p className="bottom-left-text">Présentation Sécurité Linux - Rôles SELinux</p>
        <div className="slide-dots">
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <p className="bottom-right-text">Folie 3</p>
      </div>
    </div>
  );
};

export default Slide3;