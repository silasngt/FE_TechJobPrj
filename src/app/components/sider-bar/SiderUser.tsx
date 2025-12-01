export const SiderUser = () => {
  const currentPath =
    typeof window !== 'undefined' ? window.location.pathname : '';

  const isActive = (path: string) =>
    currentPath.startsWith(path)
      ? 'bg-emerald-50 text-emerald-600 font-semibold'
      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900';

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-100">
        <a href="/">
          <h1 className="text-lg font-semibold text-gray-800">TechJob</h1>
        </a>
      </div>

      {/* MENU */}
      <nav className="flex-1 px-4 py-4 space-y-1 text-sm">
        <a
          href="/user-manage/dashboard"
          className={`block w-full px-3 py-2 rounded-md transition-all ${isActive(
            '/user-manage/dashboard'
          )}`}
        >
          Bảng điều khiển người dùng
        </a>

        <a
          href="/user-manage/cv/list"
          className={`block w-full px-3 py-2 rounded-md transition-all ${isActive(
            '/user-manage/cv'
          )}`}
        >
          Công việc đã ứng tuyển
        </a>

        <a
          href="/user-manage/profile"
          className={`block w-full px-3 py-2 rounded-md transition-all ${isActive(
            '/user-manage/profile'
          )}`}
        >
          Hồ sơ công khai của tôi
        </a>
      </nav>

      {/* USER MINI CARD */}
      <div className="px-4 py-4 border-t border-gray-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-semibold">
          JG
        </div>
        <div className="text-xs">
          <p className="font-semibold text-gray-800">Jake Gyll</p>
          <p className="text-gray-500">jakegyll@email.com</p>
        </div>
      </div>
    </aside>
  );
};
