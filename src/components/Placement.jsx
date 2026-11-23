
import React from 'react';

function Placement() {

  const services = [
    'Resume Building',
    'Mock Interviews',
    'Interview Preparation',
    'Career Guidance'
  ];

  return (
    <section className="placement-section section-padding" id="placement">
      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6">
            <h2 className="display-5 fw-bold">
              100% Placement Assistance
            </h2>

            <p className="mt-3">
              Get career guidance and interview preparation
              support to help you move towards your professional goals.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="placement-card">

              <h4>Career Support Includes</h4>

              {services.map((service, index) => (
                <div className="placement-item" key={index}>
                  <span>✓</span>
                  {service}
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Placement;
