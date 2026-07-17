import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { pricingPlans } from '../../data/siteData';

export default function PricingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-subtitle" data-aos="fade-up">Pricing Plans</p>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">Choose the Right Plan for You</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="150">
            Transparent pricing with no hidden fees. Select the plan that best fits your business needs and scale up anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.featured
                  ? 'bg-navy-900 text-white shadow-2xl scale-105'
                  : 'bg-base-200 text-navy-900 shadow-sm hover:shadow-lg'
              }`}
            >
              {plan.featured && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-primary-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className={`text-xl font-bold font-heading mb-2 ${plan.featured ? 'text-white' : 'text-navy-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.featured ? 'text-gray-300' : 'text-gray-500'}`}>
                {plan.name === 'Starter' && 'Perfect for small businesses getting started.'}
                {plan.name === 'Professional' && 'Ideal for growing companies seeking momentum.'}
                {plan.name === 'Enterprise' && 'Comprehensive solution for large organizations.'}
              </p>

              <div className="mb-6">
                <span className={`text-4xl font-bold font-heading ${plan.featured ? 'text-white' : 'text-navy-900'}`}>
                  ${plan.price}
                </span>
                <span className={`text-sm ${plan.featured ? 'text-gray-300' : 'text-gray-500'}`}>/{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-start gap-3 text-sm ${plan.featured ? 'text-gray-200' : 'text-gray-600'}`}>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.featured ? 'bg-primary-600' : 'bg-primary-100'}`}>
                      <FaCheck size={10} className="text-white" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.featured
                    ? 'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'bg-white border-2 border-gray-200 hover:border-primary-600 hover:text-primary-600 text-navy-900'
                }`}
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
