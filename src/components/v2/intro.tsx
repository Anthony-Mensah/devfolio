import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiArrowDown } from 'react-icons/fi';
import { IoLogoGithub } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { containerVariants, itemTransition, itemVariants } from '../../utils';
import MotionDiv from '../motion-div';

const EnhancedIntro = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = ['Web Developer', 'App Developer', 'Frontend Engineer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-background relative flex w-full snap-start flex-col overflow-hidden md:h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="bg-foreground absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 transform rounded-full blur-3xl"></div>
        <div className="bg-foreground absolute bottom-0 left-0 h-80 w-80 -translate-x-1/2 translate-y-1/2 transform rounded-full blur-3xl"></div>
      </div>

      {/* Main Content - Added padding top for navbar */}
      <main className="relative z-10 container mx-auto flex flex-1 flex-col items-center justify-center px-6 pt-24 lg:pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex w-full max-w-4xl flex-col items-center space-y-6 md:space-y-8"
        >
          {/* Hello Badge */}
          <MotionDiv>
            <div className="border-border hover:border-foreground flex items-center space-x-3 rounded-full border px-6 py-3 transition-colors duration-300">
              <span className="text-foreground text-lg font-medium">Hello, I'm</span>
              <div className="bg-primary h-2 w-2 animate-pulse rounded-full"></div>
            </div>
          </MotionDiv>

          {/* Name with Gradient Effect */}
          <motion.div
            variants={itemVariants}
            transition={itemTransition}
            className="space-y-2 text-center md:space-y-3"
          >
            <h1 className="text-foreground text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Saint Anthony
            </h1>
            <div className="bg-primary mx-auto h-1 w-32 md:w-40"></div>
          </motion.div>

          {/* Animated Role */}
          <motion.div
            variants={itemVariants}
            transition={itemTransition}
            className="flex h-12 items-center md:h-16"
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-muted text-center text-2xl font-medium md:text-4xl"
              >
                {roles[currentRole]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            transition={itemTransition}
            className="text-muted max-w-2xl text-center text-lg leading-relaxed"
          >
            Crafting intuitive digital experiences with clean code and thoughtful design.
            Specialized in building scalable web and mobile applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            transition={itemTransition}
            className="flex w-full flex-col items-center gap-4 pt-4 sm:w-auto sm:flex-row"
          >
            <a
              href="https://wa.me/233550633337"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto"
            >
              <button className="bg-primary text-primary-foreground relative w-full overflow-hidden px-8 py-4 font-semibold transition-transform duration-300 hover:scale-105 sm:w-auto">
                <div className="relative z-10 flex items-center justify-center gap-2">
                  <span>Let's Work Together</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </div>
                <div className="bg-hover absolute inset-0 origin-left scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100"></div>
              </button>
            </a>

            <button className="group border-primary text-foreground relative w-full border-2 px-8 py-4 font-semibold transition-transform duration-300 hover:scale-105 sm:w-auto">
              <a href="cv.pdf" download>
                <span>Download Resume</span>
                <div className="bg-primary absolute inset-0 origin-left scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100"></div>
                <span className="text-primary-foreground absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Download Resume
                </span>
              </a>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            transition={itemTransition}
            className="flex items-center gap-6 pt-2"
          >
            {[
              { icon: IoLogoGithub, href: 'https://github.com/Anthony-Mensah', label: 'GitHub' },
              {
                icon: FaLinkedin,
                href: 'https://www.linkedin.com/in/anthony-mensah-3b4925227/',
                label: 'LinkedIn',
              },
              {
                icon: FiMail,
                href: 'https://mail.google.com/mail/?view=cm&fs=1&to=saintanthony.dev@gmail.com',
                label: 'Email',
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border hover:border-foreground flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="text-foreground h-5 w-5" />
              </a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            transition={itemTransition}
            className="absolute bottom-16 hidden lg:flex"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-muted flex flex-col items-center gap-2"
            >
              <span className="text-sm">Scroll to explore</span>
              <FiArrowDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </section>
  );
};

export default EnhancedIntro;
