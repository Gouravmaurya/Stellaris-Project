import React, { useState } from 'react';
import './services.css';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import ServiceCard from '../component/ServiceCard';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  
  const openServiceModal = (service) => {
    setSelectedService(service);
  };
  
  const closeServiceModal = () => {
    setSelectedService(null);
  };
  
  const serviceCategories = [
    { id: 'all', name: 'All Services' },
    { id: 'brand', name: 'Brand Development' },
    { id: 'content', name: 'Content & Media' },
    { id: 'digital', name: 'Digital Marketing' },
    { id: 'analytics', name: 'Analytics & Data' }
  ];
  
  const services = [
    {
      id: 1,
      title: 'Strategic Brand Development',
      description: 'Comprehensive brand strategy that aligns with your business objectives and resonates with your target demographic through meticulous market analysis and positioning.',
      category: 'brand',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      details: 'Our Strategic Brand Development service creates a cohesive brand identity that captures your company\'s essence and connects with your audience. We conduct in-depth market research, competitor analysis, and audience profiling to position your brand effectively. Our deliverables include brand strategy documents, visual identity systems, brand guidelines, messaging frameworks, and brand story development.'
    },
    {
      id: 2,
      title: 'Premium Content Production',
      description: 'Sophisticated multimedia content creation that elevates your brand narrative through cinematic video, editorial photography, and immersive digital experiences.',
      category: 'content',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      details: 'Our Premium Content Production service delivers high-quality multimedia assets that tell your brand story across all platforms. We specialize in cinematic video production, editorial photography, motion graphics, interactive digital experiences, and podcast production. Each piece of content is crafted to maintain brand consistency while engaging your audience in meaningful ways.'
    },
    {
      id: 3,
      title: 'Audience Engagement Architecture',
      description: 'Strategic development of engagement frameworks that foster meaningful connections with your audience through personalized touchpoints and data-driven interaction models.',
      category: 'digital',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      details: 'Our Audience Engagement Architecture service builds meaningful connections between your brand and your audience. We develop comprehensive engagement strategies, create personalized customer journeys, implement community building initiatives, design loyalty programs, and establish feedback mechanisms. Our data-driven approach ensures that every interaction adds value to the customer relationship.'
    },
    {
      id: 4,
      title: 'Digital Ecosystem Optimization',
      description: 'Holistic enhancement of your digital presence through integrated platform strategy, performance optimization, and seamless user experience design.',
      category: 'digital',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      details: 'Our Digital Ecosystem Optimization service enhances your entire digital presence for maximum performance and user satisfaction. We conduct comprehensive digital audits, implement technical SEO improvements, optimize website performance, create seamless user experiences, and integrate analytics systems. The result is a cohesive digital ecosystem that drives conversions and supports your business goals.'
    },
    {
      id: 5,
      title: 'Social Media Mastery',
      description: 'Sophisticated social media strategy and execution that positions your brand as an industry authority while fostering authentic community engagement.',
      category: 'digital',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      details: 'Our Social Media Mastery service elevates your brand presence across all relevant platforms. We develop platform-specific strategies, create engaging content calendars, design visually consistent assets, manage community interactions, and provide detailed performance analytics. Our approach focuses on building authentic connections that convert followers into loyal customers.'
    },
    {
      id: 6,
      title: 'Conversion Rate Optimization',
      description: 'Data-driven analysis and implementation of strategic improvements to maximize your conversion funnel efficiency and boost ROI across all digital touchpoints.',
      category: 'analytics',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      details: 'Our Conversion Rate Optimization service transforms your digital assets into powerful conversion machines. We analyze user behavior data, conduct A/B testing, optimize landing pages, streamline checkout processes, and implement personalized recommendations. Our methodical approach identifies and eliminates conversion barriers while enhancing elements that drive user action.'
    },
    {
      id: 7,
      title: 'Marketing Automation & Integration',
      description: 'Sophisticated implementation of automated marketing systems that deliver personalized experiences at scale while seamlessly integrating with your existing technology stack.',
      category: 'digital',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      details: 'Our Marketing Automation & Integration service streamlines your marketing operations while delivering personalized customer experiences at scale. We implement email marketing automation, create lead nurturing workflows, develop cross-channel campaign automation, integrate CRM systems, and establish performance dashboards. This comprehensive approach ensures that your marketing technology works together seamlessly to drive results.'
    },
    {
      id: 8,
      title: 'Analytics & Performance Intelligence',
      description: 'Comprehensive data analytics and reporting frameworks that transform complex metrics into actionable insights for strategic decision-making and ROI optimization.',
      category: 'analytics',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      details: 'Our Analytics & Performance Intelligence service transforms data into actionable insights that drive business growth. We set up comprehensive tracking systems, create custom dashboards, conduct regular performance analysis, generate insight reports, and make data-driven recommendations. This service ensures that your marketing decisions are based on solid evidence rather than assumptions.'
    }
  ];

  // Filter services based on active category
  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#121418]">
      <Navbar />
      
      {/* Hero Section */}
      <motion.div 
        className="relative pt-24 pb-16 px-6 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-900/10 blur-[100px] rounded-full"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.p 
            className="text-blue-500 font-medium mb-3 uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Our Services
          </motion.p>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Premium Marketing Solutions
          </motion.h1>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          ></motion.div>
          
          <motion.p 
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Discover our comprehensive suite of marketing services designed to elevate your brand and drive measurable business growth.
          </motion.p>
        </div>
      </motion.div>
      
      {/* Category Filter */}
      <motion.div 
        className="max-w-6xl mx-auto px-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="flex flex-wrap justify-center gap-2">
          {serviceCategories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                  : 'bg-[#1A1D24] text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
      
      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {filteredServices.map((service, index) => (
            <motion.div 
              key={service.id} 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: 0.7 + (index * 0.1),
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div onClick={() => openServiceModal(service)} className="cursor-pointer">
                <ServiceCard 
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={`0${index + 1}`}
                />
                
                <div className="mt-4 pt-2 border-t border-white/5">
                  <button 
                    className="text-blue-400 hover:text-blue-300 flex items-center text-sm font-medium"
                  >
                    Learn more
                    <motion.svg 
                      className="w-4 h-4 ml-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </motion.svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* CTA Section */}
      <motion.div 
        className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Brand?
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's discuss how our premium marketing services can help you achieve your business objectives and stand out in your industry.
          </motion.p>
          
          <motion.a 
            href="/contact" 
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>Schedule a Consultation</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.a>
        </div>
      </motion.div>
      
      <Footer />

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="relative bg-[#1A1D24] border border-white/10 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Close button */}
              <motion.button 
                onClick={closeServiceModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Modal content */}
              <div className="p-8">
                <motion.div 
                  className="mb-6 text-white bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-lg inline-block"
                  initial={{ rotate: -5, scale: 0.9 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  {selectedService.icon}
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {selectedService.title}
                </motion.h3>
                
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-gray-300 leading-relaxed mb-6">{selectedService.description}</p>
                </motion.div>
                
                <motion.div 
                  className="border-t border-white/10 pt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-4">What We Deliver</h4>
                  <p className="text-gray-400 leading-relaxed">{selectedService.details}</p>
                </motion.div>
                
                <motion.div 
                  className="mt-8 pt-6 border-t border-white/10 flex justify-end"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.button 
                    onClick={closeServiceModal}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Backdrop click to close */}
            <div 
              className="absolute inset-0 z-[-1]" 
              onClick={closeServiceModal}
            ></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
