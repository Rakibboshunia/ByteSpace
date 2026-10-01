import React, { useState } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import toast from 'react-hot-toast';

// Assets
import courseHero from '../assets/02.jpg';
import sneakImg1 from '../assets/06.jpg';
import sneakImg2 from '../assets/07.jpg';
import sneakImg3 from '../assets/08.jpg';
import sneakImg4 from '../assets/09.jpg';
import instructorAvatar from '../assets/img01.png';
import avatar1 from '../assets/img04.png';
import avatar2 from '../assets/img05.png';
import avatar3 from '../assets/img06.png';
import avatar4 from '../assets/img07.jpg';

// Extra course images
import img1 from '../assets/01.jpg';
import img3 from '../assets/auth-chart.jpg';
import img4 from '../assets/03.jpg';
import img5 from '../assets/04.jpg';
import img6 from '../assets/05.jpg';

// ─── DATA ────────────────────────────────────────────────────────────────────

const courseDataDict = {
  'learn-figma-from-basic': {
    title: 'Learn Figma from Basic',
    subtitle: 'Master the UI/UX design tool from scratch to advanced techniques',
    img: img1,
    rating: '4.5 (534 reviews)',
    students: '1,240 Students',
    level: 'Beginner',
    author: 'purepearl studio',
    price: '$25'
  },
  'build-digital-asset': {
    title: 'Build Digital Asset',
    subtitle: 'Unlock the Power of Digital Creation with Expert Guidance',
    img: courseHero,
    rating: '4.8 (772 reviews)',
    students: '990 Students',
    level: 'Intermediate',
    author: 'purepearl studio',
    price: '$25'
  },
  'the-power-of-big-data': {
    title: 'The Power of Big Data',
    subtitle: 'Understand analytics and leverage data for strategic decisions',
    img: img3,
    rating: '4.7 (420 reviews)',
    students: '850 Students',
    level: 'Advanced',
    author: 'purepearl studio',
    price: '$35'
  },
  'balancing-productivity-and-wellness': {
    title: 'Balancing Productivity and Wellness',
    subtitle: 'Achieve more while maintaining your mental and physical health',
    img: img4,
    rating: '4.9 (1,100 reviews)',
    students: '2,300 Students',
    level: 'All Levels',
    author: 'purepearl studio',
    price: '$20'
  },
  // legacy slug alias
  'balancing-productivity-an': {
    title: 'Balancing Productivity and Wellness',
    subtitle: 'Achieve more while maintaining your mental and physical health',
    img: img4,
    rating: '4.9 (1,100 reviews)',
    students: '2,300 Students',
    level: 'All Levels',
    author: 'purepearl studio',
    price: '$20'
  },
  'mastering-money-management': {
    title: 'Mastering Money Management',
    subtitle: 'Take control of your finances and build long-term wealth',
    img: img5,
    rating: '4.6 (610 reviews)',
    students: '1,500 Students',
    level: 'Beginner',
    author: 'purepearl studio',
    price: '$30'
  },
  // legacy slug alias
  'mastering-money-manage': {
    title: 'Mastering Money Management',
    subtitle: 'Take control of your finances and build long-term wealth',
    img: img5,
    rating: '4.6 (610 reviews)',
    students: '1,500 Students',
    level: 'Beginner',
    author: 'purepearl studio',
    price: '$30'
  },
  'from-idea-to-startup-success': {
    title: 'From Idea to Startup Success',
    subtitle: 'The complete roadmap for launching your own business',
    img: img6,
    rating: '4.8 (890 reviews)',
    students: '1,800 Students',
    level: 'Intermediate',
    author: 'purepearl studio',
    price: '$45'
  },
  // legacy slug alias
  'from-idea-to-startup-succ': {
    title: 'From Idea to Startup Success',
    subtitle: 'The complete roadmap for launching your own business',
    img: img6,
    rating: '4.8 (890 reviews)',
    students: '1,800 Students',
    level: 'Intermediate',
    author: 'purepearl studio',
    price: '$45'
  },
  'ui-ux-fundamentals': {
    title: 'UI/UX Fundamentals',
    subtitle: 'Build a strong foundation in user interface and experience design',
    img: courseHero,
    rating: '4.4 (310 reviews)',
    students: '870 Students',
    level: 'Beginner',
    author: 'purepearl studio',
    price: '$20'
  },
  'animation-for-beginners': {
    title: 'Animation for Beginners',
    subtitle: 'Learn the principles of motion and bring your designs to life',
    img: img4,
    rating: '4.3 (220 reviews)',
    students: '640 Students',
    level: 'Beginner',
    author: 'purepearl studio',
    price: '$15'
  },
  'drawing-painting-basics': {
    title: 'Drawing & Painting Basics',
    subtitle: 'Develop your artistic eye and fundamental drawing skills',
    img: img1,
    rating: '4.6 (450 reviews)',
    students: '1,100 Students',
    level: 'Beginner',
    author: 'purepearl studio',
    price: '$18'
  },
  'social-media-strategy': {
    title: 'Social Media Strategy',
    subtitle: 'Grow your brand and audience with data-driven social media tactics',
    img: img5,
    rating: '4.5 (550 reviews)',
    students: '1,300 Students',
    level: 'Intermediate',
    author: 'purepearl studio',
    price: '$28'
  },
  'creative-marketing-masterclass': {
    title: 'Creative Marketing Masterclass',
    subtitle: 'Craft campaigns that captivate audiences and drive real results',
    img: img3,
    rating: '4.7 (800 reviews)',
    students: '1,600 Students',
    level: 'Intermediate',
    author: 'purepearl studio',
    price: '$40'
  },
  'music-production-101': {
    title: 'Music Production 101',
    subtitle: 'Create professional-quality tracks from scratch in your home studio',
    img: img6,
    rating: '4.2 (180 reviews)',
    students: '520 Students',
    level: 'Beginner',
    author: 'purepearl studio',
    price: '$22'
  },
};

