import { SiderCompany } from '@/src/app/components/sider-bar/SiderCompany';
import { FcAddRow } from 'react-icons/fc';
import { JobList } from './JobList';

export default function CompanyJobManage() {
  const getJobStatusClass = (status: string) => {
    switch (status) {
      case 'Đang mở':
        return 'bg-emerald-50 text-emerald-600 border border-emerald-200';
      default:
        return 'bg-gray-50 text-gray-600 border border-gray-200';
    }
  };

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

        {/* Filter */}
        <div className="mb-4 flex flex-wrap gap-3 items-center">
          <input
            type="text"
            placeholder="Tìm theo tên vị trí..."
            className="h-9 px-3 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-full md:w-72 bg-white"
          />
          <select className="h-9 px-3 rounded-md border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
            <option value="">Tất cả trạng thái</option>
            <option value="Đang mở">Đang mở</option>
            <option value="Đã đóng">Đã đóng</option>
          </select>
        </div>

        {/* Job list */}
        <JobList />
      </main>
    </div>
  );
}
