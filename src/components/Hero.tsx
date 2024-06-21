import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 160, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.3, // Increase this to make the animation longer
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const Hero: React.FC = () => {
  return (
    <section className="bg-white sm:py-12 py-6  ">
      <motion.div
        className="container mx-auto text-center sm:mt-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl font-bold mb-4"
          variants={childVariants}
        >
          Willkommen im
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-100 via-pink-300 to-pink-500 animate-gradient-x bg-[length:200%_200%]">
            {' '} Nagelstudio
          </span>
        </motion.h1>
        <motion.p
          className="text-gray-700 mb-8 font-light"
          variants={childVariants}
        >
          Entdecken Sie unsere hochwertigen Nageldienstleistungen und gönnen Sie sich eine Auszeit
        </motion.p>
        <motion.div
          className="mt-20 flex justify-center"
          variants={childVariants}
        >
          <Link
            to="/contact"
            className="bg-gradient-to-tr from-pink-300 to-pink-400 text-white py-3 px-8 rounded-full font-semibold text-lg md:text-xl shadow-lg hover:from-pink-300 hover:to-pink-500 transform hover:scale-125 transition-transform duration-300 animate-pulseGlow"
          >
            Jetzt Buchen
          </Link>
        </motion.div>
      </motion.div>

      {/* carousel */}
      <div className="relative w-full overflow-hidden mt-10 sm:mt-56">
        <div className="flex flex-col sm:space-y-8 space-y-4 py-12">

          <motion.div
            initial={{ x: '10%' }}
            animate={{ x: '-100%' }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="flex w-full"
          >
            <div className="flex w-[120%] transform -translate-x-[20%] sm:-translate-x-[10%] z-auto ">
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails15.jpg" alt="Nail Design 15" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails12.jpg" alt="Nail Design 12" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails14.jpg" alt="Nail Design 14" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails13.jpg" alt="Nail Design 13" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails11.jpg" alt="Nail Design 11" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails10.jpg" alt="Nail Design 10" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails9.jpeg" alt="Nail Design 9" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails1.jpeg" alt="Nail Design 1" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails2.jpeg" alt="Nail Design 2" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails3.jpeg" alt="Nail Design 3" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails4.jpeg" alt="Nail Design 4" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails8.jpeg" alt="Nail Design 8" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50">
                <img src="/assets/nails5.jpeg" alt="Nail Design 5" className="w-full h-full object-cover rounded-lg"/>
              </div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50">
                <img src="/assets/nails6.jpeg" alt="Nail Design 6" className="w-full h-full object-cover rounded-lg"/>
              </div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50">
                <img src="/assets/nails7.jpeg" alt="Nail Design 7" className="w-full h-full object-cover rounded-lg"/>
              </div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50">
                <img src="/assets/nails8.jpeg" alt="Nail Design 8" className="w-full h-full object-cover rounded-lg"/>
              </div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50">
                <img src="/assets/nails9.jpeg" alt="Nail Design 9" className="w-full h-full object-cover rounded-lg"/>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
            className="flex w-full"
          >
            <div className="flex w-[120%] transform -translate-x-[20%] sm:-translate-x-[10%] z-auto">
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50">
                <img src="/assets/nails9.jpeg" alt="Nail Design 9" className="w-full h-full object-cover rounded-lg"/>
              </div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50">
                <img src="/assets/nails5.jpeg" alt="Nail Design 5" className="w-full h-full object-cover rounded-lg"/>
              </div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50">
                <img src="/assets/nails6.jpeg" alt="Nail Design 6" className="w-full h-full object-cover rounded-lg"/>
              </div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50">
                <img src="/assets/nails7.jpeg" alt="Nail Design 7" className="w-full h-full object-cover rounded-lg"/>
              </div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50">
                <img src="/assets/nails8.jpeg" alt="Nail Design 8" className="w-full h-full object-cover rounded-lg"/>
              </div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50">
                <img src="/assets/nails9.jpeg" alt="Nail Design 9" className="w-full h-full object-cover rounded-lg"/>
              </div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails1.jpeg" alt="Nail Design 1" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails2.jpeg" alt="Nail Design 2" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails3.jpeg" alt="Nail Design 3" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails4.jpeg" alt="Nail Design 4" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails8.jpeg" alt="Nail Design 8" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails9.jpeg" alt="Nail Design 9" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails10.jpg" alt="Nail Design 10" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails11.jpg" alt="Nail Design 11" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails12.jpg" alt="Nail Design 12" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails13.jpg" alt="Nail Design 13" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails15.jpg" alt="Nail Design 15" className="w-full h-full object-cover rounded-lg"/></div>
              <div className="flex-shrink-0 w-2/5 sm:w-1/5 px-2 max-h-48 sm:max-h-96 transform hover:scale-125 transition-transform duration-300 hover:z-50"><img src="/assets/nails14.jpg" alt="Nail Design 14" className="w-full h-full object-cover rounded-lg"/></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
