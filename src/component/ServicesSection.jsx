import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ServiceCard from './ServiceCard';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const services = [
    {
      id: 1,
      title: 'Strategic Brand Development',
      description: 'Comprehensive brand strategy that aligns with your business objectives and resonates with your target demographic through meticulous market analysis and positioning.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Premium Content Production',
      description: 'Sophisticated multimedia content creation that elevates your brand narrative through cinematic video, editorial photography, and immersive digital experiences.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Audience Engagement Architecture',
      description: 'Strategic development of engagement frameworks that foster meaningful connections with your audience through personalized touchpoints and data-driven interaction models.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Digital Ecosystem Optimization',
      description: 'Holistic enhancement of your digital presence through integrated platform strategy, performance optimization, and seamless user experience design.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#121418] py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background accent */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-900/10 blur-[150px] rounded-full"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-900/10 blur-[100px] rounded-full"
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p 
            variants={fadeIn}
            className="text-blue-500 font-medium mb-3 uppercase tracking-wider"
          >
            Our Expertise
          </motion.p>
          <motion.h2 
            variants={fadeIn}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
          >
            Comprehensive Solutions
          </motion.h2>
          <motion.div 
            variants={fadeIn}
            className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 sm:mb-8"
          />
          <motion.p 
            variants={fadeIn}
            className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            We deliver sophisticated, end-to-end marketing solutions designed to position your brand at the forefront of your industry and drive measurable business growth.
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeIn}
              custom={index * 0.1}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={`0${index + 1}`}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <a 
            href="/services" 
            className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white border border-white/10 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg transition-all duration-300 group"
          >
            <span className="mr-2">View All Services</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
