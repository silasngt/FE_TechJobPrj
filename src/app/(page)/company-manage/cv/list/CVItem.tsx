'use client';
import { cvStatusList } from '@/src/config/cvList';
import moment from 'moment';
import Link from 'next/link';
import { useState } from 'react';
import { FaCircleCheck, FaEye } from 'react-icons/fa6';

export const CVItem = (props: {
  item: any;
  onDeleteSuccess: (id: string) => void;
}) => {
  const { item, onDeleteSuccess } = props;
  const statusDefault: any = cvStatusList.find(
    (itemStatus) => itemStatus.value === item.status
  );
  const [status, setStatus] = useState(statusDefault);
  const handleChangeStatus = (status: string) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/cvs/status/${item._id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: status }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          const statusNew = cvStatusList.find(
            (itemStatus) => itemStatus.value === status
          );
          setStatus(statusNew);
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
            className="mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px] text-[#121212]"
            style={{
              color: status?.color,
            }}
          >
            <FaCircleCheck className="text-[16px]" /> {status?.label}
          </span>

          <div
            className={
              'mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px] ' +
              (item.viewed ? '' : ' text-[#FF0000]')
            }
          >
            <FaEye className="text-[16px]" />{' '}
            {item.viewed ? 'Đã xem' : 'Chưa xem'}
          </div>
          <div className="flex gap-2">
            <Link
              href={`/company-manage/cv/${item._id}`}
              className="inline-block py-[8px] px-[20px] font-[400] text-[14px] rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
            >
              Xem CV
            </Link>

            {/* 2 nút đổi trạng thái  */}
            {(status?.value === 'Pending' || status?.value === 'Rejected') && (
              <button
                onClick={() => handleChangeStatus('Accepted')}
                className="bg-[#9FDB7C] rounded-[4px] font-[400] text-[14px] text-black inline-block py-[8px] px-[20px] hover:bg-[#9ad37a] transition"
              >
                Duyệt
              </button>
            )}
            {(status?.value == 'Pending' || status?.value == 'Approved') && (
              <button
                onClick={() => handleChangeStatus('Rejected')}
                className="bg-[#FF5100] rounded-[4px] font-[400] text-[14px] text-white inline-block py-[8px] px-[20px] hover:bg-[#da9a7d] transition"
              >
                Từ chối
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
