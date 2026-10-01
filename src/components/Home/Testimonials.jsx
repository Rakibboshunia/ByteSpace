import React, { useState, useEffect } from 'react';
import avatar1 from '../../assets/img01.png';
import avatar2 from '../../assets/img02.jpg';
import avatar3 from '../../assets/img03.png';
import avatar4 from '../../assets/img04.png';
import avatar5 from '../../assets/img05.png';

const reviews = [
  {
    name: 'Sarah M.', role: 'Enthusiastic Learner', img: avatar1,
    quote: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: 'James L.', role: 'Lifelong Learner', img: avatar2,
    quote: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: 'Alex B.', role: 'Inspired Creator', img: avatar3,
    quote: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
  {
    name: 'Emily R.', role: 'UI/UX Designer', img: avatar4,
    quote: '"The design courses here are phenomenal! I landed my first junior designer role just 3 months after completing a learning path. The premium feel of the platform makes learning a joy."',
  },
  {
    name: 'David K.', role: 'Software Engineer', img: avatar5,
    quote: '"I love how easy it is to manage my own courses. The revenue dashboard is clear, and the community engagement is higher than anywhere else. ByteSpace is the future of online education."',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative py-12 sm:py-16 overflow-hidden bg-white border-t border-gray-50">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0341FF]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#CEFF00]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">

        {/* Heading row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center mb-12 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0341FF]/10 text-[#0341FF] font-bold text-[12px] uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Testimonials
            </div>
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-extrabold text-gray-900 leading-[1.15]">
              Discover What Our<br />Community Is Saying
            </h2>
          </div>
          <p className="text-gray-500 text-[15px] sm:text-[16px] leading-relaxed max-w-[480px]">
            At ByteSpace, our vibrant community of learners and creators is at the
            heart of what we do. Hear directly from those who have experienced the
            transformative journey of learning and creating on our platform.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Big Decorative Quote Mark */}
          <div className="absolute top-[-40px] left-[20px] text-[180px] font-serif font-black text-gray-100/50 leading-none z-0 pointer-events-none">
            "
          </div>

          {/* Cards Wrapper (Horizontal Scroll / Snap) */}
          <div className="overflow-hidden relative z-10 py-4">
            <div 
              className="flex transition-transform duration-700 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / (window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3))}%)` }}
            >
              {reviews.map((r, idx) => (
                <div
                  key={r.name}
                  className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 bg-white rounded-[24px] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 hover:border-[#CEFF00]/50 transition-all duration-300 flex flex-col justify-between"
                  style={{ minHeight: '320px' }}
                >
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed italic mb-8">
                      {r.quote}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-[50px] h-[50px] sm:w-[56px] sm:h-[56px] rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                      <img src={r.img} alt={r.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-extrabold text-gray-900 text-[15px] sm:text-[16px] leading-tight">{r.name}</p>
                      <p className="text-[#0341FF] text-[12px] sm:text-[13px] font-bold mt-0.5">{r.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2.5 mt-10">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx 
                    ? 'w-8 h-2.5 bg-[#0341FF]' 
                    : 'w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
