import { useAuth } from '@/src/hooks/useAuth';
import { HeaderAccount } from './HeaderAccount';

export const HeaderMenu = (props: { showMenu: boolean }) => {
  const { showMenu } = props;
  const { isLogin } = useAuth();
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

      {/* Fallback nếu chưa login */}
      {!isLogin && (
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

      {/* MENU MOBILE DROPDOWN */}
      <nav
        className={`${
          showMenu
            ? 'block md:block border-t border-white/20 bg-black/30 backdrop-blur'
            : 'hidden'
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

          <div className="flex flex-col gap-2">
            <a href="/company/login" className="text-white/90 hover:text-white">
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
      </nav>
    </>
  );
};
