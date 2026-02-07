import React from 'react';
import './Slide5.css';

const Slide5 = () => {
  return (
    <div className="slide-container">
      {/* Background Grid */}
      <div className="bg-grid"></div>
      
      {/* Red Top Bar */}
      <div className="top-bar"></div>
      
      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div className="red-vertical-bar"></div>
          <div className="header-text">
            <p className="header-subtitle">Modes de fonctionnement</p>
            <h1 className="header-title">Les modes de SELinux</h1>
          </div>
          <div className="header-icon">
            <i className="fa-solid fa-toggle-on"></i>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="content-area">
          {/* Left Column: Title */}
          <div className="left-column">
            <div className="title-card">
              <h2 className="title-text">1. SELinux fonctionne selon trois modes :</h2>
            </div>
          </div>
          
          {/* Right Column: Modes */}
          <div className="right-column">
            {/* Enforcing Mode */}
            <div className="mode-card enforcing">
              <div className="mode-icon">
                <i className="fa-solid fa-lock"></i>
              </div>
              <div className="mode-content">
                <div className="mode-header">
                  <h3 className="mode-title">Enforcing</h3>
                  <span className="mode-badge enforcing-badge">Mode actif</span>
                </div>
                <p className="mode-description">
                  <span className="highlight-arrow">👉</span> Le mode actif : les règles de sécurité sont appliquées et toute action non autorisée est bloquée.
                </p>
              </div>
            </div>
            
            {/* Permissive Mode */}
            <div className="mode-card permissive">
              <div className="mode-icon">
                <i className="fa-solid fa-triangle-exclamation"></i>
              </div>
              <div className="mode-content">
                <div className="mode-header">
                  <h3 className="mode-title">Permissive</h3>
                  <span className="mode-badge permissive-badge">Journalisation</span>
                </div>
                <p className="mode-description">
                  <span className="highlight-arrow">👉</span> Les règles ne sont pas bloquantes, mais les violations sont enregistrées dans les logs (utile pour le test et le diagnostic).
                </p>
              </div>
            </div>
            
            {/* Disabled Mode */}
            <div className="mode-card disabled">
              <div className="mode-icon">
                <i className="fa-solid fa-power-off"></i>
              </div>
              <div className="mode-content">
                <div className="mode-header">
                  <h3 className="mode-title">Disabled</h3>
                  <span className="mode-badge disabled-badge">Désactivé</span>
                </div>
                <p className="mode-description">
                  <span className="highlight-arrow">👉</span> SELinux est totalement désactivé (non recommandé pour des raisons de sécurité).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bottom-bar">
        <p className="bottom-left-text">Présentation Sécurité Linux - Modes SELinux</p>
        <div className="slide-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <p className="bottom-right-text">Folie 5</p>
      </div>
    </div>
  );
};

export default Slide5;