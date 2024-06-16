import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-6 md:p-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Willkommen in unserem
            <br />
            Nagelstudio, wo Schönheit <span className="inline-block">🌸</span> und Pflege <span className="inline-block">💆</span> im Mittelpunkt stehen.
          </h2>
          <p className="text-gray-700 font-light md:text-lg">
            Unser Nagelstudio bietet Ihnen professionelle Behandlungen und eine entspannte Atmosphäre, um Ihre Nägel zu verwöhnen und zu verschönern.
          </p>
        </div>
        <div className="md:w-1/2 p-6 md:p-12">
          <img src="src/assets/studio.jpg" alt="Nail Studio" className="rounded-lg shadow-lg w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
