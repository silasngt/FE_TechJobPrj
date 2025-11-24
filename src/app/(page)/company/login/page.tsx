import { Metadata } from 'next';
import Link from 'next/link';
import { FormLoginCompany } from './FormLogin';
import { LogoTabCompanySection } from '@/src/app/components/sectiontab/LogoTabSection';

export const metadata: Metadata = {
  title: 'Đăng nhập (Công ty)',
  description: 'Mô tả trang đăng nhập (Công ty)...',
};

export default function CompanyLoginPage() {
  return (
    <>
      <div className="min-h-screen flex bg-white">
        {/* LEFT PANEL - COMPANY VERSION (Light Blue theme) */}
        <div className="hidden lg:flex lg:w-5/12 xl:w-1/2 bg-gradient-to-br from-[#E3FBFB] to-[#D0F8F8] relative overflow-hidden flex-col justify-between items-center p-10">
          {/* Quote Section */}
          <div className="text-center max-w-lg pt-8">
            <p className="text-4xl font-bold text-slate-900 mb-6 leading-relaxed">
              "Post jobs & hire talent"
            </p>
            <p className="text-lg text-slate-700 mb-8">
              Connect with thousands of skilled developers and tech
              professionals
            </p>
          </div>

          {/* 4 Features Cards - Light Blue Theme */}
          <div className="grid grid-cols-2 gap-4 flex-1 w-full max-w-sm my-8">
            {/* Card 1 */}
            <div className="bg-blue-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="text-4xl mb-3">💼</div>
              <p className="font-semibold text-slate-900 text-sm">
                50K+ Talent
              </p>
              <p className="text-xs text-slate-700">Ready to join</p>
            </div>

            {/* Card 2 */}
            <div className="bg-green-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="text-4xl mb-3">🎯</div>
              <p className="font-semibold text-slate-900 text-sm">
                Perfect Match
              </p>
              <p className="text-xs text-slate-700">Tailored for you</p>
            </div>

            {/* Card 3 */}
            <div className="bg-purple-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="text-4xl mb-3">⚡</div>
              <p className="font-semibold text-slate-900 text-sm">
                Fast Hiring
              </p>
              <p className="text-xs text-slate-700">Quick responses</p>
            </div>

            {/* Card 4 */}
            <div className="bg-orange-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="text-4xl mb-3">👑</div>
              <p className="font-semibold text-slate-900 text-sm">
                Top Companies
              </p>
              <p className="text-xs text-slate-700">Lead employers</p>
            </div>
          </div>

          {/* Rating Card */}
          <div className="flex items-center justify-center gap-3 pb-8">
            <div className="h-12 w-12 rounded-full bg-teal-500 flex items-center justify-center shadow-md">
              <span className="text-2xl">⭐</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-slate-900">4.9/5 Rating</p>
              <p className="text-sm text-gray-500">From 10,000+ reviews</p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-8 md:px-16 py-10">
          <div className="w-full max-w-md">
            <LogoTabCompanySection />

            <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2 text-center">
              Post jobs & hire talent
            </h1>
            <p className="text-slate-700 text-sm text-center mb-6">
              Build your dream team with TechJob
            </p>

            {/* Sign up with Google */}
            <button
              type="button"
              className="w-full border border-gray-200 rounded-lg py-3 px-4 flex items-center justify-center gap-2 text-sm font-medium text-slate-700 hover:bg-blue-50 mb-5 transition"
            >
              <span className="text-lg">+</span>
              <span>Login with Google</span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs text-gray-400">Or login with email</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Form */}
            <FormLoginCompany />

            {/* Login link */}
            <p className="mt-4 text-xs text-slate-700">
              You don't have an account yet, join us?{' '}
              <a
                href="/company/register"
                className="text-teal-500 font-medium hover:underline"
              >
                Sign Up
              </a>
            </p>

            {/* Terms */}
            <p className="mt-4 text-[10px] leading-relaxed text-slate-500">
              By clicking 'Continue', you acknowledge that you have read and
              accept the <span className="text-teal-500">Terms of Service</span>{' '}
              and <span className="text-teal-500">Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
