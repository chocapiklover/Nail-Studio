import React from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Prices from '../components/Prices';

const PricePage: React.FC = () => {
  return (
    <>
      <Prices />
      <Contact />
      <Footer />
    </>
  );
};

export default PricePage;