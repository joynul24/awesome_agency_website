import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { featuredCaseStudies } from '../../data/siteData';

export default function CaseStudiesFeatured() {
  return (
    <section className="py-24 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="section-subtitle" data-aos="fade-up">Our Work</p>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">Featured Case Studies</h2>
          </div>
          <Link to="/case-studies" className="text-primary-600 font-semibold text-sm flex items-center gap-2 group" data-aos="fade-up">
            View All Case Studies
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* First card large */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredCaseStudies.slice(0, 3).map((item, i) => (
            <motion.div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-2xl shadow-md cursor-pointer ${i === 0 ? 'lg:col-span-2 lg:row-span-1' : ''}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${i === 0 ? 'h-80 lg:h-96' : 'h-64'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block text-xs font-semibold text-primary-300 bg-primary-600/20 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
                  {item.category}
                </span>
                <h3 className="text-white font-bold font-heading text-xl leading-snug group-hover:text-primary-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-primary-400 text-sm font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read Case Study <FaArrowRight />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Remaining three */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          {featuredCaseStudies.slice(3).map((item, i) => (
            <motion.div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block text-xs font-semibold text-primary-300 bg-primary-600/20 backdrop-blur-sm px-3 py-1 rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="text-white font-bold font-heading text-base leading-snug group-hover:text-primary-300 transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
