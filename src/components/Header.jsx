
import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">

        <a className="navbar-brand fw-bold text-primary fs-3" href="#home">
          IndigoLearn
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#why">Why ACCA</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#eligibility">Eligibility</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#learning">Course</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#placement">Placement</a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="btn btn-primary">
                Enquire Now
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
