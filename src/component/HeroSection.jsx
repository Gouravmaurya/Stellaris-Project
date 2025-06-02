import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeWord, setActiveWord] = useState(0);
  
  // Words that will animate in sequence
  const brandingWords = ['STRATEGY', 'IDENTITY', 'DESIGN', 'GROWTH'];
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    // Rotate through branding words
    const wordInterval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % brandingWords.length);
    }, 2000);
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(wordInterval);
    };
  }, []);
  
  // Parallax effect based on scroll position
  const parallaxStyle = {
    transform: `translateY(${scrollPosition * 0.2}px)`,
  };
  
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center py-16 md:py-24 bg-gradient-to-b from-[#0a0c10] to-[#151921]">
      {/* Dynamic background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-600/30 to-indigo-800/30 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-purple-700/20 to-indigo-900/20 blur-[100px] animate-float-slow"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6TTM0IDI4aDR2MWgtNHYtMXptMCAyaDR2MWgtNHYtMXptLTIgMmgxdjFoLTF2LTF6bTIgMGgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        {/* Animated lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent animate-slide-right"></div>
          <div className="absolute right-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-slide-left"></div>
          <div className="absolute left-0 top-2/3 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-slide-right-slow"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Creative heading with animated elements */}
        <div className="flex flex-col items-center justify-center mb-16 md:mb-24">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-16 -left-16 w-32 h-32 border border-indigo-500/20 rounded-full animate-spin-slow"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 border border-blue-500/20 rounded-full animate-spin-reverse-slow"></div>
            
            <h1 className="text-center font-black leading-none tracking-tight pt-36 text-white">
              {/* Creative text with animated gradient */}
              <div className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 overflow-hidden">
                <span className="inline-block animate-fade-in-up">CREATIVE</span>
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine"></span>
              </div>
              
              {/* Digital with interactive element */}
              <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-6">
                <div 
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl relative group"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span>DIGITAL</span>
                  
                  {/* Interactive glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/0 via-indigo-500/20 to-blue-600/0 blur-lg transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>
              </div>
              
              {/* Animated word rotation for branding */}
              <div className="h-auto py-4 sm:py-5 md:py-6 lg:py-8 relative overflow-visible">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300 flex items-center justify-center transition-transform duration-500 ease-in-out overflow-visible">
                  <div className="flex flex-wrap items-center justify-center overflow-visible">
                    <span className="whitespace-nowrap mr-4">BRANDING</span>
                    <span className="whitespace-nowrap min-w-[250px] inline-block">{brandingWords[activeWord]}</span>
                  </div>
                </div>
              </div>
            </h1>
          </div>
        </div>

        {/* Content section with creative layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left side - Our story with animated elements */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 border border-indigo-500/20 rounded-full"></div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500">
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/0 to-purple-900/0 group-hover:from-indigo-900/10 group-hover:to-purple-900/10 transition-all duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  {/* Animated icon */}
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-5 flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-700 animate-pulse-slow"></div>
                    <div className="absolute inset-1 bg-[#0f1114] rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12H16"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8V16"></path>
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">Our story</h2>
                </div>
                
                <p className="text-gray-300 mb-8 leading-relaxed text-base">
                  Specialized agency that helps businesses establish and maintain a strong online presence. This type of agency offers a range of services that elevate brands through strategic digital solutions.
                </p>
                
                {/* Animated button */}
                <Link to="/about" className="group inline-flex items-center gap-2 text-white font-medium">
                  <span className="relative overflow-hidden rounded-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 group-hover:from-indigo-500 group-hover:to-blue-500 transition-all duration-300"></div>
                    <div className="relative p-3">
                      <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </span>
                  <span className="text-sm uppercase tracking-wider group-hover:text-indigo-300 transition-colors duration-300">Discover More</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Stats with animated counters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Years Experience */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-indigo-600/10 group-hover:bg-indigo-600/20 transition-all duration-500"></div>
              <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-300 group-hover:from-indigo-300 group-hover:to-blue-200 transition-all duration-500">12<span className="text-2xl ml-0.5">+</span></h3>
              <p className="text-gray-400 mt-2 text-sm group-hover:text-gray-300 transition-all duration-500">Years Experience</p>
            </div>
            
            {/* Projects Done */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-blue-600/10 group-hover:bg-blue-600/20 transition-all duration-500"></div>
              <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 group-hover:from-blue-300 group-hover:to-indigo-200 transition-all duration-500">800<span className="text-2xl ml-0.5">+</span></h3>
              <p className="text-gray-400 mt-2 text-sm group-hover:text-gray-300 transition-all duration-500">Projects Done</p>
            </div>
            
            {/* Happy Clients */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-purple-600/10 group-hover:bg-purple-600/20 transition-all duration-500"></div>
              <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 group-hover:from-purple-300 group-hover:to-indigo-200 transition-all duration-500">500<span className="text-2xl ml-0.5">+</span></h3>
              <p className="text-gray-400 mt-2 text-sm group-hover:text-gray-300 transition-all duration-500">Happy Clients</p>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-20 text-center">
          <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 rounded-lg shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-300 group">
            Explore Our Services
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 right-10 w-3 h-3 bg-blue-500 rounded-full animate-float"></div>
      <div className="absolute bottom-1/4 left-10 w-2 h-2 bg-indigo-500 rounded-full animate-float-reverse"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-purple-500 rounded-full animate-float-slow"></div>
    </section>
  );
};

export default HeroSection;