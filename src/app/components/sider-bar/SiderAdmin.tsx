'use client';

import { useRouter } from 'next/navigation';

export const SiderAdmin = () => {
  const router = useRouter();

  const handleLogout = () => {
    const confirmLogout = window.confirm('Bạn có chắc chắn muốn đăng xuất?');
    if (!confirmLogout) return;

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          router.push('/admin/login');
        }
      });
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100">
        <h1 className="text-lg font-semibold text-gray-800">TechJob Admin</h1>
        <p className="text-xs text-gray-500 mt-1">Quản trị hệ thống</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-4 space-y-1 text-sm">
        <a
          href="/admin/dashboard"
          className="block w-full px-3 py-2 rounded-md bg-emerald-50 text-emerald-600 font-semibold transition-all"
        >
          Dashboard
        </a>
        <a
          href="/admin/company-management"
          className="block w-full px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all"
        >
          Company Management
        </a>
        <a
          href="/admin/user-management"
          className="block w-full px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all"
        >
          User Management
        </a>
      </nav>

      {/* Admin info + Logout */}
      <div className="px-4 py-4 border-t border-gray-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-semibold">
            AD
          </div>
          <div className="text-xs">
            <p className="font-semibold text-gray-800">Admin</p>
            <p className="text-gray-500">admin@techjob.com</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full px-3 py-2 text-sm rounded-md bg-red-500 text-white font-semibold hover:bg-red-600 transition"
        >
          Đăng xuất
        </button>
      </div>
    </aside>
  );
};
