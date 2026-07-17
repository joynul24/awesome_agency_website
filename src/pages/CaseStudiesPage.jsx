import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { featuredCaseStudies } from '../data/siteData';
import CTASection from '../components/sections/CTASection';

export default function CaseStudiesPage() {
  return (
    <>
      <Helmet>
        <title>Case Studies - Consulting</title>
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
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading text-white"
          >
            Success Stories That Speak for Themselves
          </motion.h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCaseStudies.map((item, i) => (
              <motion.div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block text-xs font-semibold text-primary-300 bg-primary-600/20 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold font-heading text-lg leading-snug group-hover:text-primary-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary-400 text-sm font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Read Case Study <FaArrowRight />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
