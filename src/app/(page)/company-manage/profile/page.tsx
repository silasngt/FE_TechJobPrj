'use client';

import { FormEvent } from 'react';
import { SiderCompany } from '@/src/app/components/sider-bar/SiderCompany';

export default function CompanyProfilePage() {
  //   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     const formData = new FormData(e.currentTarget);

  //     // Ví dụ lấy dữ liệu gửi BE
  //     console.log({
  //       logo: formData.get('logo'),
  //       name: formData.get('companyName'),
  //       phone: formData.get('companyPhone'),
  //       address: formData.get('companyAddress'),
  //       email: formData.get('companyEmail'),
  //     });

  //     // TODO: gọi API cập nhật hồ sơ công ty ở đây
  //   };

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex">
      {/* SIDEBAR */}
      <SiderCompany />

      {/* MAIN CONTENT */}
      <main className="flex-1 px-10 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Hồ sơ công ty
            </h2>
            <p className="text-sm text-gray-500">
              Cập nhật một số thông tin cơ bản của công ty.
            </p>
          </div>
          <a
            href="/"
            className="px-4 py-2 text-sm border border-emerald-500 text-emerald-600 rounded-md hover:bg-emerald-50 transition"
          >
            Quay lại trang chủ
          </a>
        </div>

        {/* FORM */}
        <form
          // onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8"
        >
          {/* Company Logo */}
          <section className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              Logo công ty
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Logo sẽ được hiển thị trên trang hồ sơ công ty và các tin tuyển
              dụng.
            </p>

            <div className="flex flex-col md:flex-row md:items-center gap-6 border-t border-gray-100 pt-4">
              {/* Mô tả bên trái */}
              <div className="text-sm text-gray-600 md:w-1/3">
                <p className="font-semibold text-gray-900 mb-1">
                  Logo của công ty
                </p>
                <p className="text-xs text-gray-500">
                  Nên sử dụng logo nền trong, tỉ lệ vuông để hiển thị đẹp nhất.
                </p>
              </div>

              {/* Logo + upload bên phải */}
              <div className="flex-1 flex flex-col sm:flex-row items-center gap-6">
                {/* Logo hiện tại (placeholder) */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-semibold">
                    LOGO
                  </div>
                  <p className="text-[11px] text-gray-400">
                    Xem trước logo hiện tại
                  </p>
                </div>

                {/* Ô upload */}
                <div className="flex-1">
                  <label className="block w-full rounded-lg border-2 border-dashed border-indigo-300 bg-indigo-50/40 py-6 px-4 text-center cursor-pointer hover:bg-indigo-50 transition">
                    <div className="text-indigo-500 mb-1 text-xl">📤</div>
                    <p className="text-xs text-gray-700">
                      <span className="font-semibold text-indigo-600">
                        Chọn file logo
                      </span>{' '}
                      hoặc kéo & thả vào đây
                    </p>
                    <p className="text-[11px] text-gray-400 mt-1">
                      Hỗ trợ: PNG, JPG, SVG (tối đa 2MB)
                    </p>
                    <input
                      type="file"
                      name="logo"
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Company Details */}
          <section className="pt-4 mt-4 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-900 mb-4">
              Company Details
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              {/* Tên công ty */}
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-xs font-medium text-gray-700">
                  Tên công ty <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  placeholder="VD: Công ty TNHH ABC"
                  className="h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                />
              </div>

              {/* Số điện thoại */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-700">
                  Số điện thoại công ty <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="companyPhone"
                  required
                  placeholder="+84 28 3xx xxx xx"
                  className="h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                />
              </div>

              {/* Email công ty */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-700">
                  Email công ty <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="companyEmail"
                  required
                  placeholder="hr@company.com"
                  className="h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                />
              </div>

              {/* Địa chỉ công ty */}
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-xs font-medium text-gray-700">
                  Địa chỉ công ty <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyAddress"
                  required
                  placeholder="VD: 123 Nguyễn Văn Cừ, Quận 5, TP. Hồ Chí Minh"
                  className="h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                />
              </div>
            </div>

            {/* Save button */}
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 bg-emerald-500 text-white text-sm font-semibold rounded-md hover:bg-emerald-600 transition"
              >
                Lưu thay đổi
              </button>
            </div>
          </section>
        </form>
      </main>
    </div>
  );
}
