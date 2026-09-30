import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import toast from 'react-hot-toast';

// Assets
import img1 from '../assets/01.jpg';
import courseHero from '../assets/02.jpg';
import img3 from '../assets/auth-chart.jpg';
import img4 from '../assets/03.jpg';
import img5 from '../assets/04.jpg';
import img6 from '../assets/05.jpg';

// Quick lookup for course info (mock)
const courseDataDict = {
  'learn-figma-from-basic': { title: 'Learn Figma from Basic', author: 'purepearl studio', price: 25, img: img1 },
  'build-digital-asset': { title: 'Build Digital Asset', author: 'purepearl studio', price: 25, img: courseHero },
  'the-power-of-big-data': { title: 'the Power of Big Data', author: 'purepearl studio', price: 35, img: img3 },
  'balancing-productivity-and-wellness': { title: 'Balancing Productivity and Wellness', author: 'purepearl studio', price: 20, img: img4 },
  'balancing-productivity-an': { title: 'Balancing Productivity and Wellness', author: 'purepearl studio', price: 20, img: img4 },
  'mastering-money-management': { title: 'Mastering Money Management', author: 'purepearl studio', price: 30, img: img5 },
  'mastering-money-manage': { title: 'Mastering Money Management', author: 'purepearl studio', price: 30, img: img5 },
  'from-idea-to-startup-success': { title: 'From Idea to Startup Success', author: 'purepearl studio', price: 45, img: img6 },
  'from-idea-to-startup-succ': { title: 'From Idea to Startup Success', author: 'purepearl studio', price: 45, img: img6 },
  'ui-ux-fundamentals': { title: 'UI/UX Fundamentals', author: 'purepearl studio', price: 20, img: courseHero },
  'animation-for-beginners': { title: 'Animation for Beginners', author: 'purepearl studio', price: 15, img: img4 },
  'drawing-painting-basics': { title: 'Drawing & Painting Basics', author: 'purepearl studio', price: 18, img: img1 },
  'social-media-strategy': { title: 'Social Media Strategy', author: 'purepearl studio', price: 28, img: img5 },
  'creative-marketing-masterclass': { title: 'Creative Marketing Masterclass', author: 'purepearl studio', price: 40, img: img3 },
  'music-production-101': { title: 'Music Production 101', author: 'purepearl studio', price: 22, img: img6 },
};

