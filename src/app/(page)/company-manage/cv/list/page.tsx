import { SiderCompany } from '@/src/app/components/sider-bar/SiderCompany';
import { CVList } from './CVList';

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

        {/* Filter / search  */}
        <div className="mb-4 flex flex-wrap gap-3 items-center">
          <input
            type="text"
            placeholder="Tìm theo tên ứng viên hoặc vị trí..."
            className="h-9 px-3 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-full md:w-72 bg-white"
          />
          <select className="h-9 px-3 rounded-md border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
            <option value="">Tất cả trạng thái</option>
            <option value="Chưa duyệt">Chưa duyệt</option>
            <option value="Đã duyệt">Đã duyệt</option>
            <option value="Từ chối">Từ chối</option>
          </select>
        </div>

        {/* List CV */}
        <CVList />
      </main>
    </div>
  );
}
