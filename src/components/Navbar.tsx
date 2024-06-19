import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../css/Navbar.css'; // Import the CSS file for animations

const Navbar: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    return (
        <header className="sticky top-0 mt-4 z-50">
        <div className="mx-2 relative my-2">
          <nav className="max-w-2xl bg-gradient-radial py-4 px-8 mx-auto flex items-center justify-between shadow-md border-white rounded-[25px] ">
            <div className="flex items-center justify-around w-full">
              <div className="text-lg font-bold">Logo</div>
              <div className="hidden md:flex justify-around flex-grow space-x-4 font-light hover:text-white">
                <Link to="/" className="text-black transform hover:scale-105 transition-transform duration-300 hover:text-white ">Uber Uns</Link>
                <Link to="/treatments" className="text-black transform hover:scale-105 transition-transform duration-300 hover:text-white ">Treatments</Link>
                <Link to="/contact" className="text-black transform hover:scale-105 transition-transform duration-300 hover:text-white ">Contact</Link>
              </div>
              <div className="flex items-center">
                <Link to="/book" className="bg-pink-300 text-white py-2 px-4 rounded-full font-light ml-2 transform hover:scale-125 transition-transform duration-300">
                  Book Now
                </Link>
                <button onClick={toggleDropdown} className="ml-2 p-2 md:hidden" aria-label="Open menu">
                  <FaChevronDown className="text-black" />
                </button>
              </div>
            </div>
          </nav>
          <CSSTransition
            in={isDropdownOpen}
            timeout={300}
            classNames="dropdown"
            unmountOnExit
          >
            <div className='mx-6 relative z-50'>
              <div className="bg-gradient-radial2 my-6 mx-auto top-full w-full shadow-lg py-4 border rounded-[25px]  max-w-2xl">
                <Link to="/" className="block px-4 py-2 text-black transition duration-300 hover:text-white hover:text-lg">Uber Uns</Link>
                <Link to="/treatments" className="block px-4 py-2 text-black transition duration-300 hover:text-white hover:text-lg">Treatments</Link>
                <Link to="/contact" className="block px-4 py-2 text-black transition duration-300 hover:text-white hover:text-lg">Contact</Link>
              </div>
            </div>
          </CSSTransition>
        </div>
      </header>
    );
  };
  
  export default Navbar;
