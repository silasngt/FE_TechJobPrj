'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast, Toaster } from 'sonner';

export const FormLoginAdmin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    const dataFinal = {
      email: email,
      password: password,
    };
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataFinal),
      credentials: 'include', // Giữ cookie
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('Response data:', res);
        if (res.success === false && res.data.user.role !== 'admin') {
          toast.error('Tài khoản và mật khẩu không hợp lệ');
          setIsLoading(true);
        }

        if (res.success === true && res.data.user.role === 'admin') {
          router.push('/admin/dashboard');
          setIsLoading(false);
          // cookieStore.set('token', res.data.accessToken);
        }
      });
  };
  return (
    <>
      <Toaster richColors position="top-right" />
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
    </>
  );
};
