import React, { useEffect, createContext, useContext } from 'react';
import Lenis from 'lenis';

// Create context for Lenis instance
const LenisContext = createContext(null);

// Custom hook to access Lenis instance
export const useLenis = () => useContext(LenisContext);

export const SmoothScrollProvider = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Create a RAF loop for Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    // Start the animation loop
    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={null}>
      {children}
    </LenisContext.Provider>
  );
};

export default SmoothScrollProvider;
