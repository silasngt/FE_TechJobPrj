'use client';
import { workingFormList } from '@/src/config/workingForm';
import { ItemCvUser } from './ItemCvUser';
import { useEffect, useState } from 'react';
import { cvStatusList } from '@/src/config/cvList';

export const ListCvUser = () => {
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
  });
  const handleDeleteSuccess = (deleteid: string) => {
    setListCV((prev: any) => ({
      ...prev,
      cvs: prev.cvs.filter((cv: any) => cv._id !== deleteid),
    }));
  };
  return (
    <>
      {listCV && (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              Tổng số CV đã nộp: {listCV.totalCV}
            </h3>
          </div>
          {listCV.cvs.map((item: any) => {
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

          {listCV.cvs.length === 0 && (
            <div className="mt-6 text-sm text-gray-500">
              Bạn chưa ứng tuyển công việc nào.
            </div>
          )}
        </div>
      )}
    </>
  );
};
