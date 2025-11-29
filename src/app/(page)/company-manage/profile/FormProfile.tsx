'use client';
import { useAuth } from '@/src/hooks/useAuth';
import JustValidate from 'just-validate';
import { useEffect, useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { Toaster, toast } from 'sonner';
import { useRef } from 'react';

// Đăng ký plugin
registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);
export const FormProfileCompany = () => {
  const { infoCompany } = useAuth();
  const [logos, setLogos] = useState<any[]>([]);
  const [cityList, setCityList] = useState<any[]>([]);
  const [isValid, setIsValid] = useState(false);
  const editorRef = useRef(null);
  console.log('infoCompany', infoCompany);

  // Do danh sách thành phố thì không bao giờ đổi nên chỉ chạy vào đây 1 lần để lấy ra ds thành phố, ds tp là cố định
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/cities`, {})
      .then((res) => res.json())
      .then((res) => {
        setCityList(res.data);
      });
  }, []);

  useEffect(() => {
    if (infoCompany) {
      if (infoCompany.logo) {
        setLogos([
          {
            source: infoCompany.logo,
          },
        ]);
      }

      const validator = new JustValidate('#formProfileCompany');

      validator
        .addField('#companyName', [
          {
            rule: 'required',
            errorMessage: 'Vui lòng nhập tên công ty!',
          },
          {
            rule: 'maxLength',
            value: 200,
            errorMessage: 'Tên công ty không được vượt quá 200 ký tự!',
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
        .onFail(() => {
          setIsValid(false);
        })
        .onSuccess(() => {
          setIsValid(true);
        });
    }
  }, [infoCompany]);
  // Xử lý khi submit
  const handleSubmit = (event: any) => {
    if (isValid) {
      const companyName = event.target.companyName.value;
      const city = event.target.city.value;
      const address = event.target.address.value;
      const companyModel = event.target.companyModel.value;
      const companyEmployees = event.target.companyEmployees.value;
      const workingTime = event.target.workingTime.value;
      const workOvertime = event.target.workOvertime.value;
      const email = event.target.email.value;
      const phone = event.target.phone.value;
      let description = '';
      if (editorRef.current) {
        description = (editorRef.current as any).getContent();
      }

      let logo = null;
      if (logos.length > 0) {
        logo = logos[0].file;
      }

      // Tạo FormData
      const formData = new FormData();
      formData.append('companyName', companyName);
      formData.append('city', city);
      formData.append('address', address);
      formData.append('companyModel', companyModel);
      formData.append('companyEmployees', companyEmployees);
      formData.append('workingTime', workingTime);
      formData.append('workOvertime', workOvertime);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('description', description);
      formData.append('logo', logo);

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/company/profile`, {
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
    }
  };
  return (
    <>
      <Toaster richColors position="top-right" />
      {infoCompany && (
        <form
          // onSubmit={handleSubmit}
          id="formProfileCompany"
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
                  id="companyName"
                  required
                  defaultValue={infoCompany.companyName}
                  placeholder="VD: Công ty TNHH ABC"
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
                  name="address"
                  id="address"
                  required
                  defaultValue={infoCompany.address}
                  placeholder="VD: 123 Đường ABC, Phường XYZ, Quận 1"
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
                  name="phone"
                  id="phone"
                  required
                  defaultValue={infoCompany.phone}
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
                  name="email"
                  id="email"
                  defaultValue={infoCompany.email}
                  required
                  placeholder="hr@company.com"
                  className="h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                />
              </div>
              {/* Nhân sự công ty */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-700">
                  Quy mô công ty <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyEmployees"
                  id="companyEmployees"
                  defaultValue={infoCompany.companyEmployees}
                  required
                  placeholder="VD: 50-100 nhân viên"
                  className="h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                />
              </div>
              {/* Thành phố  */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-700">
                  Thành phố <span className="text-red-500">*</span>
                </label>
                <select
                  name="city"
                  defaultValue={infoCompany.city}
                  id="city"
                  className="h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                >
                  <option value="">Tất cả thành phố</option>
                  {cityList && cityList.length > 0 ? (
                    cityList.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.cityName}
                      </option>
                    ))
                  ) : (
                    <option>Đang tải...</option>
                  )}
                </select>
              </div>
              {/* Mô hình công ty */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-700">
                  Mô hình công ty <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyModel"
                  id="companyModel"
                  defaultValue={infoCompany.companyModel}
                  required
                  placeholder="VD: Product-based, Service-based"
                  className="h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                />
              </div>
              {/* Thời gian làm việc */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-700">
                  Thời gian làm việc <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="workingTime"
                  id="workingTime"
                  defaultValue={infoCompany.workingTime}
                  required
                  placeholder="VD: Thứ 2 - Thứ 6, 8:00 - 17:00"
                  className="h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                />
              </div>
              {/* Làm việc ngoài giờ */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-700">
                  Làm việc ngoài giờ <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="workOverTime"
                  id="workOverTime"
                  required
                  defaultValue={infoCompany.workOvertime}
                  placeholder="VD: Thỉnh thoảng"
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
      )}
    </>
  );
};
