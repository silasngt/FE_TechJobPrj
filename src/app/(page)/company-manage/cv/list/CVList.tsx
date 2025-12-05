'use client';
import { useEffect, useState } from 'react';
import { CVItem } from './CVItem';

export const CVList = () => {
  const [listCV, setListCV] = useState<any>({
    totalCV: 0,
    cvs: [],
  });
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/cvs/all`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          //   console.log(res);
          setListCV(res.data);
        }
      });
  }, []);
  const handleDeleteSuccess = (deleteid: string) => {
    setListCV((prev: any) => ({
      ...prev,
      cvs: prev.cvs.filter((cv: any) => cv.id !== deleteid),
    }));
  };

  console.log(listCV);
  return (
    <>
      <section className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-sm font-semibold text-gray-900">Danh sách CV</h3>
          <span className="text-xs text-gray-500">
            Tổng: {listCV.totalCV} ứng viên
          </span>
        </div>

        <div className="divide-y divide-gray-100">
          {listCV.cvs.length > 0 ? (
            listCV.cvs.map((item: any) => (
              <CVItem
                key={item.id}
                item={item}
                onDeleteSuccess={handleDeleteSuccess}
              />
            ))
          ) : (
            <div className="px-5 py-6 text-sm text-gray-500">
              Chưa có ứng viên nào ứng tuyển.
            </div>
          )}
        </div>
      </section>
    </>
  );
};
