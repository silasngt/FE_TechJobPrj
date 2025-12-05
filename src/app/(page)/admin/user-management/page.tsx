// src/app/admin/users/page.tsx
'use client';

import { useState } from 'react';
import { SiderAdmin } from '@/src/app/components/sider-bar/SiderAdmin';
import { Toaster, toast } from 'sonner';

interface AdminUser {
  id: string;
  avatar?: string;
  fullName: string;
  email: string;
  totalAppliedJobs: number;
  isBlocked: boolean;
}

export default function AdminUserManagementPage() {
  const [users, setUsers] = useState<AdminUser[]>([
    {
      id: 'u1',
      avatar: '',
      fullName: 'Nguyễn Văn A',
      email: 'nguyenvana@example.com',
      totalAppliedJobs: 12,
      isBlocked: false,
    },
    {
      id: 'u2',
      avatar: '',
      fullName: 'Trần Thị B',
      email: 'tranthib@example.com',
      totalAppliedJobs: 3,
      isBlocked: true,
    },
  ]);

  const handleToggleBlock = (id: string) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, isBlocked: !u.isBlocked } : u))
    );

    toast.success('Cập nhật trạng thái tài khoản user (mock).');
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex">
      <Toaster richColors position="top-right" />
      <SiderAdmin />

      <main className="flex-1 px-10 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              User Management
            </h2>
            <p className="text-sm text-gray-500">
              Quản lý danh sách user và trạng thái tài khoản.
            </p>
          </div>
        </div>

        {/* List */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-sm font-semibold text-gray-900">
              Danh sách người dùng
            </h3>
            <span className="text-xs text-gray-500">
              Tổng: {users.length} user
            </span>
          </div>

          <div className="divide-y divide-gray-100">
            {users.map((user) => (
              <div
                key={user.id}
                className="px-5 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm"
              >
                {/* Left */}
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600 overflow-hidden">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.fullName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      user.fullName.charAt(0)
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {user.fullName}
                    </p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>

                {/* Right */}
                <div className="flex flex-col md:items-end gap-2 min-w-[220px]">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600">
                    <p>
                      Số job đã ứng tuyển:{' '}
                      <span className="font-semibold">
                        {user.totalAppliedJobs}
                      </span>
                    </p>
                    <span
                      className={`inline-flex px-2 py-1 rounded-full text-[11px] font-semibold ${
                        user.isBlocked
                          ? 'bg-red-50 text-red-600 border border-red-200'
                          : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                      }`}
                    >
                      {user.isBlocked ? 'Đã khóa' : 'Đang hoạt động'}
                    </span>
                  </div>

                  <button
                    onClick={() => handleToggleBlock(user.id)}
                    className={`px-3 py-1.5 text-xs rounded-md font-semibold transition ${
                      user.isBlocked
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                        : 'bg-red-500 text-white hover:bg-red-600'
                    }`}
                  >
                    {user.isBlocked ? 'Mở khóa tài khoản' : 'Khóa tài khoản'}
                  </button>
                </div>
              </div>
            ))}

            {users.length === 0 && (
              <div className="px-5 py-6 text-sm text-gray-500">
                Chưa có người dùng nào.
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
