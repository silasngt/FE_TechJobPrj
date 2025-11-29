'use client';
import JustValidate from 'just-validate';
import { useEffect, useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { Toaster, toast } from 'sonner';
import { useAuth } from '@/src/hooks/useAuth';

// Đăng ký plugin
registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);

export const FormProfileUser = () => {
  const { infoUser } = useAuth();
  const [avatars, setAvatars] = useState<any>([]);

  useEffect(() => {
    if (infoUser) {
      if (infoUser.avatar) {
        setAvatars([
          {
            source: infoUser.avatar,
          },
        ]);
      }

      const validator = new JustValidate('#formProfileUser');

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
        ]);
    }
  }, [infoUser]);

  // Xử lý khi submit
  const handleSubmit = (event: any) => {
    // event.preventDefault();
    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    let avatar = null;

    if (avatars.length > 0) {
      avatar = avatars[0].file;
    }
    // console.log('Họ tên:', fullName);
    // console.log('Email:', email);
    // console.log('Số điện thoại:', phone);
    // console.log('Avatar:', avatar);

    // // Tạo FormData
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('avatar', avatar);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
      method: 'PATCH',
      body: formData,
      credentials: 'include', // Gửi kèm cookie
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.code == 'error') {
          toast.error(data.message);
        }
        if (data.code == 'success') {
          toast.success(data.message);
        }
      });
  };

  return (
    <>
      <Toaster richColors position="top-right" />
      {infoUser && (
        <form
          id="formProfileUser"
          className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8"
        >
          {/* Basic Info */}
          <section className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              Thông tin cơ bản
            </h3>
            <p className="text-xs text-gray-500">
              Thông tin này hiển thị công khai.
            </p>
          </section>

          {/* Avatar + Upload */}
          <section className="border-t border-gray-100 pt-6 pb-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="text-sm text-gray-600 md:w-1/3">
                <p className="font-semibold text-gray-900 mb-1">Ảnh đại diện</p>
                <p className="text-xs text-gray-500">
                  Ảnh đại diện giúp nhà tuyển dụng nhận ra bạn.
                </p>
              </div>

              <div className="flex flex-1 flex-col sm:flex-row items-center gap-6">
                {/* Avatar */}
                <div className="flex flex-col items-center gap-2">
                  {/* <FilePond 
                    files={avatars}
                    onupdatefiles={setAvatars}
                    allowMultiple={false}
                //   className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center"
                  >
                    JG
                  </FilePond> */}
                  <button className="text-xs text-emerald-600 hover:underline">
                    Thay đổi ảnh
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Personal detail */}
          <section className="pt-4 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-900 mb-4">
              Thông tin cá nhân
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-700">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  defaultValue={infoUser.fullName}
                  className="h-10 px-3 rounded-md border border-gray-300 focus:ring-emerald-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-700">
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  defaultValue={infoUser.phone}
                  className="h-10 px-3 rounded-md border border-gray-300 focus:ring-emerald-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  defaultValue={infoUser.email}
                  className="h-10 px-3 rounded-md border border-gray-300 focus:ring-emerald-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-700">
                  Giới tính *
                </label>
                <select
                  name="gender"
                  required
                  className="h-10 px-3 rounded-md border border-gray-300 focus:ring-emerald-500 bg-white"
                >
                  <option value="">Select gender</option>
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="other">Khác</option>
                </select>
              </div>
            </div>

            {/* Submit button */}
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 bg-emerald-500 text-white text-sm font-semibold rounded-md hover:bg-emerald-600 transition"
              >
                Cập nhật thông tin
              </button>
            </div>
          </section>
        </form>
      )}
    </>
  );
};
