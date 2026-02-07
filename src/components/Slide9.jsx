import React from 'react';
import './Slide9.css';

const Slide9 = () => {
  return (
    <div className="slide-container">
      {/* Background Pattern */}
      <div className="bg-grid"></div>
      
      {/* Red top bar */}
      <div className="top-bar"></div>
      
      {/* Main Content */}
      <div className="main-content-wrapper">
        {/* Header - Updated to match Slide7 naming convention */}
        <div className="slide9-header">
          <div className="red-vertical-bar"></div>
          <div className="header-text">
            <p className="header-subtitle">Type Enforcement</p>
            <h1 className="header-title">Les types de SELinux</h1>
          </div>
          {/* Icon */}
          <div className="header-icon">
            <i className="fa-solid fa-tags"></i>
          </div>
        </div>
        
        {/* Content Area - Adjusted spacing */}
        <div className="content-area-adjusted">
          {/* Left Column: Number */}
          <div className="left-column-adjusted">
            <div className="number-box">
              <div>
                <h2 className="number-box-heading">
                  3. Les types (Types)
                </h2>
              </div>
            </div>
          </div>
          
          {/* Right Column: Content */}
          <div className="right-column-adjusted">
            {/* Definition - Moved up */}
            <div className="definition-section-compact">
              <h3 className="section-title-compact">Principe</h3>
              <div className="definition-content-compact">
                <p className="definition-text-compact">
                  Les types sont au cœur de SELinux (Type Enforcement).
                </p>
                <p className="definition-text-compact">
                  Chaque fichier, processus ou ressource possède un type.
                </p>
                <p className="definition-text-compact">
                  Les règles SELinux définissent quel type peut accéder à quel autre type.
                </p>
              </div>
            </div>
            
            {/* Examples Title - Moved up */}
            <h3 className="examples-title-compact">Exemples :</h3>
            
            {/* Types Grid - Moved up */}
            <div className="types-grid-compact">
              {/* httpd_t */}
              <div className="type-card process-type">
                <div className="type-icon-wrapper">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <div className="type-content">
                  <div className="type-header">
                    <h4 className="type-name">httpd_t</h4>
                    <span className="type-tag process-tag">processus</span>
                  </div>
                  <p className="type-description">
                    processus du serveur web
                  </p>
                </div>
              </div>
              
              {/* httpd_sys_content_t */}
              <div className="type-card file-type">
                <div className="type-icon-wrapper">
                  <i className="fa-solid fa-file"></i>
                </div>
                <div className="type-content">
                  <div className="type-header">
                    <h4 className="type-name">httpd_sys_content_t</h4>
                    <span className="type-tag file-tag">fichier</span>
                  </div>
                  <p className="type-description">
                    fichiers accessibles par Apache
                  </p>
                </div>
              </div>
            </div>
            
            {/* Key Point - Adjusted position */}
            <div className="key-point-adjusted">
              <div className="key-point-content">
                <span className="red-arrow">👉</span>
                <p className="key-point-text">Même si les permissions Linux sont correctes, SELinux peut bloquer l'accès si les types ne correspondent pas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom dark bar */}
      <div className="bottom-bar">
        <p className="bottom-left-text">Présentation Sécurité Linux - Types SELinux</p>
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
        <p className="bottom-right-text">Folie 9</p>
      </div>
    </div>
  );
};

export default Slide9;