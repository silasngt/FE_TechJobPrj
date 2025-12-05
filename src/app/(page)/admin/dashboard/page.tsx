// src/app/admin/dashboard/page.tsx
'use client';

import { SiderAdmin } from '@/src/app/components/sider-bar/SiderAdmin';

export default function AdminDashboardPage() {
  const stats = {
    totalCompanies: 42,
    totalUsers: 1200,
    totalJobs: 180,
    blockedAccounts: 7,
  };

  const weeklyData = [
    { label: 'T2', jobs: 10, users: 40 },
    { label: 'T3', jobs: 15, users: 55 },
    { label: 'T4', jobs: 20, users: 60 },
    { label: 'T5', jobs: 18, users: 50 },
    { label: 'T6', jobs: 25, users: 70 },
    { label: 'T7', jobs: 12, users: 45 },
    { label: 'CN', jobs: 8, users: 30 },
  ];

  const maxJobs = Math.max(...weeklyData.map((d) => d.jobs));

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex">
      <SiderAdmin />

      <main className="flex-1 px-10 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Admin Dashboard
            </h2>
            <p className="text-sm text-gray-500">
              Tổng quan nhanh về hệ thống company và user.
            </p>
          </div>
        </div>

        {/* Cards */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <p className="text-xs text-gray-500 mb-1">Tổng số công ty</p>
            <p className="text-2xl font-semibold text-gray-900">
              {stats.totalCompanies}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <p className="text-xs text-gray-500 mb-1">Tổng số user</p>
            <p className="text-2xl font-semibold text-gray-900">
              {stats.totalUsers}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <p className="text-xs text-gray-500 mb-1">Tổng số job</p>
            <p className="text-2xl font-semibold text-gray-900">
              {stats.totalJobs}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <p className="text-xs text-gray-500 mb-1">Tài khoản đang bị khóa</p>
            <p className="text-2xl font-semibold text-red-500">
              {stats.blockedAccounts}
            </p>
          </div>
        </section>

        {/* Biểu đồ đơn giản: số job / ngày */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-900">
              Số job được đăng trong tuần
            </h3>
            <span className="text-xs text-gray-400">7 ngày gần nhất</span>
          </div>

          <div className="flex items-end gap-3 h-40">
            {weeklyData.map((d) => {
              const height = (d.jobs / maxJobs) * 100;
              return (
                <div
                  key={d.label}
                  className="flex flex-col items-center justify-end flex-1"
                >
                  <div
                    className="w-full rounded-t-md bg-emerald-500"
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="mt-1 text-[11px] text-gray-500">
                    {d.label}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
