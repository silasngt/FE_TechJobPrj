'use client';
import { cvStatusList } from '@/src/config/cvList';
import moment from 'moment';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const CvUserRecent = () => {
  const [listCV, setListCV] = useState<any>({
    totalCV: 0,
    cvs: [],
  });
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/cvs/me`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.success === true) {
          setListCV(res.data);
        }
      });
  }, []);
  return (
    <>
      {listCV && (
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900">
              Ứng tuyển gần đây
            </h3>
            <Link
              href={`/user-manage/cv/list`}
              className="text-xs text-emerald-600 hover:underline"
            >
              Xem tất cả
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {listCV.cvs.map((item: any, idx: number) => {
              <div
                key={idx}
                className="px-5 py-3 flex items-center justify-between text-sm"
              >
                <div>
                  <p className="font-semibold text-gray-800">{item.jobTitle}</p>
                  <p className="text-xs text-gray-500">{item.companyName}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 mb-1">
                    {moment(item.createdAt).locale('vi').format('DD/MM/YYYY')}
                  </p>
                  {item.status === 'Pending' && (
                    <span className="inline-flex px-2 py-1 rounded-full text-[11px] bg-amber-50 text-amber-600">
                      Chưa Duyệt
                    </span>
                  )}
                  {item.status === 'Accepted' && (
                    <span className="inline-flex px-2 py-1 rounded-full text-[11px] bg-blue-50 text-blue-600">
                      Đã duyệt
                    </span>
                  )}
                  {item.status === 'Rejected' && (
                    <span className="inline-flex px-2 py-1 rounded-full text-[11px] bg-gray-50 text-gray-600">
                      Từ chối
                    </span>
                  )}
                </div>
              </div>;
            })}
          </div>
        </div>
      )}
    </>
  );
};
