import React, { useState } from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', title: '1. Introduction', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'data', title: '2. Data We Collect', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' },
    { id: 'usage', title: '3. How We Use Data', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { id: 'security', title: '4. Data Security', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
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
              Privacy Policy
            </h1>
            <p className="text-white/80 text-[16px] md:text-[18px] leading-relaxed">
              Your privacy is critically important to us. Learn how we collect, use, and protect your personal information.
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
                
                <div id="intro" className="scroll-mt-32 mb-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0341FF]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d={sections[0].icon} /></svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 m-0">1. Introduction</h2>
                  </div>
                  <p className="leading-relaxed text-[16px] mb-4">
                    Welcome to ByteSpace. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                  </p>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mt-6">
                    <p className="text-amber-800 text-[14px] m-0 font-medium">
                      <strong>Important:</strong> Please read this privacy policy together with any other privacy policy or fair processing notice we may provide on specific occasions.
                    </p>
                  </div>
                </div>

                <div id="data" className="scroll-mt-32 mb-12 pt-8 border-t border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0341FF]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d={sections[1].icon} /></svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 m-0">2. The Data We Collect</h2>
                  </div>
                  <p className="leading-relaxed text-[16px] mb-6">
                    Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: 'Identity Data', desc: 'First name, last name, username or similar identifier.' },
                      { title: 'Contact Data', desc: 'Billing address, delivery address, email and telephone numbers.' },
                      { title: 'Technical Data', desc: 'IP address, login data, browser type and version.' },
                      { title: 'Profile Data', desc: 'Username and password, purchases or orders made by you.' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-[#0341FF]/30 transition-colors">
                        <h4 className="font-bold text-gray-900 text-[15px] mb-2">{item.title}</h4>
                        <p className="text-[13.5px] text-gray-500 m-0">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div id="usage" className="scroll-mt-32 mb-12 pt-8 border-t border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0341FF]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d={sections[2].icon} /></svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 m-0">3. How We Use Your Data</h2>
                  </div>
                  <p className="leading-relaxed text-[16px] mb-4">
                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                  </p>
                  <ul className="space-y-3 mt-4 list-none p-0">
                    {['Where we need to perform the contract we are about to enter into or have entered into with you.', 'Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.', 'Where we need to comply with a legal or regulatory obligation.'].map((text, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#CEFF00] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="text-[15px]">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div id="security" className="scroll-mt-32 pt-8 border-t border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0341FF]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d={sections[3].icon} /></svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 m-0">4. Data Security</h2>
                  </div>
                  <p className="leading-relaxed text-[16px] mb-4">
                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                  </p>
                  <p className="leading-relaxed text-[16px]">
                    They will only process your personal data on our instructions and they are subject to a duty of confidentiality. We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
                  </p>
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

export default PrivacyPolicy;
