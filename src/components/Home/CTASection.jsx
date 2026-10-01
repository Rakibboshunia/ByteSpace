import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <div className="relative bg-[#0341FF] py-12 sm:py-16 overflow-hidden text-center text-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#CEFF00] rounded-full mix-blend-overlay filter blur-[100px] opacity-20 animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#CEFF00] rounded-full mix-blend-overlay filter blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
        }}
      />

      {/* Content */}
      <div className="max-w-[760px] mx-auto relative z-20 px-5 sm:px-6">
        <div className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#CEFF00] animate-pulse"></span>
          <span className="text-white font-bold text-[12px] uppercase tracking-widest">Become a Creator</span>
        </div>

        <h2 className="text-[32px] sm:text-[44px] md:text-[52px] font-extrabold mb-6 leading-[1.15] tracking-tight">
          Unlock Your Potential as a Creator with <span className="text-[#CEFF00]">ByteSpace</span>
        </h2>
        
        <p className="text-[14px] sm:text-[16px] text-white/80 mb-10 leading-relaxed max-w-[600px] mx-auto">
          Experience the collaboration of numerous creators and an ever-growing library of courses.
          Join now and become part of a community of over 10,000 creators worldwide.
        </p>

        <Link to="/signup" className="inline-block">
          <button className="group flex items-center justify-center gap-3 bg-[#CEFF00] hover:bg-[#b8e600] text-gray-900 border-none py-4 px-10 sm:px-14 rounded-full text-[15px] sm:text-[17px] font-extrabold cursor-pointer transition-all duration-300 shadow-[0_0_30px_rgba(206,255,0,0.25)] hover:shadow-[0_0_40px_rgba(206,255,0,0.5)] hover:-translate-y-1 w-full sm:w-auto">
            Join as Creator
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
