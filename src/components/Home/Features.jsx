import React from 'react';
import boyImg from '../../assets/features-boy.png';
import girlImg from '../../assets/features-girl.png';
import avatar1 from '../../assets/img04.png';
import avatar2 from '../../assets/img05.png';
import avatar3 from '../../assets/img06.png';
import avatar4 from '../../assets/img07.jpg';
import avatar5 from '../../assets/img08.png';

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

const Features = () => {
  return (
    <div className="overflow-hidden">

      {/* ─── SECTION 1: Your Path to Professional Growth ─── */}
      <div style={{ background: 'linear-gradient(135deg, #f5faee 0%, #f0fce8 30%, #f5f5fa 70%, #f0f4ff 100%)' }} className="relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#CEFF00]/10 blur-[80px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 py-10 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left – Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0341FF]/10 text-[#0341FF] font-bold text-[12px] uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Learn & Grow
            </div>
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-extrabold text-gray-900 leading-[1.15] mb-6">
              Your Path to Professional<br />Growth Starts Here!
            </h2>
            <p className="text-gray-500 text-[15px] sm:text-[16px] leading-relaxed mb-10 max-w-[480px]">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Master new skills from industry experts.
            </p>
            <div className="flex flex-wrap gap-8 sm:gap-12 p-6 bg-white/50 backdrop-blur-md rounded-[24px] border border-white/60 shadow-sm max-w-fit">
              {[{ value: '12K', label: 'Students' }, { value: '70+', label: 'Courses' }, { value: '16', label: 'Creators' }].map(({ value, label }) => (
                <div key={label} className="group">
                  <p className="text-[32px] sm:text-[40px] font-black text-[#0341FF] leading-none group-hover:scale-105 transition-transform origin-left">{value}</p>
                  <p className="text-[13px] sm:text-[14px] text-gray-500 font-bold uppercase tracking-wide mt-2">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Image + Floating Badges */}
          <div className="relative flex justify-center items-end min-h-[300px] sm:min-h-[450px]">
            <div className="absolute bottom-0 w-full h-[60%] bg-gradient-to-t from-[#CEFF00]/20 to-transparent rounded-full blur-[60px]" />
            <img src={boyImg} alt="Professional growth" className="relative z-10 object-contain h-[320px] sm:h-[450px] md:h-[520px] w-auto max-w-full drop-shadow-2xl" />

            {/* Floating: Course card (bottom-left) */}
            <div className="absolute bottom-[8%] left-[-5%] sm:left-[-15px] z-20 bg-white/95 backdrop-blur-md rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 p-4 sm:p-5 min-w-[180px] sm:min-w-[220px]">
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-[10px] sm:text-[11px] bg-gray-100/80 text-gray-600 rounded-full px-2.5 py-1 font-bold">17 Lessons</span>
                <span className="text-[10px] sm:text-[11px] bg-gray-100/80 text-gray-600 rounded-full px-2.5 py-1 font-bold">2h 16m</span>
              </div>
              <p className="font-extrabold text-gray-900 text-[14px] sm:text-[15px] mb-1 leading-snug">Learn Figma from Basic</p>
              <p className="text-[11px] sm:text-[12px] text-[#0341FF] font-medium mb-3">by purepearl studio</p>
              <div className="flex items-end gap-1">
                <p className="text-[#0341FF] font-black text-[18px] sm:text-[20px] leading-none">$25</p>
                <span className="text-gray-400 font-medium text-[11px] mb-0.5">/lifetime</span>
              </div>
            </div>

            {/* Floating: Learning Progress (top-right) */}
            <div className="absolute top-[8%] right-[-5%] sm:right-[-20px] z-20 bg-white/95 backdrop-blur-md rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 p-4 sm:p-5 min-w-[160px] sm:min-w-[200px]">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[11px] sm:text-[12px] text-gray-500 font-bold tracking-wide">Learning Progress</p>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="#CEFF00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-[32px] sm:text-[38px] font-black text-gray-900 leading-none mb-3">55%</p>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#CEFF00] h-full rounded-full" style={{ width: '55%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── SECTION 2: Create & Manage Courses Easily ─── */}
      <div style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #f5f5fa 30%, #f0fce8 70%, #f5faee 100%)' }} className="relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0341FF]/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 py-10 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left – Image + Floating Stats */}
          <div className="relative flex justify-center items-end min-h-[300px] sm:min-h-[450px] order-2 lg:order-1">
            <div className="absolute bottom-0 w-full h-[60%] bg-gradient-to-t from-[#0341FF]/10 to-transparent rounded-full blur-[60px]" />
            <img src={girlImg} alt="Create courses" className="relative z-10 object-contain h-[340px] sm:h-[480px] md:h-[550px] w-auto max-w-full drop-shadow-2xl" />

            {/* Floating: Total Revenue (top-left) */}
            <div className="absolute top-[8%] left-[-5%] sm:left-[0px] z-20 bg-[#0341FF] text-white rounded-[20px] shadow-[0_8px_30px_rgb(3,65,255,0.25)] hover:shadow-[0_20px_40px_rgb(3,65,255,0.35)] hover:-translate-y-2 transition-all duration-300 px-4 py-4 sm:px-5 sm:py-5 min-w-[150px] sm:min-w-[190px]">
              <p className="text-[10px] sm:text-[11px] text-white/80 font-bold tracking-wide mb-1">Total Revenue</p>
              <p className="text-[9px] sm:text-[10px] text-white/50 font-medium mb-2">July 1-28</p>
              <p className="text-[26px] sm:text-[32px] font-black leading-none mb-3">$120.29</p>
              <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#CEFF00] h-full rounded-full" style={{ width: '70%' }} />
              </div>
            </div>

            {/* Floating: Year to Date (mid-left) */}
            <div className="absolute top-[45%] left-[-8%] sm:left-[-20px] z-20 bg-white/95 backdrop-blur-md rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 px-4 py-4 sm:px-5 sm:py-5 min-w-[150px] sm:min-w-[190px] border border-gray-100">
              <p className="text-[10px] sm:text-[11px] text-gray-500 font-bold tracking-wide mb-1">Year to Date</p>
              <p className="text-[9px] sm:text-[10px] text-gray-400 font-medium mb-2">2026</p>
              <p className="text-[26px] sm:text-[32px] font-black text-gray-900 leading-none mb-3">$1,200.38</p>
              <span className="inline-block bg-[#CEFF00] text-gray-900 text-[10px] font-black px-2.5 py-1 rounded-full">+12%</span>
            </div>

            {/* Floating: Happy Students (bottom-right) */}
            <div className="absolute bottom-[6%] right-[-5%] sm:right-[0%] z-20 bg-white/95 backdrop-blur-md rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 p-4 sm:p-5 border border-gray-100">
              <p className="font-extrabold text-gray-900 text-[13px] sm:text-[15px] mb-1">Happy Students</p>
              <div className="flex items-center gap-1 mb-3">
                <span className="text-yellow-400 text-[12px]">★</span>
                <span className="text-gray-500 text-[11px] sm:text-[12px] font-bold">4.5 (240)</span>
              </div>
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {avatars.map((img, i) => (
                    <img key={i} src={img} alt="student" className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] rounded-full border-[2px] border-white object-cover" />
                  ))}
                </div>
                <div className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] rounded-full border-[2px] border-white bg-[#CEFF00] -ml-2 flex items-center justify-center text-[8px] sm:text-[9px] font-black text-gray-900 z-10">2K+</div>
              </div>
            </div>
          </div>

          {/* Right – Text */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-[#CEFF00]/20 text-[#82a300] font-bold text-[12px] uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              For Creators
            </div>
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-extrabold text-gray-900 leading-[1.15] mb-6">
              Create &amp; Manage<br />Courses Easily.
            </h2>
            <p className="text-gray-500 text-[15px] sm:text-[16px] leading-relaxed mb-8 max-w-[480px]">
              <span className="text-gray-900 font-bold">ByteSpace</span> supports individuals or entities in the
              creation, publication, and administration of educational courses with a seamless dashboard.
            </p>
            <ul className="space-y-4 sm:space-y-5">
              {['Share Your Expertise globally', 'Monetize Your Passion effectively', 'Enjoy Flexibility and Autonomy', 'Build a thriving Community'].map((item) => (
                <li key={item} className="flex items-center gap-4 text-gray-800 font-bold text-[15px] sm:text-[17px] group">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0341FF]/10 text-[#0341FF] group-hover:bg-[#0341FF] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Features;
