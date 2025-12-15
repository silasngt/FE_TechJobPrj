'use client';
import JustValidate from 'just-validate';
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'sonner';

export const FormEditCv = (props: { id: string }) => {
  const { id } = props;
  const [detailCv, setDetailCv] = useState<any>();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/cvs/me/${id}`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          setDetailCv(res.data);
        }
      });
  });
  // Xử lý validate form
  useEffect(() => {
    if (detailCv) {
      const validator = new JustValidate('#formEditCvUser');

      validator
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
    }
  }, [detailCv]);
  // Xử lý submit form

  const handleSubmit = (event: any) => {
    if (isValid) {
      const fullName = event.target.fullName.value;
      const email = event.target.email.value;
      const phone = event.target.phone.value;
      const fileCV = event.target.fileCV.files[0];
      // Tạo FormData
      const formData = new FormData();
      formData.append('fullName', fullName);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('fileCV', fileCV);

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/cvs/${id}`, {
        method: 'PATCH',
        body: formData,
        credentials: 'include',
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.success === false) {
            toast.error(res.message);
          }
          if (res.success === true) {
            toast.success(res.message);
          }
        });
    }
  };

  return (
    <>
      <Toaster richColors position="top-right" />
      {detailCv && (
        <form
          id="formEditCvUser"
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
              value={detailCv.fullName}
              defaultValue={detailCv.fullName}
              name="fullName"
              id="fullName"
              readOnly
              className="h-10 px-3 rounded-md border border-gray-200 bg-gray-100 text-gray-600 text-sm cursor-not-allowed"
            />
          </div>

          {/* Email (readonly) */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              defaultValue={detailCv.email}
              readOnly
              className="h-10 px-3 rounded-md border border-gray-200 bg-gray-100 text-gray-600 text-sm cursor-not-allowed"
            />
          </div>

          {/* Phone  */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-700">
              Số điện thoại
            </label>
            <input
              type="tel"
              defaultValue={detailCv.phone}
              name="phone"
              id="phone"
              className="h-10 px-3 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Nhập số điện thoại liên hệ"
            />
          </div>

          {/* Attach resume */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-700">
              CV Hiện tại
            </label>
            <iframe src={detailCv.fileCV} className="w-full h-64"></iframe>
            <input
              type="file"
              name="fileCV"
              id="fileCV"
              accept="application/pdf"
              className=""
            />
          </div>

          {/* Actions */}
          <div className="pt-2 flex justify-end gap-3">
            <a
              href="/user-manage/cv/list"
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
      )}
    </>
  );
};
