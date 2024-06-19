import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="bg-white sm:py-12 py-4  ">
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
        <div className="mt-20 flex justify-center">
          <Link
            to="/contact"
            className="bg-gradient-to-tr from-pink-300 to-pink-400 text-white py-3 px-8 rounded-full font-semibold text-lg md:text-xl shadow-lg hover:from-pink-300 hover:to-pink-500 transform hover:scale-125 transition-transform duration-300"
          >
            Jetzt Buchen
          </Link>
        </div>
      </div>
      <div className="relative w-full overflow-hidden mt-10 sm:mt-56"> 
        <div className="flex flex-col sm:space-y-8 space-y-4 py-12">
          
        
            <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: '-5%' }}
                  transition={{ type: 'spring', stiffness: 50 }}
                  className="flex w-[120%] transform -translate-x-[5%] z-auto"
                  >
              <div className="flex w-[120%] transform -translate-x-[20%] sm:-translate-x-[10%] z-auto ">
                <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="src/assets/nails1.jpeg" alt="Nail Design 1" className="w-full h-full object-cover rounded-lg"/></div>
                <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="src/assets/nails2.jpeg" alt="Nail Design 2" className="w-full h-full object-cover rounded-lg"/></div>
                <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="src/assets/nails3.jpeg" alt="Nail Design 3" className="w-full h-full object-cover rounded-lg"/></div>
                <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="src/assets/nails4.jpeg" alt="Nail Design 4" className="w-full h-full object-cover rounded-lg"/></div>
                <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="src/assets/nails8.jpeg" alt="Nail Design 8" className="w-full h-full object-cover rounded-lg"/></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '-5%' }}
              transition={{ type: 'spring', stiffness: 50 }}
              className="flex w-[120%] transform -translate-x-[5%] z-auto"
              >
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50">
                <img src="src/assets/nails9.jpeg" alt="Nail Design 9" className="w-full h-full object-cover rounded-lg"/>
              </div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50">
                <img src="src/assets/nails5.jpeg" alt="Nail Design 5" className="w-full h-full object-cover rounded-lg"/>
              </div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50">
                <img src="src/assets/nails6.jpeg" alt="Nail Design 6" className="w-full h-full object-cover rounded-lg"/>
              </div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50">
                <img src="src/assets/nails7.jpeg" alt="Nail Design 7" className="w-full h-full object-cover rounded-lg"/>
              </div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50">
                <img src="src/assets/nails8.jpeg" alt="Nail Design 8" className="w-full h-full object-cover rounded-lg"/>
              </div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50">
                <img src="src/assets/nails9.jpeg" alt="Nail Design 9" className="w-full h-full object-cover rounded-lg"/>
              </div>
            </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
