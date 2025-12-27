import { SiderCompany } from '@/src/app/components/sider-bar/SiderCompany';
import { FcAddRow } from 'react-icons/fc';
import { JobList } from './JobList';
import { Metadata } from 'next';
export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Quản lý tin tuyển dụng - TechJob',
  description: 'Quản lý và xem các tin tuyển dụng của công ty bạn.',
};
export default function CompanyJobManage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] flex">
      {/* SIDEBAR */}
      <SiderCompany />

      {/* MAIN CONTENT */}
      <main className="flex-1 px-10 py-8">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Quản lý tin tuyển dụng
            </h2>
            <p className="text-sm text-gray-500">
              Xem, chỉnh sửa và đăng mới các tin tuyển dụng của công ty.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="/company-manage/job/create"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md bg-emerald-500 text-white hover:bg-emerald-600 transition"
            >
              <FcAddRow className="text-[18px]" />
              Đăng tin tuyển dụng mới
            </a>
            <a
              href="/"
              className="px-4 py-2 text-sm border border-emerald-500 text-emerald-600 rounded-md hover:bg-emerald-50"
            >
              Quay lại trang chủ
            </a>
          </div>
        </div>

        {/* Job list */}
        <JobList />
      </main>
    </div>
  );
}
