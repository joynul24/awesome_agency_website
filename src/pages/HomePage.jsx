import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import ServicesGrid from '../components/sections/ServicesGrid';
import AboutSection from '../components/sections/AboutSection';
import TransformSection from '../components/sections/TransformSection';
import CaseStudiesFeatured from '../components/sections/CaseStudiesFeatured';
import StatsSection from '../components/sections/StatsSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import CTASection from '../components/sections/CTASection';
import TeamSection from '../components/sections/TeamSection';
import PricingSection from '../components/sections/PricingSection';
import FAQSection from '../components/sections/FAQSection';
import BlogSection from '../components/sections/BlogSection';
import CTABottomSection from '../components/sections/CTABottomSection';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Consulting - We Help To Grow Your Business</title>
        <meta name="description" content="Premier business consulting firm helping organizations achieve sustainable growth through strategic insights and proven methodologies." />
      </Helmet>
      <Hero />
      <ServicesGrid />
      <AboutSection />
      <TransformSection />
      <CaseStudiesFeatured />
      <StatsSection />
      <TestimonialSection />
      <CTASection />
      <TeamSection />
      <PricingSection />
      <FAQSection />
      <BlogSection />
      <CTABottomSection />
    </>
  );
}
