
import React from 'react';

function CallbackModal({ show, onClose }) {

  if (!show) {
    return null;
  }

  return (
    <div className="custom-modal-overlay">

      <div className="custom-modal">

        <div className="success-icon">✓</div>

        <h3>Thank You!</h3>

        <p>
          Your request has been received successfully.
          Our team will contact you soon.
        </p>

        <button
          className="btn btn-primary px-4"
          onClick={onClose}
        >
          Close
        </button>

      </div>

    </div>
  );
}

export default CallbackModal;
