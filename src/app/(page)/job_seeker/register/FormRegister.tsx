'use client';
import JustValidate from 'just-validate';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export const FormRegister = () => {
  const router = useRouter();
  useEffect(() => {
    const validator = new JustValidate('#registerForm');

    validator
      .addField('#fullName', [
        {
          rule: 'required',
          errorMessage: 'Vui lòng nhập họ tên!',
        },
        {
          rule: 'minLength',
          value: 5,
          errorMessage: 'Họ tên phải có ít nhất 5 ký tự!',
        },
        {
          rule: 'maxLength',
          value: 50,
          errorMessage: 'Họ tên không được vượt quá 50 ký tự!',
        },
      ])
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
        const fullName = event.target.fullName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(fullName, email, password);

        const dataFinal = {
          fullName: fullName,
          email: email,
          password: password,
        };
        console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/users/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataFinal),
        })
          .then((res) => res.json())
          .then((res: any) => {
            console.log('Response data:', res);
            if ((res.success = false)) {
              alert(res.message);
            }

            if ((res.success = true)) {
              router.push('/job_seeker/login');
            }
          });
      });
  }, []);

  return (
    <>
      <form id="registerForm" className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Full name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            id="fullName"
            name="fullName"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Email Address
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
            Password
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
          Continue
        </button>
      </form>
    </>
  );
};
