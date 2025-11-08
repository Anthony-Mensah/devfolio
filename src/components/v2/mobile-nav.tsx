import { motion } from 'framer-motion';
import { IoLogoGithub } from 'react-icons/io';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
const navLinks = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#me',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
];
const MobileNav = () => {
  return (
    <>
      <motion.main
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="border-primary/20 bg-background min-w-[200px] rounded-lg border p-3 shadow-2xl backdrop-blur-lg md:hidden"
      >
        <ul className="flex flex-col items-start">
          {navLinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="nav-link text-foreground hover:text-primary hover:bg-primary/10 w-full rounded-lg px-4 py-3 font-medium transition-all duration-300"
            >
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
              >
                {link.label}
              </motion.li>
            </a>
          ))}

          {/* Social Links - Horizontal */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex space-x-4 px-4 py-3"
          >
            {/* github */}
            <a
              href="https://github.com/Anthony-Mensah"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground hover:bg-primary group rounded-lg p-3 transition-all duration-300"
            >
              <div className="flex items-center space-x-2">
                <IoLogoGithub className="text-background text-xl transition-transform duration-300 group-hover:scale-110" />
              </div>
            </a>
            {/* linkedin */}
            <a
              href="https://www.linkedin.com/in/anthony-mensah-3b4925227/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground hover:bg-primary group rounded-lg p-3 transition-all duration-300"
            >
              <div className="flex items-center space-x-2">
                <FaLinkedin className="text-background text-xl transition-transform duration-300 group-hover:scale-110" />
              </div>
            </a>
            {/* whatsapp */}
            <a
              href="https://wa.me/233550633337"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground hover:bg-primary group rounded-lg p-3 transition-all duration-300"
            >
              <div className="flex items-center space-x-2">
                <FaWhatsapp className="text-background text-xl transition-transform duration-300 group-hover:scale-110" />
              </div>
            </a>
          </motion.div>
        </ul>
      </motion.main>
    </>
  );
};

export default MobileNav;
