import React from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Footer = () => {
  return (
    <footer className="bg-[#fafcff] pt-12 sm:pt-16 pb-8 border-t border-blue-50 relative overflow-hidden">
      {/* Soft decorative background gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#0341FF]/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#CEFF00]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 mb-16 sm:mb-24">

          {/* Brand + Newsletter Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <Link to="/" className="inline-flex items-center gap-3 font-extrabold text-[22px] sm:text-[26px] text-gray-900 mb-4 hover:opacity-80 transition-opacity">
                <div className="bg-[#0341FF] text-[#CEFF00] w-[36px] h-[36px] rounded-[10px_10px_10px_0] flex justify-center items-center text-[22px] font-black leading-none shadow-md">b</div>
                <span className="tracking-tight">ByteSpace</span>
              </Link>
              <p className="text-gray-500 text-[14px] sm:text-[15px] mb-6 leading-relaxed">
                Join our newsletter to stay up to date on features and releases.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3.5 bg-gray-50 rounded-full border border-gray-200 outline-none text-[14px] text-gray-700 placeholder:text-gray-400 focus:border-[#0341FF] focus:bg-white transition-all shadow-inner"
                />
                <button
                  onClick={() => toast.success('Successfully subscribed!', { id: 'subscribe' })}
                  className="bg-[#CEFF00] hover:bg-[#b8e600] text-gray-900 px-7 py-3.5 rounded-full font-bold text-[14px] shadow-[0_4px_14px_rgba(206,255,0,0.4)] hover:shadow-[0_6px_20px_rgba(206,255,0,0.6)] hover:-translate-y-0.5 transition-all cursor-pointer w-full sm:w-auto whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-gray-400 text-[11px] mt-4 leading-relaxed">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 pt-4">
            <div>
              <p className="font-extrabold text-gray-900 text-[15px] mb-6 uppercase tracking-wider">Courses</p>
              <ul className="space-y-4">
                {['Featured Courses', 'Featured Categories', 'Business', 'IT & Software', 'Design'].map(link => (
                  <li key={link}>
                    <Link to="/courses" className="text-gray-500 hover:text-[#0341FF] text-[14px] font-medium transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0341FF] scale-0 group-hover:scale-100 transition-transform" />
                      <span className="group-hover:translate-x-1 transition-transform">{link}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-extrabold text-gray-900 text-[15px] mb-6 uppercase tracking-wider">Explore</p>
              <ul className="space-y-4">
                {['Development', 'Marketing', 'Photography', 'Finance', 'Sports'].map(link => (
                  <li key={link}>
                    <Link to="/courses" className="text-gray-500 hover:text-[#0341FF] text-[14px] font-medium transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0341FF] scale-0 group-hover:scale-100 transition-transform" />
                      <span className="group-hover:translate-x-1 transition-transform">{link}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-extrabold text-gray-900 text-[15px] mb-6 uppercase tracking-wider">Company</p>
              <ul className="space-y-4">
                {[
                  { label: 'Become a Creator', to: '/signup' },
                  { label: 'Contact Us', to: '/contact' },
                  { label: 'Help & Support', to: '/help' },
                  { label: 'About Us', to: '/about' },
                ].map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="text-gray-500 hover:text-[#0341FF] text-[14px] font-medium transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0341FF] scale-0 group-hover:scale-100 transition-transform" />
                      <span className="group-hover:translate-x-1 transition-transform">{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 sm:pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-gray-400 text-[13px] font-medium order-3 md:order-1">© 2026 ByteSpace. All rights reserved.</p>
          
          {/* Social Icons */}
          <div className="flex gap-4 order-1 md:order-2">
            {[
              { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
              { name: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11a3 3 0 013 3v11a3 3 0 01-3 3h-11a3 3 0 01-3-3v-11a3 3 0 013-3z' },
              { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
            ].map((social) => (
              <a key={social.name} href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-400 hover:text-[#0341FF] hover:border-[#0341FF] hover:-translate-y-1 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {social.name === 'LinkedIn' && <circle cx="4" cy="4" r="2" />}
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 order-2 md:order-3">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-[#0341FF] text-[13px] font-bold transition-colors">Privacy</Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-[#0341FF] text-[13px] font-bold transition-colors">Terms</Link>
            <Link to="/cookies-settings" className="text-gray-500 hover:text-[#0341FF] text-[13px] font-bold transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
