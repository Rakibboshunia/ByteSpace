import React from 'react';
import avatar1 from '../../assets/img01.png';
import avatar2 from '../../assets/img02.jpg';
import avatar3 from '../../assets/img03.png';

const reviews = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    img: avatar1,
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    img: avatar2,
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    img: avatar3,
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

const Testimonials = () => {
  return (
    <div
      className="relative py-20 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #dce4f5 0%, #eef2ff 25%, #f8fef0 65%, #e8f9d4 100%)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-8">

        {/* ── Top row: heading + description ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-[40px] font-extrabold text-gray-900 leading-tight">
            Discover What Our<br />Community Is Saying
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed pt-2">
            At ByteSpace, our vibrant community of learners and creators is at the
            heart of what we do. Hear directly from those who have experienced the
            transformative journey of learning and creating on our platform. Explore
            testimonials that reflect the diverse perspectives of enthusiastic learners
            and accomplished creators.
          </p>
        </div>

        {/* ── Cards row ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
            >
              {/* Avatar */}
              <div className="w-[56px] h-[56px] rounded-full overflow-hidden shrink-0">
                <img src={r.img} alt={r.name} className="w-full h-full object-cover" />
              </div>

              {/* Name + role */}
              <div>
                <p className="font-bold text-gray-900 text-[16px] leading-tight">{r.name}</p>
                <p className="text-[#0341FF] text-[13px] font-medium mt-0.5">{r.role}</p>
              </div>

              {/* Quote */}
              <p className="text-gray-500 text-[14px] leading-relaxed">{r.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
