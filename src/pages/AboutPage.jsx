import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import StatsSection from '../components/sections/StatsSection';
import TeamSection from '../components/sections/TeamSection';
import CTASection from '../components/sections/CTASection';

const values = [
  { title: 'Integrity', description: 'We uphold the highest ethical standards in every engagement, building trust through transparency and honesty.' },
  { title: 'Excellence', description: 'We pursue excellence relentlessly, delivering solutions that consistently exceed client expectations.' },
  { title: 'Innovation', description: 'We embrace creative thinking and cutting-edge approaches to solve complex business challenges.' },
  { title: 'Partnership', description: 'We treat client success as our own, forging long-term relationships built on mutual growth.' },
];

const points = [
  '25+ years of combined industry experience',
  'Team of 50+ specialized consultants',
  'Offices across 5 major cities',
  'Trusted by 480+ global clients',
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - Consulting</title>
      </Helmet>

      {/* Page header */}
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
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading text-white"
          >
            We Are a Team of Dedicated Professionals
          </motion.h1>
        </div>
      </section>

      {/* About content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Our team"
                className="rounded-2xl shadow-xl w-full h-[480px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white rounded-2xl p-6 shadow-2xl hidden sm:block">
                <p className="text-4xl font-bold font-heading">480+</p>
                <p className="text-sm text-primary-100">Happy Clients</p>
              </div>
            </motion.div>

            <div>
              <p className="section-subtitle" data-aos="fade-up">Our Story</p>
              <h2 className="section-title mb-6" data-aos="fade-up" data-aos-delay="100">
                Committed to Driving Business Excellence Since 1999
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="150">
                Founded in 1999, Consulting has grown from a small advisory practice into a globally recognized consulting firm. Our journey has been defined by a relentless commitment to helping businesses navigate complexity and seize opportunity.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="200">
                Today, we serve clients across industries and continents, bringing deep expertise, proven frameworks, and a passion for measurable impact to every engagement.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {points.map((p, i) => (
                  <li key={p} data-aos="fade-up" data-aos-delay={250 + i * 80} className="flex items-start gap-3 text-gray-700 text-sm">
                    <FaCheckCircle className="text-primary-600 mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle" data-aos="fade-up">Our Values</p>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">What Drives Us Forward</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <FaCheckCircle className="text-primary-600" size={22} />
                </div>
                <h3 className="text-lg font-bold font-heading text-navy-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <TeamSection />
      <CTASection />
    </>
  );
}
