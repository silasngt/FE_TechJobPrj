'use client';
import JustValidate from 'just-validate';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast, Toaster } from 'sonner';
export const FormLoginCompany = () => {
  const router = useRouter();
  useEffect(() => {
    const validator = new JustValidate('#loginCompanyForm');

    validator
      .addField('#email', [
        {
          rule: 'required',
          errorMessage: 'Vui lòng nhập email của bạn!',
        },
        {
          rule: 'email',
          errorMessage: 'Email không đúng định dạng!',
        },
      ])
      .addField('#password', [
        {
          rule: 'required',
          errorMessage: 'Vui lòng nhập mật khẩu!',
        },
        {
          validator: (value: string) => value.length >= 8,
          errorMessage: 'Mật khẩu phải chứa ít nhất 8 ký tự!',
        },
        {
          validator: (value: string) => /[A-Z]/.test(value),
          errorMessage: 'Mật khẩu phải chứa ít nhất một chữ cái in hoa!',
        },
        {
          validator: (value: string) => /[a-z]/.test(value),
          errorMessage: 'Mật khẩu phải chứa ít nhất một chữ cái thường!',
        },
        {
          validator: (value: string) => /\d/.test(value),
          errorMessage: 'Mật khẩu phải chứa ít nhất một chữ số!',
        },
        {
          validator: (value: string) => /[@$!%*?&]/.test(value),
          errorMessage: 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt!',
        },
      ])
      .onSuccess((event: any) => {
        const email = event.target.email.value;
        const password = event.target.password.value;

        const dataFinal = {
          email: email,
          password: password,
        };

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/companies/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataFinal),
          credentials: 'include', // Quan trọng: Giữ cookie
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.success === false) {
              toast.error(res.message);
            }

            if (res.success === true) {
              router.push('/');
              // cookieStore.set('token', res.data.accessToken);
            }
          });
      });
  }, []);

  return (
    <>
      <Toaster richColors position="top-right" />
      <form id="loginCompanyForm" className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Mật khẩu
          </label>
          <input
            type="password"
            placeholder="Enter password"
            id="password"
            name="password"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-3 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold py-3 rounded-lg shadow-md transition"
        >
          Đăng nhập
        </button>
      </form>
    </>
  );
};
