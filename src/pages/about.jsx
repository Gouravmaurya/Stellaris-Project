import React from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import AboutSection from '../component/AboutSection';
import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alexandra Chen',
      role: 'Chief Executive Officer',
      bio: 'With over 15 years of experience in strategic marketing and brand development, Alexandra leads our team with visionary direction and entrepreneurial spirit.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Marcus Reynolds',
      role: 'Creative Director',
      bio: 'Award-winning creative professional with a background in design and advertising. Marcus oversees all creative output, ensuring excellence and innovation.',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Sophia Patel',
      role: 'Head of Strategy',
      bio: 'Former management consultant with expertise in market analysis and business strategy. Sophia develops data-driven approaches to client challenges.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Daniel Kwon',
      role: 'Digital Marketing Director',
      bio: 'Specialized in performance marketing and analytics with previous experience at major tech companies. Daniel leads our digital transformation initiatives.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const values = [
    {
      id: 1,
      title: 'Strategic Excellence',
      description: 'We approach every challenge with analytical rigor and strategic thinking, ensuring solutions that deliver measurable business impact.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Creative Innovation',
      description: 'We push boundaries and challenge conventions to develop distinctive creative solutions that capture attention and inspire action.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Client Partnership',
      description: 'We believe in collaborative relationships built on transparency, trust, and shared ambition to achieve extraordinary outcomes together.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Continuous Evolution',
      description: 'We embrace change and constantly evolve our approaches, methodologies, and skills to stay at the forefront of marketing excellence.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ];

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
            Our Story
          </motion.p>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About Stellaris
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
            A premier marketing consultancy dedicated to elevating brands through strategic innovation and creative excellence.
          </motion.p>
        </div>
      </motion.div>
      
      {/* Main About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <AboutSection />
      </motion.div>
      
      {/* Our Journey Section */}
      <motion.section 
        className="py-20 px-6 bg-[#1E2128]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="text-blue-500 font-medium mb-3 uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Our Journey
            </motion.p>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              The Stellaris Evolution
            </motion.h2>
            
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            ></motion.div>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500 to-indigo-600"></div>
            
            {/* Timeline items */}
            <div className="space-y-24">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <motion.div className="flex flex-col md:flex-row items-center">
                  <motion.div 
                    className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-white text-2xl font-bold mb-2">2013</h3>
                    <h4 className="text-blue-400 text-xl mb-4">Foundation</h4>
                    <p className="text-gray-300">
                      Stellaris was founded with a vision to bring strategic clarity and creative innovation to the marketing landscape. Starting with a small team of five passionate professionals, we established our core principles and methodology.
                    </p>
                  </motion.div>
                  <motion.div 
                    className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 10, 
                      delay: 0.3 
                    }}
                  >
                    <span className="text-white font-bold">1</span>
                  </motion.div>
                  <div className="w-full md:w-1/2 md:pl-12"></div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <motion.div className="flex flex-col md:flex-row items-center">
                  <motion.div 
                    className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right md:order-2"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-white text-2xl font-bold mb-2">2016</h3>
                    <h4 className="text-blue-400 text-xl mb-4">Expansion</h4>
                    <p className="text-gray-300">
                      Following early success with key clients in the technology and finance sectors, we expanded our team and capabilities to include comprehensive digital marketing services and international market expertise.
                    </p>
                  </motion.div>
                  <motion.div 
                    className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 10, 
                      delay: 0.3 
                    }}
                  >
                    <span className="text-white font-bold">2</span>
                  </motion.div>
                  <div className="w-full md:w-1/2 md:pl-12 md:order-1"></div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <motion.div className="flex flex-col md:flex-row items-center">
                  <motion.div 
                    className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-white text-2xl font-bold mb-2">2019</h3>
                    <h4 className="text-blue-400 text-xl mb-4">Innovation</h4>
                    <p className="text-gray-300">
                      We launched our proprietary Strategic Brand Framework, a methodology that has since helped dozens of clients achieve significant market growth and brand recognition. This period also marked our first industry awards for creative excellence.
                    </p>
                  </motion.div>
                  <motion.div 
                    className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 10, 
                      delay: 0.3 
                    }}
                  >
                    <span className="text-white font-bold">3</span>
                  </motion.div>
                  <div className="w-full md:w-1/2 md:pl-12"></div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <motion.div className="flex flex-col md:flex-row items-center">
                  <motion.div 
                    className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right md:order-2"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-white text-2xl font-bold mb-2">Present</h3>
                    <h4 className="text-blue-400 text-xl mb-4">Leadership</h4>
                    <p className="text-gray-300">
                      Today, Stellaris stands as an industry leader with a global client portfolio and a team of over 50 specialists across strategy, creative, digital, and analytics. We continue to push boundaries and set new standards in marketing excellence.
                    </p>
                  </motion.div>
                  <motion.div 
                    className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 10, 
                      delay: 0.3 
                    }}
                  >
                    <span className="text-white font-bold">4</span>
                  </motion.div>
                  <div className="w-full md:w-1/2 md:pl-12 md:order-1"></div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Core Values Section */}
      <motion.section 
        className="py-20 px-6 bg-[#121418] relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-900/10 blur-[100px] rounded-full"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="text-blue-500 font-medium mb-3 uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Our Principles
            </motion.p>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Core Values
            </motion.h2>
            
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            ></motion.div>
            
            <motion.p 
              className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              The foundational principles that guide our approach, shape our culture, and drive our commitment to excellence.
            </motion.p>
          </motion.div>
          
          {/* Values content goes here */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={value.id} 
                className="bg-gradient-to-b from-[#1E2128] to-[#2A303C] p-6 rounded-lg border border-white/5 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3 + (index * 0.1),
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
                  borderColor: "rgba(59, 130, 246, 0.5)"
                }}
              >
                <motion.div 
                  className="mb-6 text-white bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-lg inline-block"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id} 
                className="bg-gradient-to-b from-[#1E2128] to-[#2A303C] rounded-lg overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2 + (index * 0.1) 
                }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
                }}
              >
                <motion.div 
                  className="aspect-square overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
                <div className="p-6 border-t border-white/5">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <motion.section 
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
            transition={{ duration: 0.5 }}
          >
            Ready to Work Together?
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's discuss how Stellaris can help elevate your brand and achieve your business objectives through strategic marketing excellence.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a 
              href="/services" 
              className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white border border-white/10 px-8 py-4 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Our Services</span>
            </motion.a>
            
            <motion.a 
              href="/contact" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Contact Us</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default About;
