export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const services = [
  {
    id: 1,
    icon: 'strategy',
    title: 'Strategic Planning',
    description: 'We craft data-driven strategies that align with your goals and drive sustainable growth for your organization.',
  },
  {
    id: 2,
    icon: 'marketing',
    title: 'Digital Marketing',
    description: 'Boost your brand visibility and attract quality leads with our comprehensive digital marketing solutions.',
  },
  {
    id: 3,
    icon: 'finance',
    title: 'Financial Advisory',
    description: 'Expert financial guidance to help you make informed decisions, optimize costs, and maximize profitability.',
  },
  {
    id: 4,
    icon: 'hr',
    title: 'HR Consulting',
    description: 'Build high-performing teams with our talent management and human resource optimization services.',
  },
  {
    id: 5,
    icon: 'tech',
    title: 'Technology Solutions',
    description: 'Leverage cutting-edge technology to streamline operations and gain a competitive edge in the market.',
  },
  {
    id: 6,
    icon: 'growth',
    title: 'Business Growth',
    description: 'Identify untapped opportunities and execute proven growth frameworks to scale your business faster.',
  },
];

export const featuredCaseStudies = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Strategic Planning',
    title: 'How We Helped a Startup Scale 10x in 12 Months',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Digital Marketing',
    title: 'Driving 300% ROI for a Retail Brand',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Financial Advisory',
    title: 'Restructuring Operations to Save $2M Annually',
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'HR Consulting',
    title: 'Building a World-Class Remote Team from Scratch',
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Technology',
    title: 'Digital Transformation for a Legacy Enterprise',
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Business Growth',
    title: 'Market Expansion Strategy Across 5 New Regions',
  },
];

export const stats = [
  { value: '8,705', label: 'Projects Done' },
  { value: '480', label: 'Happy Clients', highlight: true },
  { value: '626', label: 'Awards Won' },
  { value: '9,774', label: 'Cups of Coffee' },
];

export const testimonial = {
  quote:
    "Working with this consulting firm was a transformative experience for our business. Their strategic insights helped us navigate complex market challenges and achieve remarkable growth. The team's expertise and dedication are unmatched.",
  author: 'Sarah Johnson',
  role: 'CEO, TechVentures Inc.',
  avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
};

export const team = [
  {
    id: 1,
    name: 'Oliver Walsh',
    role: 'Chief Executive Officer',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    id: 2,
    name: 'Oliver Walsh',
    role: 'Senior Consultant',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    id: 3,
    name: 'Oliver Walsh',
    role: 'Financial Advisor',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    socials: { linkedin: '#', twitter: '#' },
  },
];

export const pricingPlans = [
  {
    id: 1,
    name: 'Starter',
    price: 499,
    period: 'month',
    featured: false,
    features: [
      'Strategic Business Assessment',
      'Monthly Consultation (4 hrs)',
      'Market Analysis Report',
      'Email Support',
      'Basic KPI Dashboard',
    ],
  },
  {
    id: 2,
    name: 'Professional',
    price: 899,
    period: 'month',
    featured: true,
    features: [
      'Full Business Strategy Plan',
      'Weekly Consultation (10 hrs)',
      'Competitor Analysis',
      'Priority Phone & Email Support',
      'Advanced Analytics Dashboard',
      'Custom Growth Roadmap',
    ],
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 2499,
    period: 'month',
    featured: false,
    features: [
      'End-to-End Business Transformation',
      'Unlimited Consultations',
      'Full Market Research Suite',
      '24/7 Dedicated Support',
      'Executive Dashboard & Reports',
      'Custom Solutions & Integrations',
      'Quarterly Executive Review',
    ],
  },
];

export const faqs = [
  {
    id: 1,
    question: 'What industries do you specialize in?',
    answer:
      'We work across a wide range of industries including technology, retail, finance, healthcare, manufacturing, and professional services. Our consultants bring deep domain expertise tailored to your specific sector.',
  },
  {
    id: 2,
    question: 'How long does a typical consulting engagement last?',
    answer:
      'Engagement durations vary based on scope. Short-term strategy projects typically run 4–8 weeks, while full business transformation engagements can span 6–18 months. We tailor timelines to your objectives.',
  },
  {
    id: 3,
    question: 'What results can I expect from your consulting services?',
    answer:
      'Our clients typically see measurable improvements in revenue growth, operational efficiency, and market positioning within the first 90 days. We set clear KPIs upfront and track progress rigorously.',
  },
  {
    id: 4,
    question: 'Do you offer remote consulting services?',
    answer:
      'Yes. We work with clients globally through a combination of virtual sessions, collaborative tools, and on-site visits when needed. Our hybrid model ensures flexibility without compromising quality.',
  },
  {
    id: 5,
    question: 'How is your pricing structured?',
    answer:
      'We offer both retainer-based monthly plans and project-based pricing. Our transparent pricing ensures no hidden fees. Choose the plan that best fits your business stage and goals.',
  },
];

export const blogs = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Business Strategy',
    date: 'March 15, 2024',
    title: '14 Easy Ideas to Use Everyday Business Strategies',
    excerpt: 'Discover practical, actionable strategies that any business owner can implement immediately to drive measurable growth.',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Marketing',
    date: 'March 10, 2024',
    title: '14 Easy Ideas to Use in Your Digital Marketing Plan',
    excerpt: 'Learn how to build a digital marketing strategy that attracts quality leads and converts them into loyal customers.',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Leadership',
    date: 'March 5, 2024',
    title: 'How Great Leaders Build High-Performance Teams',
    excerpt: 'Explore the key leadership traits and team-building frameworks used by the world\'s most successful executives.',
  },
];

export const brandLogos = [
  'PROMUS', 'Samsung', 'SPORT', 'PROBUS', 'Consulting',
];
