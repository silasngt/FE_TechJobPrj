import { Metadata } from 'next';
import { FormRegister } from './FormRegister';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Đăng ký (Người tìm việc)',
  description: 'Mô tả trang đăng ký (Người tìm việc)...',
};

export default function UserLoginPage() {
  return (
    <>
      <div className="min-h-screen flex bg-white">
        {/* LEFT PANEL */}
        <div className="hidden lg:flex lg:w-5/12 xl:w-1/2 bg-gradient-to-br from-[#E3FBFB] to-[#D0F8F8] relative overflow-hidden flex-col justify-between items-center p-10">
          {/* Quote Section */}
          <div className="text-center max-w-lg pt-8">
            <p className="text-4xl font-bold text-gray-900 mb-6 leading-relaxed">
              "Your next career opportunity is just a click away"
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of professionals finding their dream jobs on
              TechJob
            </p>
          </div>

          {/* 4 Features Cards */}
          <div className="grid grid-cols-2 gap-4 flex-1 w-full max-w-sm my-8">
            {/* Card 1 - Blue */}
            <div className="bg-blue-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="text-4xl mb-3">💼</div>
              <p className="font-semibold text-gray-900 text-sm">100K+ Jobs</p>
              <p className="text-xs text-gray-600">Opportunities waiting</p>
            </div>

            {/* Card 2 - Green */}
            <div className="bg-green-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="text-4xl mb-3">🎯</div>
              <p className="font-semibold text-gray-900 text-sm">
                Perfect Match
              </p>
              <p className="text-xs text-gray-600">Tailored for you</p>
            </div>

            {/* Card 3 - Purple */}
            <div className="bg-purple-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="text-4xl mb-3">⚡</div>
              <p className="font-semibold text-gray-900 text-sm">Fast Hiring</p>
              <p className="text-xs text-gray-600">Quick responses</p>
            </div>

            {/* Card 4 - Orange */}
            <div className="bg-orange-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="text-4xl mb-3">🏆</div>
              <p className="font-semibold text-gray-900 text-sm">
                Top Companies
              </p>
              <p className="text-xs text-gray-600">Lead employers</p>
            </div>
          </div>

          {/* Rating Card */}
          <div className="flex items-center justify-center gap-3 pb-8">
            <div className="h-12 w-12 rounded-full bg-teal-500 flex items-center justify-center shadow-md">
              <span className="text-2xl">⭐</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">4.9/5 Rating</p>
              <p className="text-sm text-gray-500">From 10,000+ reviews</p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-8 md:px-16 py-10">
          <div className="w-full max-w-md">
            <div className="flex items-center  mb-8 justify-center">
              <img src="../../assets/images/logo_techjob.svg" alt="" />
            </div>
            {/* Tabs */}
            <div className="flex items-center gap-2 mb-8 justify-center  bg-gray-100 p-1 rounded-full w-fit mx-auto">
              <Link
                href="/job_seeker/register"
                className="px-5 py-2 rounded-full bg-teal-500 text-white text-sm font-semibold shadow-sm"
              >
                👤 Job Seeker
              </Link>
              <Link
                href="/company/register"
                className="px-5 py-2 rounded-full text-sm font-semibold text-gray-500 hover:text-gray-900"
              >
                🏢 Company
              </Link>
            </div>

            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center">
              Get more opportunities
            </h1>

            {/* Sign up with Google */}
            <button
              type="button"
              className="w-full border border-gray-200 rounded-lg py-3 px-4 flex items-center justify-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-50 mb-5"
            >
              <span className="text-lg">+</span>
              <span>Sign Up with Google</span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs text-gray-400">
                Or sign up with email
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Form */}
            <FormRegister />

            {/* Login link */}
            <p className="mt-4 text-xs text-gray-600">
              Already have an account?{' '}
              <a
                href="/job_seeker/login"
                className="text-teal-500 font-medium hover:underline"
              >
                Login
              </a>
            </p>

            {/* Terms */}
            <p className="mt-4 text-[10px] leading-relaxed text-gray-400">
              By clicking ‘Continue’, you acknowledge that you have read and
              accept the <span className="text-teal-500">Terms of Service</span>{' '}
              and <span className="text-teal-500">Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
