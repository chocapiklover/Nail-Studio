import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../css/Navbar.css'; // Import the CSS file for other styles

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const springTransition = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };

  return (
    <header className="sticky top-0 mt-4 z-50">
      <div className="mx-2 relative my-2">
        <nav className="max-w-2xl bg-gradient-radial py-4 px-8 mx-auto flex items-center justify-between shadow-md border-white rounded-[25px]">
          <div className="flex items-center justify-around w-full">
            <Link to="/" className="text-lg font-bold">Logo</Link>
            <a href="/services#main" className="text-black transform hover:scale-105 transition-transform duration-300 hover:text-white hidden sm:block">
                Treatments
              </a>
              <button
                onClick={() => scrollToSection('contact-section')}
                className="text-black transform hover:scale-105 transition-transform duration-300 hover:text-white hidden sm:block"
              >
                Contact
              </button>

            <div className="flex items-center">
              <button
                  onClick={() => {
                    scrollToSection('contact-section');
                    closeDropdown();
                  }}
                  className="bg-pink-300 text-white py-2 px-4 rounded-full font-light ml-2 transform hover:scale-125 transition-transform duration-300"
                >
                  Book Now
                </button>
              <button onClick={toggleDropdown} className="ml-2 p-2 md:hidden" aria-label="Open menu">
                <FaChevronDown className="text-black" />
              </button>
            </div>
          </div>
        </nav>
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              className="mx-6 relative z-50"
              initial={{ opacity: 0, y: -20, filter: 'blur: (10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur: (0px)'   }}
              exit={{ opacity: 0, y: -20, filter: 'blur: (10px)'}}
              transition={springTransition}
            >
              <div className="bg-gradient-radial2 my-6 mx-auto top-full w-full shadow-lg py-4 border rounded-[25px] max-w-2xl">
                <Link
                  to="/services"
                  className="block px-4 py-2 text-black transition duration-300 hover:text-white hover:text-lg"
                  onClick={closeDropdown}
                >
                  Treatments
                </Link>
                <button
                  onClick={() => {
                    scrollToSection('contact-section');
                    closeDropdown();
                  }}
                  className="block px-4 py-2 text-black transition duration-300 hover:text-white hover:text-lg"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
