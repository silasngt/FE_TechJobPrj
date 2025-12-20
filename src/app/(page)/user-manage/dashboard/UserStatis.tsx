'use client';
import { useEffect, useState } from 'react';

export const UserStatis = () => {
  const [statisUser, setStatisUser] = useState<any>();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/dashboard`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.success === true) {
          setStatisUser(res.data);
        }
      });
  }, []);
  if (!statisUser) return null;

  const totalCVs = statisUser.totalCVs || 0;

  const cvPeding =
    totalCVs > 0 ? (statisUser.totalPendingCVs / totalCVs) * 100 : 0;

  const cvAccepted =
    totalCVs > 0 ? (statisUser.totalAcceptedCVs / totalCVs) * 100 : 0;

  const cvRejected =
    totalCVs > 0 ? (statisUser.totalRejectedCVs / totalCVs) * 100 : 0;
  return (
    <>
      {statisUser && (
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {/* Tổng CV đã ứng tuyển */}
          <div className="bg-white rounded-lg border border-gray-100 p-5">
            <p className="text-xs text-gray-500 mb-1">Tổng CV đã ứng tuyển</p>
            <p className="text-2xl font-semibold text-gray-900">
              {statisUser.totalCVs}
            </p>

            <div className="mt-3 w-full h-2 bg-gray-100 rounded">
              <div
                className="h-2 rounded bg-blue-500"
                style={{ width: '100%' }}
              />
            </div>
          </div>

          {/* CV đang chờ */}
          <div className="bg-white rounded-lg border border-gray-100 p-5">
            <p className="text-xs text-gray-500 mb-1">CV đang chờ phản hồi</p>
            <p className="text-2xl font-semibold text-gray-900">
              {statisUser.totalPendingCVs}
            </p>

            <div className="mt-3 w-full h-2 bg-gray-100 rounded">
              <div
                className="h-2 rounded bg-amber-500"
                style={{ width: `${cvPeding}%` }}
              />
            </div>
          </div>

          {/* CV được duyệt */}
          <div className="bg-white rounded-lg border border-gray-100 p-5">
            <p className="text-xs text-gray-500 mb-1">CV được duyệt</p>
            <p className="text-2xl font-semibold text-gray-900">
              {statisUser.totalAcceptedCVs}
            </p>

            <div className="mt-3 w-full h-2 bg-gray-100 rounded">
              <div
                className="h-2 rounded bg-emerald-500"
                style={{ width: `${cvAccepted}%` }}
              />
            </div>
          </div>

          {/* CV bị từ chối */}
          <div className="bg-white rounded-lg border border-gray-100 p-5">
            <p className="text-xs text-gray-500 mb-1">CV bị từ chối</p>
            <p className="text-2xl font-semibold text-gray-900">
              {statisUser.totalRejectedCVs}
            </p>

            <div className="mt-3 w-full h-2 bg-gray-100 rounded">
              <div
                className="h-2 rounded bg-red-500"
                style={{ width: `${cvRejected}%` }}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};
