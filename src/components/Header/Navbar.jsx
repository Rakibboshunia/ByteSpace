import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

  const navLink = (to, label) => {
    const isActive = pathname === to || (to !== '/' && pathname.startsWith(to));
    return (
      <li>
        <Link
          to={to}
          className={`text-[15px] font-normal transition-colors duration-300 ${
            isActive ? 'text-white font-semibold underline underline-offset-4' : 'text-white/70 hover:text-white'
          }`}
        >
          {label}
        </Link>
      </li>
    );
  };

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.reload();
  };

  return (
    <nav className="absolute top-0 left-0 w-full py-8 z-50">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6">
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-[22px] cursor-pointer hover:opacity-80 transition-opacity">
          <div className="bg-[#CEFF00] text-[#0341FF] w-[32px] h-[32px] rounded-[10px_10px_10px_0] flex justify-center items-center text-[20px] font-black leading-none">
            b
          </div>
          <span className="tracking-wide">ByteSpace</span>
        </Link>

        <ul className="flex gap-10 items-center">
          {navLink('/', 'Home')}
          {navLink('/courses', 'Courses')}
          {navLink('/creator/purepearl-studio', 'Creators')}
        </ul>

        <div className="flex items-center gap-6">
          {isAuthenticated ? (
            <div className="flex items-center gap-6">
              <Link to="/courses" className="text-white/90 hover:text-white text-[14px] font-semibold transition-colors">My Learning</Link>
              <div className="relative group cursor-pointer">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold border border-white/40 hover:bg-white/30 transition-colors">
                  JD
                </div>
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-[16px] shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top-right transform scale-95 group-hover:scale-100">
                  <div className="px-5 py-3 border-b border-gray-100">
                    <p className="text-[14px] font-bold text-gray-900">Jamie Davis</p>
                    <p className="text-[12px] text-gray-500 truncate">jamie@example.com</p>
                  </div>
                  <div className="p-2">
                    <button onClick={handleLogout} className="w-full text-left px-3 py-2 rounded-lg text-[13px] text-red-600 hover:bg-red-50 transition-colors font-semibold flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Link to="/signin" className={`font-normal text-[15px] transition-colors ${pathname === '/signin' ? 'text-white font-semibold' : 'text-white/80 hover:text-white'}`}>Sign In</Link>
              <Link to="/signup" className={`font-normal text-[15px] transition-colors ${pathname === '/signup' ? 'text-white font-semibold' : 'text-white/80 hover:text-white'}`}>Join Us</Link>
            </>
          )}

          <button className="bg-transparent border-none cursor-pointer flex items-center justify-center transition-transform duration-200 hover:scale-110 ml-2">
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
