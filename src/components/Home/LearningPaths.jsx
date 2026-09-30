import React from 'react';
import { Link } from 'react-router-dom';

const paths = [
  {
    name: 'Design',
    slug: 'UI/UX Design',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/>
        <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/>
        <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/>
        <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
      </svg>
    ),
  },
  {
    name: 'Development',
    slug: 'Coding',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    name: 'IT & Software',
    slug: 'Coding',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    name: 'Business',
    slug: 'Featured',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    name: 'Marketing',
    slug: 'Marketing',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    name: 'Photography',
    slug: 'Drawing & Painting',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
        <circle cx="12" cy="13" r="3"/>
      </svg>
    ),
  },
];

const LearningPaths = () => {
  return (
    <div className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-[1100px] mx-auto px-6 text-center">

        <h2 className="text-[38px] font-extrabold text-gray-900 mb-5 leading-tight">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="text-gray-500 max-w-[700px] mx-auto mb-16 text-[15px] leading-relaxed">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of
          courses spans various fields, ensuring there's something for everyone. Unleash your
          potential and explore our carefully curated categories.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {paths.map((path, idx) => (
            <Link
              to={`/courses?category=${encodeURIComponent(path.slug)}`}
              key={idx}
              className="flex flex-col items-center gap-5 bg-white border border-gray-200 rounded-[20px] py-8 px-4 cursor-pointer
                         hover:shadow-lg hover:border-[#CEFF00] transition-all duration-300 group"
            >
              {/* Icon circle */}
              <div className="w-[62px] h-[62px] rounded-full bg-[#CEFF00] flex items-center justify-center text-gray-900
                              group-hover:scale-110 transition-transform duration-300">
                {path.icon}
              </div>
              <span className="font-semibold text-gray-800 text-[15px] group-hover:text-[#0341FF] transition-colors">
                {path.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPaths;
