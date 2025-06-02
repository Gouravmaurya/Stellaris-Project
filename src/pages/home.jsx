import React from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import HeroSection from '../component/HeroSection';
import AboutSection from '../component/AboutSection';
import ServicesSection from '../component/ServicesSection';
import ClientsSection from '../component/ClientsSection';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const SectionWrapper = ({ children, delay = 0, direction = 'up' }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.05, // Reduced threshold for earlier trigger
    triggerOnce: true,
    rootMargin: '-50px 0px', // Start animations slightly before element is in view
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        controls.start('visible');
      }, delay * 100); // Small delay to prevent jank
      return () => clearTimeout(timer);
    }
  }, [controls, inView, delay]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 20 : -20, // Reduced movement distance
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween', // Using tween for better performance than spring
        ease: 'easeOut',
        duration: 0.6, // Shorter duration
        delay: delay * 0.3, // Reduced delay effect
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="w-full overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#121418] overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section with a more dramatic entrance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: {
            type: 'tween',
            ease: 'easeOut',
            duration: 0.8,
            delay: 0.1
          }
        }}
        style={{ willChange: 'transform, opacity' }}
      >
        <HeroSection />
      </motion.div>
      
      {/* About Section */}
      
        <AboutSection />
      
      
      {/* Services Section with staggered children */}
      
        <ServicesSection />
      
      
      {/* Clients Section */}
      
        <ClientsSection />
   
      
      <Footer />
    </div>
  );
};

export default Home;