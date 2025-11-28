import { SiderUser } from '@/src/app/components/sider-bar/SiderUser';

export default function UserProfilePage() {
  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();

  //     const formData = new FormData(e.currentTarget);

  //     // ví dụ đọc dữ liệu:
  //     console.log({
  //       fullName: formData.get('fullName'),
  //       phone: formData.get('phone'),
  //       email: formData.get('email'),
  //       dob: formData.get('dob'),
  //       gender: formData.get('gender'),
  //     });

  //     // TODO: gọi API cập nhật BE bằng fetch hoặc axios
  //   };

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex">
      {/* SIDEBAR */}
      <SiderUser />
      <div className="flex-1 px-10 py-8 bg-[#f5f7fb] min-h-screen">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Hồ sơ công khai của tôi
            </h2>
            <p className="text-sm text-gray-500">
              Bạn có thể cập nhật thông tin bất cứ lúc nào.
            </p>
          </div>
          <a
            href="/"
            className="px-4 py-2 text-sm border border-emerald-500 text-emerald-600 rounded-md hover:bg-emerald-50 transition"
          >
            Quay lại trang chủ
          </a>
        </div>

        {/* FORM START */}
        <form className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8">
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
                  <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                    JG
                  </div>
                  <button
                    className="text-xs text-emerald-600 hover:underline"
                    type="button"
                  >
                    Thay đổi ảnh
                  </button>
                </div>

                {/* Upload */}
                <div className="flex-1">
                  <div className="w-full rounded-lg border-2 border-dashed border-indigo-300 bg-indigo-50/40 py-6 px-4 text-center">
                    📤
                    <p className="text-xs">Kéo & thả hoặc chọn ảnh tải lên</p>
                    <p className="text-[11px] text-gray-400 mt-1">
                      SVG, PNG, JPG, GIF (tối đa 400×400px)
                    </p>
                  </div>
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
                  required
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
                  required
                  className="h-10 px-3 rounded-md border border-gray-300 focus:ring-emerald-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-700">
                  Ngày sinh *
                </label>
                <input
                  type="date"
                  name="dob"
                  required
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
        {/* FORM END */}
      </div>
    </div>
  );
}
