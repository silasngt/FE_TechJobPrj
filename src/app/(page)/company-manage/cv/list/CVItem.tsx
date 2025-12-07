'use client';
import { ButtonApproved } from '@/src/app/components/button/ButtonChangeStatus';
import { cvStatusList, getCvStatusConfig } from '@/src/config/cvList';
import { workingFormList } from '@/src/config/workingForm';
import moment from 'moment';
import Link from 'next/link';
import { useState } from 'react';

export const CVItem = (props: {
  item: any;
  onDeleteSuccess: (id: string) => void;
}) => {
  const { item, onDeleteSuccess } = props;
  const workingForm = workingFormList.find(
    (work) => work.value === item.jobWorkingForm
  )?.label;
  type CvStatus = (typeof cvStatusList)[number];

  const [status, setStatus] = useState<CvStatus>(() =>
    getCvStatusConfig(item.status)
  );

  const handleChangeStatus = (status: string) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/cvs/status/${item._id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: status }),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.success === true) {
          setStatus(getCvStatusConfig(status)); // dùng lại helper
        }
      });
  };

  return (
    <>
      <div
        key={item.id}
        className="px-5 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm"
      >
        {/* Info */}
        <div className="flex-1">
          <p className="font-semibold text-gray-900">{item.jobId.title}</p>
          <p className="text-xs text-gray-600">
            Ứng viên:{' '}
            <span className="font-semibold text-gray-800">{item.fullName}</span>{' '}
            · {item.email}
          </p>
          <p className="text-[11px] text-gray-400 mt-1">
            Ngày ứng tuyển:{' '}
            {moment(item.createdAt).locale('vi').format('DD/MM/YYYY')}
          </p>
        </div>

        {/* Status + actions */}
        <div className="flex flex-col md:items-end gap-2 min-w-[220px]">
          <span
            className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${status.badgeClass}`}
          >
            <p className="text-black mr-[5px]">Trạng thái : </p>
            {status.label}
          </span>

          <div className="flex gap-2">
            <Link
              href={`/company-manage/cv/${item._id}`}
              className="px-3 py-1.5 text-xs rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
            >
              Xem CV
            </Link>

            {/* 2 nút đổi trạng thái  */}
            {(status?.value == 'Peding' || status?.value == 'Rejected') && (
              <button
                onClick={() => handleChangeStatus('Approved')}
                className="bg-[#9FDB7C] rounded-[4px] font-[400] text-[14px] text-black inline-block py-[8px] px-[20px]"
              >
                Duyệt
              </button>
            )}
            {(status?.value == 'Peding' || status?.value == 'Approved') && (
              <button
                onClick={() => handleChangeStatus('rejected')}
                className="bg-[#FF5100] rounded-[4px] font-[400] text-[14px] text-white inline-block py-[8px] px-[20px]"
              >
                Từ chối
              </button>
            )}

            <button
              onClick={() => handleChangeStatus('Rejected')}
              className="px-3 py-1.5 text-xs rounded-md bg-red-500 text-white font-semibold hover:bg-red-600 transition"
            >
              Từ chối
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
