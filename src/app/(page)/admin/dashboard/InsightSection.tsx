'use client';
import { useEffect, useState } from 'react';

export const SystemInsightSection = () => {
  const [stats, setStats] = useState<any>();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/dashboard`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          setStats(res.data);
        }
      });
  }, []);

  if (!stats) return null;

  const lockRate =
    stats.totalUsers > 0
      ? ((stats.totalLockUsers / stats.totalUsers) * 100).toFixed(1)
      : 0;

  const maxValue = Math.max(
    stats.totalCompanies,
    stats.totalUsers,
    stats.totalJobs
  );

  return (
    <>
      {/* INSIGHT CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Progress Ring */}
        <div className="bg-white rounded-lg border border-gray-100 p-5 flex items-center gap-5">
          <div
            className="relative w-16 h-16 rounded-full"
            style={{
              background: `conic-gradient(#ef4444 ${
                Number(lockRate) * 3.6
              }deg, #e5e7eb 0deg)`,
            }}
          >
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center text-sm font-semibold">
              {lockRate}%
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-500">Tỷ lệ user bị khóa</p>
            <p className="text-sm text-gray-400">
              {stats.totalLockUsers}/{stats.totalUsers} user
            </p>
          </div>
        </div>

        {/* Activity */}
        <div className="bg-white rounded-lg border border-gray-100 p-5">
          <p className="text-xs text-gray-500 mb-2">
            Mức độ hoạt động hệ thống
          </p>
          <p className="text-2xl font-semibold text-emerald-600">
            {stats.totalJobs > 100 ? 'Cao' : 'Trung bình'}
          </p>
          <p className="text-xs text-gray-400 mt-1">Dựa trên số lượng job</p>
        </div>

        {/* Status */}
        <div className="bg-white rounded-lg border border-gray-100 p-5">
          <p className="text-xs text-gray-500 mb-2">Trạng thái hệ thống</p>
          <p className="text-2xl font-semibold text-blue-600">Ổn định</p>
          <p className="text-xs text-gray-400 mt-1">
            Không ghi nhận bất thường
          </p>
        </div>
      </section>

      {/* MINI BAR CHART */}
      <section className="bg-white rounded-lg border border-gray-100 p-6 mb-8">
        <p className="text-sm font-semibold text-gray-900 mb-4">
          Phân bổ dữ liệu hệ thống
        </p>

        {[
          {
            label: 'Company',
            value: stats.totalCompanies,
            color: 'bg-blue-500',
          },
          {
            label: 'User',
            value: stats.totalUsers,
            color: 'bg-emerald-500',
          },
          {
            label: 'Job',
            value: stats.totalJobs,
            color: 'bg-purple-500',
          },
        ].map((item) => (
          <div key={item.label} className="mb-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded">
              <div
                className={`h-2 rounded ${item.color}`}
                style={{
                  width: `${(item.value / maxValue) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
