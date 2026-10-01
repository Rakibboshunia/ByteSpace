import React from 'react';
import { Link } from 'react-router-dom';
import authChartImg from '../assets/auth-chart.jpg';
import authBackImg from '../assets/09.jpg';
import avatar1 from '../assets/img04.png';
import avatar2 from '../assets/img05.png';
import avatar3 from '../assets/img06.png';
import avatar4 from '../assets/img07.jpg';
import avatar5 from '../assets/img08.png';
import avatar6 from '../assets/img09.png';

const avatars4 = [avatar1, avatar2, avatar3, avatar4];
const happyAvatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

const AuthCourseCard = ({ title, author, rating, price, level, bgClass, style, className = '' }) => (
  <div className={`w-[280px] sm:w-[320px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col ${className}`}>
    <div className={`h-[140px] w-full relative ${bgClass}`} style={style}>
      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
        <span className="bg-white/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-gray-700">17 Lessons</span>
        <span className="bg-white/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-gray-700">2h 16m</span>
      </div>
    </div>
    <div className="p-4 flex flex-col">
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-extrabold text-[14px] text-gray-900 leading-tight shrink">{title}</h3>
        <div className="flex items-center gap-1 text-[12px] text-gray-600 font-bold shrink-0 ml-2">
          {rating} <span className="text-yellow-400">★</span>
        </div>
      </div>
      <p className="text-[11px] text-gray-400 mb-3">by <span className="text-[#0341FF] font-medium">{author}</span></p>
      <div className="flex items-center justify-between mb-3">
        <span className="flex items-center gap-1 text-[11px] font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 20V10M18 20V4M6 20v-4" /></svg>
          {level}
        </span>
        <div className="flex items-center">
          <div className="flex -space-x-2">
            {avatars4.map((img, i) => (
              <img key={i} src={img} alt="" className="w-[22px] h-[22px] rounded-full border-2 border-white object-cover" />
            ))}
          </div>
          <div className="w-[22px] h-[22px] rounded-full border-2 border-white bg-black -ml-2 flex items-center justify-center text-[7px] font-bold text-white z-10">26+</div>
        </div>
      </div>
      <span className="text-[#0341FF] text-[16px] font-black">{price}<span className="text-gray-400 font-normal text-[10px]">/lifetime</span></span>
    </div>
  </div>
);

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen w-full bg-[#0341FF] relative overflow-hidden flex justify-center items-center font-sans">

      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      <div className="relative z-10 w-full max-w-[1400px] min-h-screen flex flex-col lg:flex-row px-5 sm:px-10 py-10 gap-10 items-center justify-center">

        {/* Left – Branding */}
        <div className="flex-1 flex flex-col w-full">
          <Link to="/" className="flex items-center gap-2 mb-6 w-fit">
            <div className="bg-[#CEFF00] text-[#0341FF] w-[34px] h-[34px] rounded-[8px_8px_8px_0] flex justify-center items-center text-[22px] font-black leading-none hover:opacity-80 transition-opacity">b</div>
            <span className="text-white font-bold text-[18px]">ByteSpace</span>
          </Link>

          <div className="max-w-[400px]">
            <h1 className="text-white text-[24px] sm:text-[28px] font-bold mb-3 leading-tight">{title}</h1>
            <p className="text-white/80 text-[14px] sm:text-[15px] leading-relaxed">{subtitle}</p>
          </div>

          {/* Graphics — only on large screens */}
          <div className="hidden lg:block relative flex-1 w-full mt-10 min-h-[480px]">
            {/* Decorative soft glow behind the cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#CEFF00]/20 blur-[100px] rounded-full" />
            
            {/* Back Card */}
            <AuthCourseCard
              title="Build Digital Asset"
              author="purepearl studio"
              rating="4.5"
              price="$25"
              level="Beginner"
              bgClass="bg-cover bg-center"
              style={{ backgroundImage: `url(${authBackImg})` }}
              className="absolute left-[5%] top-[80px] -rotate-[8deg] z-10 transition-transform duration-500 hover:rotate-0 hover:z-30 hover:scale-105"
            />
            {/* Front Card */}
            <AuthCourseCard
              title="The Power of Big Data"
              author="purepearl studio"
              rating="4.9"
              price="$35"
              level="Advanced"
              bgClass="bg-cover bg-center"
              style={{ backgroundImage: `url(${authChartImg})` }}
              className="absolute left-[25%] top-[20px] rotate-[4deg] z-20 shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:rotate-0 hover:scale-105"
            />

            {/* Happy Students Badge */}
            <div className="absolute bottom-[40px] right-[10%] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 shadow-[0_20px_40px_rgba(0,0,0,0.3)] z-40 w-[220px] hover:-translate-y-2 transition-transform duration-300">
              <p className="text-white font-extrabold text-[14px] mb-2 tracking-wide">Happy Students</p>
              <div className="flex gap-1.5 items-center mb-3">
                <span className="text-[#CEFF00] font-black text-[13px]">4.8</span>
                <span className="text-white/60 text-[11px]">(2,450 reviews)</span>
                <span className="text-[#CEFF00] text-[13px] ml-1">★</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {happyAvatars.map((img, i) => (
                    <img key={i} src={img} alt="" className="w-[28px] h-[28px] rounded-full border-2 border-[#0341FF] object-cover" />
                  ))}
                </div>
                <div className="w-[32px] h-[32px] rounded-full border-2 border-white bg-[#CEFF00] flex items-center justify-center text-[10px] font-black text-gray-900 z-10">2K+</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right – Form */}
        <div className="flex-1 flex justify-center lg:justify-end items-start lg:items-center w-full">
          <div className="w-full max-w-[480px] bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-10 shadow-2xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
