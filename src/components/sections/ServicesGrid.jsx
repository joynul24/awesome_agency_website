import { motion } from 'framer-motion';
import {
  FaChartLine, FaBullhorn, FaCoins, FaUsers, FaLaptopCode, FaRocket,
} from 'react-icons/fa';
import { services } from '../../data/siteData';

const iconMap = {
  strategy: FaChartLine,
  marketing: FaBullhorn,
  finance: FaCoins,
  hr: FaUsers,
  tech: FaLaptopCode,
  growth: FaRocket,
};

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-subtitle" data-aos="fade-up">What We Offer</p>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">Our Best Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || FaRocket;
            return (
              <motion.div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
                className="group bg-white border border-gray-100 rounded-2xl p-8 cursor-pointer shadow-sm transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-primary-50 group-hover:bg-primary-600 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon size={28} className="text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold font-heading text-navy-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                <div className="mt-5 flex items-center gap-2 text-primary-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
