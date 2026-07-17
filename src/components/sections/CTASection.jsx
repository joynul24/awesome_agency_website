import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1a2040 0%, #2f33ca 100%)',
        }}
      />
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-primary-300 text-sm font-semibold uppercase tracking-widest mb-3">Let's Talk</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white leading-tight">
              Ready to Transform Your Business? Let's Get Started Today.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-primary-600 hover:bg-white text-white hover:text-primary-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg"
            >
              Schedule a Free Consultation
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
