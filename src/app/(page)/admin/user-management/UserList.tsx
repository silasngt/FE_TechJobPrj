'use client';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { UserItem } from './UserItem';
import { PaginationRole } from '@/src/app/components/pagination/PaginationRole';

export const UserList = () => {
  const [listUser, setListUser] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/users/all`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.success === true) {
          setListUser(res.data);
          setTotalPage(res.totalPage || 0);
        }
      });
  }, [page]);
  const handleDeleteSuccess = (deleteid: string) => {
    // setListCV((prev: any) => ({
    //   ...prev,
    //   cvs: prev.cvs.filter((cv: any) => cv.id !== deleteid),
    // }));
  };
  const handlePagination = (event: any) => {
    const value = event.target.value;
    setPage(parseInt(value));
  };
  return (
    <>
      <section className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-sm font-semibold text-gray-900">
            Danh sách người dùng
          </h3>
          <span className="text-xs text-gray-500">
            Tổng: {listUser.length} user
          </span>
        </div>
        <div className="divide-y divide-gray-100">
          {listUser.length > 0 ? (
            listUser.map((item: any, index: number) => (
              <UserItem
                key={index}
                user={item}
                onDeleteSuccess={handleDeleteSuccess}
              />
            ))
          ) : (
            <div className="px-5 py-6 text-sm text-gray-500">
              Chưa có người dùng nào.
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
