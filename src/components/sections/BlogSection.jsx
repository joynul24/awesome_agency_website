import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import { blogs } from '../../data/siteData';

export default function BlogSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="section-subtitle" data-aos="fade-up">Our Blog</p>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">Latest Insights &amp; News</h2>
          </div>
          <Link to="/blog" className="text-primary-600 font-semibold text-sm flex items-center gap-2 group" data-aos="fade-up">
            View All Articles
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((post, i) => (
            <motion.article
              key={post.id}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 text-xs font-semibold text-white bg-primary-600 px-3 py-1.5 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <p className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <FaCalendarAlt className="text-primary-500" />
                  {post.date}
                </p>
                <h3 className="text-lg font-bold font-heading text-navy-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <Link to="/blog" className="text-primary-600 text-sm font-semibold flex items-center gap-2 group/link">
                  Read More
                  <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
