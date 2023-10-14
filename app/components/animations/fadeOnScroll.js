"use client"
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const FadeInOnScroll = ({ children }) => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;

    const handleScroll = async () => {
      const topOffset = element.getBoundingClientRect().top;
      const windowInnerHeight = window.innerHeight;
      const isVisible = topOffset < windowInnerHeight;

      if (isVisible) {
        await controls.start({ opacity: 1 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls} >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;