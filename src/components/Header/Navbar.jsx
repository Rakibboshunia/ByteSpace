import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.reload();
  };

  const handleCartClick = () => {
    toast('Your cart is currently empty', { icon: '🛒' });
  };

  const NavLink = ({ to, label }) => {
    const isActive = pathname === to || (to !== '/' && pathname.startsWith(to));
    return (
      <Link
        to={to}
        onClick={closeMobileMenu}
        className={`text-[15px] font-medium transition-colors duration-300 ${
          isActive ? 'text-white font-semibold underline underline-offset-4' : 'text-white/70 hover:text-white'
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      {/* ── Desktop Bar ── */}
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-5 py-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-[20px] hover:opacity-80 transition-opacity shrink-0">
          <div className="bg-[#CEFF00] text-[#0341FF] w-[30px] h-[30px] rounded-[8px_8px_8px_0] flex justify-center items-center text-[18px] font-black leading-none">
            b
          </div>
          <span className="tracking-wide">ByteSpace</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 items-center list-none">
          <li><NavLink to="/" label="Home" /></li>
          <li><NavLink to="/courses" label="Courses" /></li>
          <li><NavLink to="/creator/purepearl-studio" label="Creators" /></li>
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-5">
          {isAuthenticated ? (
            <div className="flex items-center gap-5">
              <Link to="/courses" className="text-white/90 hover:text-white text-[14px] font-semibold transition-colors">
                My Learning
              </Link>
              <div className="relative group cursor-pointer">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold border border-white/40 hover:bg-white/30 transition-colors">
                  JD
                </div>
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-[16px] shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top-right scale-95 group-hover:scale-100 z-50">
                  <div className="px-5 py-3 border-b border-gray-100">
                    <p className="text-[14px] font-bold text-gray-900">Jamie Davis</p>
                    <p className="text-[12px] text-gray-500 truncate">jamie@example.com</p>
                  </div>
                  <div className="p-2">
                    <button onClick={handleLogout} className="w-full text-left px-3 py-2 rounded-lg text-[13px] text-red-600 hover:bg-red-50 transition-colors font-semibold flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" y1="12" x2="9" y2="12" />
                      </svg>
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Link to="/signin" className={`font-medium text-[15px] transition-colors ${pathname === '/signin' ? 'text-white font-semibold' : 'text-white/80 hover:text-white'}`}>
                Sign In
              </Link>
              <Link to="/signup" className={`font-medium text-[15px] transition-colors ${pathname === '/signup' ? 'text-white font-semibold' : 'text-white/80 hover:text-white'}`}>
                Join Us
              </Link>
            </>
          )}

          {/* Cart */}
          <button onClick={handleCartClick} className="text-white hover:opacity-80 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>
        </div>

        {/* Mobile Right Side (cart + hamburger) */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={handleCartClick} className="text-white hover:opacity-80 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>
          <button onClick={toggleMobileMenu} className="text-white p-1" aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0341FF] shadow-2xl border-t border-white/10 z-50">
          <div className="px-5 py-5 flex flex-col gap-4">
            <NavLink to="/" label="Home" />
            <NavLink to="/courses" label="Courses" />
            <NavLink to="/creator/purepearl-studio" label="Creators" />
          </div>
          <div className="px-5 pb-5 flex flex-col gap-3 border-t border-white/10 pt-4">
            {isAuthenticated ? (
              <>
                <Link to="/courses" onClick={closeMobileMenu} className="text-white/90 hover:text-white text-[15px] font-semibold transition-colors">
                  My Learning
                </Link>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold border border-white/40">JD</div>
                    <span className="text-white font-semibold text-[14px]">Jamie Davis</span>
                  </div>
                  <button onClick={handleLogout} className="text-red-300 hover:text-red-400 font-semibold text-[14px]">Log Out</button>
                </div>
              </>
            ) : (
              <>
                <Link to="/signin" onClick={closeMobileMenu} className="w-full py-2.5 text-center text-white border border-white/30 rounded-full font-semibold text-[15px]">
                  Sign In
                </Link>
                <Link to="/signup" onClick={closeMobileMenu} className="w-full py-2.5 text-center bg-[#CEFF00] text-[#0341FF] rounded-full font-bold text-[15px]">
                  Join Us
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
