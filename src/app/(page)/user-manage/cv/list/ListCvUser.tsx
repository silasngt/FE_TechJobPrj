'use client';
import { workingFormList } from '@/src/config/workingForm';
import { ItemCvUser } from './ItemCvUser';
import { useEffect, useState } from 'react';
import { cvStatusList } from '@/src/config/cvList';
export const dynamic = 'force-dynamic';
export const ListCvUser = () => {
  const [listCV, setListCV] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const handlePagination = (event: any) => {
    const value = event.target.value;
    setPage(parseInt(value));
  };
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/cvs/me?page=${page}`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.success === true) {
          setListCV(res.data.data);
          setTotalPage(res.data.totalPage || 0);
        }
      });
  });
  const handleDeleteSuccess = (deleteid: string) => {
    const updatedList = listCV.filter((cv: any) => cv._id !== deleteid);
    setListCV(updatedList);
  };
  return (
    <>
      {listCV && (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              Tổng số CV đã nộp: {listCV.length}
            </h3>
          </div>
          {listCV.map((item: any) => {
            const jobWorkingForm = workingFormList.find(
              (work) => work.value === item.workingForm
            )?.label;
            const status = cvStatusList.find(
              (itemStatus) => itemStatus.value === item.status
            );
            return (
              <div
                key={item._id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <ItemCvUser
                  key={item._id}
                  item={item}
                  onDeleteSuccess={handleDeleteSuccess}
                  jobWorkingForm={jobWorkingForm}
                  status={status}
                />
              </div>
            );
          })}

          {listCV.length === 0 && (
            <div className="mt-6 text-sm text-gray-500">
              Bạn chưa ứng tuyển công việc nào.
            </div>
          )}
        </div>
      )}
      {totalPage && (
        <div className="mt-[30px]">
          <select
            onChange={handlePagination}
            className="border border-[#DEDEDE] rounded-[8px] py-[12px] px-[18px] font-[400] text-[16px] text-[#414042] outline-none"
          >
            {Array(totalPage)
              .fill('')
              .map((_, index) => (
                <option key={index} value={index + 1}>
                  Trang {index + 1}
                </option>
              ))}
          </select>
        </div>
      )}
    </>
  );
};
