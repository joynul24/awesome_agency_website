import { motion } from 'framer-motion';
import { FaChartBar, FaLightbulb, FaCogs, FaRocket } from 'react-icons/fa';

const steps = [
  { Icon: FaChartBar, title: 'Analyze', description: 'We deep-dive into your business data, market trends, and operations to identify opportunities and challenges.' },
  { Icon: FaLightbulb, title: 'Strategize', description: 'Based on insights, we craft a customized strategy with clear objectives, timelines, and measurable KPIs.' },
  { Icon: FaCogs, title: 'Implement', description: 'Our experts work alongside your team to execute the strategy, ensuring seamless adoption and minimal disruption.' },
  { Icon: FaRocket, title: 'Scale', description: 'We help you scale successful initiatives, continuously optimizing for sustained long-term growth.' },
];

export default function TransformSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-subtitle" data-aos="fade-up">How We Work</p>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">Transform Your Business in 4 Steps</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 -z-0"></div>

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="relative bg-white z-10 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-gray-100 group-hover:border-primary-600 flex items-center justify-center mb-5 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                  <step.Icon size={32} className="text-primary-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm font-bold text-primary-600 mb-2">Step 0{i + 1}</span>
                <h3 className="text-lg font-bold font-heading text-navy-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
