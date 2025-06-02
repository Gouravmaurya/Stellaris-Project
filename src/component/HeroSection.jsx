import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-48 sm:py-20 md:py-28 bg-gradient-to-b from-[#121418] to-[#1a1d24]">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-700 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-900 blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-3/5 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white">
              <span className="block">Elevate Your Brand's</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">Strategic Presence</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              We deliver sophisticated marketing solutions that position your brand at the forefront of your industry, creating meaningful connections with your target audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/services" className="premium-button bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-medium transition-all duration-300 shadow-lg w-full sm:w-auto text-center">
                Explore Our Services
              </Link>
              <Link to="/contact" className="border-2 border-white/20 hover:border-white/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-medium transition-all duration-300 backdrop-blur-sm w-full sm:w-auto text-center">
                Schedule Consultation
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative">
              {/* Main circular element */}
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.5)]">
                <div className="w-[85%] h-[85%] bg-[#121418] rounded-full flex items-center justify-center">
                  <div className="w-[70%] h-[70%] bg-gradient-to-br from-blue-500 to-indigo-700 rounded-full opacity-80 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute top-0 left-0 w-full h-full animate-spin-slow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.7)]"></div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full animate-spin-slow-reverse">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-indigo-400 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.7)]"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
            <div className="text-gray-400 text-sm md:text-base">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">200+</div>
            <div className="text-gray-400 text-sm md:text-base">Successful Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400 text-sm md:text-base">Industry Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-400 text-sm md:text-base">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;