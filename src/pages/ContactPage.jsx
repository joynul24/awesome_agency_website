import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    { Icon: FaMapMarkerAlt, title: 'Visit Us', text: '123 Business Ave, Suite 100, New York, NY 10001' },
    { Icon: FaPhone, title: 'Call Us', text: '+1 (555) 123-4567' },
    { Icon: FaEnvelope, title: 'Email Us', text: 'hello@consulting.com' },
  ];

  return (
    <>
      <Helmet>
        <title>Contact - Consulting</title>
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
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading text-white"
          >
            Let's Start a Conversation
          </motion.h1>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                whileHover={{ y: -6 }}
                className="bg-base-200 rounded-2xl p-8 text-center group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-50 group-hover:bg-primary-600 flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <info.Icon size={24} className="text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold font-heading text-navy-900 mb-2">{info.title}</h3>
                <p className="text-gray-500 text-sm">{info.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <p className="section-subtitle">Send a Message</p>
              <h2 className="text-2xl font-bold font-heading text-navy-900 mb-6">Drop Us a Line</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors text-sm"
                  />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors text-sm"
                  />
                </div>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors text-sm"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors text-sm resize-none"
                />
                <button
                  type="submit"
                  className="btn-primary-custom w-full flex items-center justify-center gap-2"
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                  {!submitted && <FaPaperPlane />}
                </button>
              </form>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-sm min-h-[400px] bg-navy-900 relative"
            >
              <iframe
                title="Our Location"
                src="https://www.google.com/maps?q=New+York&output=embed"
                className="w-full h-full min-h-[400px] border-0"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
