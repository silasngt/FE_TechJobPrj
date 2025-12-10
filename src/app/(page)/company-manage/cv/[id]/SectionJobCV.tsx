'use client';
import { useEffect, useState } from 'react';

export const SectionJobCV = (props: { id: string }) => {
  const { id } = props;
  const [jobCV, setJobCV] = useState<any>(null);
  const [detailCV, setDetailCv] = useState<any>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/cvs/${id}`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.success === true) {
          setJobCV(res.data.jobId);
          setDetailCv(res.data);
        }
      });
  });
  return (
    <>
      {jobCV && (
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 md:p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">
            Thông tin công việc
          </h2>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Công việc ứng tuyển
              </label>
              <input
                readOnly
                defaultValue={jobCV.title}
                className="w-full h-10 px-3 rounded-md border border-gray-200 bg-gray-50 text-sm text-gray-800 cursor-default"
              />
            </div>

            <div className="flex flex-col gap-1 min-w-[200px]">
              <span className="text-xs font-medium text-gray-600">
                Trạng thái CV
              </span>
              {detailCV.status === 'Accepted' && (
                <span className="inline-flex px-3 py-1.5 rounded-full text-xs font-semibold bg-green-50 text-green-600 border border-green-200">
                  Đã duyệt
                </span>
              )}
              {detailCV.status === 'Pending' && (
                <span className="inline-flex px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-600 border border-amber-200">
                  Chưa duyệt
                </span>
              )}
              {detailCV.status === 'Rejected' && (
                <span className="inline-flex px-3 py-1.5 rounded-full text-xs font-semibold bg-red-50 text-red-600 border border-red-200">
                  Từ chối
                </span>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
