import React from 'react';
import './Slide7.css';

const Slide7 = () => {
  return (
    <div className="slide-container">
      {/* Background Pattern */}
      <div className="bg-grid"></div>
      
      {/* Red top bar */}
      <div className="top-bar"></div>
      
      {/* Main Content */}
      <div className="main-content-wrapper">
        {/* Header - Updated class name to avoid conflicts */}
        <div className="slide7-header">
          <div className="red-vertical-bar"></div>
          <div className="header-text">
            <p className="header-subtitle">Contrôle d'accès</p>
            <h1 className="header-title">Les rôles de SELinux</h1>
          </div>
          {/* Icon */}
          <div className="header-icon">
            <i className="fa-solid fa-user-shield"></i>
          </div>
        </div>
        
        {/* Content Area - Adjusted spacing */}
        <div className="content-area-adjusted">
          {/* Left Column: Number */}
          <div className="left-column-adjusted">
            <div className="number-box">
              <div>
                <h2 className="number-box-heading">
                  2. Les rôles (Roles)
                </h2>
              </div>
            </div>
          </div>
          
          {/* Right Column: Content */}
          <div className="right-column-adjusted">
            {/* Definition moved up */}
            <div className="definition-section-adjusted">
              <h3 className="section-title">Principe</h3>
              <div className="definition-content">
                <p className="definition-text">
                  Les rôles définissent ce qu'un utilisateur est autorisé à faire dans le système.
                </p>
              </div>
            </div>
            
            {/* Examples Title - moved up */}
            <h3 className="examples-title-adjusted">Exemples :</h3>
            
            {/* Roles Grid - moved up */}
            <div className="roles-grid-adjusted">
              {/* system_r */}
              <div className="role-card system-role">
                <div className="role-icon-wrapper">
                  <i className="fa-solid fa-server"></i>
                </div>
                <div className="role-content">
                  <div className="role-header">
                    <h4 className="role-name">system_r</h4>
                    <span className="role-tag system-tag">service système</span>
                  </div>
                  <p className="role-description">
                    rôle pour les services système
                  </p>
                </div>
              </div>
              
              {/* user_r */}
              <div className="role-card user-role">
                <div className="role-icon-wrapper">
                  <i className="fa-solid fa-user"></i>
                </div>
                <div className="role-content">
                  <div className="role-header">
                    <h4 className="role-name">user_r</h4>
                    <span className="role-tag user-tag">utilisateur normal</span>
                  </div>
                  <p className="role-description">
                    rôle pour les utilisateurs normaux
                  </p>
                </div>
              </div>
              
              {/* staff_r */}
              <div className="role-card staff-role">
                <div className="role-icon-wrapper">
                  <i className="fa-solid fa-user-gear"></i>
                </div>
                <div className="role-content">
                  <div className="role-header">
                    <h4 className="role-name">staff_r</h4>
                    <span className="role-tag staff-tag">privilèges avancés</span>
                  </div>
                  <p className="role-description">
                    rôle avec plus de privilèges
                  </p>
                </div>
              </div>
              
              {/* admin_r */}
              <div className="role-card admin-role">
                <div className="role-icon-wrapper">
                  <i className="fa-solid fa-user-tie"></i>
                </div>
                <div className="role-content">
                  <div className="role-header">
                    <h4 className="role-name">admin_r</h4>
                    <span className="role-tag admin-tag">administration complète</span>
                  </div>
                  <p className="role-description">
                    rôle avec plus de privilèges
                  </p>
                </div>
              </div>
            </div>
            
            {/* Key Point - adjusted position */}
            <div className="key-point-adjusted">
              <div className="key-point-content">
                <span className="red-arrow">👉</span>
                <p className="key-point-text">Un utilisateur ne peut exécuter que les domaines autorisés par son rôle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom dark bar */}
      <div className="bottom-bar">
        <p className="bottom-left-text">Présentation Sécurité Linux - Rôles SELinux</p>
        <div className="slide-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <p className="bottom-right-text">Folie 7</p>
      </div>
    </div>
  );
};

export default Slide7;