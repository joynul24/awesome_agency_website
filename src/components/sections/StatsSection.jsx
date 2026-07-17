import { motion } from 'framer-motion';
import { stats } from '../../data/siteData';

export default function StatsSection() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d1128 0%, #1a2040 100%)' }}
    >
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`text-center group ${stat.highlight ? 'scale-105' : ''}`}
            >
              <p className={`text-4xl md:text-5xl font-bold font-heading mb-2 transition-colors duration-300 ${stat.highlight ? 'text-primary-500' : 'text-white group-hover:text-primary-400'}`}>
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
