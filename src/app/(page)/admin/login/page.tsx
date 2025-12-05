'use client';

import { useState } from 'react';
import { Toaster, toast } from 'sonner';

export default function AdminLoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === 'admin@techjob.com' && password === 'admin123') {
      toast.success('Đăng nhập thành công!');
      window.location.href = '/admin/dashboard';
    } else {
      toast.error('Sai email hoặc mật khẩu!');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f7fb] px-4">
      <Toaster richColors position="top-right" />

      <div className="w-full max-w-md bg-white border border-gray-200 shadow-sm rounded-lg p-8">
        {/* Logo + title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            TechJob Admin
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Đăng nhập để truy cập trang quản trị
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="admin@techjob.com"
              className="w-full h-11 px-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mật khẩu *
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full h-11 px-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-11 bg-emerald-500 text-white font-semibold rounded-md hover:bg-emerald-600 transition disabled:opacity-50"
          >
            {isLoading ? 'Đang xử lý...' : 'Đăng nhập'}
          </button>
        </form>
      </div>
    </div>
  );
}
