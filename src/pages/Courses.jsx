import React, { useState } from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';

// Images
import img1 from '../assets/01.jpg';
import img2 from '../assets/02.jpg';
import img3 from '../assets/auth-chart.jpg';
import img4 from '../assets/03.jpg';
import img5 from '../assets/04.jpg';
import img6 from '../assets/05.jpg';

import avatar1 from '../assets/img04.png';
import avatar2 from '../assets/img05.png';
import avatar3 from '../assets/img06.png';
import avatar4 from '../assets/img07.jpg';
import avatar5 from '../assets/img08.png';

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

const courseData = [
  { title: 'Learn Figma from Basic', author: 'purepearl studio', rating: '4.5', price: '$25', lessons: '17 Lessons', duration: '2 hours 16 mins', comments: '59 Comments', level: 'Beginner', img: img1 },
  { title: 'Build Digital Asset', author: 'purepearl studio', rating: '4.5', price: '$25', lessons: '17 Lessons', duration: '2 hours 16 mins', comments: '59 Comments', level: 'Beginner', img: img2 },
  { title: 'the Power of Big Data', author: 'purepearl studio', rating: '4.5', price: '$25', lessons: '17 Lessons', duration: '2 hours 16 mins', comments: '59 Comments', level: 'Beginner', img: img3 },
  { title: 'Balancing Productivity an...', author: 'purepearl studio', rating: '4.5', price: '$25', lessons: '17 Lessons', duration: '2 hours 16 mins', comments: '59 Comments', level: 'Beginner', img: img4 },
  { title: 'Mastering Money Manage...', author: 'purepearl studio', rating: '4.5', price: '$25', lessons: '17 Lessons', duration: '2 hours 16 mins', comments: '59 Comments', level: 'Beginner', img: img5 },
  { title: 'From Idea to Startup Succ...', author: 'purepearl studio', rating: '4.5', price: '$25', lessons: '17 Lessons', duration: '2 hours 16 mins', comments: '59 Comments', level: 'Beginner', img: img6 },
];
// Duplicate to get 12 courses for the grid
const allCourses = [...courseData, ...courseData];

const categories = [
  'Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 
  'UI/UX Design', 'Creative Marketing', 'Coding'
];

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col group cursor-pointer">
    <div className="h-[195px] relative w-full overflow-hidden bg-gray-200">
      {course.img && (
        <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      )}
      <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 flex gap-2">
        {[course.lessons, course.duration, course.comments].map((label, i) => (
          <span key={i} className="bg-black/50 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-medium whitespace-nowrap">
            {label}
          </span>
        ))}
      </div>
    </div>
    <div className="p-5 flex-1 flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-1">
        <h3 className="font-bold text-[16px] text-gray-900 leading-snug group-hover:text-[#0341FF] transition-colors line-clamp-2 flex-1">
          {course.title}
        </h3>
        <div className="flex items-center gap-1 shrink-0 text-[13px] text-gray-600 font-medium">
          {course.rating}
          <span className="text-yellow-400">★</span>
        </div>
      </div>
      <p className="text-[12px] text-gray-400 mb-4">by <span className="text-[#0341FF]">{course.author}</span></p>
      
      <div className="flex items-center gap-3 mt-auto mb-4">
        <span className="flex items-center gap-1 text-[11px] font-medium text-gray-600 bg-gray-100 px-2.5 py-1.5 rounded-lg">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 20V10M18 20V4M6 20v-4" />
          </svg>
          {course.level}
        </span>
        <div className="flex items-center">
          <div className="flex -space-x-2">
            {avatars.map((img, i) => (
              <img key={i} src={img} alt="student" className="w-[26px] h-[26px] rounded-full border-2 border-white object-cover" />
            ))}
          </div>
          <div className="w-[26px] h-[26px] rounded-full border-2 border-white bg-[#CEFF00] -ml-2 flex items-center justify-center text-[8px] font-extrabold text-gray-900 z-10">
            26+
          </div>
        </div>
      </div>
      <div className="pt-3 border-t border-gray-100">
        <span className="text-[#0341FF] text-[20px] font-extrabold">{course.price}</span>
        <span className="text-gray-400 text-[12px] ml-0.5">/lifetime</span>
      </div>
    </div>
  </div>
);

const Courses = () => {
  const [activeCat, setActiveCat] = useState('Featured');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* ── Blue Header ── */}
      <div className="bg-[#0341FF] relative overflow-hidden">
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
        
        <Navbar />
        
        <div className="relative z-10 pt-[140px] pb-[60px] px-6 text-center">
          <h1 className="text-white text-[32px] font-bold mb-8">Find Your Next Course</h1>
          
          <div className="flex justify-center max-w-[650px] mx-auto gap-3">
            <div className="relative flex-1">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full pl-11 pr-4 py-3.5 rounded-full outline-none text-[15px]" 
              />
            </div>
            <button className="bg-[#CEFF00] hover:bg-[#b8e600] text-gray-900 font-bold px-7 py-3.5 rounded-full flex items-center gap-2 transition-colors">
              Courses
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-[1200px] mx-auto w-full px-6 py-10 flex-1">
        
        {/* Filters Bar */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200 text-gray-600 text-[13px] font-medium hover:border-gray-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
              Filter
            </button>
            <button className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200 text-gray-600 text-[13px] font-medium hover:border-gray-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10M18 20V4M6 20v-4"/></svg>
              Level
            </button>
            <button className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200 text-gray-600 text-[13px] font-medium hover:border-gray-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              Category
            </button>
          </div>
          <button className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200 text-gray-600 text-[13px] font-medium hover:border-gray-300">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
            Sort by: Relevance
          </button>
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10 border-b border-gray-100 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-5 py-2 rounded-full text-[13px] font-medium transition-colors border
                ${activeCat === cat 
                  ? 'bg-[#CEFF00] border-[#CEFF00] text-gray-900 font-semibold shadow-sm' 
                  : 'bg-white border-gray-200 text-gray-600 hover:border-gray-400'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
          {allCourses.map((course, idx) => (
            <CourseCard key={idx} course={course} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 pb-10">
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-gray-600 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-900 font-semibold">1</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-900 font-semibold">2</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-900 font-semibold">3</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-900 font-semibold">4</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-900 font-semibold">5</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-400 text-white shadow-sm hover:opacity-90 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
