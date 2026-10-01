import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ── ERROR SECTION (BLUE) ── */}
      <div className="bg-[#0341FF] relative z-0 flex-1 flex flex-col">
        {/* Grid pattern background */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />

        <Navbar />

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center pt-[100px] pb-[80px]">
          
          <h1 className="text-[150px] md:text-[250px] font-black leading-none tracking-tighter bg-gradient-to-b from-[#CEFF00] to-[#509400]/40 text-transparent bg-clip-text mb-4">
            404
          </h1>
          
          <h2 className="text-white text-[32px] md:text-[48px] font-extrabold leading-tight mb-6 max-w-[800px]">
            The page you are looking<br className="hidden md:block"/> for doesn't exist
          </h2>
          
          <p className="text-white/80 text-[15px] md:text-[18px] mb-10 max-w-[500px]">
            The page you requested could not be found. Head back home and start fresh.
          </p>

          <Link to="/">
            <button className="bg-[#CEFF00] hover:bg-[#B4E600] text-gray-900 font-bold px-8 py-3.5 rounded-full transition-colors text-[15px] shadow-lg">
              Back to Home
            </button>
          </Link>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