const Payment = () => {
  const { courseSlug } = useParams();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');

  const courseInfo = courseDataDict[courseSlug] || {
    title: courseSlug ? courseSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Digital Course',
    author: 'ByteSpace Creator',
    price: 49,
    img: courseHero
  };

  const tax = 0;
  const total = courseInfo.price + tax;

  const handlePayment = (e) => {
    e.preventDefault();
    toast.success('Payment successful! Welcome to the course!');
    setTimeout(() => {
      navigate(`/courses/${courseSlug}`);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* ── BLUE HEADER ── */}
      <div className="bg-[#0341FF] relative z-0 flex-shrink-0">
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
        <div className="relative z-10 pt-[140px] pb-[60px] px-6 text-center">
          <h1 className="text-white text-[32px] md:text-[42px] font-extrabold leading-tight">Secure Checkout</h1>
          <p className="text-white/80 text-[15px] mt-2 max-w-[500px] mx-auto">Complete your purchase securely. You are one step away from starting your learning journey.</p>
        </div>
      </div>

      {/* ── CHECKOUT CONTENT ── */}
      <div className="max-w-[1200px] mx-auto w-full px-6 py-12 flex-1">
        
        <Link to={`/courses/${courseSlug}`} className="inline-flex items-center gap-2 text-[#0341FF] font-semibold text-[14px] hover:underline mb-8">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to Course
        </Link>

        <form onSubmit={handlePayment} className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 items-start">
          
          {/* LEFT COLUMN: Billing & Payment */}
          <div className="space-y-8">
            
            {/* Billing Details */}
            <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
              <h2 className="text-[20px] font-extrabold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#CEFF00] flex items-center justify-center text-[14px]">1</span>
                Billing Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-[12px] font-bold text-gray-700 mb-2">First Name</label>
                  <div className="relative">
                    <input type="text" required placeholder="John" className="w-full px-4 py-3.5 pl-11 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#0341FF] transition-colors bg-gray-50 focus:bg-white" />
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-gray-700 mb-2">Last Name</label>
                  <div className="relative">
                    <input type="text" required placeholder="Doe" className="w-full px-4 py-3.5 pl-11 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#0341FF] transition-colors bg-gray-50 focus:bg-white" />
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-[12px] font-bold text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <input type="email" required placeholder="john@example.com" className="w-full px-4 py-3.5 pl-11 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#0341FF] transition-colors bg-gray-50 focus:bg-white" />
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
              <h2 className="text-[20px] font-extrabold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#CEFF00] flex items-center justify-center text-[14px]">2</span>
                Payment Method
              </h2>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div 
                  onClick={() => setPaymentMethod('card')}
                  className={`border-2 rounded-xl p-4 cursor-pointer flex flex-col items-center justify-center gap-2 transition-all ${paymentMethod === 'card' ? 'border-[#0341FF] bg-blue-50/50' : 'border-gray-100 hover:border-gray-300'}`}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={paymentMethod === 'card' ? '#0341FF' : '#9CA3AF'} strokeWidth="1.5">
                    <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
                  </svg>
                  <span className={`text-[13px] font-bold ${paymentMethod === 'card' ? 'text-[#0341FF]' : 'text-gray-500'}`}>Credit Card</span>
                </div>
                
                <div 
                  onClick={() => setPaymentMethod('paypal')}
                  className={`border-2 rounded-xl p-4 cursor-pointer flex flex-col items-center justify-center gap-2 transition-all ${paymentMethod === 'paypal' ? 'border-[#0341FF] bg-blue-50/50' : 'border-gray-100 hover:border-gray-300'}`}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={paymentMethod === 'paypal' ? '#0341FF' : '#9CA3AF'} strokeWidth="1.5">
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/><rect x="3" y="11" width="18" height="11" rx="2"/>
                  </svg>
                  <span className={`text-[13px] font-bold ${paymentMethod === 'paypal' ? 'text-[#0341FF]' : 'text-gray-500'}`}>PayPal</span>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div>
                    <label className="block text-[12px] font-bold text-gray-700 mb-2">Card Number</label>
                    <div className="relative">
                      <input type="text" required placeholder="0000 0000 0000 0000" className="w-full px-4 py-3.5 pl-12 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#0341FF] transition-colors bg-gray-50 focus:bg-white tracking-widest font-mono" />
                      <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[12px] font-bold text-gray-700 mb-2">Expiry Date</label>
                      <div className="relative">
                        <input type="text" required placeholder="MM/YY" className="w-full px-4 py-3.5 pl-11 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#0341FF] transition-colors bg-gray-50 focus:bg-white text-center" />
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-gray-700 mb-2">CVC</label>
                      <div className="relative">
                        <input type="password" required placeholder="123" className="w-full px-4 py-3.5 pl-11 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#0341FF] transition-colors bg-gray-50 focus:bg-white text-center font-mono tracking-widest" />
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold text-gray-700 mb-2">Name on Card</label>
                    <div className="relative">
                      <input type="text" required placeholder="John Doe" className="w-full px-4 py-3.5 pl-11 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#0341FF] transition-colors bg-gray-50 focus:bg-white" />
                      <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                  </div>
                  
                  <div className="pt-2 flex items-center gap-3">
                    <input type="checkbox" id="saveInfo" className="w-4 h-4 rounded border-gray-300 text-[#0341FF] focus:ring-[#0341FF] cursor-pointer" />
                    <label htmlFor="saveInfo" className="text-[13px] text-gray-600 cursor-pointer select-none">Save my information for a faster checkout next time</label>
                  </div>
                </div>
              )}

              {paymentMethod === 'paypal' && (
                <div className="py-6 text-center animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <p className="text-gray-500 text-[14px]">You will be redirected to PayPal to complete your purchase securely.</p>
                </div>
              )}
            </div>

          </div>

          {/* RIGHT COLUMN: Order Summary */}
          <div className="bg-white rounded-[24px] shadow-2xl p-6 lg:p-8 lg:sticky lg:top-8">
            <h2 className="text-[20px] font-extrabold text-gray-900 mb-6">Order Summary</h2>
            
            {/* Course Item */}
            <div className="flex gap-4 mb-6 pb-6 border-b border-gray-100">
              <div className="w-[100px] h-[75px] rounded-lg overflow-hidden shrink-0 bg-gray-100">
                <img src={courseInfo.img} alt={courseInfo.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-bold text-gray-900 text-[14px] leading-snug line-clamp-2">{courseInfo.title}</h3>
                <p className="text-gray-400 text-[12px] mt-1">by {courseInfo.author}</p>
                <div className="font-extrabold text-[#0341FF] text-[16px] mt-1">${courseInfo.price}</div>
              </div>
            </div>

            {/* Promo Code */}
            <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-6">
              <input type="text" placeholder="Promo Code" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[13px] outline-none focus:border-[#0341FF] transition-colors bg-gray-50" />
              <button type="button" className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-5 rounded-xl text-[13px] transition-colors shrink-0">
                Apply
              </button>
            </div>

            {/* Calculations */}
            <div className="space-y-3 mb-6 bg-gray-50 p-4 rounded-xl">
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-gray-600">Original Price</span>
                <span className="font-bold text-gray-900">${courseInfo.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-gray-600">Tax</span>
                <span className="font-bold text-gray-900">${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-5 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-extrabold text-[16px]">Total</span>
                <span className="text-[#0341FF] font-black text-[32px]">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#CEFF00] hover:bg-[#B4E600] text-gray-900 font-bold py-4 rounded-xl text-[16px] transition-all hover:scale-[1.02] shadow-md flex items-center justify-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Complete Payment
            </button>

            <p className="text-center text-gray-400 text-[11px] mt-4 mb-6">
              By completing this purchase you agree to our <Link to="/terms-of-service" className="text-gray-600 underline">Terms of Service</Link>.
            </p>

            {/* Trust Badges */}
            <div className="flex justify-center gap-6 border-t border-gray-100 pt-5">
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <span className="text-[10px] font-bold text-gray-500 text-center">Secure<br/>Payment</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
                </div>
                <span className="text-[10px] font-bold text-gray-500 text-center">Money Back<br/>Guarantee</span>
              </div>
            </div>
          </div>

        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Payment;
