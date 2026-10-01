import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/01.jpg';
import img2 from '../../assets/02.jpg';
import img3 from '../../assets/03.jpg';
import img4 from '../../assets/04.jpg';

const CTASection = () => {
  return (
    <div className="relative bg-[#0341FF] py-20 sm:py-28 overflow-hidden text-center text-white">
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

      {/* FLOATING ELEMENTS - LEFT SIDE */}
      <div className="hidden lg:block absolute left-[5%] top-[15%] z-10 animate-[bounce_4s_infinite]">
        <div className="bg-white rounded-2xl p-4 shadow-2xl flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
            ⭐
          </div>
          <div className="text-left">
            <p className="text-gray-900 font-extrabold text-[18px] leading-tight">4.9/5.0</p>
            <p className="text-gray-500 text-[12px] font-medium">Instructor Rating</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute left-[8%] bottom-[15%] z-10 animate-[bounce_5s_infinite_0.5s]">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-2 px-4 shadow-xl flex items-center gap-[-10px]">
          <div className="flex -space-x-3 mr-4">
            <img src={img1} alt="creator" className="w-10 h-10 rounded-full border-2 border-[#0341FF] object-cover" />
            <img src={img2} alt="creator" className="w-10 h-10 rounded-full border-2 border-[#0341FF] object-cover" />
            <img src={img3} alt="creator" className="w-10 h-10 rounded-full border-2 border-[#0341FF] object-cover" />
          </div>
          <p className="text-white font-semibold text-[13px]">10K+ Creators joined</p>
        </div>
      </div>

      {/* FLOATING ELEMENTS - RIGHT SIDE */}
      <div className="hidden lg:block absolute right-[5%] top-[20%] z-10 animate-[bounce_5s_infinite_1s]">
        <div className="bg-white rounded-2xl p-4 shadow-2xl hover:-translate-y-2 transition-transform duration-300">
          <p className="text-gray-500 text-[12px] font-medium mb-1 text-left">Monthly Revenue</p>
          <div className="flex items-end gap-2">
            <p className="text-gray-900 font-extrabold text-[24px] leading-none">$5,240</p>
            <span className="text-green-500 text-[12px] font-bold pb-0.5">↑ 12%</span>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute right-[8%] bottom-[20%] z-10 animate-[bounce_4.5s_infinite_0.2s]">
        <div className="relative">
          <img src={img4} alt="Successful creator" className="w-20 h-20 rounded-2xl border-4 border-white shadow-xl object-cover rotate-6 hover:rotate-0 transition-transform duration-300" />
          <div className="absolute -top-3 -right-3 bg-[#CEFF00] text-gray-900 text-[10px] font-extrabold px-2 py-1 rounded-full border-2 border-white shadow-md">
            PRO
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[760px] mx-auto relative z-20 px-5 sm:px-6">
        <div className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8 backdrop-blur-md hover:bg-white/20 transition-colors cursor-pointer">
          <span className="w-2 h-2 rounded-full bg-[#CEFF00] animate-pulse"></span>
          <span className="text-white font-bold text-[12px] uppercase tracking-widest">Become a Creator</span>
        </div>

        <h2 className="text-[36px] sm:text-[48px] md:text-[56px] font-extrabold mb-6 leading-[1.15] tracking-tight">
          Unlock Your Potential as a Creator with <span className="text-[#CEFF00] relative inline-block">
            ByteSpace
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#CEFF00]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
            </svg>
          </span>
        </h2>
        
        <p className="text-[15px] sm:text-[17px] text-white/85 mb-10 leading-relaxed max-w-[550px] mx-auto font-medium">
          Experience the collaboration of numerous creators and an ever-growing library of courses.
          Join now and become part of a community of over 10,000 creators worldwide.
        </p>

        <Link to="/signup" className="inline-block relative group">
          {/* Glow effect behind button */}
          <div className="absolute inset-0 bg-[#CEFF00] opacity-40 blur-xl group-hover:opacity-60 group-hover:blur-2xl transition-all duration-300 rounded-full"></div>
          
          <button className="relative flex items-center justify-center gap-3 bg-[#CEFF00] hover:bg-white text-gray-900 border-none py-4 px-10 sm:px-14 rounded-full text-[16px] sm:text-[18px] font-extrabold cursor-pointer transition-all duration-300 shadow-[0_0_20px_rgba(206,255,0,0.3)] group-hover:-translate-y-1 w-full sm:w-auto overflow-hidden">
            <span className="relative z-10">Start Creating Today</span>
            <svg className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
