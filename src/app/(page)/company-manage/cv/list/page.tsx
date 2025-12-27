import { SiderCompany } from '@/src/app/components/sider-bar/SiderCompany';
import { CVList } from './CVList';
import { Metadata } from 'next';
export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Quản lý CV Ứng Tuyển - TechJob',
  description:
    'Quản lý và xem các CV ứng tuyển từ ứng viên cho công ty của bạn.',
};
export default function CompanyCvManage() {
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
              Quản lý CV ứng tuyển
            </h2>
            <p className="text-sm text-gray-500">
              Xem và cập nhật trạng thái các CV mà ứng viên đã gửi vào công ty.
            </p>
          </div>
          <a
            href="/"
            className="px-4 py-2 text-sm border border-emerald-500 text-emerald-600 rounded-md hover:bg-emerald-50"
          >
            Quay lại trang chủ
          </a>
        </div>

        {/* List CV */}
        <CVList />
      </main>
    </div>
  );
}
