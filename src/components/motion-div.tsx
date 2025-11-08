import React from 'react';
import { itemTransition, itemVariants } from '../utils';
import { motion } from 'framer-motion';

const MotionDiv: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <motion.div
        variants={itemVariants}
        transition={itemTransition}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default MotionDiv;
