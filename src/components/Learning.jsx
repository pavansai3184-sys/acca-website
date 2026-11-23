
import React from 'react';

function Learning() {

  const subjects = [
    'Business and Technology',
    'Management Accounting',
    'Financial Accounting',
    'Corporate and Business Law',
    'Performance Management',
    'Taxation',
    'Financial Reporting',
    'Audit and Assurance'
  ];

  return (
    <section className="section-padding" id="learning">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">
            What Will You Learn in ACCA?
          </h2>
          <p>Build your knowledge in accounting and finance.</p>
        </div>

        <div className="row g-3">

          {subjects.map((subject, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="subject-card">
                <span className="subject-number">
                  0{index + 1}
                </span>
                <h6>{subject}</h6>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Learning;
