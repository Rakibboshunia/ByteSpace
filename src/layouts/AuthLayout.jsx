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

const avatars = [avatar1, avatar2, avatar3, avatar4];
const happyAvatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

const AuthCourseCard = ({ title, author, rating, price, level, bgClass, style, className = '' }) => (
  <div className={`w-[320px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col ${className}`}>
    <div className={`h-[150px] w-full relative ${bgClass}`} style={style}>
       {/* Badges on image */}
       <div className="absolute bottom-3 left-3 right-3 flex gap-2">
          <span className="bg-white/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-gray-700">17 Lessons</span>
          <span className="bg-white/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-gray-700">2 hours 16 mins</span>
          <span className="bg-white/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-gray-700">59 Comments</span>
       </div>
    </div>
    <div className="p-5 flex flex-col">
       <div className="flex justify-between items-start mb-1">
         <h3 className="font-extrabold text-[16px] text-gray-900 leading-tight shrink">{title}</h3>
         <div className="flex items-center gap-1 text-[12px] text-gray-600 font-bold shrink-0 ml-2">
           {rating} <span className="text-yellow-400 text-[14px]">★</span>
         </div>
       </div>
       <p className="text-[11px] text-gray-400 mb-4">by <span className="text-[#0341FF] font-medium">{author}</span></p>
       
       <div className="flex items-center justify-between mb-3">
         <span className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 20V10M18 20V4M6 20v-4" /></svg>
            {level}
         </span>
         <div className="flex items-center">
            <div className="flex -space-x-2">
              {avatars.map((img, i) => (
                <img key={i} src={img} alt="student" className="w-[24px] h-[24px] rounded-full border-[2px] border-white object-cover" />
              ))}
            </div>
            <div className="w-[24px] h-[24px] rounded-full border-[2px] border-white bg-black -ml-2 flex items-center justify-center text-[8px] font-bold text-white z-10">26+</div>
         </div>
       </div>
       <div className="pt-2">
         <span className="text-[#0341FF] text-[18px] font-black">{price}</span>
         <span className="text-gray-400 text-[11px]">/lifetime</span>
       </div>
    </div>
  </div>
);

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen w-full bg-[#0341FF] relative overflow-hidden flex justify-center items-center font-sans">
      
      {/* Background Grid - Spans the entire screen */}
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

      <div className="relative z-10 w-full max-w-[1400px] h-[100vh] min-h-[800px] flex px-12 py-10">
        
        {/* Left Side: Logo, Text & Graphics */}
        <div className="flex-1 flex flex-col relative h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-12 w-fit">
            <div className="bg-accent text-primary w-[36px] h-[36px] rounded-[10px_10px_10px_0] flex justify-center items-center text-[24px] font-black leading-none hover:opacity-80 transition-opacity">
              b
            </div>
          </Link>

          {/* Text Content */}
          <div className="max-w-[420px] relative z-20">
            <h1 className="text-white text-[28px] font-bold mb-4 leading-tight">{title}</h1>
            <p className="text-white/80 text-[15px] leading-relaxed">{subtitle}</p>
          </div>

          {/* Graphic Area */}
          <div className="relative flex-1 w-full mt-12">
            
            {/* Back Card */}
            <AuthCourseCard 
              title="Build Digital Asset" 
              author="purepearl studio" 
              rating="4.5" 
              price="$25" 
              level="Beginner" 
              bgClass="bg-cover bg-center"
              style={{ backgroundImage: `url(${authBackImg})` }}
              className="absolute left-[2%] top-[60px] transform -rotate-[6deg] z-10"
            />
            
            {/* Front Card */}
            <AuthCourseCard 
              title="the Power of Big Data" 
              author="purepearl studio" 
              rating="4.5" 
              price="$25" 
              level="Beginner" 
              bgClass="bg-cover bg-center"
              style={{ backgroundImage: `url(${authChartImg})` }}
              className="absolute left-[30%] top-[20px] transform rotate-[3deg] z-20 shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
            />

            {/* Lime Green Donut */}
            <svg className="absolute top-[0px] left-[15%] z-30" width="80" height="80" viewBox="0 0 100 100" fill="none">
               <circle cx="50" cy="50" r="30" stroke="#CEFF00" strokeWidth="22" fill="none" style={{filter:'drop-shadow(3px 8px 12px rgba(0,0,0,0.3))'}}/>
            </svg>

            {/* Lime Green Triangle */}
            <svg className="absolute bottom-[40px] left-[2%] z-30 transform rotate-12" width="130" height="130" viewBox="0 0 100 100" fill="none">
               <polygon points="50,10 90,90 10,90" fill="#CEFF00" style={{filter:'drop-shadow(5px 12px 18px rgba(0,0,0,0.3))'}}/>
            </svg>

            {/* White Squiggle */}
            <svg className="absolute bottom-[70px] right-[10%] z-30 transform rotate-12" width="90" height="100" viewBox="0 0 80 90" fill="none">
               <path d="M15 80 C30 60, 30 40, 15 20 C30 28, 55 48, 68 30 C53 52, 53 72, 68 88" stroke="white" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" fill="none" style={{filter:'drop-shadow(3px 8px 12px rgba(0,0,0,0.25))'}}/>
            </svg>

            {/* Happy Students Badge */}
            <div className="absolute bottom-[30px] right-[12%] bg-[#CEFF00] rounded-[20px] px-5 py-4 shadow-2xl z-40 w-[220px]">
               <div className="flex gap-1 items-center mb-1">
                 <span className="text-gray-900 font-extrabold text-[14px]">Happy Students</span>
               </div>
               <div className="flex gap-1 items-center mb-3">
                 <span className="text-gray-900 font-black text-[12px]">4.5</span>
                 <span className="text-gray-500 font-medium text-[10px]">(240)</span>
                 <span className="text-[#0341FF] text-[12px] ml-0.5">★</span>
               </div>
               <div className="flex items-center justify-between">
                 <div className="flex -space-x-2">
                   {happyAvatars.map((img,i) => (
                     <img key={i} src={img} alt="student" className="w-[28px] h-[28px] rounded-full border-[2px] border-white object-cover" />
                   ))}
                 </div>
                 <div className="w-[32px] h-[32px] rounded-full border-[2px] border-white bg-gray-900 flex items-center justify-center text-[10px] font-black text-white z-10">2K+</div>
               </div>
            </div>

          </div>
        </div>

        {/* Right Side: Form Container */}
        <div className="flex-1 flex justify-end items-center relative z-20">
          <div className="w-full max-w-[500px] bg-white rounded-[32px] p-12 shadow-2xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
