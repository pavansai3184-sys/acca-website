
import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Eligibility from './components/Eligibility';
import Learning from './components/Learning';
import Placement from './components/Placement';
import FinalCTA from './components/FinalCTA';
import CallbackModal from './components/CallbackModal';

function App() {

  // State to control modal
  const [showModal, setShowModal] = useState(false);

  // Function to open modal
  const handleRequest = () => {
    setShowModal(true);
  };

  // Function to close modal
  const handleClose = () => {
    setShowModal(false);
  };

  // useEffect example: update browser tab title
  useEffect(() => {
    document.title = 'ACCA | IndigoLearn';
  }, []);

  return (
    <>
      <Header />

      <Hero />

      <WhyChooseUs />

      <Eligibility />

      <Learning />

      <Placement />

      <FinalCTA onRequest={handleRequest} />

      <CallbackModal
        show={showModal}
        onClose={handleClose}
      />

      <footer className="text-center py-4 bg-dark text-white">
        © 2026 IndigoLearn. All Rights Reserved.
      </footer>
    </>
  );
}

export default App;
