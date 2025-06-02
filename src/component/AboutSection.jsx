import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  return (
    <section className="bg-[#1a1d24] py-16 sm:py-20 md:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          ref={ref}
          className="flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10 md:gap-12"
        >
          {/* Left Column - Image Grid */}
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full md:w-1/2"
          >
            <motion.div 
              variants={fadeIn}
              className="relative"
            >
              <motion.div 
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={isInView ? { opacity: 0.7, x: 0, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-t-2 border-l-2 border-blue-500"
              />
              <motion.div 
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={isInView ? { opacity: 0.7, x: 0, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-b-2 border-r-2 border-blue-500"
              />
              <motion.div 
                variants={fadeIn}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-[#1E2128] to-[#2A303C] p-1 rounded-lg shadow-xl overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-1">
                  {[
                    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=480&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=480&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=480&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=480&auto=format&fit=crop'
                  ].map((img, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.4 + (index * 0.1),
                        ease: "easeOut"
                      }}
                      className="aspect-square rounded overflow-hidden"
                    >
                      <div 
                        className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                        style={{ backgroundImage: `url(${img})` }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Content */}
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full md:w-1/2 space-y-8"
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 relative inline-block">
                About Stellaris
                <motion.span 
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '33%' } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-transparent"
                />
              </h2>
              
              <div className="space-y-6">
                <motion.p 
                  variants={fadeIn}
                  transition={{ delay: 0.2 }}
                  className="text-gray-300 text-lg leading-relaxed"
                >
                  Stellaris is a premier marketing consultancy that partners with forward-thinking organizations to develop sophisticated brand strategies and compelling narratives.
                </motion.p>
                
                <motion.p 
                  variants={fadeIn}
                  transition={{ delay: 0.3 }}
                  className="text-gray-300 text-lg leading-relaxed"
                >
                  With over a decade of industry expertise, we combine analytical precision with creative innovation to deliver measurable results. Our multidisciplinary team of strategists, designers, and digital specialists work collaboratively to elevate your brand's market position.
                </motion.p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-3 sm:pt-4"
            >
              {[
                {
                  title: 'Strategic Vision',
                  desc: 'Data-driven approach to market positioning and brand development'
                },
                {
                  title: 'Creative Excellence',
                  desc: 'Award-winning design and content creation capabilities'
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.6 + (index * 0.1),
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                  }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 p-5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <h4 className="text-white font-semibold mb-2 flex items-center">
                    <motion.span 
                      animate={isInView ? { 
                        opacity: [0, 1, 1],
                        scale: [0.8, 1.2, 1],
                        transition: { 
                          duration: 0.6, 
                          delay: 0.7 + (index * 0.1)
                        }
                      } : {}}
                      className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                    />
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
