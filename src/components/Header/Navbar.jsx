import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full py-8 z-50">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6">
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-[22px] cursor-pointer hover:opacity-80 transition-opacity">
          <div className="bg-accent text-primary w-[32px] h-[32px] rounded-[10px_10px_10px_0] flex justify-center items-center text-[20px] font-black leading-none">
            b
          </div>
          <span className="tracking-wide">ByteSpace</span>
        </Link>

        <ul className="flex gap-10 items-center">
          <li><Link to="/" className="text-white text-[15px] font-normal transition-colors duration-300">Home</Link></li>
          <li><Link to="/courses" className="text-white/70 hover:text-white text-[15px] font-normal transition-colors duration-300">Courses</Link></li>
          <li><Link to="/creator/purepearl-studio" className="text-white/70 hover:text-white text-[15px] font-normal transition-colors duration-300">Creators</Link></li>
        </ul>

        <div className="flex items-center gap-8">
          <Link to="/signin" className="text-white/80 hover:text-white font-normal text-[15px] transition-colors">Sign In</Link>
          <Link to="/signup" className="text-white/80 hover:text-white font-normal text-[15px] transition-colors">Join Us</Link>
          <button className="bg-transparent border-none cursor-pointer flex items-center justify-center transition-transform duration-200 hover:scale-110">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
