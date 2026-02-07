import React from 'react';
import './Slide13.css';

const Slide13 = () => {
  return (
    <div className="slide-container">
      {/* Background Pattern */}
      <div className="bg-grid"></div>
      
      {/* Red top bar */}
      <div className="top-bar"></div>
      
      {/* Main Content */}
      <div className="main-content-wrapper">
        {/* Header - Updated to match naming convention */}
        <div className="slide13-header">
          <div className="red-vertical-bar"></div>
          <div className="header-text">
            <p className="header-subtitle">Configuration dynamique</p>
            <h1 className="header-title">Booléens SELinux</h1>
          </div>
          {/* Icon */}
          <div className="header-icon">
            <i className="fa-solid fa-toggle-on"></i>
          </div>
        </div>
        
        {/* Content Area - Adjusted spacing */}
        <div className="content-area-adjusted">
          {/* Left Column - Moved UP */}
          <div className="left-column-moved-up">
            {/* Number box - Moved UP */}
            <div className="number-box-moved-up">
              <h2 className="number-box-heading">
                5. Ajout et suppression des entrées booléennes
              </h2>
            </div>
            
            {/* Separate info box - Moved UP */}
            <div className="info-box-moved-up">
              <div className="info-box-content">
                <span className="red-arrow">👉</span>
                <p className="info-box-text">Très utile pour autoriser temporairement certaines fonctionnalités (ex : accès réseau pour Apache)</p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Content - Adjusted */}
          <div className="right-column-adjusted">
            {/* Text - Moved up */}
            <div className="definition-section-ultra-compact">
              <h3 className="section-title-compact">Principe</h3>
              <div className="definition-content-compact">
                <p className="definition-text-compact">
                  Les booléens SELinux permettent d'activer ou désactiver certaines règles sans modifier les politiques.
                </p>
              </div>
            </div>
            
            {/* Examples Title - Moved up */}
            <h3 className="examples-title-compact">Commandes :</h3>
            
            {/* Commands Grid - Moved up */}
            <div className="commands-grid-compact">
              {/* Afficher les booléens */}
              <div className="command-card-compact list-command">
                <div className="command-icon-wrapper">
                  <i className="fa-solid fa-list"></i>
                </div>
                <div className="command-content">
                  <div className="command-header-compact">
                    <h4 className="command-name">Afficher les booléens</h4>
                    <span className="command-tag list-tag">getsebool</span>
                  </div>
                  <div className="command-code-compact">
                    setsebool -P httpd_can_network_connect on
                  </div>
                </div>
              </div>
              
              {/* Activer un booléen */}
              <div className="command-card-compact enable-command">
                <div className="command-icon-wrapper">
                  <i className="fa-solid fa-toggle-on"></i>
                </div>
                <div className="command-content">
                  <div className="command-header-compact">
                    <h4 className="command-name">Activer un booléen</h4>
                    <span className="command-tag enable-tag">setsebool</span>
                  </div>
                  <div className="command-code-compact">
                    getsebool -a
                  </div>
                </div>
              </div>
            </div>
            
            {/* Désactiver un booléen - Full width - Moved up */}
            <div className="command-card-full-compact disable-command">
              <div className="command-icon-wrapper">
                <i className="fa-solid fa-toggle-off"></i>
              </div>
              <div className="command-content">
                <div className="command-header-compact">
                  <h4 className="command-name">Désactiver un booléen</h4>
                  <span className="command-tag disable-tag">setsebool</span>
                </div>
                <div className="command-code-compact">
                  setsebool -P httpd_can_network_connect off
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom dark bar */}
      <div className="bottom-bar">
        <p className="bottom-left-text">Présentation Sécurité Linux - Booléens SELinux</p>
        <div className="slide-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <p className="bottom-right-text">Folie 13</p>
      </div>
    </div>
  );
};

export default Slide13;