import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { navLinks } from '../../data/siteData';

const footerServices = ['Strategic Planning', 'Digital Marketing', 'Financial Advisory', 'HR Consulting', 'Technology Solutions', 'Business Growth'];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-300">
      {/* Brand logos strip */}
      <div className="border-t border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-50">
            {['PROMUS', 'Samsung', 'SPORT', 'PROBUS', 'Consulting'].map((brand) => (
              <span key={brand} className="text-white font-bold text-lg tracking-wider">{brand}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-bold font-heading text-white mb-4 block">
              Consult<span className="text-primary-500">ing</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We are a premier business consulting firm helping organizations achieve sustainable growth and transformation through strategic insights and proven methodologies.
            </p>
            <div className="flex items-center gap-3">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary-600 flex items-center justify-center text-sm transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold font-heading mb-5 text-base uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-4 rounded"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold font-heading mb-5 text-base uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {footerServices.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-4 rounded"></span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold font-heading mb-5 text-base uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              {[
                { Icon: FaMapMarkerAlt, text: '123 Business Ave, Suite 100, New York, NY 10001' },
                { Icon: FaPhone, text: '+1 (555) 123-4567' },
                { Icon: FaEnvelope, text: 'hello@consulting.com' },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-sm text-gray-400">
                  <Icon className="text-primary-500 mt-0.5 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Consulting. All rights reserved.</p>
          <div className="flex gap-5 text-sm text-gray-500">
            <Link to="#" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
