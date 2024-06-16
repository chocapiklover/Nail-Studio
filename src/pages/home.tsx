import React from 'react';
import Hero from '../components/Hero';
import WelcomeSection from '../components/WelcomeSection';
import ServicesSection from '../components/Services';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <ServicesSection />
    </>
  );
};

export default Home;
