import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import AuthLayout from '../layouts/AuthLayout';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const returnUrl = searchParams.get('returnUrl');

  const handleSignUp = (e) => {
    e.preventDefault();
    toast.success('Registration successful! Please login.', { id: 'signup-success' });
    if (returnUrl) {
      navigate(`/signin?returnUrl=${encodeURIComponent(returnUrl)}`);
    } else {
      navigate('/signin');
    }
  };

  return (
    <AuthLayout
      title="Sign up and come in"
      subtitle="Create your free account in seconds and unlock a world of expert-led courses."
    >
      <div className="w-full">
        <Link to="/" className="text-[#0341FF] text-[13px] font-semibold hover:underline mb-2 inline-block">
          ← Home
        </Link>
        <h2 className="text-[36px] font-extrabold text-gray-900 leading-tight mb-8">
          Welcome to<br />ByteSpace
        </h2>

        <form className="space-y-5" onSubmit={handleSignUp}>
          <div>
            <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">Full Name</label>
            <input
              type="text"
              placeholder="Jamie Davis"
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#0341FF] transition-colors placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">Email</label>
            <input
              type="email"
              placeholder="designer@example.com"
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#0341FF] transition-colors placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full px-4 py-3.5 pr-12 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#0341FF] transition-colors placeholder:text-gray-400 font-serif tracking-widest"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="bg-[#CEFF00] hover:bg-[#b8e600] text-gray-900 font-bold py-3.5 px-8 rounded-full text-[15px] transition-colors shadow-sm"
            >
              Continue
            </button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <span className="text-gray-500 text-[14px]">
            Already have an account?{' '}
            <Link to={returnUrl ? `/signin?returnUrl=${encodeURIComponent(returnUrl)}` : '/signin'} className="text-[#0341FF] font-semibold hover:underline">
              Login
            </Link>
          </span>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
