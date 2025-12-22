'use client';
import { useEffect, useState } from 'react';
import { CVItem } from './CVItem';
import { useRouter, useSearchParams } from 'next/navigation';

export const CVList = () => {
  const [listCV, setListCV] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const status = searchParams.get('status') || '';
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/cvs/all?status=${status}&page=${page}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          // console.log(res);
          setListCV(res.dataCV);
          setTotalPage(res.totalPageCV || 0);
        }
      });
  }, [status, page]);
  const handleDeleteSuccess = (deleteid: string) => {
    setListCV((prev: any) => prev.filter((cv: any) => cv.id !== deleteid));
  };

  const handleFilterStatus = (event: any) => {
    event.preventDefault();
    const value = event.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set('status', value);
    } else {
      params.delete('status');
    }
    router.push(`?${params.toString()}`);
  };
  const handlePagination = (event: any) => {
    const value = event.target.value;
    setPage(parseInt(value));
  };
  return (
    <>
      {/* Filter   */}
      <div className="mb-4 flex flex-wrap gap-3 items-center">
        <select
          onChange={handleFilterStatus}
          className="h-9 px-3 rounded-md border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        >
          <option value="">Tất cả trạng thái</option>
          <option value="Pending">Chưa duyệt</option>
          <option value="Accepted">Đã duyệt</option>
          <option value="Rejected">Từ chối</option>
        </select>
      </div>
      <section className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-sm font-semibold text-gray-900">Danh sách CV</h3>
          <span className="text-xs text-gray-500">
            Tổng: {listCV.length} ứng viên
          </span>
        </div>

        <div className="divide-y divide-gray-100">
          {listCV.length > 0 ? (
            listCV.map((item: any, index: number) => (
              <CVItem
                key={item._id}
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
      {totalPage > 0 && (
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
