import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Header/Navbar';
import heroImg from '../../assets/hero-image.png';
import img1 from '../../assets/01.jpg';
import img2 from '../../assets/02.jpg';
import img3 from '../../assets/03.jpg';

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
      {/* Decorative Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#CEFF00] rounded-full mix-blend-overlay filter blur-[150px] opacity-30 animate-pulse" />
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-purple-500 rounded-full mix-blend-overlay filter blur-[150px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
        }}
      />



      <Navbar />

      {/* Main Content */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-4 sm:px-6 pt-[100px] lg:pt-[120px] text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 text-[14px] font-semibold mb-6 backdrop-blur-md hover:bg-white/20 transition-colors cursor-pointer shadow-[0_0_20px_rgba(206,255,0,0.1)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#CEFF00] animate-pulse"></span>
          <span>100+ Premium Courses Available</span>
        </div>

        <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-extrabold leading-[1.05] mb-6 tracking-tight relative">
          Get Access to Hundreds<br className="hidden sm:block" /> of Courses Available
          <svg className="absolute w-[200px] sm:w-[300px] h-4 -bottom-2 right-1/4 sm:right-1/3 text-[#CEFF00]/40 rotate-2" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
          </svg>
        </h1>

        <p className="text-[15px] sm:text-[17px] text-white/85 max-w-[550px] mx-auto mb-10 leading-relaxed px-2 font-medium">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of world-class courses.
        </p>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row bg-white rounded-2xl sm:rounded-full py-3 px-4 sm:pl-8 sm:pr-3 max-w-[600px] mx-auto items-stretch sm:items-center shadow-2xl gap-3 sm:gap-0 focus-within:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-shadow">
          <div className="flex items-center flex-1">
            <svg className="shrink-0 mr-4 text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.134 17 3 13.866 3 10C3 6.134 6.134 3 10 3C13.866 3 17 6.134 17 10Z"
                stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="What do you want to learn today?"
              className="border-none outline-none w-full text-[15px] text-gray-700 placeholder:text-gray-400 bg-transparent font-medium"
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-[#CEFF00] hover:bg-[#b8e600] text-gray-900 py-3.5 px-8 rounded-xl sm:rounded-full text-[15px] font-extrabold transition-all duration-300 shadow-[0_0_20px_rgba(206,255,0,0.3)] hover:-translate-y-0.5 whitespace-nowrap w-full sm:w-auto"
          >
            Explore Courses
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-6 mb-4 backdrop-blur-sm bg-white/5 py-3 px-8 rounded-3xl inline-flex border border-white/10">
          {[
            { value: '2K+', label: 'Active Students' },
            { value: '70+', label: 'Video Courses' },
            { value: '16', label: 'Pro Creators' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center group">
              <p className="text-[24px] sm:text-[32px] font-extrabold text-[#CEFF00] leading-none group-hover:scale-110 transition-transform">{value}</p>
              <p className="text-[12px] sm:text-[14px] text-white/80 font-medium mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Hero Image Area */}
        <div className="relative flex justify-center items-end mt-2">
          {/* Accent half-circle */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#CEFF00] rounded-t-full w-[360px] h-[180px] sm:w-[540px] sm:h-[270px] md:w-[720px] md:h-[360px] lg:w-[860px] lg:h-[430px] shadow-[0_-20px_60px_rgba(206,255,0,0.15)]" />

          {/* LEFT SIDE FLOATING ELEMENTS */}
          <div className="hidden xl:flex absolute left-[2%] top-[5%] bottom-[5%] flex-col justify-between items-start z-30 w-[210px]">
            {/* Top Instructors Card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-3 shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full animate-[bounce_4s_infinite]">
              <p className="text-white font-bold text-[13px] mb-2.5">Top Instructors</p>
              <div className="flex -space-x-3 mb-2">
                <img src={img1} alt="creator" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <img src={img2} alt="creator" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <img src={img3} alt="creator" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <div className="w-8 h-8 rounded-full border-2 border-white bg-[#CEFF00] text-gray-900 flex items-center justify-center text-[9px] font-bold z-10">+5</div>
              </div>
              <p className="text-white/70 text-[10px] font-medium">Learn from the best in the industry</p>
            </div>

            {/* Popular Categories Card */}
            <div className="bg-white rounded-3xl p-4 shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full animate-[bounce_5s_infinite_0.5s] mt-10">
              <p className="text-gray-900 font-extrabold text-[13px] mb-3">Hot Categories 🔥</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full text-[10px] font-bold">Web Dev</span>
                <span className="bg-purple-50 text-purple-600 px-2.5 py-1 rounded-full text-[10px] font-bold">UI/UX</span>
                <span className="bg-green-50 text-green-600 px-2.5 py-1 rounded-full text-[10px] font-bold">Business</span>
              </div>
            </div>
            
            {/* Trust Badge */}
            <div className="bg-[#CEFF00] text-gray-900 rounded-2xl py-2.5 px-4 shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-[12px] flex items-center gap-2 mt-auto animate-[bounce_4.5s_infinite_1s]">
              <span>🔒 100% Secure Checkout</span>
            </div>
          </div>

          {/* RIGHT SIDE FLOATING ELEMENTS */}
          <div className="hidden xl:flex absolute right-[2%] top-[5%] bottom-[5%] flex-col justify-between items-end z-30 w-[210px]">
            {/* UI/UX Design Card */}
            <div className="bg-white rounded-3xl shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 px-4 py-4 text-left w-full animate-[bounce_5s_infinite_0.2s]">
              <div className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center mb-2.5">
                <span className="text-lg">🎨</span>
              </div>
              <p className="text-gray-900 font-extrabold text-[14px] leading-tight mb-1">UI/UX Design</p>
              <p className="text-gray-500 text-[11px] font-medium">200 Courses • 1000+ Students</p>
            </div>

            {/* Learning Progress Card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl hover:-translate-y-1 transition-all duration-300 px-4 py-4 text-left w-full animate-[bounce_4.5s_infinite_0.8s] mt-10">
              <div className="flex items-center justify-between mb-2">
                <p className="text-white/80 text-[11px] font-semibold">Learning Progress</p>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="#CEFF00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-white font-extrabold text-[26px] leading-none mb-2.5">55%</p>
              <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                <div className="bg-[#CEFF00] h-full rounded-full relative" style={{ width: '55%' }}>
                  <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/30 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Happy Students Card */}
            <div className="bg-white rounded-3xl shadow-2xl hover:-translate-y-1 transition-all duration-300 px-4 py-4 text-left w-full mt-auto animate-[bounce_4s_infinite_0.4s]">
              <p className="text-gray-900 font-extrabold text-[13px] mb-2">Happy Students</p>
              <div className="flex items-center gap-1.5 mb-2.5">
                <div className="flex text-yellow-400 text-[12px]">★★★★★</div>
                <span className="text-gray-500 text-[11px] font-bold">4.9</span>
              </div>
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {['#FF6B6B', '#4ECDC4', '#FFE66D', '#A78BFA', '#FB923C'].map((c, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-white" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <div className="w-7 h-7 rounded-full border-2 border-white bg-[#0341FF] -ml-2 flex items-center justify-center text-[8px] font-extrabold text-white z-10">2K+</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <img
            src={heroImg}
            alt="Student with headphones"
            className="relative z-10 object-contain object-bottom w-auto max-w-[85%] sm:max-w-[70%] md:max-w-[55%] h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px] drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
