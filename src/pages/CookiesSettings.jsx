import React, { useState } from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import toast from 'react-hot-toast';

const CookiesSettings = () => {
  const [preferences, setPreferences] = useState({
    performance: true,
    targeting: false,
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* ── HEADER ── */}
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
              Privacy Center
            </span>
            <h1 className="text-white text-[38px] md:text-[52px] font-extrabold leading-tight mb-4">
              Cookies Settings
            </h1>
            <p className="text-white/80 text-[16px] md:text-[18px] leading-relaxed">
              We use cookies to improve your experience on our site, personalize content, and analyze our traffic. Below, you can customize your cookie preferences.
            </p>
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="flex-1 relative z-10 -mt-10 pb-20">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
            
            <div className="space-y-6">
              
              {/* Strictly Necessary */}
              <div className="border border-gray-100 bg-gray-50 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gray-400"></div>
                <div className="flex justify-between items-start mb-3 pl-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-500">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    </div>
                    <h3 className="text-[18px] font-bold text-gray-900">Strictly Necessary</h3>
                  </div>
                  <span className="bg-gray-200 px-3 py-1.5 rounded-full text-[11px] font-extrabold text-gray-600 uppercase tracking-wider">
                    Always Active
                  </span>
                </div>
                <p className="text-gray-600 text-[14.5px] leading-relaxed pl-2">
                  These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.
                </p>
              </div>

              {/* Performance Cookies */}
              <div className={`border rounded-2xl p-6 transition-all duration-300 relative overflow-hidden ${preferences.performance ? 'border-[#0341FF]/30 bg-blue-50/30' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className={`absolute top-0 left-0 w-1 h-full transition-colors ${preferences.performance ? 'bg-[#0341FF]' : 'bg-transparent'}`}></div>
                <div className="flex justify-between items-center mb-3 pl-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${preferences.performance ? 'bg-[#0341FF] text-white shadow-md' : 'bg-gray-100 text-gray-400'}`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    </div>
                    <h3 className="text-[18px] font-bold text-gray-900">Performance Cookies</h3>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={preferences.performance}
                      onChange={(e) => setPreferences({...preferences, performance: e.target.checked})}
                    />
                    <div className="w-12 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#0341FF] shadow-inner"></div>
                  </label>
                </div>
                <p className="text-gray-600 text-[14.5px] leading-relaxed pl-2 mt-2">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                </p>
              </div>

              {/* Targeting Cookies */}
              <div className={`border rounded-2xl p-6 transition-all duration-300 relative overflow-hidden ${preferences.targeting ? 'border-[#0341FF]/30 bg-blue-50/30' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className={`absolute top-0 left-0 w-1 h-full transition-colors ${preferences.targeting ? 'bg-[#0341FF]' : 'bg-transparent'}`}></div>
                <div className="flex justify-between items-center mb-3 pl-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${preferences.targeting ? 'bg-[#0341FF] text-white shadow-md' : 'bg-gray-100 text-gray-400'}`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </div>
                    <h3 className="text-[18px] font-bold text-gray-900">Targeting Cookies</h3>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={preferences.targeting}
                      onChange={(e) => setPreferences({...preferences, targeting: e.target.checked})}
                    />
                    <div className="w-12 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#0341FF] shadow-inner"></div>
                  </label>
                </div>
                <p className="text-gray-600 text-[14.5px] leading-relaxed pl-2 mt-2">
                  These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.
                </p>
              </div>

            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-end items-center gap-4 pt-8 border-t border-gray-100">
              <button className="text-gray-500 hover:text-gray-900 font-medium text-[14px] transition-colors">
                Cancel
              </button>
              <button 
                onClick={() => toast.success('Your cookie preferences have been saved!', { id: 'cookie-save' })}
                className="bg-[#CEFF00] hover:bg-[#B4E600] text-gray-900 font-bold px-8 py-3.5 rounded-full transition-colors shadow-sm w-full sm:w-auto text-[15px]"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CookiesSettings;
