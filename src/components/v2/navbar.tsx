import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import MobileNav from './mobile-nav';
import { CiMenuFries } from 'react-icons/ci';
import { IoLogoGithub } from 'react-icons/io';

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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <main className="absolute inset-0 top-5 flex h-12 items-center justify-center">
        <section className="bg-primary/10 border-primary/20 sticky top-0 z-50 container flex items-center justify-between rounded-2xl border-b px-3 py-4 backdrop-blur-md">
          <div className="flex items-center space-x-2">
            <img src="/sa.png" alt="saint anthony logo" className="h-full w-10" />
            <h3 className="text-xl font-bold">
              Saint <span className="text-primary">Anthony</span>{' '}
            </h3>
          </div>
          {/* links */}
          <ul className="hidden items-center space-x-5 md:flex">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="nav-link hover:text-primary w-full rounded-lg font-medium transition-all duration-300"
              >
                <li>{link.label}</li>
              </a>
            ))}
          </ul>
          {/* links */}
          <div className="hidden items-center space-x-3 lg:flex">
            {/* github */}
            <a href="https://www.linkedin.com/in/anthony-mensah-3b4925227/" target="_blank">
              <div className="flex items-center space-x-1">
                <IoLogoGithub />
                <span className="nav-link">github</span>
              </div>
            </a>
            {/* github */}
            <div className="flex items-center space-x-1">
              <IoLogoGithub />
              <span>github</span>
            </div>
          </div>
          {/* hamburger menu */}
          <div className="relative md:hidden" onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? (
              <X className="text-primary cursor-pointer" />
            ) : (
              <CiMenuFries className="text-primary cursor-pointer text-2xl" />
              // <Menu className="text-primary cursor-pointer" />
            )}
            {isOpen && (
              <div className="absolute top-13 -right-4">
                <MobileNav />
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Navbar;
