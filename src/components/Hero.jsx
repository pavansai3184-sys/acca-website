
import React from 'react';

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-7">
            <span className="badge bg-warning text-dark mb-3 p-2">
              Global Accounting Qualification
            </span>

            <h1 className="display-4 fw-bold">
              Become an <span>ACCA</span> Professional
              in Just 18 Months
            </h1>

            <p className="lead mt-3">
              Start your international accounting career
              with expert guidance, practical learning
              and placement support.
            </p>

            <div className="mt-4">
              <a href="#contact" className="btn btn-warning btn-lg me-3">
                Get Started
              </a>

              <a href="#learning" className="btn btn-outline-light btn-lg">
                Explore Course
              </a>
            </div>
          </div>

          <div className="col-lg-5 mt-4 mt-lg-0">
            <div className="hero-card">
              <h3>Start Your ACCA Journey</h3>
              <h2>18 Months</h2>
              <p>Expert-led learning and career support</p>
              <div className="hero-circle">ACCA</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
