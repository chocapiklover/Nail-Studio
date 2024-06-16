import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center sm:mt-24">
        <h1 className="text-5xl font-bold mb-4">
          Willkommen im 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-100 via-pink-300 to-pink-500 animate-gradient-x bg-[length:200%_200%]">
            {' '} Nagelstudio
          </span>
        </h1>
        <p className="text-gray-700 mb-8 font-light">
          Entdecken Sie unsere hochwertigen Nageldienstleistungen und gönnen Sie sich eine Auszeit
        </p>
        <div className="mt-20"> 
          <Link to="/contact" className="bg-pink-200 text-black py-3 px-8 rounded-full font-light text-lg md:text-xl">
            Contact
          </Link>
        </div>
      </div>
      <div className="relative w-full overflow-hidden mt-10 sm:mt-56"> 
        <div className="flex flex-col sm:space-y-8 space-y-4">
          <div className="flex w-[120%] transform -translate-x-[20%] sm:-translate-x-[10%] ">
            <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96"><img src="src/assets/nails1.jpeg" alt="Nail Design 1" className="w-full h-full object-cover rounded-lg"/></div>
            <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96"><img src="src/assets/nails2.jpeg" alt="Nail Design 2" className="w-full h-full object-cover rounded-lg"/></div>
            <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96"><img src="src/assets/nails3.jpeg" alt="Nail Design 3" className="w-full h-full object-cover rounded-lg"/></div>
            <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96"><img src="src/assets/nails4.jpeg" alt="Nail Design 4" className="w-full h-full object-cover rounded-lg"/></div>
            <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96"><img src="src/assets/nails8.jpeg" alt="Nail Design 8" className="w-full h-full object-cover rounded-lg"/></div>
          </div>
          <div className="flex w-[120%] transform -translate-x-[5%]">
            <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96"><img src="src/assets/nails9.jpeg" alt="Nail Design 9" className="w-full h-full object-cover rounded-lg"/></div>
            <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96"><img src="src/assets/nails5.jpeg" alt="Nail Design 5" className="w-full h-full object-cover rounded-lg"/></div>
            <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96"><img src="src/assets/nails6.jpeg" alt="Nail Design 6" className="w-full h-full object-cover rounded-lg"/></div>
            <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96"><img src="src/assets/nails7.jpeg" alt="Nail Design 7" className="w-full h-full object-cover rounded-lg"/></div>
            <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96"><img src="src/assets/nails8.jpeg" alt="Nail Design 8" className="w-full h-full object-cover rounded-lg"/></div>
            <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96"><img src="src/assets/nails9.jpeg" alt="Nail Design 9" className="w-full h-full object-cover rounded-lg"/></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
