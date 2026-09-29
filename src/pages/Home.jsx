import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import Sponsors from '../components/Home/Sponsors';
import DiscoverPassion from '../components/Home/DiscoverPassion';
import LearningPaths from '../components/Home/LearningPaths';
import Features from '../components/Home/Features';
import CTASection from '../components/Home/CTASection';
import Testimonials from '../components/Home/Testimonials';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home-page font-main">
      <HeroSection />
      <Sponsors />
      <DiscoverPassion />
      <LearningPaths />
      <Features />
      <CTASection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
