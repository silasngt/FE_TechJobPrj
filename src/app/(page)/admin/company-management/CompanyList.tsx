'use client';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { CompanyItem } from './CompanyItem';
import { PaginationRole } from '@/src/app/components/pagination/PaginationRole';

export const CompanyList = () => {
  const [dataCompanies, setDataCompanies] = useState<any>({
    totalCompany: 0,
    company: [],
  });
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/companies/all`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.success === true) {
          setDataCompanies(res.data);
        }
      });
  });
  const handleDeleteSuccess = (deleteid: string) => {
    // setListCV((prev: any) => ({
    //   ...prev,
    //   cvs: prev.cvs.filter((cv: any) => cv.id !== deleteid),
    // }));
  };
  // console.log(dataCompanies);
  return (
    <>
      <section className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-sm font-semibold text-gray-900">
            Danh sách công ty
          </h3>
          <span className="text-xs text-gray-500">
            Tổng: {dataCompanies.totalCompany} công ty
          </span>
        </div>

        <div className="divide-y divide-gray-100">
          {dataCompanies.company.length > 0 ? (
            dataCompanies.company.map((item: any, index: number) => (
              <CompanyItem
                key={index}
                item={item}
                onDeleteSuccess={handleDeleteSuccess}
              />
            ))
          ) : (
            <div className="px-5 py-6 text-sm text-gray-500">
              Chưa có công ty nào.
            </div>
          )}
        </div>
      </section>
      <PaginationRole totalPage={0} page={0} />
    </>
  );
};
