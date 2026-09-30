import React from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';

const AffiliateProgram = () => {
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
              Partner With Us
            </span>
            <h1 className="text-white text-[38px] md:text-[52px] font-extrabold leading-tight mb-4">
              Affiliate Program
            </h1>
            <p className="text-white/80 text-[16px] md:text-[18px] leading-relaxed">
              Earn competitive commissions by promoting ByteSpace courses to your audience. Join our network of successful partners today.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative z-10 -mt-10 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
           <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 text-center">
             <div className="max-w-[800px] mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why join our Affiliate Program?</h2>
                <p className="text-gray-600 mb-10 leading-relaxed">
                  Turn your recommendations into revenue. We provide high-converting marketing materials and reliable tracking so you can focus on what you do best: sharing great content with your audience.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#CEFF00] rounded-full flex items-center justify-center mb-4 text-gray-900">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">High Commissions</h3>
                    <p className="text-gray-500 text-sm">Earn up to 30% commission on every successful course enrollment.</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#CEFF00] rounded-full flex items-center justify-center mb-4 text-gray-900">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">90-Day Cookie</h3>
                    <p className="text-gray-500 text-sm">Get credited for sales even if the user takes time to decide.</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#CEFF00] rounded-full flex items-center justify-center mb-4 text-gray-900">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Dedicated Support</h3>
                    <p className="text-gray-500 text-sm">Access to our affiliate team for tips, strategies, and resources.</p>
                  </div>
                </div>

                <button className="bg-[#0341FF] text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-blue-700 transition-colors shadow-md">
                  Apply Now
                </button>
             </div>
           </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AffiliateProgram;
