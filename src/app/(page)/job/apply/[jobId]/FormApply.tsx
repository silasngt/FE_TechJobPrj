'use client';
import JustValidate from 'just-validate';
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'sonner';

export const FormApply = (props: { jobId: string }) => {
  const { jobId } = props;
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const validator = new JustValidate('#formApply');

    validator
      .addField('#fullName', [
        {
          rule: 'required',
          errorMessage: 'Vui lòng nhập họ tên!',
        },
        {
          rule: 'minLength',
          value: 5,
          errorMessage: 'Vui lòng nhập ít nhất 5 ký tự!',
        },
        {
          rule: 'maxLength',
          value: 50,
          errorMessage: 'Vui lòng nhập tối đa 50 ký tự!',
        },
      ])
      .addField('#email', [
        {
          rule: 'required',
          errorMessage: 'Vui lòng nhập email!',
        },
        {
          rule: 'email',
          errorMessage: 'Email không đúng định dạng!',
        },
      ])
      .addField('#phone', [
        {
          rule: 'required',
          errorMessage: 'Vui lòng nhập số điện thoại!',
        },
        {
          rule: 'customRegexp',
          value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
          errorMessage: 'Số điện thoại không đúng định dạng!',
        },
      ])
      .addField('#fileCV', [
        {
          rule: 'minFilesCount',
          value: 1,
          errorMessage: 'Vui lòng nhập file CV!',
        },
        {
          rule: 'files',
          value: {
            files: {
              extensions: ['pdf'],
              maxSize: 5 * 1024 * 1024,
              minSize: 0,
              types: ['application/pdf'],
            },
          },
          errorMessage: 'Dung lượng file không được vượt quá 5MB!',
        },
      ])
      .onFail(() => {
        setIsValid(false);
      })
      .onSuccess(() => {
        setIsValid(true);
      });
  }, []);
  const handleSubmit = (event: any) => {
    if (isValid) {
      const fullName = event.target.fullName.value;
      const email = event.target.email.value;
      const phone = event.target.phone.value;
      const fileCV = event.target.fileCV.files[0];
      // Tạo FormData
      const formData = new FormData();
      formData.append('jobId', jobId);
      formData.append('fullName', fullName);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('fileCV', fileCV);

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/cvs`, {
        method: 'POST',
        body: formData,
        credentials: 'include',
      })
        .then((res) => res.json())
        .then((res) => {
          // console.log(res);
          if (res.success === false) {
            toast.error(res.message);
          }

          if (res.success === true) {
            toast.success(res.message);
            event.target.reset();
          }
        });
    }
  };
  return (
    <>
      <Toaster richColors position="top-right" />
      <form
        onSubmit={handleSubmit}
        id="formApply"
        className="space-y-4 text-sm"
      >
        {/* Full name */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-700">
            Họ và tên <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            required
            placeholder="Nhập họ và tên của bạn"
            className="h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Nhập địa chỉ email"
            className="h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-700">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            placeholder="Nhập số điện thoại liên hệ"
            className="h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        {/* Attach resume */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-700">
            Đính kèm CV <span className="text-red-500">*</span>
          </label>
          <label className="mt-1 flex items-center justify-center w-full h-24 border-2 border-dashed border-emerald-200 rounded-lg bg-emerald-50/40 cursor-pointer hover:bg-emerald-50 transition">
            <div className="text-center">
              <p className="text-xs font-medium text-emerald-700">
                Nhấn để chọn CV hoặc kéo thả vào đây
              </p>
              <p className="text-[11px] text-gray-500 mt-1">
                Hỗ trợ PDF, DOC, DOCX · Tối đa 5MB
              </p>
            </div>
            <input
              type="file"
              name="fileCV"
              id="fileCV"
              accept="application/pdf"
              className="hidden"
            />
          </label>
        </div>

        {/* Terms */}
        <p className="text-[11px] text-gray-500 mt-3">
          Bằng cách gửi đơn, bạn xác nhận rằng bạn đồng ý với{' '}
          <a href="#" className="text-emerald-600 hover:underline">
            Điều khoản sử dụng
          </a>{' '}
          và{' '}
          <a href="#" className="text-emerald-600 hover:underline">
            Chính sách bảo mật
          </a>{' '}
          của TechJob.
        </p>

        {/* Actions */}
        <div className="mt-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <a
            href={`/job/detail/${jobId}`}
            className="order-2 md:order-1 text-xs text-gray-500 hover:text-emerald-600 underline-offset-2 hover:underline"
          >
            ← Quay lại trang chi tiết công việc
          </a>

          <button
            type="submit"
            className="order-1 md:order-2 w-full md:w-auto px-6 py-2.5 bg-emerald-500 text-white text-sm font-semibold rounded-md hover:bg-emerald-600 transition"
          >
            Gửi đơn ứng tuyển
          </button>
        </div>
      </form>
    </>
  );
};
