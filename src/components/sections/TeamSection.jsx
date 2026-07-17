import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { team } from '../../data/siteData';

export default function TeamSection() {
  return (
    <section className="py-24 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-subtitle" data-aos="fade-up">Our Team</p>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">Meet Our Expert Consultants</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Social overlay */}
                <div className="absolute inset-0 bg-navy-950/60 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[
                    { Icon: FaLinkedinIn, href: member.socials.linkedin },
                    { Icon: FaTwitter, href: member.socials.twitter },
                  ].map(({ Icon, href }, idx) => (
                    <a
                      key={idx}
                      href={href}
                      className="w-11 h-11 rounded-full bg-white/10 hover:bg-primary-600 text-white flex items-center justify-center transition-colors duration-300"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold font-heading text-navy-900 group-hover:text-primary-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm text-primary-600 font-medium mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
