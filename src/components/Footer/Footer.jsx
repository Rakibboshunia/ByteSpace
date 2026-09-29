import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-8 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 font-bold text-2xl text-gray-900 mb-6 cursor-pointer">
              <div className="bg-accent text-primary w-8 h-8 rounded-[50%_50%_50%_0] flex justify-center items-center text-xl font-extrabold">
                b
              </div>
              <span>byteSpace</span>
            </div>
            <p className="text-gray-500 text-sm mb-6">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <div className="flex gap-2 max-w-[400px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-200 outline-none focus:border-accent text-sm"
              />
              <button className="bg-accent hover:bg-[#B4E600] text-gray-900 px-6 py-3 rounded-full font-bold text-sm transition-colors cursor-pointer">
                Search
              </button>
            </div>
            <p className="text-gray-400 text-[11px] mt-4 leading-relaxed max-w-[350px]">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="hidden md:block"></div> {/* Spacer for alignment as in design */}
            <div>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-500 hover:text-primary text-[13px] font-medium transition-colors">Featured Courses</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary text-[13px] font-medium transition-colors">Featured Categories</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary text-[13px] font-medium transition-colors">Business</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary text-[13px] font-medium transition-colors">IT</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary text-[13px] font-medium transition-colors">Design</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-500 hover:text-primary text-[13px] font-medium transition-colors">Development</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary text-[13px] font-medium transition-colors">Marketing</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary text-[13px] font-medium transition-colors">Photography</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary text-[13px] font-medium transition-colors">Finance</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary text-[13px] font-medium transition-colors">Sport</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-500 hover:text-primary text-[13px] font-medium transition-colors">Become a Creator</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary text-[13px] font-medium transition-colors">Affiliate Program</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary text-[13px] font-medium transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary text-[13px] font-medium transition-colors">Help</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary text-[13px] font-medium transition-colors">About</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-[12px]">
            © 2026 ByteSpace. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-gray-600 text-[12px] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gray-600 text-[12px] transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-gray-600 text-[12px] transition-colors">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
