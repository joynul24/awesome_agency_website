import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const points = [
  'Experienced team of industry experts',
  'Tailored solutions for every business',
  'Proven track record of delivering results',
  'Data-driven approach to problem solving',
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="About our consulting firm"
                className="w-full h-[480px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white rounded-2xl p-6 shadow-2xl hidden sm:block">
              <p className="text-4xl font-bold font-heading">25+</p>
              <p className="text-sm text-primary-100">Years of Experience</p>
            </div>
          </motion.div>

          {/* Content side */}
          <div>
            <p className="section-subtitle" data-aos="fade-up">About Consulting</p>
            <h2 className="section-title mb-6" data-aos="fade-up" data-aos-delay="100">
              We Build Strong Business &amp; Organization
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="150">
              For over two decades, we have been at the forefront of business transformation, helping organizations of all sizes navigate complexity and achieve lasting success. Our team of seasoned consultants combines deep industry knowledge with innovative methodologies.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {points.map((p, i) => (
                <li
                  key={p}
                  data-aos="fade-up"
                  data-aos-delay={200 + i * 80}
                  className="flex items-start gap-3 text-gray-700 text-sm"
                >
                  <FaCheckCircle className="text-primary-600 mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>

            <Link to="/about" className="btn-primary-custom flex items-center gap-2 group w-fit" data-aos="fade-up">
              More About Us
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
