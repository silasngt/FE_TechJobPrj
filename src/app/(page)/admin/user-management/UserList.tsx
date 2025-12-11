'use client';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { UserItem } from './UserItem';

export const UserList = () => {
  const [listUser, setListUser] = useState<any>({
    totalUser: 0,
    user: [],
  });
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
        }
      });
  });
  const handleDeleteSuccess = (deleteid: string) => {
    // setListCV((prev: any) => ({
    //   ...prev,
    //   cvs: prev.cvs.filter((cv: any) => cv.id !== deleteid),
    // }));
  };
  return (
    <>
      <div className="px-5 py-3 border-b border-gray-100 flex justify-between items-center">
        <h3 className="text-sm font-semibold text-gray-900">
          Danh sách người dùng
        </h3>
        <span className="text-xs text-gray-500">
          Tổng: {listUser.totalUser} user
        </span>
      </div>
      <div className="divide-y divide-gray-100">
        {listUser.user.map((user: any) => (
          <div
            key={user._id}
            className="px-5 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm"
          >
            <UserItem user={user} onDeleteSuccess={handleDeleteSuccess} />
          </div>
        ))}

        {listUser.user.length === 0 && (
          <div className="px-5 py-6 text-sm text-gray-500">
            Chưa có người dùng nào.
          </div>
        )}
      </div>
    </>
  );
};
