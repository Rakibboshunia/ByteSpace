import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <div className="relative bg-[#0341FF] py-20 overflow-hidden text-center text-white">

      {/* ── Background Grid ── */}
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

      {/* ══════════ SHAPES ══════════ */}

      {/* Top-left: Green blob */}
      <svg className="absolute top-[-10px] left-[2%] z-10" width="140" height="160" viewBox="0 0 140 160" fill="none">
        <path d="M35 15 C-5 45, -5 95, 35 120 C75 145, 130 110, 120 65 C110 20, 75 -10, 35 15Z"
          fill="#CEFF00" style={{ filter: 'drop-shadow(4px 8px 12px rgba(0,0,0,0.25))' }} />
      </svg>

      {/* Top-left: White zigzag/squiggle */}
      <svg className="absolute top-[5%] left-[14%] z-10" width="80" height="90" viewBox="0 0 80 90" fill="none">
        <path d="M15 80 C30 60, 30 40, 15 20 C30 28, 55 48, 68 30 C53 52, 53 72, 68 88"
          stroke="white" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>

      {/* Top-right: White triangle */}
      <svg className="absolute top-[8%] right-[14%] z-10" width="100" height="105" viewBox="0 0 100 105" fill="none">
        <polygon points="50,5 98,100 2,100" fill="white"
          style={{ filter: 'drop-shadow(-4px 6px 12px rgba(0,0,0,0.18))' }} />
      </svg>

      {/* Top-right: White cylinder / tall capsule */}
      <svg className="absolute top-[-15px] right-[2%] z-10" width="80" height="145" viewBox="0 0 80 145" fill="none">
        <rect x="8" y="20" width="64" height="110" rx="32" ry="32" fill="white"
          style={{ filter: 'drop-shadow(-4px 8px 14px rgba(0,0,0,0.15))' }} />
        <ellipse cx="40" cy="20" rx="32" ry="11" fill="#e8e8e8" />
      </svg>

      {/* Bottom-left: Green blob / organic */}
      <svg className="absolute bottom-[-15px] left-[1%] z-10" width="130" height="130" viewBox="0 0 130 130" fill="none">
        <path d="M65 10 C30 0, 0 30, 5 65 C10 100, 45 130, 80 120 C115 110, 135 80, 120 50 C105 20, 100 20, 65 10Z"
          fill="#CEFF00" style={{ filter: 'drop-shadow(4px 8px 12px rgba(0,0,0,0.2))' }} />
      </svg>

      {/* Bottom-right: Green squiggle */}
      <svg className="absolute bottom-[-5px] right-[3%] z-10" width="110" height="100" viewBox="0 0 110 100" fill="none">
        <path d="M95 15 C75 35, 75 55, 95 75 C75 70, 45 50, 20 65 C40 45, 40 25, 20 8"
          stroke="#CEFF00" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>

      {/* ══════════ Content ══════════ */}
      <div className="max-w-[750px] mx-auto relative z-20 px-6">
        <h2 className="text-[46px] font-extrabold mb-6 leading-tight">
          Unlock Your Potential as a<br />Creator with ByteSpace
        </h2>
        <p className="text-[15px] text-white/80 mb-10 leading-relaxed max-w-[640px] mx-auto">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a
          part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your
          expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link to="/signup">
          <button className="bg-[#CEFF00] hover:bg-[#b8e600] text-gray-900 border-none py-4 px-12 rounded-full text-[16px] font-bold cursor-pointer transition-colors duration-200 shadow-lg">
            Join as Creator
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
