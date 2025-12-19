import { SiderCompany } from '@/src/app/components/sider-bar/SiderCompany';
import { FormProfileCompany } from './FormProfile';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Hồ sơ công ty - TechJob',
  description: 'Cập nhật một số thông tin cơ bản của công ty.',
};
export default function CompanyProfilePage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] flex">
      {/* SIDEBAR */}
      <SiderCompany />

      {/* MAIN CONTENT */}
      <main className="flex-1 px-10 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Hồ sơ công ty
            </h2>
            <p className="text-sm text-gray-500">
              Cập nhật một số thông tin cơ bản của công ty.
            </p>
          </div>
          <a
            href="/"
            className="px-4 py-2 text-sm border border-emerald-500 text-emerald-600 rounded-md hover:bg-emerald-50 transition"
          >
            Quay lại trang chủ
          </a>
        </div>

        {/* FORM */}
        <FormProfileCompany />
      </main>
    </div>
  );
}
