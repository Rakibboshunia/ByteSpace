import React from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-[#0341FF] relative z-0">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
        <Navbar />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-[140px] pb-[80px]">
          <div className="max-w-[700px]">
            <span className="bg-[#CEFF00] text-gray-900 text-[12px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block shadow-sm">
              Our Story
            </span>
            <h1 className="text-white text-[38px] md:text-[52px] font-extrabold leading-tight mb-4">
              About ByteSpace
            </h1>
            <p className="text-white/80 text-[16px] md:text-[18px] leading-relaxed">
              We're on a mission to democratize education and empower creators to share their knowledge with the world.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative z-10 -mt-10 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
           <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
             <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
             <p className="text-gray-600 leading-relaxed mb-6">
               ByteSpace was founded with a simple idea: everyone has something to teach, and everyone has something to learn. We provide the tools and platform for passionate creators to build engaging courses and for eager learners to discover new skills and advance their careers.
             </p>
             <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
             <p className="text-gray-600 leading-relaxed">
               A world where knowledge flows freely, unimpeded by geographical boundaries or traditional barriers to entry. We envision a community of lifelong learners and dedicated educators working together to unlock human potential.
             </p>
           </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default About;
