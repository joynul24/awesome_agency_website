import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { testimonial } from '../../data/siteData';

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle" data-aos="fade-up">Testimonials</p>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">What Our Clients Say</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-base-200 rounded-3xl p-10 md:p-16 text-center"
        >
          <FaQuoteLeft size={48} className="text-primary-600/20 mx-auto mb-6" />

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
          </div>

          <p className="text-lg md:text-xl text-navy-900 font-medium leading-relaxed mb-8 italic">
            "{testimonial.quote}"
          </p>

          <div className="flex items-center justify-center gap-4">
            <img
              src={testimonial.avatar}
              alt={testimonial.author}
              className="w-16 h-16 rounded-full object-cover border-4 border-primary-100"
            />
            <div className="text-left">
              <p className="font-bold font-heading text-navy-900">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
