import React from 'react';
import './Slide11.css';


const Slide11 = ({ isSlideshowMode }) => {
  return (
    <div className={`slide-container ${isSlideshowMode ? 'slideshow-mode' : ''}`}>
      {/* Background Pattern */}
      <div className="bg-grid"></div>
      
      {/* Red top bar */}
      <div className="top-bar"></div>
      
      {/* Main Content */}
      <div className="main-content-wrapper">
        {/* Header - Updated to match naming convention */}
        <div className="slide11-header">
          <div className="red-vertical-bar"></div>
          <div className="header-text">
            <p className="header-subtitle">Multi-Level Security</p>
            <h1 className="header-title">Utilisateur et niveau</h1>
          </div>
          {/* Icon */}
          <div className="header-icon">
            <i className="fa-solid fa-user-shield"></i>
          </div>
        </div>
        
        {/* Content Area - Adjusted spacing */}
        <div className="content-area-adjusted">
          {/* Left Column - Adjusted */}
          <div className="left-column-adjusted">
            {/* Number box - Moved up */}
            <div className="number-box-adjusted">
              <h2 className="number-box-heading-adjusted">
                4. Utilisateur et niveau (User & Level)
              </h2>
            </div>
            
            {/* Separate info box - Adjusted position */}
            <div className="info-box-adjusted">
              <div className="info-box-content">
                <span className="red-arrow">👉</span>
                <p className="info-box-text">Cela permet de classifier les données selon leur niveau de confidentialité.</p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Content - Adjusted */}
          <div className="right-column-adjusted">
            {/* Text */}
            <div className="definition-section-compact">
              <h3 className="section-title-compact">Principe</h3>
              <div className="definition-content-compact">
                <p className="definition-text-compact">
                  SELinux ajoute une couche de sécurité supplémentaire aux utilisateurs Linux :
                </p>
                <ul className="definition-list-compact">
                  <li className="definition-list-item-compact">
                    <span className="list-bullet">•</span>
                    <span><strong>Utilisateur SELinux</strong> : associé à un ou plusieurs rôles.</span>
                  </li>
                  <li className="definition-list-item-compact">
                    <span className="list-bullet">•</span>
                    <span><strong>Niveau de sécurité (MLS/MCS)</strong> : classification des données.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Examples Title - Moved up */}
            <h3 className="examples-title-compact">Exemples de niveaux :</h3>
            
            {/* Levels Grid - Moved up */}
            <div className="levels-grid-compact">
              {/* Niveau standard */}
              <div className="level-card standard-level">
                <div className="level-icon-wrapper">
                  <i className="fa-solid fa-layer-group"></i>
                </div>
                <div className="level-content">
                  <div className="level-header">
                    <h4 className="level-name">s0</h4>
                    <span className="level-tag standard-tag">niveau standard</span>
                  </div>
                  <p className="level-description">
                    Niveau de sécurité de base, sans classification
                  </p>
                </div>
              </div>
              
              {/* Niveau avec catégories */}
              <div className="level-card classified-level">
                <div className="level-icon-wrapper">
                  <i className="fa-solid fa-lock"></i>
                </div>
                <div className="level-content">
                  <div className="level-header">
                    <h4 className="level-name">s0:c1,c2</h4>
                    <span className="level-tag classified-tag">classification</span>
                  </div>
                  <p className="level-description">
                    Niveau avec catégories spécifiques (c1, c2)
                  </p>
                </div>
              </div>
            </div>
            
            {/* Environment border box - Adjusted position */}
            <div className="environment-box-compact">
              <div className="environment-box-content">
                <span className="environment-icon">🏛️</span>
                <div>
                  <p className="environment-title"><strong>Utilisé surtout dans les environnements sensibles :</strong></p>
                  <div className="environment-tags">
                    <div className="environment-tag">
                      <i className="fa-solid fa-helmet-safety"></i>
                      <span className="environment-tag-text">Militaire</span>
                    </div>
                    <div className="environment-tag">
                      <i className="fa-solid fa-landmark"></i>
                      <span className="environment-tag-text">Gouvernemental</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom dark bar */}
      <div className="bottom-bar">
        <p className="bottom-left-text">Présentation Sécurité Linux - Utilisateur et niveau SELinux</p>
        <div className="slide-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <p className="bottom-right-text">Folie 11</p>
      </div>
    </div>
  );
};

export default Slide11;