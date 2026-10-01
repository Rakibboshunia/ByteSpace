import React, { useState, useMemo, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import toast from 'react-hot-toast';

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
import creatorAvatar from '../assets/img01.png';

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

const COURSES_PER_PAGE = 6;

const courseData = [
  { title: 'Learn Figma from Basic',             author: 'purepearl studio', rating: 4.5, price: '$25', lessons: '17 Lessons', duration: '2 hours 16 mins', comments: '59 Comments', level: 'Beginner',     category: 'UI/UX Design',      img: img1 },
  { title: 'Build Digital Asset',                author: 'purepearl studio', rating: 4.5, price: '$25', lessons: '17 Lessons', duration: '2 hours 16 mins', comments: '59 Comments', level: 'Beginner',     category: 'Marketing',         img: img2 },
  { title: 'The Power of Big Data',              author: 'purepearl studio', rating: 4.7, price: '$35', lessons: '12 Lessons', duration: '3 hours 10 mins', comments: '41 Comments', level: 'Advanced',     category: 'Coding',            img: img3 },
  { title: 'Balancing Productivity and Wellness',author: 'purepearl studio', rating: 4.9, price: '$20', lessons: '22 Lessons', duration: '1 hour 50 mins',  comments: '78 Comments', level: 'All Levels',  category: 'Featured',          img: img4 },
  { title: 'Mastering Money Management',         author: 'purepearl studio', rating: 4.6, price: '$30', lessons: '14 Lessons', duration: '2 hours 30 mins', comments: '63 Comments', level: 'Beginner',     category: 'Marketing',         img: img5 },
  { title: 'From Idea to Startup Success',       author: 'purepearl studio', rating: 4.8, price: '$45', lessons: '20 Lessons', duration: '4 hours 00 mins', comments: '92 Comments', level: 'Intermediate', category: 'Social Media',      img: img6 },
];

const levels   = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
const sortOpts = ['Most Relevant', 'Top Rated', 'Lowest Price', 'Highest Price'];

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
            by <span className="text-[#0341FF]">{course.author}</span>
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

// ─── Creator Profile Page ──────────────────────────────────────────────────────
const CreatorProfile = () => {
  const { creatorSlug } = useParams();

  const [activeTab, setActiveTab] = useState('courses');
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers,   setFollowers]   = useState(12);
  const [searchQuery, setSearchQuery] = useState('');
  const [inputValue,  setInputValue]  = useState('');
  const [activeLevel, setActiveLevel] = useState('All Levels');
  const [sortBy,      setSortBy]      = useState('Most Relevant');
  const [currentPage, setCurrentPage] = useState(1);
  const [showLevelDropdown, setShowLevelDropdown] = useState(false);
  const [showSortDropdown,  setShowSortDropdown]  = useState(false);

  // Close dropdowns on outside click
  useEffect(() => {
    const close = () => { setShowLevelDropdown(false); setShowSortDropdown(false); };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  useEffect(() => { setCurrentPage(1); }, [searchQuery, activeLevel, sortBy]);

  const handleFollow = () => {
    setIsFollowing(prev => {
      const newState = !prev;
      if (newState) {
        toast.success('You are now following PurePearl Studio!', { id: 'follow' });
      } else {
        toast('You unfollowed PurePearl Studio.', { icon: 'ℹ️', id: 'unfollow' });
      }
      return newState;
    });
    setFollowers(prev => isFollowing ? prev - 1 : prev + 1);
  };

  const handleSearch = () => setSearchQuery(inputValue);

  const filtered = useMemo(() => {
    let result = [...courseData];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(c => c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q));
    }

    if (activeLevel !== 'All Levels') {
      result = result.filter(c => c.level === activeLevel);
    }

    if (sortBy === 'Top Rated')      result.sort((a, b) => b.rating - a.rating);
    if (sortBy === 'Lowest Price')   result.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    if (sortBy === 'Highest Price')  result.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));

    return result;
  }, [searchQuery, activeLevel, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / COURSES_PER_PAGE));
  const paginated  = filtered.slice((currentPage - 1) * COURSES_PER_PAGE, currentPage * COURSES_PER_PAGE);

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ── HEADER SECTION (BLUE) ── */}
      <div className="bg-[#0341FF] relative z-0">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />

        <Navbar />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-[140px] pb-[60px]">

          <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
            {/* Avatar */}
            <div className="w-[120px] h-[120px] rounded-[30px] overflow-hidden border-4 border-white/20 shadow-xl shrink-0 bg-gray-100">
              <img src={creatorAvatar} alt="PurePearl Studio" className="w-full h-full object-cover" />
            </div>

            {/* Info */}
            <div className="flex-1 mt-2">
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <h1 className="text-white text-[32px] md:text-[38px] font-extrabold leading-tight">
                  PurePearl Studio
                </h1>
                <span className="bg-[#CEFF00] text-gray-900 text-[12px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shrink-0">
                  Creator
                </span>
              </div>
              <p className="text-white/80 text-[16px] mb-4">Passionate UI/UX, Web designer</p>

              <p className="text-white/90 text-[14px] leading-relaxed max-w-[800px] mb-6">
                Welcome to the creative world of PurePearl Studio! Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together! Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
              </p>

              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Stats + Follow Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            <div className="flex gap-3 w-full sm:w-auto flex-wrap">
              <div className="bg-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-sm">
                <span className="font-bold text-gray-900 text-[14px]">{courseData.length}</span>
                <span className="text-gray-600 text-[13px] font-medium">Courses</span>
              </div>
              <div className="bg-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-sm">
                <span className="font-bold text-gray-900 text-[14px]">2K+</span>
                <span className="text-gray-600 text-[13px] font-medium">Students</span>
              </div>
              <div className="bg-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-sm">
                <span className="text-yellow-400">★</span>
                <span className="font-bold text-gray-900 text-[14px]">4.7</span>
                <span className="text-gray-600 text-[13px] font-medium">Rating</span>
              </div>
              <div className="bg-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-sm">
                <span className="font-bold text-gray-900 text-[14px]">{followers}</span>
                <span className="text-gray-600 text-[13px] font-medium">Followers</span>
              </div>
            </div>

            <button
              onClick={handleFollow}
              className={`font-bold px-8 py-3 rounded-full transition-all duration-200 w-full sm:w-auto border-2 ${
                isFollowing
                  ? 'bg-transparent border-white text-white hover:bg-white/10'
                  : 'bg-[#CEFF00] border-[#CEFF00] text-gray-900 hover:bg-[#B4E600]'
              }`}
            >
              {isFollowing ? '✓ Following' : 'Follow'}
            </button>
          </div>
        </div>
      </div>

      {/* ── TAB NAV ── */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex gap-0">
            {['courses', 'about'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-8 text-[14px] font-bold capitalize border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-[#0341FF] text-[#0341FF]'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab === 'courses' ? `Courses (${courseData.length})` : 'About'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── COURSES SECTION (WHITE) ── */}
      <div className="bg-white flex-1 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6 py-[60px]">

          {/* ── About Tab ── */}
          {activeTab === 'about' && (
            <div className="max-w-[800px] mx-auto py-6">
              <h2 className="text-[24px] font-extrabold text-gray-900 mb-6">About PurePearl Studio</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {[
                  { label: 'Total Courses', value: `${courseData.length}` },
                  { label: 'Students Enrolled', value: '2,000+' },
                  { label: 'Average Rating', value: '4.7 ★' },
                ].map((s) => (
                  <div key={s.label} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
                    <div className="text-[28px] font-extrabold text-[#0341FF]">{s.value}</div>
                    <div className="text-gray-500 text-[13px] mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                  Welcome to the creative world of PurePearl Studio! Here, you'll discover the passion, expertise, and inspiration that drive my creative journey.
                </p>
                <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                  I specialize in UI/UX design, digital asset creation, and creative marketing. With over 5 years of professional experience, I've helped thousands of students build real-world skills and launch their creative careers.
                </p>
                <p className="text-gray-700 text-[15px] leading-relaxed">
                  Let's explore and learn together! Dive into my course library and start your creative journey today.
                </p>
              </div>
            </div>
          )}

          {/* ── Courses Tab Content ── */}
          {activeTab === 'courses' && (
          <div>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1 max-w-[500px] w-full">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Search courses..."
                className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 outline-none text-[14px] focus:border-[#0341FF] transition-colors shadow-sm"
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-[#CEFF00] hover:bg-[#B4E600] text-gray-900 font-bold px-6 py-3 rounded-full text-[14px] transition-colors w-full sm:w-auto"
            >
              Search
            </button>
          </div>

          {/* ── Filters Bar ── */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <div className="flex flex-wrap gap-3">

              {/* Level Dropdown */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => { setShowLevelDropdown(!showLevelDropdown); setShowSortDropdown(false); }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-[13px] font-medium transition-all ${
                    activeLevel !== 'All Levels'
                      ? 'border-[#0341FF] text-[#0341FF] bg-blue-50'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10M18 20V4M6 20v-4"/></svg>
                  Level: {activeLevel}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                {showLevelDropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden min-w-[170px]">
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

              {/* Clear filters */}
              {(searchQuery || activeLevel !== 'All Levels') && (
                <button
                  onClick={() => { setSearchQuery(''); setInputValue(''); setActiveLevel('All Levels'); setSortBy('Most Relevant'); }}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-red-200 text-red-500 text-[12px] font-medium hover:bg-red-50 transition-colors"
                >
                  ✕ Clear filters
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => { setShowSortDropdown(!showSortDropdown); setShowLevelDropdown(false); }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 text-[13px] font-medium hover:border-gray-300 transition-colors w-full sm:w-auto justify-center"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M6 12h12M10 18h4"/></svg>
                Sort: {sortBy}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              {showSortDropdown && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden min-w-[180px]">
                  {sortOpts.map((opt) => (
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

          {/* Results info */}
          <p className="text-gray-500 text-[13px] mb-6">
            <span className="font-bold text-gray-900">{filtered.length}</span> course{filtered.length !== 1 ? 's' : ''} by PurePearl Studio
            {searchQuery && <span> matching "<span className="text-[#0341FF] font-semibold">{searchQuery}</span>"</span>}
          </p>

          {/* ── Courses Grid ── */}
          {paginated.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginated.map((course, idx) => (
                <CourseCard key={idx} course={course} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </div>
              <h3 className="text-[20px] font-bold text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-500 text-[14px] mb-6">Try adjusting your search or filters</p>
              <button
                onClick={() => { setSearchQuery(''); setInputValue(''); setActiveLevel('All Levels'); }}
                className="bg-[#0341FF] text-white px-6 py-2.5 rounded-full text-[14px] font-semibold hover:bg-blue-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* ── Pagination ── */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-14">
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
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreatorProfile;
