'use client';
import { useEffect, useState } from 'react';

export const CompanyStatis = () => {
  const [statisCompany, setStatisCompany] = useState<any>();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/companies/dashboard`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          setStatisCompany(res.data);
        }
      });
  }, []);

  if (!statisCompany) return null;

  const totalJobs = statisCompany.totalJobs || 0;

  const activePercent =
    totalJobs > 0 ? (statisCompany.totalActiveJobs / totalJobs) * 100 : 0;

  const lockPercent =
    totalJobs > 0 ? (statisCompany.totalLockJobs / totalJobs) * 100 : 0;

  const pendingCVPercent =
    statisCompany.totalJobs > 0
      ? (statisCompany.totalPendingCVs / statisCompany.totalJobs) * 100
      : 0;

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      {/* Tổng job */}
      <div className="bg-white rounded-lg border border-gray-100 p-5">
        <p className="text-xs text-gray-500 mb-1">Tổng công việc</p>
        <p className="text-2xl font-semibold text-gray-900">
          {statisCompany.totalJobs}
        </p>
        <div className="mt-3 h-2 w-full bg-gray-100 rounded">
          <div className="h-2 rounded bg-blue-500 w-full" />
        </div>
      </div>

      {/* Job đang tuyển */}
      <div className="bg-white rounded-lg border border-gray-100 p-5">
        <p className="text-xs text-gray-500 mb-1">Đang tuyển dụng</p>
        <p className="text-2xl font-semibold text-gray-900">
          {statisCompany.totalActiveJobs}
        </p>
        <div className="mt-3 h-2 w-full bg-gray-100 rounded">
          <div
            className="h-2 rounded bg-emerald-500 transition-all duration-500"
            style={{ width: `${activePercent}%` }}
          />
        </div>
      </div>

      {/* Job đã đóng */}
      <div className="bg-white rounded-lg border border-gray-100 p-5">
        <p className="text-xs text-gray-500 mb-1">Tin tuyển dụng đã đóng</p>
        <p className="text-2xl font-semibold text-gray-900">
          {statisCompany.totalLockJobs}
        </p>
        <div className="mt-3 h-2 w-full bg-gray-100 rounded">
          <div
            className="h-2 rounded bg-gray-400 transition-all duration-500"
            style={{ width: `${lockPercent}%` }}
          />
        </div>
      </div>

      {/* CV đang chờ */}
      <div className="bg-white rounded-lg border border-gray-100 p-5">
        <p className="text-xs text-gray-500 mb-1">CV đang chờ duyệt</p>
        <p className="text-2xl font-semibold text-gray-900">
          {statisCompany.totalPendingCVs}
        </p>
        <div className="mt-3 h-2 w-full bg-gray-100 rounded">
          <div
            className="h-2 rounded bg-amber-500 transition-all duration-500"
            style={{ width: `${pendingCVPercent}%` }}
          />
        </div>
      </div>
    </section>
  );
};