const lessonSidebar = [
  { num: '01', title: 'Introduction to Digital Assets', mins: '12 mins' },
  { num: '02', title: 'Design Principles for Impactful...', mins: '21 mins' },
  { num: '03', title: 'Advanced Techniques in Digital Creation', mins: '5 files' },
];

const modules = [
  {
    num: '01',
    icon: '🎨',
    title: 'Module 1: Introduction to Digital Assets',
    desc: 'Master the fundamentals of Understanding Digital Taxonomies and Navigating Design Software Tools. Dive into the essentials of digital asset creation.',
  },
  {
    num: '02',
    icon: '📐',
    title: 'Module 2: Design Principles for Impact',
    desc: 'Master the principles that drive impactful designs with lessons such as Color Theory in Digital Design and Typography Essentials. Elevate your visual communication skills.',
  },
  {
    num: '03',
    icon: '💻',
    title: 'Module 3: User-Centric Design Strategies',
    desc: 'Grasp the underpinnings of UX and advance to User Experience (UX) Essentials. Craft digital assets with a focus on user-centric design.',
  },
  {
    num: '04',
    icon: '🎬',
    title: 'Module 4: Interactive Media and Engagement',
    desc: 'Elevate your skillset with lessons like Creating Immersive Presentations and Integrating Audio and Video. Craft compelling interactive digital experiences.',
  },
  {
    num: '05',
    icon: '🏆',
    title: 'Module 5: Project Showcase and Critique',
    desc: 'Refine your presentation skills with Effective Presentation Techniques and develop collaboration skills with Peer Critique in Digital Creation. Showcase your work with confidence.',
  },
  {
    num: '06',
    icon: '📱',
    title: 'Module 6: Optimising Digital Assets for Various Platforms',
    desc: 'Adapt your digital creations for Mobile Platforms and optimise for Social Media. Ensure cross-platform accessibility and engagement across diverse digital landscapes.',
  },
];

