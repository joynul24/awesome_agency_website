import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlay, FaArrowRight, FaChartLine, FaUsers, FaStar } from 'react-icons/fa';
import heroImg from '../../assets/images/demo-1_(1).png';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
const fadeLeft = { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } };

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d1128 0%, #1a2040 55%, #1e1535 100%)' }}
    >
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT CONTENT ── */}
          <div>
            {/* Badge pill */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-gray-300 tracking-widest uppercase">
                Business Consulting Agency
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-[64px] font-bold font-heading text-white leading-[1.1] mb-6"
            >
              We help brands{' '}
              <span className="text-primary-500 italic">grow smarter.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.32 }}
              className="text-gray-400 text-base leading-relaxed mb-9 max-w-md"
            >
              Award-winning strategy, insight and execution partners to ambitious teams
              building the future of their industries.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.44 }}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-14"
            >
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/30 hover:-translate-y-0.5"
              >
                Explore Services
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="flex items-center gap-3 group text-white hover:text-primary-400 transition-colors">
                <span className="w-11 h-11 rounded-full border-2 border-white/30 group-hover:border-primary-500 flex items-center justify-center transition-all duration-300 group-hover:bg-primary-500/10">
                  <FaPlay size={12} className="ml-0.5" />
                </span>
                <span className="text-sm font-medium">Watch Showreel</span>
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.56 }}
              className="flex items-center gap-10 border-t border-white/10 pt-8"
            >
              {[
                { Icon: FaChartLine, value: '98%', label: 'Success Rate' },
                { Icon: FaUsers, value: '2.5K+', label: 'Happy Clients' },
                { Icon: FaStar, value: '15+', label: 'Years' },
              ].map(({ Icon, value, label }) => (
                <div key={label} className="flex flex-col gap-1 group cursor-default">
                  <Icon className="text-primary-500 mb-1" size={16} />
                  <span className="text-2xl font-bold font-heading text-white group-hover:text-primary-400 transition-colors duration-300">
                    {value}
                  </span>
                  <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT IMAGE CARD ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main image card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImg}
                alt="Business consulting team"
                className="w-full h-[440px] object-cover"
              />

              {/* Dark overlay at bottom for featured text */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

              {/* Featured case label at bottom */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  Featured Case
                </p>
                <p className="text-white font-semibold text-sm">
                  Global expansion strategy — +340% revenue
                </p>
              </div>
            </div>

            {/* Floating revenue growth badge — top right */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-5 -right-5 bg-white rounded-xl shadow-2xl px-4 py-3 flex items-center gap-3 z-10"
            >
              <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                <FaChartLine className="text-primary-600" size={16} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-medium leading-none mb-0.5">
                  Revenue Growth
                </p>
                <p className="text-sm font-bold text-navy-900 leading-none">
                  +45% avg / quarter
                </p>
              </div>
            </motion.div>

            {/* Floating clients badge — bottom left */}
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-2xl px-4 py-3 flex items-center gap-3 z-10"
            >
              <div className="flex -space-x-2">
                {[
                  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60',
                  'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60',
                  'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=60',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="client"
                    className="w-8 h-8 rounded-full object-cover border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-navy-900 leading-none">2,500+ Clients</p>
                <p className="text-[10px] text-gray-400 font-medium mt-0.5">Globally trusted</p>
              </div>
            </motion.div>

            {/* Subtle glow behind card */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-primary-600/20 blur-3xl scale-95 translate-y-4" />
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 0C1200 60 960 80 720 60C480 40 240 0 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
