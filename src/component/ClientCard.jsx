import React from 'react';

const ClientCard = ({ icon, name, bgColor, logo }) => {
  return (
    <div className={`premium-card ${bgColor} aspect-square rounded-lg flex items-center justify-center p-6 border border-white/10 backdrop-blur-sm relative group overflow-hidden`}>
      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-blue-500 to-indigo-600 transition-opacity duration-500"></div>
      
      {/* Animated border on hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-lg transition-all duration-300"></div>
      
      <div className="text-white text-center relative z-10 transform group-hover:scale-105 transition-transform duration-300">
        {logo ? (
          <img src={logo} alt={name} className="w-16 h-16 mx-auto mb-3 object-contain" />
        ) : (
          <div className="text-4xl mb-3">{icon}</div>
        )}
        <div className="font-semibold tracking-wide">{name}</div>
      </div>
    </div>
  );
};

export default ClientCard;
