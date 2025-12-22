'use client';
import { useEffect, useState } from 'react';
import { useAuth } from '@/src/hooks/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Skill = { name: string; slug: string };
type City = { name: string; slug: string };
type Company = { name: string; slug?: string; id?: string };

export const HeaderMenu = (props: { showMenu: boolean }) => {
  const route = useRouter();
  const { showMenu } = props;
  const { isLogin, infoUser, infoCompany } = useAuth();

  const [skills, setSkills] = useState<Skill[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [mobileOpen, setMobileOpen] = useState({
    jobs: false,
    companies: false,
  });

  // useEffect(() => {
  //   const base = process.env.NEXT_PUBLIC_API_URL ?? '';

  //   fetch(`${base}/job/skills`)
  //     .then((r) => r.json())
  //     .then((data) => {
  //       if (Array.isArray(data)) setSkills(data);
  //       else if (data.success && Array.isArray(data.data)) setSkills(data.data);
  //     })
  //     .catch(() => {});

  //   fetch(`${base}/job/cities`)
  //     .then((r) => r.json())
  //     .then((data) => {
  //       if (Array.isArray(data)) setCities(data);
  //       else if (data.success && Array.isArray(data.data)) setCities(data.data);
  //     })
  //     .catch(() => {});

  //   fetch(`${base}/company/list?limit=8`)
  //     .then((r) => r.json())
  //     .then((data) => {
  //       if (Array.isArray(data)) setCompanies(data);
  //       else if (data.success && Array.isArray(data.data))
  //         setCompanies(data.data);
  //     })
  //     .catch(() => {});
  // }, []);
  const handleLogout = (linkRedirect: string) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include', // gửi kèm token trong cookies
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          route.push(linkRedirect);
          route.refresh();
        }
      });
  };
  const toggleMobile = (key: keyof typeof mobileOpen) => {
    setMobileOpen((s) => ({ ...s, [key]: !s[key] }));
  };

  return (
    <>
      {/* DESKTOP MENU */}
      <nav className="hidden md:flex items-center gap-6 text-white/90 text-[15px]">
        {/* Việc làm  */}
        <div className="relative group">
          <Link
            href={`/job/list`}
            className="hover:text-white flex items-center gap-2"
          >
            Việc làm
            <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 7l5 5 5-5H5z" />
            </svg>
          </Link>

          <div className="absolute left-0 mt-2 w-[520px] bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50 p-4">
            <div className="flex gap-6">
              {/* Theo kỹ năng */}
              <div className="w-1/2">
                <h4 className="text-sm font-semibold mb-2">Theo kỹ năng</h4>
                <ul className="max-h-64 overflow-auto">
                  {skills.length === 0 ? (
                    <li className="px-2 py-1 text-sm text-gray-600">
                      Không có dữ liệu
                    </li>
                  ) : (
                    skills.map((s) => (
                      <li key={s.slug}>
                        <a
                          href={`/job/list?skill=${encodeURIComponent(s.slug)}`}
                          className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                        >
                          {s.name}
                        </a>
                      </li>
                    ))
                  )}
                </ul>
              </div>

              {/* Theo thành phố */}
              <div className="w-1/2">
                <h4 className="text-sm font-semibold mb-2">Theo thành phố</h4>
                <ul className="max-h-64 overflow-auto">
                  {cities.length === 0 ? (
                    <li className="px-2 py-1 text-sm text-gray-600">
                      Không có dữ liệu
                    </li>
                  ) : (
                    cities.map((c) => (
                      <li key={c.slug}>
                        <a
                          href={`/job/list?city=${encodeURIComponent(c.slug)}`}
                          className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                        >
                          {c.name}
                        </a>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Công ty nổi bật  */}
        <div className="relative group">
          <Link
            href={`/company/list`}
            className="hover:text-white flex items-center gap-2"
          >
            Công ty nổi bật
            <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 7l5 5 5-5H5z" />
            </svg>
          </Link>

          <div className="absolute left-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
            <ul className="max-h-64 overflow-auto">
              <li className="px-4 py-2 border-t">
                <div className="text-sm font-semibold mb-2">Theo thành phố</div>
                {cities.length === 0 ? (
                  <div className="text-sm text-gray-600">Không có dữ liệu</div>
                ) : (
                  <div className="grid grid-cols-1 gap-1">
                    {cities.slice(0, 8).map((c) => (
                      <a
                        key={c.slug}
                        href={`/company/list?city=${encodeURIComponent(
                          c.slug
                        )}`}
                        className="text-sm hover:underline"
                      >
                        {c.name}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Liên kết chung
        <a href="/job/list" className="hover:text-white">
          Tất cả việc làm
        </a>
        <a href="/company/list" className="hover:text-white">
          Tất cả công ty
        </a>
        <a href="#" className="hover:text-white">
          Liên hệ
        </a> */}
      </nav>

      {/* MOBILE MENU */}
      <nav
        className={`${
          showMenu
            ? 'block md:hidden border-t border-white/20 bg-black/30 backdrop-blur'
            : 'hidden md:hidden'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 space-y-3 text-sm text-white">
          <nav className="flex flex-col gap-2">
            {/* Việc làm parent  */}
            <div>
              <div
                onClick={() => toggleMobile('jobs')}
                className="w-full flex justify-between items-center px-3 py-2 bg-white/5 rounded"
              >
                <span>
                  <Link href={`/job/list`}>Việc làm</Link>
                </span>
                <span>{mobileOpen.jobs ? '−' : '+'}</span>
              </div>

              {mobileOpen.jobs && (
                <div className="pl-4 mt-2 space-y-2">
                  <div>
                    <div className="text-xs text-white/70 mb-1">
                      Theo kỹ năng
                    </div>
                    {skills.length === 0 ? (
                      <div className="text-sm text-white/70">
                        Không có dữ liệu
                      </div>
                    ) : (
                      skills.map((s) => (
                        <a
                          key={s.slug}
                          href={`/job/list?skill=${encodeURIComponent(s.slug)}`}
                          className="block py-1 hover:text-[#3CF2B6]"
                        >
                          {s.name}
                        </a>
                      ))
                    )}
                  </div>

                  <div>
                    <div className="text-xs text-white/70 mb-1">
                      Theo thành phố
                    </div>
                    {cities.length === 0 ? (
                      <div className="text-sm text-white/70">
                        Không có dữ liệu
                      </div>
                    ) : (
                      cities.map((c) => (
                        <a
                          key={c.slug}
                          href={`/job/list?city=${encodeURIComponent(c.slug)}`}
                          className="block py-1 hover:text-[#3CF2B6]"
                        >
                          {c.name}
                        </a>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Công ty nổi bật parent */}
            <div>
              <div
                onClick={() => toggleMobile('companies')}
                className="w-full flex justify-between items-center px-3 py-2 bg-white/5 rounded"
              >
                <span className="mr-[20px]">
                  <Link href={`/company/list`}>Công ty nổi bật</Link>
                </span>
                <span>{mobileOpen.companies ? '−' : '+'}</span>
              </div>

              {mobileOpen.companies && (
                <div className="pl-4 mt-2 space-y-2">
                  <div>
                    {companies.length === 0 ? (
                      <div className="text-sm text-white/70">
                        Không có dữ liệu
                      </div>
                    ) : (
                      companies.map((c, idx) => {
                        const href = c.slug
                          ? `/company/${c.slug}`
                          : c.id
                          ? `/company/${c.id}`
                          : '#';
                        return (
                          <a
                            key={idx}
                            href={href}
                            className="block py-1 hover:text-[#3CF2B6]"
                          >
                            {c.name}
                          </a>
                        );
                      })
                    )}
                  </div>

                  <div>
                    <div className="text-xs text-white/70 mb-1">
                      Theo thành phố
                    </div>
                    {cities.length === 0 ? (
                      <div className="text-sm text-white/70">
                        Không có dữ liệu
                      </div>
                    ) : (
                      cities.map((c) => (
                        <a
                          key={c.slug}
                          href={`/company/list?city=${encodeURIComponent(
                            c.slug
                          )}`}
                          className="block py-1 hover:text-[#3CF2B6]"
                        >
                          {c.name}
                        </a>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="h-px bg-white/20 my-2" />

            {/* login/profile  */}
            {isLogin ? (
              <div className="flex flex-col gap-4">
                {/* USER ROLE */}
                {infoUser && (
                  <div className="space-y-2 flex flex-wrap gap-2">
                    <p className="text-xs text-white/60 px-1">
                      Tài khoản ứng viên
                    </p>
                    <a
                      href="/user-manage/dashboard"
                      className="w-full border border-white/60 text-white text-sm px-4 py-2 rounded-full hover:bg-white/10 transition text-center"
                    >
                      Bảng điều khiển người dùng
                    </a>
                    <a
                      href="/user-manage/profile"
                      className="w-full border border-white/60 text-white text-sm px-4 py-2 rounded-full hover:bg-white/10 transition text-center"
                    >
                      Hồ sơ công khai
                    </a>
                    <a
                      href="/user-manage/applications"
                      className="w-full border border-white/60 text-white text-sm px-4 py-2 rounded-full hover:bg-white/10 transition text-center"
                    >
                      Công việc đã ứng tuyển
                    </a>
                    <button
                      type="button"
                      onClick={() => handleLogout('/job_seeker/login')}
                      className="w-full border border-white/60 text-white text-sm px-4 py-2 rounded-full hover:bg-white/10 transition text-center"
                    >
                      Đăng xuất
                    </button>
                  </div>
                )}

                {/* COMPANY ROLE */}
                {infoCompany && (
                  <div className="space-y-2 flex flex-wrap gap-2">
                    <p className="text-xs text-white/60 px-1">
                      Tài khoản nhà tuyển dụng
                    </p>
                    <a
                      href="/company-manage/dashboard"
                      className="w-full border border-white/60 text-white text-sm px-4 py-2 rounded-full hover:bg-white/10 transition text-center"
                    >
                      Bảng điều khiển công ty
                    </a>
                    <a
                      href="/company-manage/profile"
                      className="w-full border border-white/60 text-white text-sm px-4 py-2 rounded-full hover:bg-white/10 transition text-center"
                    >
                      Hồ sơ công ty
                    </a>
                    <a
                      href="/company-manage/job/list"
                      className="w-full border border-white/60 text-white text-sm px-4 py-2 rounded-full hover:bg-white/10 transition text-center"
                    >
                      Quản lý công việc & CV
                    </a>
                    <button
                      type="button"
                      onClick={() => handleLogout('/company/login')}
                      className="w-full border border-white/60 text-white text-sm px-4 py-2 rounded-full hover:bg-white/10 transition text-center"
                    >
                      Đăng xuất
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <a
                  href="/job_seeker/login"
                  className="w-full border border-white/70 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-white/10 transition text-center"
                >
                  Đăng nhập
                </a>
                <a
                  href="/job_seeker/register"
                  className="w-full bg-white text-emerald-500 text-sm font-semibold px-4 py-2 rounded-full hover:bg-emerald-50 transition text-center"
                >
                  Đăng ký
                </a>
              </div>
            )}
          </nav>
        </div>
      </nav>
    </>
  );
};
