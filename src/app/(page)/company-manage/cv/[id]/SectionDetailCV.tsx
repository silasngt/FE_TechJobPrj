'use client';
import moment from 'moment';
import { useEffect, useState } from 'react';

export const SectionDetailCV = (props: { id: string }) => {
  const { id } = props;
  const [detailCV, setDetailCV] = useState<any>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/cvs/${id}`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          setDetailCV(res.data);
        }
      });
  });
  return (
    <>
      {detailCV && (
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 md:p-6 space-y-5">
          <h2 className="text-sm font-semibold text-gray-900">
            Thông tin ứng viên & CV đính kèm
          </h2>

          {/* Thông tin ứng viên */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-600">
                Họ và tên
              </label>
              <input
                readOnly
                defaultValue={detailCV.fullName}
                className="w-full h-10 px-3 rounded-md border border-gray-200 bg-gray-50 text-sm text-gray-800 cursor-default"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-600">Email</label>
              <input
                readOnly
                defaultValue={detailCV.email}
                className="w-full h-10 px-3 rounded-md border border-gray-200 bg-gray-50 text-sm text-gray-800 cursor-default"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-600">
                Số điện thoại
              </label>
              <input
                readOnly
                defaultValue={detailCV.phone}
                className="w-full h-10 px-3 rounded-md border border-gray-200 bg-gray-50 text-sm text-gray-800 cursor-default"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-600">
                Thời gian nộp CV
              </label>
              <input
                readOnly
                defaultValue={moment(detailCV.createdAt)
                  .locale('vi')
                  .format('DD/MM/YYYY')}
                className="w-full h-10 px-3 rounded-md border border-gray-200 bg-gray-50 text-sm text-gray-800 cursor-default"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-xs font-medium text-gray-600">
                  CV đính kèm
                </label>
              </div>
            </div>

            <div className="w-full border border-dashed border-gray-300 rounded-lg overflow-hidden bg-gray-50">
              <iframe
                src={detailCV.fileCV}
                title="CV Preview"
                className="w-full h-[900px] bg-white"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};
