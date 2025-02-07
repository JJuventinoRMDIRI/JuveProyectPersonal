import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComp = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">Mi Página</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/About-Me">Acerca de Mi</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Professional-Experience">Experiencia profesional</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Education-Profile">Perfil educativo</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderComp;