const keyPoints = [
  'Foundational Concepts',
  'Design Principles Mastery',
  'Advanced Techniques in Digital Creation',
  'Project Showcase and Critique',
  'Digital Asset Management Best Practices',
  'Monetisation Strategies',
  'Capstone Project: Building Your Portfolio',
];

const reviews = [
  {
    name: 'PurePearl Studio',
    role: 'UI/UX Designer',
    rating: 5,
    text: 'This course comes with a comprehensive understanding of digital assets. The lessons have depth, clarity, and are immediately applicable to work. Highly recommend!',
    time: '4 days ago',
    avatar: avatar1,
  },
  {
    name: 'Albert Flores',
    role: 'Junior Designer',
    rating: 5,
    text: 'This course has broadened my approach to digital design. The combination of theory and practical exercises is very strong experience. I would recommend it to anyone!',
    time: '4 days ago',
    avatar: avatar2,
  },
  {
    name: 'Cody Fisher',
    role: 'UX Designer',
    rating: 4,
    text: 'The lessons in this course are well-structured and kept my interest throughout. Each module builds on the previous one, and the hands-on exercises really helped solidify my skills. A great learning experience overall.',
    time: 'a year ago',
    avatar: avatar3,
  },
  {
    name: 'Brooklyn Simmons',
    role: 'Motion Designer',
    rating: 5,
    text: 'This course is a must-have for anyone serious about building digital skills. The content stays relevant to the ever-evolving digital landscape, and the engaging exercises kept me motivated from start to finish.',
    time: '2 years ago',
    avatar: avatar4,
  },
];

const ratingBreakdown = [
  { stars: 5, pct: 72 },
  { stars: 4, pct: 18 },
  { stars: 3, pct: 6 },
  { stars: 2, pct: 3 },
  { stars: 1, pct: 1 },
];

// ─── SMALL COMPONENTS ────────────────────────────────────────────────────────

const StarRow = ({ rating, size = 16 }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <svg key={s} width={size} height={size} viewBox="0 0 24 24"
        fill={s <= rating ? '#FACC15' : 'none'}
        stroke={s <= rating ? '#FACC15' : '#D1D5DB'}
        strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const SidebarLesson = ({ lesson }) => (
  <div className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
    <span className="text-[#0341FF] font-bold text-[13px] shrink-0 w-6">{lesson.num}</span>
    <p className="text-gray-700 text-[13px] leading-snug flex-1">{lesson.title}</p>
    <span className="text-gray-400 text-[12px] shrink-0">{lesson.mins}</span>
  </div>
);

const ModuleCard = ({ mod }) => (
  <div className="flex gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group">
    <div className="w-12 h-12 bg-[#CEFF00] rounded-xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
      {mod.icon}
    </div>
    <div>
      <h4 className="font-bold text-gray-900 text-[15px] mb-1.5 group-hover:text-[#0341FF] transition-colors">{mod.title}</h4>
      <p className="text-gray-500 text-[13px] leading-relaxed">{mod.desc}</p>
    </div>
  </div>
);

const ReviewCard = ({ review }) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all duration-200">
    <div className="flex items-start justify-between gap-4 mb-3">
      <div className="flex items-center gap-3">
        <img src={review.avatar} alt={review.name} className="w-11 h-11 rounded-full object-cover border-2 border-gray-100" />
        <div>
          <h5 className="font-bold text-gray-900 text-[14px]">{review.name}</h5>
          <p className="text-gray-400 text-[12px]">{review.role}</p>
        </div>
      </div>
      <span className="text-gray-400 text-[12px] shrink-0 mt-1">{review.time}</span>
    </div>
    <StarRow rating={review.rating} size={14} />
    <p className="text-gray-600 text-[13px] leading-relaxed mt-3">{review.text}</p>
  </div>
);

// ─── SIDEBAR CARD (used once, inside hero) ────────────────────────────────────

