import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';

const SignIn = () => {
  return (
    <AuthLayout
      title="Sign in with ease"
      subtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="w-full">
        <Link to="/" className="text-[#0341FF] text-[13px] font-semibold hover:underline mb-2 inline-block">
          ← Home
        </Link>
        <h2 className="text-[36px] font-extrabold text-gray-900 leading-tight mb-8">
          Welcome Back
        </h2>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
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
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#0341FF] transition-colors placeholder:text-gray-400 font-serif tracking-widest"
            />
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="bg-[#CEFF00] hover:bg-[#b8e600] text-gray-900 font-bold py-3.5 px-8 rounded-full text-[15px] transition-colors shadow-sm"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="relative mt-10 mb-8 flex items-center justify-center">
          <div className="border-t border-gray-200 w-full absolute"></div>
          <span className="bg-white px-4 text-[12px] text-gray-400 relative z-10">or</span>
        </div>

        <div className="flex justify-center gap-4 mb-10">
          <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073C24 5.443 18.627 0 12 0C5.373 0 0 5.443 0 12.073C0 18.064 4.388 23.02 10.125 24V15.56H7.078V12.073H10.125V9.414C10.125 6.438 11.895 4.8 14.593 4.8C15.892 4.8 17.25 5.035 17.25 5.035V7.952H15.753C14.28 7.952 13.812 8.868 13.812 9.808V12.073H17.11L16.583 15.56H13.813V24C19.612 23.02 24 18.064 24 12.073Z" />
            </svg>
          </button>
          <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4" />
              <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853" />
              <path d="M5.50253 14.3003C5.00318 12.8099 5.00318 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC05" />
              <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335" />
            </svg>
          </button>
        </div>

        <div className="text-center">
          <span className="text-gray-500 text-[13px]">
            New user?{' '}
            <Link to="/signup" className="text-[#0341FF] font-semibold hover:underline">
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
