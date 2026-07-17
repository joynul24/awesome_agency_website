import { useState, useRef, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { faqs } from '../../data/siteData';

function FAQItem({ faq, isOpen, onToggle }) {
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`bg-white rounded-xl border transition-colors duration-300 overflow-hidden ${
        isOpen ? 'border-primary-200 shadow-md' : 'border-gray-100'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span
          className={`font-semibold font-heading transition-colors duration-200 ${
            isOpen ? 'text-primary-600' : 'text-navy-900'
          }`}
        >
          {faq.question}
        </span>
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
            isOpen ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-500'
          }`}
        >
          {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
        </span>
      </button>

      <div
        ref={bodyRef}
        style={{
          height: height,
          transition: 'height 0.3s ease',
          overflow: 'hidden',
        }}
      >
        <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-24 bg-base-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle" data-aos="fade-up">FAQ</p>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
