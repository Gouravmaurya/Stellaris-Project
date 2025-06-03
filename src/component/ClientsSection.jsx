import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ClientCard from './ClientCard';

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

const ClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const clients = [
    {
      id: 1,
      name: 'AZURE VENTURES',
      icon: '⚓',
      bgColor: 'bg-gradient-to-br from-[#192E4E] to-[#2A3E54]',
      label: 'Financial Services'
    },
    {
      id: 2,
      name: 'NATURALIS',
      icon: '🌿',
      bgColor: 'bg-gradient-to-br from-[#3B4B54] to-[#4C5D6E]',
      label: 'Sustainable Products'
    },
    {
      id: 3,
      name: 'QUANTUM CORP',
      icon: '⚙️',
      bgColor: 'bg-gradient-to-br from-[#192E4E] to-[#2A3E54]',
      label: 'Technology'
    },
    {
      id: 4,
      name: 'OCEANIC',
      icon: '🌊',
      bgColor: 'bg-gradient-to-br from-[#3B4B54] to-[#4C5D6E]',
      label: 'Luxury Hospitality'
    },
    {
      id: 5,
      name: 'ECO ESSENTIALS',
      icon: '🌱',
      bgColor: 'bg-gradient-to-br from-[#192E4E] to-[#2A3E54]',
      label: 'Consumer Goods'
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "Stellaris transformed our market approach with their strategic insights and premium content production. The results exceeded our expectations significantly.",
      author: "Alexandra Chen",
      position: "Chief Marketing Officer, Azure Ventures"
    },
    {
      id: 2,
      quote: "The level of sophistication and attention to detail that Stellaris brings to every project is unparalleled in the industry. They've become an invaluable extension of our team.",
      author: "Marcus Reynolds",
      position: "Founder & CEO, Oceanic"
    }
  ];

  return (
    <section className="bg-[#1a1d24] py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated decorative elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#121418] to-transparent"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.05, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-900/5 blur-[120px] rounded-full"
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.p 
            variants={fadeIn}
            className="text-blue-500 font-medium mb-3 uppercase tracking-wider"
          >
            Trusted Partnerships
          </motion.p>
          <motion.h2 
            variants={fadeIn}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
          >
            Our Distinguished Clients
          </motion.h2>
          <motion.div 
            variants={fadeIn}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"
          />
          <motion.p 
            variants={fadeIn}
            className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            We're privileged to collaborate with industry leaders who trust us to elevate their brand presence and market positioning.
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20"
        >
          {clients.map((client, idx) => (
            <motion.div
              key={client.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <ClientCard
                icon={client.icon}
                name={client.name}
                bgColor={client.bgColor}
                label={client.label}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 mb-20"
        >
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {clients.map((client, index) => (
              <motion.div 
                key={client.id} 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + (index * 0.05) }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                className="text-white/70 text-sm font-medium px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm cursor-pointer"
              >
                {client.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Testimonials */}
        <div className="mt-24 border-t border-white/10 pt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">Client Testimonials</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-gradient-to-br from-[#1E2128] to-[#2A303C] p-8 rounded-lg border border-white/5 relative premium-card">
                {/* Quote mark */}
                <div className="absolute top-6 right-6 text-6xl text-blue-500/20 font-serif">"</div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10">
                  {testimonial.quote}
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-medium">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
