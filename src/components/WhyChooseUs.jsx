
import React from 'react';

function WhyChooseUs() {

  const features = [
    {
      icon: '🎓',
      title: 'Expert Faculty',
      description: 'Learn from experienced professional trainers.'
    },
    {
      icon: '🌍',
      title: 'Global Recognition',
      description: 'Prepare for an internationally recognized qualification.'
    },
    {
      icon: '💻',
      title: 'Flexible Learning',
      description: 'Learn with flexible online learning resources.'
    },
    {
      icon: '💼',
      title: 'Career Support',
      description: 'Get guidance to prepare for your career.'
    }
  ];

  return (
    <section className="section-padding" id="why">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">Why Choose Us?</h2>
          <p>Everything you need to build your ACCA career.</p>
        </div>

        <div className="row g-4">
          {features.map((item, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="feature-card text-center">
                <div className="feature-icon">{item.icon}</div>

                <h5>{item.title}</h5>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
