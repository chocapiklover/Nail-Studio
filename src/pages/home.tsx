import React from 'react';
import Hero from '../components/Hero';
import WelcomeSection from '../components/WelcomeSection';
import ServicesSection from '../components/Services';
import Team from '../components/Team';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <ServicesSection />
      <Team />
    </>
  );
};

export default Home;
