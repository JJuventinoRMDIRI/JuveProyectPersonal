import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderComp = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div class="container">
        <NavLink className="navbar-brand fw-bold" to="/">Mi Página</NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">

            <li class="nav-item">
              <NavLink className="nav-link" activeclass="active" to="/Professional-Experience">Experiencia profesional</NavLink>
            </li>

            <li class="nav-item">
              <NavLink className="nav-link" activeclass="active" to="/Education-Profile">Perfil educativo</NavLink>
            </li>

            <li class="nav-item">
              <NavLink className="nav-link" activeclass="active" to="/About-Me">Acerca de Mi</NavLink>
            </li>

            <li class="nav-item">
              <NavLink className="nav-link" activeclass="active" to="/Diri-Recharge">Diri Recargas</NavLink>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderComp;
