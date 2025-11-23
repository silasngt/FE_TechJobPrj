'use client';
import { useState } from 'react';
import { HeaderAccount } from './HeaderAccount';
import { HeaderMenu } from './HeaderMenu';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

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

          <HeaderMenu showMenu={showMenu} />
          <HeaderAccount />
          {/* NÚT MOBILE (HAMBURGER) */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/70 text-white"
            onClick={handleShowMenu}
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <span className="block w-5 h-[2px] bg-white"></span>
              <span className="block w-5 h-[2px] bg-white"></span>
              <span className="block w-5 h-[2px] bg-white"></span>
            </div>
          </button>
        </div>
      </header>
    </>
  );
};
