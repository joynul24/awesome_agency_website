import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function CTABottomSection() {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #c11414 0%, #e51d1d 100%)' }}
        >
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
          />
          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">Get in Touch</p>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight mb-6">
              Let's Build Something Great Together
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Join hundreds of businesses that have transformed their operations with our expert consulting. Your journey to excellence starts with a single conversation.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-white hover:bg-navy-900 text-primary-600 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg"
            >
              Start Your Project
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
