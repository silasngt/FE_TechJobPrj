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
  const [detailProfile, setDetailProfile] = useState<any>(null);
  const [avatars, setAvatars] = useState<any>([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.success === true) {
          setDetailProfile(res.data);
        }
        if (res.success === false) {
          toast.error(res.message);
        }
      });
  });
  useEffect(() => {
    if (detailProfile) {
      if (detailProfile.avatar) {
        setAvatars([
          {
            source: detailProfile.avatar,
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
  }, [detailProfile]);

  // Xử lý khi submit
  const handleSubmit = (event: any) => {
    // event.preventDefault();
    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const gender = event.target.gender.value;
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
    formData.append('gender', gender);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
      method: 'PATCH',
      body: formData,
      credentials: 'include', // Gửi kèm cookie
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.success === false) {
          toast.error(res.message);
        }
        if (res.success === true) {
          toast.success(res.message);
        }
      });
  };

  return (
    <>
      <Toaster richColors position="top-right" />
      {infoUser && detailProfile && (
        <form
          id="formProfileUser"
          onSubmit={handleSubmit}
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

              {/* Ô upload */}
              <div className="flex-1 flex flex-col sm:flex-row items-center gap-6">
                {/* Logo hiện tại (placeholder) */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-semibold">
                    <img
                      src={detailProfile?.avatar}
                      alt={detailProfile?.fullName}
                    />
                  </div>
                  <p className="text-[11px] text-gray-400">
                    Xem trước logo hiện tại
                  </p>
                </div>

                {/* Ô upload */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-700">
                    Tải lên logo mới
                  </label>
                  <FilePond
                    name="avatar"
                    allowMultiple={false} //Chỉ chọn 1 ảnh
                    allowRemove={true} //Cho phép xóa ảnh
                    labelIdle="+"
                    acceptedFileTypes={['image/*']}
                    files={avatars}
                    onupdatefiles={setAvatars}
                  />
                  <p className="text-[11px] text-gray-400">
                    Định dạng: JPG, PNG. Kích thước tối đa 5MB.
                  </p>
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
                  Họ và tên
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  defaultValue={detailProfile.fullName}
                  className="h-10 px-3 rounded-md border border-gray-300 focus:ring-emerald-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-700">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  defaultValue={detailProfile?.phone}
                  className="h-10 px-3 rounded-md border border-gray-300 focus:ring-emerald-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue={detailProfile.email}
                  className="h-10 px-3 rounded-md border border-gray-300 focus:ring-emerald-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-700">
                  Giới tính *
                </label>
                <select
                  name="gender"
                  defaultValue={detailProfile.gender}
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
