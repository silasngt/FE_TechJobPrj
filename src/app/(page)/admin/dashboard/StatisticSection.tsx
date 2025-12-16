'use client';
import { useEffect, useState } from 'react';

export const StatisticSection = () => {
  const [stats, setStats] = useState<any>();
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/dashboard`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.success === true) {
          setStats(res.data);
        }
      });
  }, []);
  return (
    <>
      {stats && (
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
              {stats.totalLockUsers ?? 0}
            </p>
          </div>
        </section>
      )}
    </>
  );
};
