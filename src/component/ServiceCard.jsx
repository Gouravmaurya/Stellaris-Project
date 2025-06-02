import React from 'react';

const ServiceCard = ({ icon, title, description, index }) => {
  return (
    <div className="premium-card bg-gradient-to-b from-[#1E2128] to-[#2A303C] p-4 sm:p-5 md:p-6 rounded-lg border border-white/5 shadow-lg relative overflow-hidden group h-full">
      {/* Subtle accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      
      {/* Index number */}
      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-3xl sm:text-4xl font-bold text-white/5 select-none">{index}</div>
      
      <div className="mb-4 sm:mb-6 text-white bg-gradient-to-br from-blue-500 to-indigo-600 p-2 sm:p-3 rounded-lg inline-block">
        {icon}
      </div>
      
      <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors duration-300">{title}</h4>
      
      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
      
      {/* Card footer space */}
      <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/5"></div>
    </div>
  );
};

export default ServiceCard;
