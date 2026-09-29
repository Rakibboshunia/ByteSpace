import React, { useState } from 'react';

import img1 from '../../assets/01.jpg';
import img2 from '../../assets/02.jpg';
import img3 from '../../assets/auth-chart.jpg';
import img4 from '../../assets/03.jpg';
import img5 from '../../assets/04.jpg';
import img6 from '../../assets/05.jpg';

/* ── Course data ── */
const courses = [
  {
    title: 'Learn Figma from Basic',
    author: 'purepearl studio',
    rating: '4.5',
    price: '$25',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    img: img1,
  },
  {
    title: 'Build Digital Asset',
    author: 'purepearl studio',
    rating: '4.5',
    price: '$25',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    img: img2,
  },
  {
    title: 'the Power of Big Data',
    author: 'purepearl studio',
    rating: '4.5',
    price: '$25',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    img: img3,
  },
  {
    title: 'Balancing Productivity an...',
    author: 'purepearl studio',
    rating: '4.5',
    price: '$25',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    img: img4,
  },
  {
    title: 'Mastering Money Manage...',
    author: 'purepearl studio',
    rating: '4.5',
    price: '$25',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    img: img5,
  },
  {
    title: 'From Idea to Startup Succ...',
    author: 'purepearl studio',
    rating: '4.5',
    price: '$25',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    img: img6,
  },
];

import avatar1 from '../../assets/img04.png';
import avatar2 from '../../assets/img05.png';
import avatar3 from '../../assets/img06.png';
import avatar4 from '../../assets/img07.jpg';
import avatar5 from '../../assets/img08.png';

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

/* ── Category pills ── */
const categories = [
  { name: 'Featured', active: true },
  { name: 'Music' },
  { name: 'Drawing & Painting' },
  { name: 'Marketing' },
  { name: 'Animation' },
  { name: 'Social Media' },
  { name: 'UI/UX Design' },
  { name: 'Creative Marketing' },
  { name: 'Digital Illustration' },
  { name: 'Film & Video' },
  { name: 'Crafts' },
  { name: 'Freelance & Entrepreneurship' },
  { name: 'Graphic Design' },
  { name: 'Photography' },
  { name: 'Productivity' },
  { name: 'Web Development' },
  { name: 'Data Science' },
  { name: 'Cooking' },
  { name: '+ More', isMore: true },
];

/* ── Course Card ── */
const CourseCard = ({ course }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col group cursor-pointer">
    {/* Thumbnail */}
    <div className="h-[195px] relative w-full overflow-hidden bg-gray-200">
      {course.img && (
        <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      )}
      <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 flex gap-2">
        {[course.lessons, course.duration, course.comments].map((label, i) => (
          <span
            key={i}
            className="bg-black/50 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-medium whitespace-nowrap"
          >
            {label}
          </span>
        ))}
      </div>
    </div>

    {/* Body */}
    <div className="p-5 flex-1 flex flex-col">
      {/* Title + Rating */}
      <div className="flex items-start justify-between gap-3 mb-1">
        <h3 className="font-bold text-[16px] text-gray-900 leading-snug group-hover:text-[#0341FF] transition-colors line-clamp-2 flex-1">
          {course.title}
        </h3>
        <div className="flex items-center gap-1 shrink-0 text-[13px] text-gray-600 font-medium">
          {course.rating}
          <svg className="w-3.5 h-3.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>

      {/* Author */}
      <p className="text-[12px] text-gray-400 mb-4">
        by <span className="text-[#0341FF] cursor-pointer hover:underline">{course.author}</span>
      </p>

      {/* Level + Avatars */}
      <div className="flex items-center gap-3 mt-auto mb-4">
        <span className="flex items-center gap-1 text-[11px] font-medium text-gray-600 bg-gray-100 px-2.5 py-1.5 rounded-lg">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 20V10M18 20V4M6 20v-4" />
          </svg>
          {course.level}
        </span>

        {/* Avatars */}
        <div className="flex items-center">
          <div className="flex -space-x-2">
            {avatars.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="student"
                className="w-[26px] h-[26px] rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <div className="w-[26px] h-[26px] rounded-full border-2 border-white bg-[#CEFF00] -ml-2 flex items-center justify-center text-[8px] font-extrabold text-gray-900 z-10">
            26+
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="pt-3 border-t border-gray-100">
        <span className="text-[#0341FF] text-[20px] font-extrabold">{course.price}</span>
        <span className="text-gray-400 text-[12px] ml-0.5">/lifetime</span>
      </div>
    </div>
  </div>
);

/* ── Main Section ── */
const DiscoverPassion = () => {
  const [active, setActive] = useState('Featured');

  return (
    <div className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-extrabold text-gray-900 leading-tight mb-5">
            Discover Your Passion,<br />Build Your Skills
          </h2>
          <p className="text-gray-500 max-w-[700px] mx-auto text-[15px] leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different
            fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => !cat.isMore && setActive(cat.name)}
              className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-200 border
                ${active === cat.name
                  ? 'bg-[#CEFF00] text-gray-900 border-[#CEFF00] shadow-sm font-semibold'
                  : cat.isMore
                    ? 'bg-transparent border-transparent text-[#0341FF] font-semibold hover:underline'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900'
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {courses.map((course, idx) => (
            <CourseCard key={idx} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverPassion;
