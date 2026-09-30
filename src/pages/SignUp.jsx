import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';

const SignUp = () => {
  return (
    <AuthLayout
      title="Sign up and come in"
      subtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <div className="w-full">
        <Link to="/" className="text-[#0341FF] text-[13px] font-semibold hover:underline mb-2 inline-block">
          ← Home
        </Link>
        <h2 className="text-[36px] font-extrabold text-gray-900 leading-tight mb-8">
          Welcome to<br />ByteSpace
        </h2>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
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
              Continue
            </button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <span className="text-gray-500 text-[14px]">
            Already have an account?{' '}
            <Link to="/signin" className="text-[#0341FF] font-semibold hover:underline">
              Login
            </Link>
          </span>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
