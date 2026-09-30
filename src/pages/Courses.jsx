import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
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

const COURSES_PER_PAGE = 6;

const allCourseData = [
  { title: 'Learn Figma from Basic',        author: 'purepearl studio', rating: 4.5, price: '$25', lessons: '17 Lessons', duration: '2 hours 16 mins', comments: '59 Comments', level: 'Beginner',     category: 'UI/UX Design',   img: img1 },
  { title: 'Build Digital Asset',           author: 'purepearl studio', rating: 4.5, price: '$25', lessons: '17 Lessons', duration: '2 hours 16 mins', comments: '59 Comments', level: 'Beginner',     category: 'Marketing',      img: img2 },
  { title: 'the Power of Big Data',         author: 'purepearl studio', rating: 4.7, price: '$35', lessons: '12 Lessons', duration: '3 hours 10 mins', comments: '41 Comments', level: 'Advanced',     category: 'Coding',         img: img3 },
  { title: 'Balancing Productivity and Wellness', author: 'purepearl studio', rating: 4.9, price: '$20', lessons: '22 Lessons', duration: '1 hour 50 mins', comments: '78 Comments', level: 'All Levels', category: 'Featured',  img: img4 },
  { title: 'Mastering Money Management',    author: 'purepearl studio', rating: 4.6, price: '$30', lessons: '14 Lessons', duration: '2 hours 30 mins', comments: '63 Comments', level: 'Beginner',     category: 'Marketing',      img: img5 },
  { title: 'From Idea to Startup Success',  author: 'purepearl studio', rating: 4.8, price: '$45', lessons: '20 Lessons', duration: '4 hours 00 mins', comments: '92 Comments', level: 'Intermediate', category: 'Social Media',   img: img6 },
  { title: 'UI/UX Fundamentals',            author: 'purepearl studio', rating: 4.4, price: '$20', lessons: '10 Lessons', duration: '1 hour 30 mins', comments: '30 Comments', level: 'Beginner',     category: 'UI/UX Design',   img: img2 },
  { title: 'Animation for Beginners',       author: 'purepearl studio', rating: 4.3, price: '$15', lessons: '8 Lessons',  duration: '1 hour 10 mins', comments: '22 Comments', level: 'Beginner',     category: 'Animation',      img: img4 },
  { title: 'Drawing & Painting Basics',     author: 'purepearl studio', rating: 4.6, price: '$18', lessons: '11 Lessons', duration: '2 hours 00 mins', comments: '45 Comments', level: 'Beginner',     category: 'Drawing & Painting', img: img1 },
  { title: 'Social Media Strategy',         author: 'purepearl studio', rating: 4.5, price: '$28', lessons: '16 Lessons', duration: '2 hours 45 mins', comments: '55 Comments', level: 'Intermediate', category: 'Social Media',   img: img5 },
  { title: 'Creative Marketing Masterclass',author: 'purepearl studio', rating: 4.7, price: '$40', lessons: '18 Lessons', duration: '3 hours 20 mins', comments: '80 Comments', level: 'Intermediate', category: 'Creative Marketing', img: img3 },
  { title: 'Music Production 101',          author: 'purepearl studio', rating: 4.2, price: '$22', lessons: '9 Lessons',  duration: '1 hour 40 mins', comments: '18 Comments', level: 'Beginner',     category: 'Music',          img: img6 },
];

const categories = ['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing', 'Coding'];
const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
const sortOptions = ['Most Relevant', 'Top Rated', 'Lowest Price', 'Highest Price'];

// ─── Course Card ───────────────────────────────────────────────────────────────
const CourseCard = ({ course }) => {
  const slug = course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  return (
    <Link to={`/courses/${slug}`} className="block h-full">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer h-full hover:-translate-y-1">
        <div className="h-[195px] relative w-full overflow-hidden bg-gray-200 shrink-0">
          {course.img && (
            <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          )}
          <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 flex gap-2 flex-wrap">
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
          <p className="text-[12px] text-gray-400 mb-4">
            by <Link to="/creator/purepearl-studio" onClick={(e) => e.stopPropagation()} className="text-[#0341FF] hover:underline">{course.author}</Link>
          </p>
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
    </Link>
  );
};

