import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowRight, FaUser } from 'react-icons/fa';
import { blogs } from '../data/siteData';
import CTASection from '../components/sections/CTASection';

// Extended blog list for the blog page
const allBlogs = [
  ...blogs,
  {
    id: 4,
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Finance',
    date: 'February 28, 2024',
    title: '5 Financial Mistakes Every Startup Should Avoid',
    excerpt: 'Avoid these common financial pitfalls that can derail your startup before it even gets off the ground.',
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Innovation',
    date: 'February 20, 2024',
    title: 'Embracing Innovation in Traditional Industries',
    excerpt: 'How legacy businesses can leverage innovation to stay competitive in a rapidly evolving marketplace.',
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Operations',
    date: 'February 12, 2024',
    title: 'Streamlining Operations for Maximum Efficiency',
    excerpt: 'Practical strategies to identify bottlenecks and optimize your business operations for better output.',
  },
];

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog - Consulting</title>
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
            Our Blog
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading text-white"
          >
            Insights, News &amp; Resources
          </motion.h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogs.map((post, i) => (
              <motion.article
                key={post.id}
                data-aos="fade-up"
                data-aos-delay={i * 80}
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
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-primary-500" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaUser className="text-primary-500" />
                      Admin
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-navy-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="text-primary-600 text-sm font-semibold flex items-center gap-2 group/link">
                    Read More
                    <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
