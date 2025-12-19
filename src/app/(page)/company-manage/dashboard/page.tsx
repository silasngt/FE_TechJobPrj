import { SiderCompany } from '@/src/app/components/sider-bar/SiderCompany';
import { FcAddRow, FcDocument } from 'react-icons/fc';
import { CompanyStatis } from './CompanyStatis';
import { CvCompanyRecent } from './CvCompanyRecent';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Bảng điều khiển công ty - TechJob',
  description: 'Tổng quan nhanh về hoạt động tuyển dụng của công ty bạn.',
};
export default function CompanyDashBoard() {
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
              Bảng điều khiển công ty
            </h2>
            <p className="text-sm text-gray-500">
              Tổng quan nhanh về hoạt động tuyển dụng của công ty bạn.
            </p>
          </div>
          <a
            href="/"
            className="px-4 py-2 text-sm border border-emerald-500 text-emerald-600 rounded-md hover:bg-emerald-50"
          >
            Quay lại trang chủ
          </a>
        </div>

        {/* Thống kê */}
        <CompanyStatis />

        {/* Hiển thị các CV ứng tuyển vào công ty gần đây */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <CvCompanyRecent />

          {/* Quick actions / reminders */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Hành động nhanh
              </h3>
              <div className="space-y-2 text-sm flex flex-wrap">
                <a
                  href="/company-manage/job/create"
                  className="w-full text-left px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 cursor-pointer"
                >
                  <FcAddRow className="inline-flex mx-[5px] text-[16px]" /> Đăng
                  tin tuyển dụng mới
                </a>
                <a
                  href="/company-manage/cv/list"
                  className="w-full text-left px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 cursor-pointer"
                >
                  <FcDocument className="inline-flex mx-[5px] text-[16px]" />{' '}
                  Xem & quản lý hồ sơ ứng viên
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Mẹo cho nhà tuyển dụng
              </h3>
              <p className="text-xs text-gray-500 mb-2">
                Viết mô tả công việc rõ ràng, yêu cầu cụ thể và phúc lợi hấp dẫn
                sẽ giúp thu hút nhiều ứng viên chất lượng hơn.
              </p>
              <button className="text-xs text-emerald-600 hover:underline">
                Đọc thêm mẹo tuyển dụng
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