const SidebarCard = ({ instructorAvatar, courseInfo, courseSlug }) => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const navigate = useNavigate();

  const handleEnroll = () => {
    if (!isEnrolled) {
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
      if (isAuthenticated) {
        navigate(`/payment/${courseSlug || 'build-digital-asset'}`);
      } else {
        const returnUrl = encodeURIComponent(`/payment/${courseSlug || 'build-digital-asset'}`);
        navigate(`/signup?returnUrl=${returnUrl}`);
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 lg:sticky lg:top-6">
      {/* Lesson count */}
      <div className="flex items-center gap-2 mb-4">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0341FF" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
        </svg>
        <span className="font-bold text-gray-900 text-[15px]">112 Lessons (24 hours)</span>
      </div>

      {/* Lesson previews */}
      <div className="mb-4">
        {lessonSidebar.map((l, i) => <SidebarLesson key={i} lesson={l} />)}
        <button className="text-[#0341FF] text-[13px] font-semibold mt-3 hover:underline">+4 more lessons</button>
      </div>

      <p className="text-gray-400 text-[12px] mb-2">Ready to dive in? Enrol now and start building your digital future!</p>

      {/* Price */}
      <div className="flex items-baseline gap-1 mt-2 mb-4">
        <span className="text-[#0341FF] text-[32px] font-extrabold leading-none">{courseInfo?.price || '$25'}</span>
        <span className="text-gray-400 text-[13px]">/lifetime</span>
      </div>

      {/* CTA */}
      <button 
        onClick={handleEnroll}
        disabled={isEnrolled}
        className={`w-full font-bold py-3.5 rounded-xl text-[15px] transition-all shadow-md mb-5 ${
          isEnrolled 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-[#CEFF00] hover:bg-[#B4E600] text-gray-900 hover:scale-[1.02]'
        }`}
      >
        {isEnrolled ? 'Enrolled' : 'Enrol Now'}
      </button>

      {/* This course includes */}
      <div className="mb-4">
        <p className="text-[13px] font-bold text-gray-900 mb-3">This course includes</p>
      <ul className="space-y-2.5">
        {[
          { icon: '📚', label: 'Learning Resources' },
          { icon: '🎥', label: 'Quality Lesson Videos' },
          { icon: '🏅', label: 'Certificate of Completion' },
          { icon: '💬', label: 'Private Consultation' },
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-2.5 text-[13px] text-gray-600">
            <span className="text-base">{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </div>

    <div className="border-t border-gray-100 pt-4">
      <p className="text-gray-400 text-[12px] mb-3">Ready to dive in? Enrol now and start building your digital future!</p>
      <div className="flex items-center gap-3">
        <img src={instructorAvatar} alt="Instructor" className="w-11 h-11 rounded-full object-cover border-2 border-gray-100" />
        <div>
          <p className="font-bold text-gray-900 text-[13px]">PurePearl Studio</p>
          <p className="text-gray-400 text-[11px]">Professional Creator</p>
        </div>
      </div>
      <Link to="/creator/purepearl-studio" className="text-[#0341FF] text-[13px] font-semibold mt-3 hover:underline inline-block">See Full Profile →</Link>
    </div>
  </div>
  );
};

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

const CourseDetail = () => {
  const { courseSlug } = useParams();
  const [activeTab, setActiveTab] = useState('reviews');
  const [filterRating, setFilterRating] = useState('Rating');
  const [isPlaying, setIsPlaying] = useState(false);
  const progress = 55;
  const tabs = ['About', 'Lesson', 'Reviews'];

  const courseInfo = courseDataDict[courseSlug] || courseDataDict['build-digital-asset'];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* ══════════════════════════════════════════════════════
          SECTION 1: BLUE HEADER & VIDEO
          This section's height is determined strictly by the Video Player.
         ══════════════════════════════════════════════════════ */}
      <div className="bg-[#0341FF] relative z-10">
        {/* Grid background pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
        
        <Navbar />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-[130px] pb-10">
          
          {/* ── TOP HEADER AREA (Title & Share) ── */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-10">
            <div className="max-w-[700px]">
              <h1 className="text-white text-[32px] md:text-[38px] font-extrabold leading-tight mb-2">
                {courseInfo.title}
              </h1>
              <p className="text-white/80 text-[15px] mb-4 font-medium">
                {courseInfo.subtitle}
              </p>
              
              <p className="text-white/70 text-[13px] mb-5">
                by <span className="text-[#CEFF00] font-semibold cursor-pointer hover:underline">{courseInfo.author}</span>
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-1.5 bg-white text-gray-900 text-[13px] font-semibold px-4 py-2 rounded-full shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0341FF" strokeWidth="2.5"><path d="M12 20V10M18 20V4M6 20v-4"/></svg>
                  {courseInfo.level}
                </span>
                <span className="flex items-center gap-1.5 bg-white text-gray-900 text-[13px] font-semibold px-4 py-2 rounded-full shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#0341FF" stroke="#0341FF" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  {courseInfo.rating}
                </span>
                <span className="flex items-center gap-1.5 bg-white text-gray-900 text-[13px] font-semibold px-4 py-2 rounded-full shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0341FF" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  {courseInfo.students}
                </span>
              </div>
            </div>

            {/* Share Button (Top Right) */}
            <button className="flex items-center gap-1.5 bg-[#CEFF00] text-gray-900 font-bold text-[13px] px-5 py-2.5 rounded-full shadow-md hover:bg-[#B4E600] transition-colors shrink-0">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
              Share
            </button>
          </div>

          {/* ── GRID: VIDEO & DESKTOP SIDEBAR ANCHOR ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
            
            {/* LEFT COLUMN: Video Player */}
            <div>
              <div
                className="relative rounded-3xl overflow-hidden cursor-pointer shadow-2xl group w-full"
                style={{ aspectRatio: '16/9' }}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <img
                  src={courseInfo.img}
                  alt="Course Preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-all">
                  <div className={`w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 ${isPlaying ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#0341FF">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Desktop Sidebar Anchor */}
            {/* Using absolute positioning ensures the Sidebar doesn't stretch the blue background downwards! */}
            <div className="hidden lg:block relative h-full">
              <div className="absolute top-0 left-0 w-full z-50">
                <SidebarCard instructorAvatar={instructorAvatar} courseInfo={courseInfo} courseSlug={courseSlug} />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 2: WHITE MAIN CONTENT
         ══════════════════════════════════════════════════════ */}
      <div className="bg-white flex-1 relative z-0">
        <div className="max-w-[1200px] mx-auto px-6 py-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
            
            {/* ── LEFT COLUMN (Tabs & Content) ── */}
            <div>
              
              {/* Tabs (Pill Style) */}
              <div className="flex flex-wrap gap-3 mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`px-6 py-2 rounded-full text-[14px] font-bold transition-all duration-200 ${
                      activeTab === tab.toLowerCase()
                        ? 'bg-[#CEFF00] text-gray-900 shadow-sm'
                        : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-400'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content Area */}
              <div>
                {/* ── ABOUT ── */}
                {activeTab === 'about' && (
                  <div>
                    <h2 className="text-[22px] font-extrabold text-gray-900 mb-4">About this Course</h2>
                    <p className="text-gray-600 text-[14px] leading-relaxed mb-4">
                      Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously tailored to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                    </p>
                    <p className="text-gray-600 text-[14px] leading-relaxed mb-4">
                      In the initial modules you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                    </p>
                    <p className="text-gray-600 text-[14px] leading-relaxed mb-8">
                      As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights.
                    </p>

                    <h3 className="text-[18px] font-bold text-gray-900 mb-4">Sneak Peek</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
                      {[sneakImg1, sneakImg2, sneakImg3, sneakImg4].map((img, i) => (
                        <div key={i} className="rounded-xl overflow-hidden aspect-video hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md">
                          <img src={img} alt={`Sneak peek ${i + 1}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>

                    <h3 className="text-[18px] font-bold text-gray-900 mb-4">Key Points</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {keyPoints.map((point, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-[#CEFF00] flex items-center justify-center shrink-0">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          </div>
                          <span className="text-gray-700 text-[13px]">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── LESSONS ── */}
                {activeTab === 'lesson' && (
                  <div>
                    <div className="mb-6">
                      <h2 className="text-[22px] font-extrabold text-gray-900 mb-1">Explore the Modules</h2>
                      <p className="text-gray-500 text-[14px]">
                        Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                      </p>
                    </div>

                    <h3 className="text-[16px] font-bold text-gray-900 mb-4">Lesson List</h3>
                    <div className="flex flex-col gap-4 mb-10">
                      {modules.map((mod) => (
                        <ModuleCard key={mod.num} mod={mod} />
                      ))}
                    </div>

                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8">
                      <h3 className="text-[16px] font-bold text-gray-900 mb-2">Lesson Content</h3>
                      <p className="text-gray-500 text-[13px] leading-relaxed">
                        Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with a quiz.
                      </p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                      <h3 className="text-[16px] font-bold text-gray-900 mb-1">Lesson Progress Tracking</h3>
                      <p className="text-gray-500 text-[13px] mb-5">
                        Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
                      </p>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[13px] font-semibold text-gray-700">Lesson Progress</span>
                        <span className="text-[13px] font-bold text-[#0341FF]">{progress}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-3 rounded-full bg-gradient-to-r from-[#0341FF] to-indigo-400 transition-all duration-700"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <p className="text-gray-400 text-[12px] mt-2">{progress}% completed · {100 - progress}% remaining</p>
                    </div>
                  </div>
                )}

                {/* ── REVIEWS ── */}
                {activeTab === 'reviews' && (
                  <div>
                    <h2 className="text-[22px] font-extrabold text-gray-900 mb-2">What Learners Are Saying</h2>
                    <p className="text-gray-500 text-[14px] leading-relaxed mb-8 max-w-[600px]">
                      Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read real, unfiltered ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                    </p>

                    {/* Rating summary */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-8 flex flex-col md:flex-row items-center gap-8">
                      <div className="bg-[#CEFF00] rounded-2xl p-6 w-full md:w-[140px] text-center shrink-0">
                        <p className="text-gray-700 text-[13px] font-semibold mb-1">Ratings</p>
                        <div className="text-[48px] font-black text-gray-900 leading-none">4.7</div>
                      </div>
                      <div className="flex-1 w-full space-y-2">
                        {ratingBreakdown.map((row) => (
                          <div key={row.stars} className="flex items-center gap-3">
                            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                              <div className="h-1.5 rounded-full bg-[#CEFF00]" style={{ width: `${row.pct}%` }} />
                            </div>
                            <div className="flex gap-0.5 shrink-0">
                              {[1,2,3,4,5].map((s) => (
                                <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={s <= row.stars ? '#4B5563' : '#E5E7EB'} stroke="none">
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-gray-500 text-[12px] w-8 text-right">{Math.floor(row.pct * 10)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-[16px] font-bold text-gray-900 mb-4">Individual Reviews:</h3>

                    {/* Filter pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {['All rating', '★ 5', '★ 4', '★ 3', '★ 2', '★ 1'].map((f) => (
                        <button
                          key={f}
                          onClick={() => setFilterRating(f)}
                          className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                            filterRating === f
                              ? 'bg-[#CEFF00] text-gray-900 shadow-sm'
                              : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-400'
                          }`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>

                    {/* Review cards */}
                    <div className="flex flex-col gap-4">
                      {reviews.map((rev, i) => (
                        <ReviewCard key={i} review={rev} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ── RIGHT COLUMN (Sidebar Card Mobile / Spacer) ── */}
            <div className="block lg:relative">
              {/* On Desktop, this is invisible and acts as a spacer for the absolute card from Section 1 */}
              {/* On Mobile, this becomes visible so the card displays at the bottom of the content */}
              <div className="lg:opacity-0 lg:pointer-events-none">
                <SidebarCard instructorAvatar={instructorAvatar} courseInfo={courseInfo} courseSlug={courseSlug} />
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetail;
