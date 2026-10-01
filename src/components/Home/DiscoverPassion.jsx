import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../assets/01.jpg';
import img2 from '../../assets/02.jpg';
import img3 from '../../assets/auth-chart.jpg';
import img4 from '../../assets/03.jpg';
import img5 from '../../assets/04.jpg';
import img6 from '../../assets/05.jpg';
import avatar1 from '../../assets/img04.png';
import avatar2 from '../../assets/img05.png';
import avatar3 from '../../assets/img06.png';
import avatar4 from '../../assets/img07.jpg';
import avatar5 from '../../assets/img08.png';

const courses = [
  { title: 'Learn Figma from Basic',              category: 'UI/UX Design',               author: 'purepearl studio', rating: '4.5', price: '$25', lessons: '17 Lessons', duration: '2h 16m', comments: '59 Comments', level: 'Beginner',     img: img1 },
  { title: 'Build Digital Asset',                 category: 'Freelance & Entrepreneurship', author: 'purepearl studio', rating: '4.5', price: '$25', lessons: '17 Lessons', duration: '2h 16m', comments: '59 Comments', level: 'Beginner',     img: img2 },
  { title: 'The Power of Big Data',               category: 'Data Science',                author: 'purepearl studio', rating: '4.5', price: '$25', lessons: '17 Lessons', duration: '2h 16m', comments: '59 Comments', level: 'Beginner',     img: img3 },
  { title: 'Balancing Productivity and Wellness', category: 'Productivity',                author: 'purepearl studio', rating: '4.5', price: '$25', lessons: '17 Lessons', duration: '2h 16m', comments: '59 Comments', level: 'Beginner',     img: img4 },
  { title: 'Mastering Money Management',          category: 'Business',                    author: 'purepearl studio', rating: '4.5', price: '$25', lessons: '17 Lessons', duration: '2h 16m', comments: '59 Comments', level: 'Beginner',     img: img5 },
  { title: 'From Idea to Startup Success',        category: 'Freelance & Entrepreneurship', author: 'purepearl studio', rating: '4.5', price: '$25', lessons: '17 Lessons', duration: '2h 16m', comments: '59 Comments', level: 'Beginner',     img: img6 },
];

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

const categories = [
  { name: 'Featured', active: true },
  { name: 'Music' }, { name: 'Drawing & Painting' }, { name: 'Marketing' },
  { name: 'Animation' }, { name: 'Social Media' }, { name: 'UI/UX Design' },
  { name: 'Creative Marketing' }, { name: 'Digital Illustration' }, { name: 'Film & Video' },
  { name: 'Crafts' }, { name: 'Freelance & Entrepreneurship' }, { name: 'Graphic Design' },
  { name: 'Photography' }, { name: 'Productivity' }, { name: 'Web Development' },
  { name: 'Data Science' }, { name: 'Cooking' }, { name: '+ More', isMore: true },
];

const CourseCard = ({ course }) => {
  const slug = course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  return (
    <Link to={`/courses/${slug}`} className="block h-full">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden flex flex-col group h-full hover:-translate-y-1.5">
        {/* Thumbnail */}
        <div className="h-[180px] sm:h-[195px] relative w-full overflow-hidden bg-gray-200 shrink-0">
          {course.img && (
            <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          )}
          <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 flex gap-1.5 flex-wrap">
            {[course.lessons, course.duration, course.comments].map((label, i) => (
              <span key={i} className="bg-black/50 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-medium whitespace-nowrap">
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-gray-900 leading-snug group-hover:text-[#0341FF] transition-colors line-clamp-2 flex-1">
              {course.title}
            </h3>
            <div className="flex items-center gap-1 shrink-0 text-[12px] text-gray-600 font-medium">
              {course.rating}<span className="text-yellow-400">★</span>
            </div>
          </div>

          <p className="text-[11px] text-gray-400 mb-3">
            by <Link to="/creator/purepearl-studio" onClick={(e) => e.stopPropagation()} className="text-[#0341FF] hover:underline">{course.author}</Link>
          </p>

          <div className="flex items-center gap-2 mt-auto mb-3">
            <span className="flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 20V10M18 20V4M6 20v-4" />
              </svg>
              {course.level}
            </span>
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {avatars.map((img, i) => (
                  <img key={i} src={img} alt="student" className="w-[22px] h-[22px] rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <div className="w-[22px] h-[22px] rounded-full border-2 border-white bg-[#CEFF00] -ml-2 flex items-center justify-center text-[7px] font-extrabold text-gray-900 z-10">26+</div>
            </div>
          </div>

          <div className="pt-3 border-t border-gray-100">
            <span className="text-[#0341FF] text-[18px] sm:text-[20px] font-extrabold">{course.price}</span>
            <span className="text-gray-400 text-[11px] ml-0.5">/lifetime</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const DiscoverPassion = () => {
  const [active, setActive] = useState('Featured');

  const filteredCourses = active === 'Featured'
    ? courses
    : courses.filter(c => c.category === active);

  return (
    <div className="py-10 sm:py-14 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-extrabold text-gray-900 leading-tight mb-4">
            Discover Your Passion,<br />Build Your Skills
          </h2>
          <p className="text-gray-500 max-w-[640px] mx-auto text-[14px] sm:text-[15px] leading-relaxed px-2">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses
            across different fields, from technology to the arts.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 mb-10 sm:mb-14">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => !cat.isMore && setActive(cat.name)}
              className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[12px] sm:text-[13px] font-medium transition-all duration-200 border
                ${active === cat.name
                  ? 'bg-[#CEFF00] text-gray-900 border-[#CEFF00] shadow-sm font-semibold'
                  : cat.isMore
                    ? 'bg-transparent border-transparent text-[#0341FF] font-semibold hover:underline'
                    : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm'
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, idx) => (
              <CourseCard key={idx} course={course} />
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500 text-[14px]">
              No courses available in this category yet.
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            to={`/courses${active !== 'Featured' ? `?category=${encodeURIComponent(active)}` : ''}`}
            className="inline-flex items-center gap-2 bg-[#0341FF] hover:bg-blue-700 text-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-colors duration-200 shadow-lg text-[14px] sm:text-[15px]"
          >
            View All Courses
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscoverPassion;
