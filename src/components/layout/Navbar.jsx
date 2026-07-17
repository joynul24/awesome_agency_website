import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { navLinks } from '../../data/siteData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className={`text-2xl font-bold font-heading transition-colors duration-300 ${isScrolled ? 'text-navy-900' : 'text-white'}`}>
              Consult<span className="text-primary-600">ing</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 hover:text-primary-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300 ${
                    isActive
                      ? 'text-primary-600 after:w-full'
                      : `after:w-0 hover:after:w-full ${isScrolled ? 'text-gray-700' : 'text-white'}`
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Social Icons + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs transition-all duration-300 hover:bg-primary-600 hover:border-primary-600 hover:text-white ${
                  isScrolled ? 'border-gray-300 text-gray-600' : 'border-white/50 text-white'
                }`}
              >
                <Icon />
              </a>
            ))}
            <Link to="/contact" className="btn-primary-custom text-sm ml-2">
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 rounded transition-colors ${isScrolled ? 'text-navy-900' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `py-2 text-base font-medium border-b border-gray-100 transition-colors hover:text-primary-600 ${
                      isActive ? 'text-primary-600' : 'text-gray-700'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary-custom text-center mt-2"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
