import { SiderUser } from '@/src/app/components/sider-bar/SiderUser';
import { FcAddRow, FcDocument } from 'react-icons/fc';
import { CvUserRecent } from './CvUserRecent';
import Link from 'next/link';
import { UserStatis } from './UserStatis';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Bảng điều khiển người dùng - TechJob',
  description: 'Tổng quan nhanh về các hoạt động tìm việc của bạn.',
};
export default function UserDashBoard() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] flex">
      {/* SIDEBAR */}
      <SiderUser />

      {/* MAIN CONTENT */}
      <main className="flex-1 px-10 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Bảng điều khiển người dùng
            </h2>
            <p className="text-sm text-gray-500">
              Tổng quan nhanh về các hoạt động tìm việc của bạn.
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
        <UserStatis />

        {/* Hiển thị CV đã ứng tuyển và một số thao tác nhanh */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Applications */}
          <CvUserRecent />

          {/* Quick actions / reminders */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Hành động nhanh
              </h3>
              <div className="space-y-2 text-sm flex flex-wrap">
                <Link
                  href={'/user-manage/profile'}
                  className="w-full text-left px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50"
                >
                  <FcAddRow className="inline-flex mx-[5px] text-[16px]" /> Cập
                  nhật hồ sơ công khai của bạn
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Mẹo cho bạn
              </h3>
              <p className="text-xs text-gray-500 mb-2">
                Giữ hồ sơ của bạn được cập nhật và điều chỉnh CV cho từng công
                việc để tăng cơ hội thành công.
              </p>
              <button className="text-xs text-emerald-600 hover:underline">
                Đọc thêm mẹo nghề nghiệp
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
