import { SiderUser } from '@/src/app/components/sider-bar/SiderUser';
import { FormProfileUser } from './FormProfile';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Hồ sơ công khai - TechJob',
  description: 'Quản lý hồ sơ công khai của bạn tại TechJob.',
};
export default function UserProfilePage() {
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
        <FormProfileUser />
        {/* FORM END */}
      </div>
    </div>
  );
}
