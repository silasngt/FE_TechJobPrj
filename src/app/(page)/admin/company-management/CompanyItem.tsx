import { cvStatusList } from '@/src/config/cvList';
import { useState } from 'react';
import { toast } from 'sonner';

export const CompanyItem = (props: {
  item: any;
  onDeleteSuccess: (id: string) => void;
}) => {
  const { item, onDeleteSuccess } = props;

  const handleChangeStatus = () => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/companies/${item._id}/toggle`,
      {
        method: 'PATCH',
        credentials: 'include',
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.success === true) {
          toast.success(
            `${item.isDeleted ? 'Mở khóa' : 'Khóa'} công ty thành công`
          );
          onDeleteSuccess(item._id);
        }
      });
  };
  return (
    <>
      <div
        key={item._id}
        className="px-5 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm"
      >
        {/* Left */}
        <div className="flex items-center gap-3 flex-1">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600 overflow-hidden">
            {item.logo ? (
              <img
                src={item.logo}
                alt={item.companyName}
                className="w-full h-full object-cover"
              />
            ) : (
              item.companyName
            )}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{item.companyName}</p>
            <p className="text-xs text-gray-500">{item.email}</p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col md:items-end gap-2 min-w-[220px]">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600">
            <p>
              Nhân sự:{' '}
              <span className="font-semibold">{item.companyEmployees}</span>
            </p>
            <p>
              CV ứng tuyển:{' '}
              <span className="font-semibold">{item.totalCVs}</span>
            </p>
            <span
              className={`inline-flex px-2 py-1 rounded-full text-[11px] font-semibold ${
                item.isDeleted
                  ? 'bg-red-50 text-red-600 border border-red-200'
                  : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
              }`}
            >
              {item.isDeleted ? 'Đã khóa' : 'Đang hoạt động'}
            </span>
          </div>
          {/* nút đổi trạng thái  */}
          {item.isDeleted ? (
            <button
              onClick={handleChangeStatus}
              className="px-3 py-1.5 text-xs rounded-md font-semibold transition bg-emerald-500 text-white hover:bg-emerald-600"
            >
              Mở khóa tài khoản
            </button>
          ) : (
            <button
              onClick={handleChangeStatus}
              className="px-3 py-1.5 text-xs rounded-md font-semibold transition bg-red-500 text-white hover:bg-red-600"
            >
              Khóa tài khoản
            </button>
          )}
        </div>
      </div>
    </>
  );
};
