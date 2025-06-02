import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#121418]/95 backdrop-blur-md py-2 sm:py-3 shadow-lg' : 'bg-transparent py-3 sm:py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-white font-bold text-lg sm:text-xl md:text-2xl flex items-center">
            <span className="mr-2 text-blue-500 bg-white/10 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center rounded-md">▲</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Stellaris</span>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-blue-400 font-medium transition-colors duration-300">Home</Link>
          <Link to="/services" className="text-white hover:text-blue-400 font-medium transition-colors duration-300">Services</Link>
          <Link to="/about" className="text-white hover:text-blue-400 font-medium transition-colors duration-300">About</Link>
          <Link to="/contact" className="text-white hover:text-blue-400 font-medium transition-colors duration-300">Contact</Link>
          <Link to="#" className="premium-button bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base rounded-md font-medium transition-all duration-300 shadow-md">
            Get Started
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-[#121418]/95 backdrop-blur-md transition-all duration-300 overflow-hidden shadow-lg ${mobileMenuOpen ? 'max-h-[400px] border-b border-white/10' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col space-y-3 sm:space-y-4">
          <Link to="/" className="text-white hover:text-blue-400 font-medium py-2 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/services" className="text-white hover:text-blue-400 font-medium py-2 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/about" className="text-white hover:text-blue-400 font-medium py-2 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/contact" className="text-white hover:text-blue-400 font-medium py-2 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <Link to="/get-started" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md font-medium transition-all duration-300 shadow-md text-center" onClick={() => setMobileMenuOpen(false)}>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;