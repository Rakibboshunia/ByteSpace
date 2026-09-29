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
    <div className="relative bg-[#0341FF] min-h-[900px] overflow-hidden text-white pb-0" style={{ background: '#0341FF' }}>

      {/* ── Background Grid ── */}
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

      {/* ══════════════════════════════════════════
          DECORATIVE 3D SHAPES  (all absolute)
      ══════════════════════════════════════════ */}

      {/* Left – Green blob / squiggle (top-left) */}
      <svg className="absolute top-[12%] left-[2%] z-10" width="130" height="180" viewBox="0 0 130 180" fill="none">
        <path d="M30 10 C-10 40, -10 90, 30 110 C70 130, 120 100, 110 60 C100 20, 70 -10, 30 10Z"
          fill="#CEFF00" style={{ filter: 'drop-shadow(4px 8px 12px rgba(0,0,0,0.25))' }} />
      </svg>

      {/* Left – White squiggle/zigzag (middle-left) */}
      <svg className="absolute top-[48%] left-[4%] z-10" width="90" height="90" viewBox="0 0 90 90" fill="none">
        <path d="M10 80 C25 60, 25 40, 10 20 C25 25, 45 45, 65 30 C50 50, 50 70, 65 85"
          stroke="white" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>

      {/* Left – White donut / ring (bottom-left) */}
      <svg className="absolute bottom-[5%] left-[3%] z-10" width="120" height="120" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="48" stroke="white" strokeWidth="20" fill="none"
          style={{ filter: 'drop-shadow(4px 8px 14px rgba(0,0,0,0.2))' }} />
      </svg>

      {/* Right – Green cylinder / cup (top-right) */}
      <svg className="absolute top-[5%] right-[2%] z-10" width="100" height="150" viewBox="0 0 100 150" fill="none">
        <rect x="10" y="20" width="80" height="110" rx="40" ry="40" fill="#CEFF00"
          style={{ filter: 'drop-shadow(-4px 8px 14px rgba(0,0,0,0.25))' }} />
        <ellipse cx="50" cy="20" rx="40" ry="14" fill="#B4E600" />
      </svg>

      {/* Right – White triangle (upper-right area) */}
      <svg className="absolute top-[32%] right-[8%] z-10" width="110" height="110" viewBox="0 0 110 110" fill="none">
        <polygon points="55,5 105,105 5,105" fill="white"
          style={{ filter: 'drop-shadow(-4px 6px 12px rgba(0,0,0,0.18))' }} />
      </svg>

      {/* Right – White zigzag / squiggle (lower-right) */}
      <svg className="absolute bottom-[12%] right-[3%] z-10" width="100" height="90" viewBox="0 0 100 90" fill="none">
        <path d="M85 10 C70 30, 70 50, 85 70 C70 65, 50 45, 30 60 C45 40, 45 20, 30 5"
          stroke="white" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>

      {/* ══════════════════════════════════════════ */}

      <Navbar />

      {/* ── Main Content ── */}
      <div className="relative z-20 max-w-[1200px] mx-auto pt-[140px] px-6 text-center">

        <h1 className="text-[68px] font-extrabold leading-[1.15] mb-5 tracking-tight drop-shadow-sm">
          Get Access to Hundreds<br />Courses Available
        </h1>

        <p className="text-[17px] text-white/85 max-w-[600px] mx-auto mb-10 leading-relaxed font-light">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <div className="flex bg-white rounded-full py-2 pl-6 pr-2 max-w-[540px] mx-auto items-center shadow-2xl relative z-30 mb-0">
          <svg className="shrink-0 mr-3 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.134 17 3 13.866 3 10C3 6.134 6.134 3 10 3C13.866 3 17 6.134 17 10Z"
              stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Course, topic, creator"
            className="border-none outline-none w-full text-[15px] text-gray-700 placeholder:text-gray-400 bg-transparent"
          />
          <button
            onClick={handleSearch}
            className="bg-[#CEFF00] hover:bg-[#b8e600] text-gray-900 border-none py-3 px-8 rounded-full text-[15px] font-bold cursor-pointer transition-colors duration-200 whitespace-nowrap">
            Search
          </button>
        </div>

        {/* ── Hero Image Area ── */}
        <div className="relative mt-[-10px] flex justify-center items-end">

          {/* Accent half-circle background */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#CEFF00] z-0 rounded-t-full"
            style={{ width: '520px', height: '300px' }}
          />

          {/* Floating Badge – UI/UX Design (left) */}
          <div className="absolute left-[8%] top-[28%] bg-white rounded-2xl shadow-2xl px-5 py-4 text-left z-30 min-w-[210px]">
            <p className="text-gray-900 font-bold text-[15px] leading-tight">UI/UX Design</p>
            <p className="text-gray-400 text-[11px] mt-0.5 font-medium">200 Courses &nbsp;•&nbsp; 1000+ Students</p>
          </div>

          {/* Floating Badge – Learning Progress (right) */}
          <div className="absolute right-[8%] top-[22%] bg-white rounded-2xl shadow-2xl px-5 py-4 text-left z-30 min-w-[195px]">
            <div className="flex items-center justify-between mb-1">
              <p className="text-gray-500 text-[11px] font-semibold tracking-wide">Learning Progress</p>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="#CEFF00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-gray-900 font-extrabold text-[34px] leading-none mb-2">55%</p>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div className="bg-[#CEFF00] h-full rounded-full" style={{ width: '55%' }} />
            </div>
          </div>

          {/* Floating Badge – Happy Students (bottom-left) */}
          <div className="absolute left-[8%] bottom-[18%] bg-white rounded-2xl shadow-2xl px-5 py-4 text-left z-30">
            <p className="text-gray-900 font-bold text-[15px]">Happy Students</p>
            <div className="flex items-center gap-1 mt-0.5 mb-2">
              <span className="text-yellow-400 text-[12px]">★</span>
              <span className="text-gray-500 text-[11px] font-medium">4.5 (240)</span>
            </div>
            <div className="flex items-center">
              <div className="flex -space-x-2.5">
                {['#FF6B6B', '#4ECDC4', '#FFE66D', '#A78BFA', '#FB923C', '#34D399'].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white" style={{ backgroundColor: c }} />
                ))}
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-[#CEFF00] -ml-2.5 flex items-center justify-center text-[9px] font-extrabold text-gray-900 z-10">
                2K+
              </div>
            </div>
          </div>

          {/* Hero Person Image */}
          <img
            src={heroImg}
            alt="Student with headphones"
            className="relative z-10 object-contain object-bottom"
            style={{ height: '480px', width: 'auto', maxWidth: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
