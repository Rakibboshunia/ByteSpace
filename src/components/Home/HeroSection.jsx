import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Header/Navbar';
import heroImg from '../../assets/hero-image.png';

const HeroSection = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/courses?q=${encodeURIComponent(query.trim())}`);
    } else {
      navigate('/courses');
    }
  };

  return (
    <div className="relative bg-[#0341FF] overflow-hidden text-white">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
        }}
      />



      <Navbar />

      {/* Main Content */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-4 sm:px-6 pt-[100px] lg:pt-[110px] text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-[13px] font-medium mb-4">
          🎓 <span>100+ Courses Available</span>
        </div>

        <h1 className="text-[36px] sm:text-[44px] md:text-[48px] lg:text-[52px] font-extrabold leading-[1.1] mb-4 tracking-tight">
          Get Access to Hundreds<br className="hidden sm:block" /> of Courses Available
        </h1>

        <p className="text-[14px] sm:text-[15px] text-white/85 max-w-[500px] mx-auto mb-6 leading-relaxed px-2">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row bg-white rounded-2xl sm:rounded-full py-2.5 px-4 sm:pl-6 sm:pr-2 max-w-[520px] mx-auto items-stretch sm:items-center shadow-2xl gap-3 sm:gap-0">
          <div className="flex items-center flex-1">
            <svg className="shrink-0 mr-3 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.134 17 3 13.866 3 10C3 6.134 6.134 3 10 3C13.866 3 17 6.134 17 10Z"
                stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Course, topic, creator..."
              className="border-none outline-none w-full text-[14px] text-gray-700 placeholder:text-gray-400 bg-transparent"
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-[#CEFF00] hover:bg-[#b8e600] text-gray-900 py-2.5 px-7 rounded-xl sm:rounded-full text-[14px] font-bold transition-colors whitespace-nowrap w-full sm:w-auto"
          >
            Search
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 mb-6">
          {[
            { value: '2K+', label: 'Students' },
            { value: '70+', label: 'Courses' },
            { value: '16', label: 'Creators' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-[20px] sm:text-[24px] font-extrabold text-[#CEFF00] leading-none">{value}</p>
              <p className="text-[11px] sm:text-[12px] text-white/70 font-medium mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Hero Image Area */}
        <div className="relative flex justify-center items-end mt-2">
          {/* Accent half-circle */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#CEFF00] rounded-t-full w-[300px] h-[190px] sm:w-[460px] sm:h-[300px] md:w-[600px] md:h-[340px] lg:w-[680px] lg:h-[380px]" />

          {/* Floating badges - only on large screens */}
          <div className="hidden xl:block absolute left-[8%] top-[6%] bg-white rounded-2xl shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 px-4 py-3 text-left z-30 min-w-[190px]">
            <p className="text-gray-900 font-bold text-[13px] leading-tight">UI/UX Design</p>
            <p className="text-gray-400 text-[10px] mt-0.5">200 Courses • 1000+ Students</p>
          </div>

          <div className="hidden xl:block absolute right-[8%] top-[4%] bg-white rounded-2xl shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 px-4 py-3 text-left z-30 min-w-[175px]">
            <div className="flex items-center justify-between mb-1">
              <p className="text-gray-500 text-[10px] font-semibold">Learning Progress</p>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="#CEFF00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-gray-900 font-extrabold text-[26px] leading-none mb-2">55%</p>
            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#CEFF00] h-full rounded-full" style={{ width: '55%' }} />
            </div>
          </div>

          <div className="hidden xl:block absolute left-[10%] bottom-[6%] bg-white rounded-2xl shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 px-3 py-2.5 text-left z-30">
            <p className="text-gray-900 font-bold text-[13px]">Happy Students</p>
            <div className="flex items-center gap-1 mt-0.5 mb-1.5">
              <span className="text-yellow-400 text-[11px]">★</span>
              <span className="text-gray-500 text-[10px] font-medium">4.5 (240)</span>
            </div>
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {['#FF6B6B', '#4ECDC4', '#FFE66D', '#A78BFA', '#FB923C'].map((c, i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white" style={{ backgroundColor: c }} />
                ))}
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-white bg-[#CEFF00] -ml-2 flex items-center justify-center text-[7px] font-extrabold text-gray-900 z-10">2K+</div>
            </div>
          </div>

          {/* Hero Image */}
          <img
            src={heroImg}
            alt="Student with headphones"
            className="relative z-10 object-contain object-bottom w-auto max-w-[85%] sm:max-w-[70%] md:max-w-[55%] h-[260px] sm:h-[350px] md:h-[400px] lg:h-[440px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
