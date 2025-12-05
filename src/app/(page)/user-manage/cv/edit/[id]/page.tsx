'use client';

import { useEffect, useState } from 'react';
import { SiderUser } from '@/src/app/components/sider-bar/SiderUser';
import { Toaster, toast } from 'sonner';

interface UserCvInfo {
  fullName: string;
  email: string;
  phone: string;
  fileName?: string;
}

export default function UserCvEditPage() {
  const [cvInfo, setCvInfo] = useState<UserCvInfo | null>(null);
  const [fileCv, setFileCv] = useState<File | null>(null);

  useEffect(() => {
    const mockData: UserCvInfo = {
      fullName: 'Nguyễn Văn A',
      email: 'nguyenvana@example.com',
      phone: '0901234567',
      fileName: 'CV_NguyenVanA.pdf',
    };
    setCvInfo(mockData);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!cvInfo) return;

    const formData = new FormData();
    formData.append('phone', cvInfo.phone);
    if (fileCv) {
      formData.append('fileCV', fileCv);
    }

    console.log('Payload gửi lên:', {
      phone: cvInfo.phone,
      fileCv,
    });
    toast.success('Cập nhật CV (mock) thành công! Bạn gắn API thật vào nhé.');
  };

  if (!cvInfo) {
    return (
      <div className="min-h-screen bg-[#f5f7fb] flex">
        <SiderUser />
        <div className="flex-1 flex items-center justify-center text-sm text-gray-500">
          Đang tải thông tin CV...
        </div>
      </div>
    );
  }

  return (
    <>
      <Toaster richColors position="top-right" />
      <div className="min-h-screen bg-[#f5f7fb] flex">
        {/* SIDEBAR */}
        <SiderUser />

        {/* MAIN */}
        <main className="flex-1 px-10 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Chỉnh sửa CV
              </h2>
              <p className="text-sm text-gray-500">
                Cập nhật số điện thoại và file CV của bạn.
              </p>
            </div>
            <a
              href="/user-manage/applications"
              className="px-4 py-2 text-sm border border-emerald-500 text-emerald-600 rounded-md hover:bg-emerald-50 transition"
            >
              Quay lại My Applications
            </a>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8 space-y-6 max-w-2xl"
          >
            {/* Full name (readonly) */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700">
                Họ và tên
              </label>
              <input
                type="text"
                value={cvInfo.fullName}
                readOnly
                className="h-10 px-3 rounded-md border border-gray-200 bg-gray-100 text-gray-600 text-sm cursor-not-allowed"
              />
            </div>

            {/* Email (readonly) */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={cvInfo.email}
                readOnly
                className="h-10 px-3 rounded-md border border-gray-200 bg-gray-100 text-gray-600 text-sm cursor-not-allowed"
              />
            </div>

            {/* Phone (editable) */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700">
                Số điện thoại
              </label>
              <input
                type="tel"
                value={cvInfo.phone}
                onChange={(e) =>
                  setCvInfo((prev) =>
                    prev ? { ...prev, phone: e.target.value } : prev
                  )
                }
                className="h-10 px-3 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Nhập số điện thoại liên hệ"
              />
            </div>

            {/* File CV (editable) */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-gray-700">
                File CV
              </label>

              {/* CV hiện tại */}
              {cvInfo.fileName && (
                <p className="text-xs text-gray-500">
                  CV hiện tại:{' '}
                  <span className="font-semibold text-gray-700">
                    {cvInfo.fileName}
                  </span>
                </p>
              )}

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setFileCv(file);
                }}
                className="block w-full text-sm text-gray-600 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <p className="text-[11px] text-gray-400">
                Hỗ trợ PDF, DOC, DOCX. Nếu bạn không chọn file mới, CV cũ sẽ
                được giữ nguyên (tuỳ cách bạn xử lý ở BE).
              </p>
            </div>

            {/* Actions */}
            <div className="pt-2 flex justify-end gap-3">
              <a
                href="/user-manage/applications"
                className="px-4 py-2 text-sm rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
              >
                Hủy
              </a>
              <button
                type="submit"
                className="px-6 py-2.5 bg-emerald-500 text-white text-sm font-semibold rounded-md hover:bg-emerald-600 transition"
              >
                Lưu thay đổi
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
