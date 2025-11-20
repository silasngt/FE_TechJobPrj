'use client';
import { useState } from 'react';

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header
        className="w-full bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('../../assets/images/bg-header.svg')",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="text-white font-[700] text-[28px]">TechJob</div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-8 text-white/90 text-[15px]">
            <a href="#" className="hover:text-white">
              Jobs
            </a>
            <a href="#" className="hover:text-white">
              Companies
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </nav>

          {/* ACTION DESKTOP */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/company/login"
              className="text-white text-sm hover:underline whitespace-nowrap"
            >
              For Employers
            </a>

            {/* Login */}
            <a
              href="/job_seeker/login"
              className="border border-white/70 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-white/10 transition"
            >
              Login
            </a>

            {/* Sign Up */}
            <a
              href="/job_seeker/register"
              className="bg-white text-emerald-500 text-sm font-semibold px-4 py-2 rounded-full hover:bg-emerald-50 transition"
            >
              Sign Up
            </a>
          </div>

          {/* NÚT MOBILE (HAMBURGER) */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/70 text-white"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {/* Icon 3 gạch đơn giản */}
            <div className="space-y-1">
              <span className="block w-5 h-[2px] bg-white"></span>
              <span className="block w-5 h-[2px] bg-white"></span>
              <span className="block w-5 h-[2px] bg-white"></span>
            </div>
          </button>
        </div>

        {/* MENU MOBILE DROPDOWN */}
        {open && (
          <div className="md:hidden border-t border-white/20 bg-black/30 backdrop-blur">
            <div className="max-w-6xl mx-auto px-4 py-3 space-y-3 text-sm text-white">
              <nav className="flex flex-col gap-2">
                <a href="#" className="hover:text-[#3CF2B6]">
                  Jobs
                </a>
                <a href="#" className="hover:text-[#3CF2B6]">
                  Companies
                </a>
                <a href="#" className="hover:text-[#3CF2B6]">
                  Contact
                </a>
              </nav>

              <div className="h-px bg-white/20 my-2" />

              <div className="flex flex-col gap-2">
                <a
                  href="/company/login"
                  className="text-white/90 hover:text-white"
                >
                  For Employers
                </a>
                <a
                  href="/job_seeker/login"
                  className="w-full border border-white/70 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-white/10 transition"
                >
                  Login
                </a>
                <a
                  href="/job_seeker/register"
                  className="w-full bg-white text-emerald-500 text-sm font-semibold px-4 py-2 rounded-full hover:bg-emerald-50 transition"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
