import React from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';

const Help = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-[#0341FF] relative z-0">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
        <Navbar />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-[140px] pb-[80px]">
          <div className="max-w-[700px]">
            <span className="bg-[#CEFF00] text-gray-900 text-[12px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block shadow-sm">
              Support Center
            </span>
            <h1 className="text-white text-[38px] md:text-[52px] font-extrabold leading-tight mb-4">
              How can we help?
            </h1>
            <p className="text-white/80 text-[16px] md:text-[18px] leading-relaxed">
              Browse our guides, FAQs, and resources to get the most out of ByteSpace.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative z-10 -mt-10 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
           <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
             
             <div className="mb-12 relative max-w-[600px] mx-auto -mt-16 bg-white rounded-full p-2 shadow-lg flex items-center border border-gray-100">
                <svg className="w-5 h-5 text-gray-400 ml-4 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input type="text" className="flex-1 outline-none px-2 py-2 text-gray-700" placeholder="Search for articles, guides..." />
                <button className="bg-[#0341FF] text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-colors">Search</button>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Getting Started', desc: 'New to ByteSpace? Learn the basics of finding and taking courses.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                  { title: 'Account & Billing', desc: 'Manage your profile, payment methods, and subscription settings.', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
                  { title: 'For Creators', desc: 'Everything you need to know about creating and publishing courses.', icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' },
                ].map((cat, i) => (
                  <div key={i} className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="w-12 h-12 bg-blue-50 text-[#0341FF] rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d={cat.icon} /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{cat.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Help;
