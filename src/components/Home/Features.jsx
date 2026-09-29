import React from 'react';
import boyImg from '../../assets/features-boy.png';
import girlImg from '../../assets/features-girl.png';

/* ── Shared decorative zigzag ── */
const Zigzag = ({ color = '#CEFF00', className = '' }) => (
  <svg className={className} width="70" height="60" viewBox="0 0 70 60" fill="none">
    <path
      d="M60 5 C45 25, 45 35, 60 55 C45 50, 25 30, 10 45 C25 25, 25 15, 10 5"
      stroke={color}
      strokeWidth="12"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

import avatar1 from '../../assets/img04.png';
import avatar2 from '../../assets/img05.png';
import avatar3 from '../../assets/img06.png';
import avatar4 from '../../assets/img07.jpg';
import avatar5 from '../../assets/img08.png';

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

/* ── Avatar cluster ── */
const Avatars = () => {
  return (
    <div className="flex items-center">
      <div className="flex -space-x-2.5">
        {avatars.map((img, i) => (
          <img key={i} src={img} alt="student" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
        ))}
      </div>
      <div className="w-8 h-8 rounded-full border-2 border-white bg-[#CEFF00] -ml-2.5 flex items-center justify-center text-[9px] font-extrabold text-gray-900 z-10">
        2K+
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="overflow-hidden">

      {/* ══════════════════════════════════════════════
          SECTION 1 – Your Path to Professional Growth
      ══════════════════════════════════════════════ */}
      <div
        className="relative"
        style={{
          background: 'linear-gradient(135deg, #e8f9d4 0%, #f0fce8 30%, #f5f5fa 70%, #eef2ff 100%)',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-8 py-16 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT – text */}
          <div>
            <h2 className="text-[42px] font-extrabold text-gray-900 leading-tight mb-6">
              Your Path to Professional<br />Growth Starts Here!
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-10 max-w-[460px]">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>

            {/* Stats */}
            <div className="flex gap-12">
              {[
                { value: '12K', label: 'Students' },
                { value: '70+', label: 'Courses' },
                { value: '16', label: 'Creators' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-[36px] font-extrabold text-[#0341FF] leading-none">{value}</p>
                  <p className="text-[13px] text-gray-500 font-medium mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – image + floating badges */}
          <div className="relative flex justify-center items-end">

            {/* Boy image */}
            <img
              src={boyImg}
              alt="Professional growth"
              className="relative z-10 object-contain"
              style={{ height: '480px', width: 'auto', maxWidth: '100%' }}
            />

            {/* Floating: Course card (bottom-left) */}
            <div className="absolute bottom-[12%] left-[-10px] z-20 bg-white rounded-2xl shadow-xl p-4 min-w-[200px]">
              <div className="flex gap-2 mb-2">
                <span className="text-[10px] bg-gray-100 text-gray-600 rounded-full px-2.5 py-1 font-medium">17 Lessons</span>
                <span className="text-[10px] bg-gray-100 text-gray-600 rounded-full px-2.5 py-1 font-medium">2 hours 16 mins</span>
              </div>
              <p className="font-bold text-gray-900 text-[14px] mb-0.5">Learn Figma fro...</p>
              <p className="text-[11px] text-[#0341FF] mb-2">by purepearl studio</p>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] bg-gray-100 text-gray-600 rounded px-2 py-0.5 flex items-center gap-1 font-medium">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 20V10M18 20V4M6 20v-4" /></svg>
                  Beginner
                </span>
              </div>
              <p className="text-[#0341FF] font-extrabold text-[16px]">$25<span className="text-gray-400 font-normal text-[11px]">/lifetime</span></p>
            </div>

            {/* Floating: Learning Progress (top-right) */}
            <div className="absolute top-[10%] right-[-20px] z-20 bg-white rounded-2xl shadow-xl p-5 min-w-[185px]">
              <div className="flex items-center justify-between mb-1">
                <p className="text-[11px] text-gray-500 font-semibold">Learning Progress</p>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="#CEFF00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-[34px] font-extrabold text-gray-900 leading-none mb-2">55%</p>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#CEFF00] h-full rounded-full" style={{ width: '55%' }} />
              </div>
            </div>

            {/* Zigzag decoration */}
            <Zigzag className="absolute top-[5%] right-[-30px] z-10" />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 2 – Create & Manage Courses Easily
      ══════════════════════════════════════════════ */}
      <div
        className="relative"
        style={{
          background: 'linear-gradient(135deg, #eef2ff 0%, #f5f5fa 30%, #f0fce8 70%, #e8f9d4 100%)',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-8 py-16 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT – image + floating stats */}
          <div className="relative flex justify-center items-end order-2 lg:order-1">

            {/* Girl image */}
            <img
              src={girlImg}
              alt="Create courses"
              className="relative z-10 object-contain"
              style={{ height: '500px', width: 'auto', maxWidth: '100%' }}
            />

            {/* Floating: Total Revenue (top-left) */}
            <div className="absolute top-[10%] left-[-10px] z-20 bg-[#0341FF] text-white rounded-2xl shadow-xl px-5 py-4 min-w-[170px]">
              <p className="text-[10px] opacity-75 font-medium mb-0.5">Total Revenue</p>
              <p className="text-[9px] opacity-60 mb-2">July 1-28</p>
              <p className="text-[28px] font-extrabold leading-none mb-2">$120.29</p>
              <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#CEFF00] h-full rounded-full" style={{ width: '70%' }} />
              </div>
            </div>

            {/* Floating: Year to Date (mid-left) */}
            <div className="absolute top-[45%] left-[-20px] z-20 bg-[#0341FF] text-white rounded-2xl shadow-xl px-5 py-4 min-w-[170px]">
              <p className="text-[10px] opacity-75 font-medium mb-0.5">Year to Date</p>
              <p className="text-[9px] opacity-60 mb-2">2023</p>
              <p className="text-[28px] font-extrabold leading-none mb-2">$1,200.38</p>
              <span className="bg-[#CEFF00] text-gray-900 text-[9px] font-extrabold px-2 py-0.5 rounded-full">+12s</span>
            </div>

            {/* Floating: Happy Students (bottom) */}
            <div className="absolute bottom-[5%] right-[5%] z-20 bg-white rounded-2xl shadow-xl p-4">
              <p className="font-bold text-gray-900 text-[14px] mb-0.5">Happy Students</p>
              <div className="flex items-center gap-1 mb-2">
                <span className="text-yellow-400 text-[12px]">★</span>
                <span className="text-gray-500 text-[11px] font-medium">4.5 (240)</span>
              </div>
              <Avatars />
            </div>

            {/* Zigzag decoration */}
            <Zigzag className="absolute top-[30%] right-[-10px] z-10" />
          </div>

          {/* RIGHT – text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-[42px] font-extrabold text-gray-900 leading-tight mb-6">
              Create &amp; Manage<br />Courses Easily.
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-10 max-w-[460px]">
              <span className="text-gray-900 font-semibold">ByteSpace</span> supports individuals or entities in the
              creation, publication, and administration of educational courses.
            </p>

            <ul className="space-y-4">
              {['Share Your Expertise', 'Monetize Your Passion', 'Flexibility and Autonomy', 'Build a Community'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-800 font-medium text-[16px]">
                  <div className="w-6 h-6 rounded-full bg-[#0341FF] flex items-center justify-center shrink-0">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
