import React, { useState } from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState('agreement');

  const sections = [
    { id: 'agreement', title: '1. Agreement to Terms', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'accounts', title: '2. User Accounts', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { id: 'ip', title: '3. Intellectual Property', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
    { id: 'termination', title: '4. Termination', icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636' },
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
          <div className="max-w-[600px]">
            <span className="bg-[#CEFF00] text-gray-900 text-[12px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block shadow-sm">
              Legal Documents
            </span>
            <h1 className="text-white text-[38px] md:text-[52px] font-extrabold leading-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-white/80 text-[16px] md:text-[18px] leading-relaxed">
              These terms outline the rules and regulations for the use of ByteSpace's Website and Services.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 relative z-10 -mt-10 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            {/* Sidebar Navigation */}
            <div className="w-full md:w-[300px] bg-white rounded-2xl shadow-xl p-6 sticky top-24 shrink-0 border border-gray-100">
              <h3 className="text-gray-400 font-bold text-[12px] uppercase tracking-wider mb-4 px-4">Contents</h3>
              <nav className="flex flex-col gap-2">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollTo(sec.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                      activeSection === sec.id 
                        ? 'bg-blue-50 text-[#0341FF] font-bold shadow-sm' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium'
                    }`}
                  >
                    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d={sec.icon} />
                    </svg>
                    <span className="text-[14px]">{sec.title}</span>
                  </button>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-gray-100 px-4">
                <p className="text-gray-400 text-[12px]">Last updated</p>
                <p className="text-gray-900 font-bold text-[14px]">September 30, 2026</p>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="prose prose-lg max-w-none text-gray-600">
                
                <div id="agreement" className="scroll-mt-32 mb-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0341FF]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d={sections[0].icon} /></svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 m-0">1. Agreement to Terms</h2>
                  </div>
                  <p className="leading-relaxed text-[16px] mb-4">
                    By viewing or accessing ByteSpace, you agree to be bound by our Terms of Service. If you disagree with any part of the terms, then you may not access the service. These Terms apply to all visitors, users, and others who wish to access or use the Service.
                  </p>
                </div>

                <div id="accounts" className="scroll-mt-32 mb-12 pt-8 border-t border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0341FF]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d={sections[1].icon} /></svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 m-0">2. User Accounts</h2>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-6">
                    <ul className="space-y-4 m-0 p-0 list-none">
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 font-bold text-[#0341FF]">1</div>
                        <p className="m-0 text-[15px] pt-1">You must provide us information that is accurate, complete, and current at all times.</p>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 font-bold text-[#0341FF]">2</div>
                        <p className="m-0 text-[15px] pt-1">You are responsible for safeguarding the password that you use to access the Service.</p>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 font-bold text-[#0341FF]">3</div>
                        <p className="m-0 text-[15px] pt-1">You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="ip" className="scroll-mt-32 mb-12 pt-8 border-t border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0341FF]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d={sections[2].icon} /></svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 m-0">3. Intellectual Property</h2>
                  </div>
                  <p className="leading-relaxed text-[16px] mb-4">
                    The Service and its original content, features and functionality are and will remain the exclusive property of ByteSpace and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
                  </p>
                  <p className="leading-relaxed text-[16px] mb-4">
                    Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of ByteSpace.
                  </p>
                </div>

                <div id="termination" className="scroll-mt-32 pt-8 border-t border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0341FF]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d={sections[3].icon} /></svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 m-0">4. Termination</h2>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
                    <h4 className="text-red-800 font-bold mb-2 m-0 text-[16px]">Account Suspension & Termination</h4>
                    <p className="text-red-700 text-[14.5px] m-0 leading-relaxed">
                      We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
