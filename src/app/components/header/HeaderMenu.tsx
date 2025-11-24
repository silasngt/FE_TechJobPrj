import { useAuth } from '@/src/hooks/useAuth';
import { useRouter } from 'next/navigation';

export const HeaderMenu = (props: { showMenu: boolean }) => {
  const { showMenu } = props;
  const { isLogin, infoUser, infoCompany } = useAuth();
  const router = useRouter();

  const displayName = infoUser?.fullName || infoCompany?.fullName || '';

  const handleLogout = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 'success') {
          router.push('/user/login');
        }
      });
  };

  return (
    <>
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

      {/* MENU MOBILE DROPDOWN */}
      <nav
        className={`${
          showMenu
            ? 'block md:hidden border-t border-white/20 bg-black/30 backdrop-blur'
            : 'hidden md:hidden'
        }`}
      >
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

          {/* LOGIN / PROFILE TRÊN MOBILE */}
          {isLogin ? (
            <div className="flex flex-col gap-2">
              {displayName && (
                <div>
                  <p className="text-white/70 text-xs">Logged in as</p>
                  <p className="text-white text-sm font-semibold truncate">
                    {displayName}
                  </p>
                </div>
              )}

              <a
                href="/user-manage/profile"
                className="w-full border border-white/60 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10 transition text-center"
              >
                Thông tin cá nhân
              </a>
              <a
                href="/user-manage/cv/list"
                className="w-full border border-white/60 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10 transition text-center"
              >
                Quản lý CV đã gửi
              </a>
              <button
                onClick={handleLogout}
                className="w-full bg-red-500/90 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition"
              >
                Đăng xuất
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {/* <a
                href="/company/login"
                className="text-white/90 hover:text-white"
              >
                For Employers
              </a> */}
              <a
                href="/job_seeker/login"
                className="w-full border border-white/70 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-white/10 transition text-center"
              >
                Login
              </a>
              <a
                href="/job_seeker/register"
                className="w-full bg-white text-emerald-500 text-sm font-semibold px-4 py-2 rounded-full hover:bg-emerald-50 transition text-center"
              >
                Sign Up
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
