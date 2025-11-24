'use client';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/src/hooks/useAuth';
import Link from 'next/link';

export const HeaderAccount = () => {
  const { isLogin, infoUser, infoCompany } = useAuth();
  const route = useRouter();
  const handleLogout = (linkRedirect: string) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      credentials: 'include', // gửi kèm token trong cookies
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          route.push(linkRedirect);
        }
      });
  };

  return (
    <>
      {/* Nếu đăng nhập bằng tài khoản USER  */}
      <div className="hidden md:inline-flex items-center gap-x-[8px] text-white font-[600] sm:text-[16px] text-[12px] relative group/sub-1">
        {/* USER */}
        {isLogin ? (
          <>
            {infoUser && (
              <>
                <Link href="/user-manage/profile" className="">
                  {infoUser.fullName}
                </Link>
                <ul className="absolute top-[100%] right-[0px] w-[200px] bg-[#8ABEB9] hidden group-hover/sub-1:block">
                  <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#B7E5CD] relative group/sub-2">
                    <Link
                      href="/user-manage/profile"
                      className="text-white font-[600] text-[16px]"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#B7E5CD] relative group/sub-2">
                    <Link
                      href="/user-manage/cv/list"
                      className="text-white font-[600] text-[16px]"
                    >
                      TechJob User Profile
                    </Link>
                  </li>
                  <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#B7E5CD] relative group/sub-2">
                    <Link
                      href="/user-manage/cv/list"
                      className="text-white font-[600] text-[16px]"
                    >
                      My Applications
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </>
        ) : (
          // Chưa đăng nhập -> hiện nút Login/Register trên header desktop
          <>
            <div className="space-y-0 flex gap-2" id="desktop-login-btns">
              {/* <a
                href="/company/login"
                className="text-white  text-sm hover:underline whitespace-nowrap "
              >
                For Employers
              </a> */}
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

        {/* COMPANY */}
        {isLogin ? (
          <>
            {infoCompany && (
              <>
                <Link href="/user-manage/profile" className="">
                  {infoCompany.fullName}
                </Link>
                <ul className="absolute top-[100%] right-[0px] w-[200px] bg-[#8ABEB9] hidden group-hover/sub-1:block">
                  <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#B7E5CD] relative group/sub-2">
                    <Link
                      href="/company-manage/profile"
                      className="text-white font-[600] text-[16px]"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#B7E5CD] relative group/sub-2">
                    <Link
                      href="/company-manage/profile"
                      className="text-white font-[600] text-[16px]"
                    >
                      TechJob Company Profile
                    </Link>
                  </li>
                  <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#B7E5CD] relative group/sub-2">
                    <Link
                      href="/company-manage/job/list"
                      className="text-white font-[600] text-[16px]"
                    >
                      Job Management
                    </Link>
                  </li>
                  <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#B7E5CD] relative group/sub-2">
                    <Link
                      href="/company-manage/job/list"
                      className="text-white font-[600] text-[16px]"
                    >
                      Candidate Applications
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </>
        ) : (
          // Chưa đăng nhập: KHÔNG render gì thêm để tránh trùng Login
          <></>
        )}

        {/* NÚT ĐĂNG XUẤT TRÊN HEADER (DESKTOP) */}
        {isLogin && (
          <button
            className="ml-3 border border-white/70 text-white text-sm font-semibold px-3 py-1.5 rounded-full hover:bg-white/10 transition"
            onClick={() => handleLogout('/job_seeker/login')}
          >
            Đăng xuất
          </button>
        )}
      </div>
    </>
  );
};
