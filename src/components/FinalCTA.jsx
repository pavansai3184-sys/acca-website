
import React from 'react';

function FinalCTA({ onRequest }) {

  return (
    <section className="final-cta section-padding" id="contact">
      <div className="container text-center">

        <h2 className="fw-bold">
          Kick Off Your ACCA Prep Journey
          with IndigoLearn
        </h2>

        <p className="mt-3">
          Take your first step towards a successful
          international accounting career.
        </p>

        <button
          className="btn btn-warning btn-lg mt-3"
          onClick={onRequest}
        >
          Request Call Back
        </button>

      </div>
    </section>
  );
}

export default FinalCTA;