// ─── Main Courses Page ─────────────────────────────────────────────────────────
const Courses = () => {
  const [searchParams] = useSearchParams();

  const [searchQuery, setSearchQuery]   = useState(searchParams.get('q') || '');
  const [inputValue,  setInputValue]    = useState(searchParams.get('q') || '');
  const [activeCat,   setActiveCat]     = useState(searchParams.get('category') || 'Featured');
  const [activeLevel, setActiveLevel]   = useState('All Levels');
  const [sortBy,      setSortBy]        = useState('Most Relevant');
  const [currentPage, setCurrentPage]   = useState(1);
  const [showLevelDropdown, setShowLevelDropdown] = useState(false);
  const [showSortDropdown,  setShowSortDropdown]  = useState(false);

  // Sync activeCat when URL ?category= param changes (e.g. navigating from LearningPaths)
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCat(cat);
    else setActiveCat('Featured');
  }, [searchParams]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const close = () => { setShowLevelDropdown(false); setShowSortDropdown(false); };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  // Reset to page 1 whenever filters change
  useEffect(() => { setCurrentPage(1); }, [searchQuery, activeCat, activeLevel, sortBy]);

  const filtered = useMemo(() => {
    let result = [...allCourseData];

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.author.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
      );
    }

    // Category
    if (activeCat !== 'Featured') {
      result = result.filter(c => c.category === activeCat);
    }

    // Level
    if (activeLevel !== 'All Levels') {
      result = result.filter(c => c.level === activeLevel);
    }

    // Sort
    if (sortBy === 'Top Rated')      result.sort((a, b) => b.rating - a.rating);
    if (sortBy === 'Lowest Price')   result.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    if (sortBy === 'Highest Price')  result.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));

    return result;
  }, [searchQuery, activeCat, activeLevel, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / COURSES_PER_PAGE));
  const paginated  = filtered.slice((currentPage - 1) * COURSES_PER_PAGE, currentPage * COURSES_PER_PAGE);

  const handleSearch = () => {
    setSearchQuery(inputValue);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* ── Blue Header ── */}
      <div className="bg-[#0341FF] relative overflow-hidden">
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
          <span className="bg-[#CEFF00] text-gray-900 text-[12px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-5 inline-block">
            🎓 Explore All Courses
          </span>
          <h1 className="text-white text-[38px] md:text-[52px] font-extrabold leading-tight mb-4">Find Your Next Course</h1>
          <p className="text-white/80 text-[15px] max-w-[500px] mx-auto mb-8">Browse hundreds of expert-led courses across design, marketing, tech, and more.</p>

          <div className="flex justify-center max-w-[650px] mx-auto gap-3 mb-10">
            <div className="relative flex-1">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Search courses, topics, creators..."
                className="w-full pl-11 pr-4 py-3.5 rounded-full outline-none text-[15px] bg-white text-gray-900"
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-[#CEFF00] hover:bg-[#b8e600] text-gray-900 font-bold px-7 py-3.5 rounded-full flex items-center gap-2 transition-colors"
            >
              Search
            </button>
          </div>

          {/* Stats row */}
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              { label: 'Total Courses', value: '12+' },
              { label: 'Expert Creators', value: '5+' },
              { label: 'Active Students', value: '2K+' },
              { label: 'Categories', value: '9' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="text-white font-extrabold text-[22px] leading-none">{s.value}</span>
                <span className="text-white/60 text-[12px] mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-[1200px] mx-auto w-full px-6 py-10 flex-1">

        {/* ── Filters Bar ── */}
        <div className="flex justify-between items-center mb-8 flex-wrap gap-3">
          <div className="flex gap-3 flex-wrap">

            {/* Level Filter Dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => { setShowLevelDropdown(!showLevelDropdown); setShowSortDropdown(false); }}
                className={`flex items-center gap-2 px-5 py-2 rounded-full border text-[13px] font-medium transition-all ${
                  activeLevel !== 'All Levels'
                    ? 'border-[#0341FF] text-[#0341FF] bg-blue-50'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10M18 20V4M6 20v-4"/></svg>
                Level: {activeLevel}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              {showLevelDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden min-w-[180px]">
                  {levels.map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => { setActiveLevel(lvl); setShowLevelDropdown(false); }}
                      className={`w-full text-left px-5 py-3 text-[13px] transition-colors hover:bg-gray-50 ${
                        activeLevel === lvl ? 'font-bold text-[#0341FF] bg-blue-50' : 'text-gray-700'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Category pill shortcut: shows active category */}
            <button
              onClick={() => setActiveCat('Featured')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full border text-[13px] font-medium transition-all ${
                activeCat !== 'Featured'
                  ? 'border-[#CEFF00] text-gray-900 bg-[#CEFF00]/20'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300'
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              {activeCat !== 'Featured' ? `Category: ${activeCat} ✕` : 'Category'}
            </button>

            {/* Clear all filters */}
            {(searchQuery || activeCat !== 'Featured' || activeLevel !== 'All Levels') && (
              <button
                onClick={() => { setSearchQuery(''); setInputValue(''); setActiveCat('Featured'); setActiveLevel('All Levels'); setSortBy('Most Relevant'); }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-red-200 text-red-500 text-[12px] font-medium hover:bg-red-50 transition-colors"
              >
                ✕ Clear all
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => { setShowSortDropdown(!showSortDropdown); setShowLevelDropdown(false); }}
              className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200 text-gray-600 text-[13px] font-medium hover:border-gray-300 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M6 12h12M10 18h4"/></svg>
              Sort: {sortBy}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            {showSortDropdown && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden min-w-[180px]">
                {sortOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => { setSortBy(opt); setShowSortDropdown(false); }}
                    className={`w-full text-left px-5 py-3 text-[13px] transition-colors hover:bg-gray-50 ${
                      sortBy === opt ? 'font-bold text-[#0341FF] bg-blue-50' : 'text-gray-700'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Categories Pills ── */}
        <div className="flex flex-wrap gap-2.5 mb-10 border-b border-gray-100 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-5 py-2 rounded-full text-[13px] font-medium transition-colors border ${
                activeCat === cat
                  ? 'bg-[#CEFF00] border-[#CEFF00] text-gray-900 font-semibold shadow-sm'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-gray-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Results Info ── */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-500 text-[13px]">
            Showing <span className="font-bold text-gray-900">{filtered.length}</span> course{filtered.length !== 1 ? 's' : ''}
            {searchQuery && <span> for "<span className="text-[#0341FF] font-semibold">{searchQuery}</span>"</span>}
          </p>
        </div>

        {/* ── Course Grid ── */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
            {paginated.map((course, idx) => (
              <CourseCard key={idx} course={course} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
            <h3 className="text-[20px] font-bold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-500 text-[14px] mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => { setSearchQuery(''); setInputValue(''); setActiveCat('Featured'); setActiveLevel('All Levels'); }}
              className="bg-[#0341FF] text-white px-6 py-2.5 rounded-full text-[14px] font-semibold hover:bg-blue-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 pb-10">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold text-[14px] transition-all ${
                  currentPage === i + 1
                    ? 'bg-[#0341FF] text-white shadow-md'
                    : 'text-gray-400 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
