import React from 'react';

const CourseList = () => {
  const courses = Array(6).fill({
    title: 'Learn Figma from Basic',
    author: 'purepearl studio',
    rating: '4.5',
    price: '$25',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner'
  });

  return (
    <div className="bg-white pb-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group flex flex-col">
              {/* Thumbnail Placeholder */}
              <div className="h-[200px] bg-gray-100 relative w-full overflow-hidden">
                {/* Fake Image Content */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 font-medium">Course Image</span>
                </div>
                
                {/* Overlay Tags */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between gap-2">
                  <span className="bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-medium text-gray-700">{course.lessons}</span>
                  <span className="bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-medium text-gray-700">{course.duration}</span>
                  <span className="bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-medium text-gray-700">{course.comments}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h3 className="font-bold text-[18px] text-gray-900 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded text-sm font-semibold">
                    {course.rating} 
                    <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  </div>
                </div>
                
                <p className="text-gray-500 text-[13px] mb-4">by <span className="text-primary hover:underline cursor-pointer">{course.author}</span></p>
                
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10M18 20V4M6 20v-4"/></svg>
                      {course.level}
                    </span>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-blue-200 border-2 border-white"></div>
                      <div className="w-6 h-6 rounded-full bg-green-200 border-2 border-white"></div>
                      <div className="w-6 h-6 rounded-full bg-red-200 border-2 border-white"></div>
                      <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center text-[9px] font-bold">26+</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
                  <span className="text-[20px] font-bold text-primary">{course.price}</span>
                  <span className="text-[13px] text-gray-500 ml-1">/lifetime</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
