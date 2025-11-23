'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/src/hooks/useAuth';
import Link from 'next/link';

export const HeaderAccount = () => {
  const { isLogin, infoUser, infoCompany } = useAuth();
  const route = useRouter();
  const handleLogout = (linkRedirect: string) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      credentials: 'include', //Giúp có thể gửi kèm token trong cookies lên cho BE
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.code == 'success') {
          route.push(linkRedirect);
        }
      });
  };

  return (
    <>
      {/* Nếu đăng nhập bằng tài khoản USER */}
      <div className="relative">
        {/* DESKTOP VIEW */}
        {isLogin ? (
          <>
            {infoUser && (
              <>
                <Link href="/user-manage/profile" className="">
                  {infoUser.fullName}
                </Link>
                {/* Thẻ con có tên là group-hover/sub-1 */}
                <ul className="absolute top-[100%] right-[0px] w-[200px] bg-[#000065] hidden group-hover/sub-1:block">
                  <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2">
                    <Link
                      href="/user-manage/profile"
                      className="text-white font-[600] text-[16px]"
                    >
                      Thông tin cá nhân
                    </Link>
                  </li>
                  <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2">
                    <Link
                      href="/user-manage/cv/list"
                      className="text-white font-[600] text-[16px]"
                    >
                      Quản lý CV đã gửi
                    </Link>
                  </li>
                  <li
                    className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2 cursor-pointer"
                    onClick={() => handleLogout('/user/login')}
                  >
                    Đăng xuất
                  </li>
                </ul>
              </>
            )}
          </>
        ) : (
          // Chưa đăng nhập
          <>
            <div className="space-y-0 flex gap-2" id="desktop-login-btns">
              <a
                href="/company/login"
                className="text-white  text-sm hover:underline whitespace-nowrap "
              >
                For Employers
              </a>
              <a
                href="/job_seeker/login"
                className="border border-white/70 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-white/10 transition"
              >
                Login
              </a>
              <a
                href="/job_seeker/register"
                className="bg-white text-emerald-500 text-sm font-semibold px-4 py-2 rounded-full hover:bg-emerald-50 transition"
              >
                Sign Up
              </a>
            </div>
          </>
        )}
        {/* Nếu đăng nhập bằng tài khoản COMPANT */}
        {isLogin ? (
          <>
            {infoCompany && (
              <>
                <Link href="/user-manage/profile" className="">
                  {infoCompany.fullName}
                </Link>
                {/* Thẻ con có tên là group-hover/sub-1 */}
                <ul className="absolute top-[100%] right-[0px] w-[200px] bg-[#000065] hidden group-hover/sub-1:block">
                  <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2">
                    <Link
                      href="/user-manage/profile"
                      className="text-white font-[600] text-[16px]"
                    >
                      Thông tin cá nhân
                    </Link>
                  </li>
                  <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2">
                    <Link
                      href="/user-manage/cv/list"
                      className="text-white font-[600] text-[16px]"
                    >
                      Quản lý CV đã gửi
                    </Link>
                  </li>
                  <li
                    className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2 cursor-pointer"
                    onClick={() => handleLogout('/user/login')}
                  >
                    Đăng xuất
                  </li>
                </ul>
              </>
            )}
          </>
        ) : (
          // Chưa đăng nhập
          <>
            <div className="space-y-0 flex gap-2" id="desktop-login-btns">
              <a
                href="/company/login"
                className="text-white  text-sm hover:underline whitespace-nowrap "
              >
                For Employers
              </a>
              <a
                href="/job_seeker/login"
                className="border border-white/70 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-white/10 transition"
              >
                Login
              </a>
              <a
                href="/job_seeker/register"
                className="bg-white text-emerald-500 text-sm font-semibold px-4 py-2 rounded-full hover:bg-emerald-50 transition"
              >
                Sign Up
              </a>
            </div>
          </>
        )}

        {/* MOBILE VIEW */}
        {/* <div className="md:hidden flex items-center gap-2">
          <button className="w-10 h-10 rounded-full bg-white/10 border border-white/70 flex items-center justify-center text-white text-lg">
            👤
          </button>

          <div className="absolute top-12 right-0 bg-emerald-600 rounded-lg shadow-lg p-3 w-48 z-50">
            <p className="text-white text-sm mb-2 truncate">Mail</p>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition">
              Logout
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};
