'use client';
import { workingFormList } from '@/src/config/workingForm';
import { useState } from 'react';

export const CVItem = (props: {
  item: any;
  onDeleteSuccess: (id: string) => void;
}) => {
  const { item, onDeleteSuccess } = props;
  const workingForm = workingFormList.find(
    (work) => work.value === item.jobWorkingForm
  )?.label;
  //   const statusDefault: any = cvStatusList.find(
  //     (itemStatus) => itemStatus.value === item.status
  //   );
  //   const [status, setStatus] = useState(statusDefault);
  //   const handleChangeStatus = (action: string) => {
  //     fetch(`${process.env.NEXT_PUBLIC_API_URL}/company/cv/change-status`, {
  //       method: 'PATCH',
  //       credentials: 'include', // Gửi kèm cookie
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         action: action,
  //         id: item.id,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.code == 'success') {
  //           const statusNew = cvStatusList.find(
  //             (itemStatus) => itemStatus.value === action
  //           );
  //           setStatus(statusNew);
  //         }
  //       });
  //   };
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Đã duyệt':
        return 'bg-emerald-50 text-emerald-600 border border-emerald-200';
      case 'Từ chối':
        return 'bg-red-50 text-red-600 border border-red-200';
      default:
        return 'bg-amber-50 text-amber-600 border border-amber-200';
    }
  };
  const candidates = [
    {
      id: 1,
      jobTitle: 'Frontend Developer',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@example.com',
      appliedAt: '20/04/2025',
      status: 'Chưa duyệt', // 'Chưa duyệt' | 'Đã duyệt' | 'Từ chối'
    },
    {
      id: 2,
      jobTitle: 'Backend Engineer',
      name: 'Trần Thị B',
      email: 'tranthib@example.com',
      appliedAt: '18/04/2025',
      status: 'Đã duyệt',
    },
    {
      id: 3,
      jobTitle: 'Fullstack Developer',
      name: 'Lê Văn C',
      email: 'levanc@example.com',
      appliedAt: '16/04/2025',
      status: 'Từ chối',
    },
  ];
  return (
    <>
      <div
        key={item.id}
        className="px-5 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm"
      >
        {/* Info */}
        <div className="flex-1">
          <p className="font-semibold text-gray-900">{item.jobTitle}</p>
          <p className="text-xs text-gray-600">
            Ứng viên:{' '}
            <span className="font-semibold text-gray-800">{item.name}</span> ·{' '}
            {item.email}
          </p>
          <p className="text-[11px] text-gray-400 mt-1">
            Ngày ứng tuyển: {item.appliedAt}
          </p>
        </div>

        {/* Status + actions */}
        <div className="flex flex-col md:items-end gap-2 min-w-[220px]">
          <span
            className={`inline-flex px-3 py-1 rounded-full text-[11px] font-medium ${getStatusClass(
              item.status
            )}`}
          >
            Trạng thái: {item.status}
          </span>

          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-xs rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">
              Xem CV
            </button>

            {/* 2 nút đổi trạng thái  */}
            <button className="px-3 py-1.5 text-xs rounded-md bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition">
              Đã duyệt
            </button>
            <button className="px-3 py-1.5 text-xs rounded-md bg-red-500 text-white font-semibold hover:bg-red-600 transition">
              Từ chối
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
