import React from 'react';
import './Slide1.css';

const Slide1 = ({ isSlideshowMode }) => {
  return (
    <div className={`slide-container ${isSlideshowMode ? 'slideshow-mode' : ''}`}>
      {/* Background Pattern */}
      <div className="bg-grid"></div>
      
      {/* Red top bar */}
      <div className="top-bar"></div>
      
      {/* Decorative Linux icon */}
      <div className="linux-icon">
        <i className="fab fa-linux"></i>
      </div>
      
      {/* Decorative shield icon */}
      <div className="shield-icon">
        <i className="fas fa-shield-halved"></i>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        {/* Title Section */}
        <div className="title-section">
          <div className="title-flex">
            <div className="red-bar"></div>
            <h1 className="main-title">SELINUX</h1>
          </div>
          <p className="subtitle">Security-Enhanced Linux</p>
        </div>
        
        {/* Subtitle */}
        <div className="slide-subtitle">
          <p className="subtitle-text">Système de sécurité obligatoire pour Linux</p>
        </div>
        
        {/* Main Topics Grid */}
        <div className="topics-grid">
          {/* Column 1 */}
          <div className="topic-column">
            <div className="topic-card">
              <div className="card-header">
                <div className="icon-circle green">
                  <i className="fas fa-toggle-on"></i>
                </div>
                <h3 className="card-title">Les modes</h3>
              </div>
              <p className="card-text">Enforcing, Permissive, Disabled</p>
            </div>
            
            <div className="topic-card">
              <div className="card-header">
                <div className="icon-circle red">
                  <i className="fas fa-user-tag"></i>
                </div>
                <h3 className="card-title">Les rôles</h3>
              </div>
              <p className="card-text">Contrôle d'accès par rôle (RBAC)</p>
            </div>
          </div>
          
          {/* Column 2 */}
          <div className="topic-column">
            <div className="topic-card">
              <div className="card-header">
                <div className="icon-circle blue">
                  <i className="fas fa-tag"></i>
                </div>
                <h3 className="card-title">Les types</h3>
              </div>
              <p className="card-text">Type Enforcement (TE)</p>
            </div>
            
            <div className="topic-card">
              <div className="card-header">
                <div className="icon-circle yellow">
                  <i className="fas fa-user-group"></i>
                </div>
                <h3 className="card-title">Utilisateur et niveau</h3>
              </div>
              <p className="card-text">Multi-Level Security (MLS)</p>
            </div>
          </div>
          
          {/* Column 3 */}
          <div className="topic-column">
            <div className="topic-card">
              <div className="card-header">
                <div className="icon-circle purple">
                  <i className="fas fa-toggle-off"></i>
                </div>
                <h3 className="card-title">Booléens</h3>
              </div>
              <p className="card-text">Ajout et suppression</p>
            </div>
            
            {/* Empty space for symmetry */}
            <div className="placeholder-card"></div>
          </div>
        </div>
        
        {/* Bottom Info */}
        <div className="bottom-info">
          <div className="info-box">
            <i className="fas fa-triangle-exclamation warning-icon"></i>
            <p className="info-text">Système de sécurité intégré au noyau Linux</p>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="bottom-bar">
        <p className="bar-text">Présentation Sécurité Linux - Introduction SELinux</p>
        <div className="slide-dots">
          <span className="dot active"></span>
          {[...Array(8)].map((_, i) => (
            <span key={i} className="dot"></span>
          ))}
        </div>
        <p className="bar-text">Folie 1</p>
      </div>
    </div>
  );
};

export default Slide1;