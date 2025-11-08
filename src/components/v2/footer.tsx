import { IoLogoGithub } from 'react-icons/io';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
      <section className="bg-card mt-5 w-full snap-start py-3">
        <main className="container mx-auto flex flex-col items-center justify-center space-y-3 md:flex-row md:justify-between">
          {/* name and rights */}
          <div className="flex items-center justify-center space-x-3">
            <div className="flex items-center space-x-2">
              <img src="/sa.png" alt="saint anthony logo" className="h-full w-10" />
              <h3 className="text-xl font-bold">
                Saint <span className="text-primary">Anthony</span>{' '}
              </h3>
            </div>
            <div className="bg-muted h-4 w-[0.5px]"></div>
            <p className="text-muted">All rights reserved</p>
          </div>
          {/* social links */}
          <div className="flex items-center space-x-3">
            <a href="https://github.com/Anthony-Mensah" target="_blank">
              <IoLogoGithub className="nav-link" />
            </a>
            <a href="https://www.linkedin.com/in/anthony-mensah-3b4925227/" target="_blank">
              <FaLinkedin className="nav-link" />
            </a>
            <a href="https://wa.me/233550633337" target="_blank">
              <FaWhatsapp className="nav-link" />
            </a>
          </div>
        </main>
      </section>
    </>
  );
};

export default Footer;
