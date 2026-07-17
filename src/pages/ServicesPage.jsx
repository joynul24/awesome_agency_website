import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  FaChartLine, FaBullhorn, FaCoins, FaUsers, FaLaptopCode, FaRocket, FaCheckCircle,
} from 'react-icons/fa';
import { services } from '../data/siteData';
import CTASection from '../components/sections/CTASection';
import FAQSection from '../components/sections/FAQSection';

const iconMap = {
  strategy: FaChartLine, marketing: FaBullhorn, finance: FaCoins,
  hr: FaUsers, tech: FaLaptopCode, growth: FaRocket,
};

const process = [
  { step: '01', title: 'Discovery', description: 'We start by understanding your business, goals, challenges, and the market landscape you operate in.' },
  { step: '02', title: 'Analysis', description: 'Our experts conduct a thorough analysis using proven frameworks and data-driven methodologies.' },
  { step: '03', title: 'Strategy', description: 'We develop a tailored strategy with clear objectives, timelines, and measurable success metrics.' },
  { step: '04', title: 'Execution', description: 'We work alongside your team to implement the strategy, ensuring seamless execution and adoption.' },
];

const serviceImages = [3184291, 3184338, 3184325, 3183197, 3184465, 3183150];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services - Consulting</title>
      </Helmet>

      <section
        className="pt-32 pb-20 relative"
        style={{ background: 'linear-gradient(135deg, #0d1128 0%, #1a2040 100%)' }}
      >
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Our Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading text-white"
          >
            Comprehensive Consulting Solutions
          </motion.h1>
        </div>
      </section>

      {/* Services list with alternating layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || FaRocket;
            const isReversed = i % 2 === 1;
            const photoId = serviceImages[i];
            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={isReversed ? 'lg:order-2' : ''}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={`https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=700`}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={isReversed ? 'lg:order-1' : ''}
                >
                  <div className="w-16 h-16 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                    <Icon size={28} className="text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-navy-900 mb-4">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {['Tailored approach', 'Expert consultants', 'Measurable results'].map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                        <FaCheckCircle className="text-primary-600 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle" data-aos="fade-up">Our Process</p>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">How We Deliver Results</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                <p className="text-5xl font-bold font-heading text-primary-100 group-hover:text-primary-200 transition-colors duration-300 mb-3">
                  {p.step}
                </p>
                <h3 className="text-lg font-bold font-heading text-navy-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </>
  );
}
