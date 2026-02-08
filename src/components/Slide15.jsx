import React from 'react';
import './Slide15.css';

const Slide15 = ({ isSlideshowMode, isDarkTheme = true }) => {
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
          <p className="header-subtitle">Synthèse finale</p>
          <h1 className="header-title">Conclusion</h1>
        </div>
        {/* Icon */}
        <div className="header-icon">
          <i className="fa-solid fa-flag-checkered"></i>
        </div>
      </div>
      
      {/* Decorative shield icon */}
      <div className="decorative-shield">
        <i className="fa-solid fa-shield-halved"></i>
      </div>
      
      {/* Main Content */}
      <div className="main-content-wrapper">
        {/* Center Content */}
        <div className="center-content">
          <div className="max-width-container">
            {/* Large Conclusion Text */}
            <div className="conclusion-text-container">
              <p className="conclusion-text">
                SELinux renforce la sécurité de Linux en contrôlant précisément les accès grâce aux 
                <span className="highlight-text"> modes</span>, 
                <span className="highlight-text"> rôles</span>, 
                <span className="highlight-text"> types</span>, 
                <span className="highlight-text"> utilisateurs</span>, 
                <span className="highlight-text"> niveaux</span> et 
                <span className="highlight-text"> booléens</span>, 
                offrant ainsi une protection avancée contre les attaques et les erreurs de configuration.
              </p>
              
              {/* Key Features Grid */}
              <div className="features-grid">
                <div className="feature-card protection">
                  <i className="fa-solid fa-shield-alt feature-icon"></i>
                  <h4 className="feature-title">Protection Avancée</h4>
                  <p className="feature-description">Contre les attaques complexes</p>
                </div>
                <div className="feature-card control">
                  <i className="fa-solid fa-sliders-h feature-icon"></i>
                  <h4 className="feature-title">Contrôle Fin</h4>
                  <p className="feature-description">Permissions granulaires</p>
                </div>
                <div className="feature-card configuration">
                  <i className="fa-solid fa-cogs feature-icon"></i>
                  <h4 className="feature-title">Configuration</h4>
                  <p className="feature-description">Réduction des erreurs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom dark bar */}
      <div className="bottom-bar">
        <p className="bottom-left-text">Présentation Sécurité Linux - Conclusion SELinux</p>
        <div className="slide-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
        </div>
        <p className="bottom-right-text">Folie 15</p>
      </div>
    </div>
  );
};

export default Slide15;