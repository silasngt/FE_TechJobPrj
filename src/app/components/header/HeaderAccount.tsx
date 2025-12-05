'use client';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/src/hooks/useAuth';
import Link from 'next/link';

export const HeaderAccount = () => {
  const { isLogin, infoUser, infoCompany } = useAuth();
  const route = useRouter();

  const handleLogout = (linkRedirect: string) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      method: 'POST',
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
      {/* WRAPPER DESKTOP */}
      <div className="hidden md:inline-flex items-center gap-x-[8px] text-white font-[600] sm:text-[16px] text-[12px]">
        <div className="relative inline-flex items-center gap-x-[8px] group/sub-1">
          {/* Nếu đăng nhập bằng tài khoản USER  */}
          {isLogin ? (
            <>
              {infoUser && (
                <>
                  <Link href="/user-manage/profile" className="">
                    {infoUser.fullName}
                  </Link>
                  <ul className="absolute top-[100%] right-[0px] w-[220px] bg-[#8ABEB9] hidden group-hover/sub-1:block rounded-b-[4px] overflow-hidden shadow-md">
                    <li className="py-[10px] px-[16px] flex items-center justify-between hover:bg-[#B7E5CD] relative group/sub-2">
                      <Link
                        href="/user-manage/dashboard"
                        className="text-white font-[600] text-[14px]"
                      >
                        Bảng điều khiển người dùng
                      </Link>
                    </li>
                    <li className="py-[10px] px-[16px] flex items-center justify-between hover:bg-[#B7E5CD] relative group/sub-2">
                      <Link
                        href="/user-manage/profile"
                        className="text-white font-[600] text-[14px]"
                      >
                        Hồ sơ công khai của tôi
                      </Link>
                    </li>
                    <li className="py-[10px] px-[16px] flex items-center justify-between hover:bg-[#B7E5CD] relative group/sub-2">
                      <Link
                        href="/user-manage/applications"
                        className="text-white font-[600] text-[14px]"
                      >
                        Công việc đã ứng tuyển
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
                <a
                  href="/job_seeker/login"
                  className="border border-white/70 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-white/10 transition"
                >
                  Đăng nhập
                </a>
                <a
                  href="/job_seeker/register"
                  className="bg-white text-emerald-500 text-sm font-semibold px-4 py-2 rounded-full hover:bg-emerald-50 transition"
                >
                  Đăng ký
                </a>
              </div>
            </>
          )}

          {/* COMPANY  */}
          {isLogin && infoCompany && (
            <>
              <span className="mx-1 text-white/70">|</span>
              <Link href="/company-manage/dashboard" className="">
                {infoCompany.companyName}
              </Link>
              <ul className="absolute top-[100%] right-[0px] w-[220px] bg-[#8ABEB9] hidden group-hover/sub-1:block rounded-b-[4px] overflow-hidden shadow-md">
                <li className="py-[10px] px-[16px] flex items-center justify-between hover:bg-[#B7E5CD] relative group/sub-2">
                  <Link
                    href="/company-manage/dashboard"
                    className="text-white font-[600] text-[14px]"
                  >
                    Bảng điều khiển
                  </Link>
                </li>
                <li className="py-[10px] px-[16px] flex items-center justify-between hover:bg-[#B7E5CD] relative group/sub-2">
                  <Link
                    href="/company-manage/profile"
                    className="text-white font-[600] text-[14px]"
                  >
                    Hồ sơ công ty
                  </Link>
                </li>
                <li className="py-[10px] px-[16px] flex items-center justify-between hover:bg-[#B7E5CD] relative group/sub-2">
                  <Link
                    href="/company-manage/job/list"
                    className="text-white font-[600] text-[14px]"
                  >
                    Quản lý công việc
                  </Link>
                </li>
                <li className="py-[10px] px-[16px] flex items-center justify-between hover:bg-[#B7E5CD] relative group/sub-2">
                  <Link
                    href="/company-manage/job/list"
                    className="text-white font-[600] text-[14px]"
                  >
                    Quản lý CV ứng tuyển
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>

        {isLogin && (
          <button
            type="button"
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
