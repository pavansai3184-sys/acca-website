
import React from 'react';

function Eligibility() {

  const eligibility = [
    'Students who completed their 12th standard.',
    'Graduates from recognized universities.',
    'Commerce and non-commerce students.',
    'Students interested in accounting and finance.'
  ];

  return (
    <section className="section-padding eligibility-section" id="eligibility">
      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-5">
            <h2 className="section-title">ACCA – Eligibility</h2>
            <p>
              Understand the basic entry requirements
              before starting your ACCA journey.
            </p>
          </div>

          <div className="col-lg-7">
            <div className="eligibility-card">

              {eligibility.map((item, index) => (
                <div className="eligibility-item" key={index}>
                  <span className="check-icon">✓</span>
                  <p>{item}</p>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Eligibility;
