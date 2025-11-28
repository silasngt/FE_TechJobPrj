import { SiderCompany } from '@/src/app/components/sider-bar/SiderCompany';
import { FcAddRow, FcDocument } from 'react-icons/fc';

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

        {/* Overview cards */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <p className="text-xs text-gray-500 mb-1">Tin tuyển dụng đang mở</p>
            <p className="text-2xl font-semibold text-gray-900">8</p>
            <p className="text-xs text-emerald-600 mt-1">+2 bài đăng mới</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <p className="text-xs text-gray-500 mb-1">
              Ứng viên mới trong tuần
            </p>
            <p className="text-2xl font-semibold text-gray-900">23</p>
            <p className="text-xs text-gray-400 mt-1">
              Hãy xem và sàng lọc hồ sơ
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <p className="text-xs text-gray-500 mb-1">Lịch phỏng vấn sắp tới</p>
            <p className="text-2xl font-semibold text-gray-900">5</p>
            <p className="text-xs text-gray-400 mt-1">
              Buổi gần nhất trong 2 ngày tới
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <p className="text-xs text-gray-500 mb-1">
              Mức độ hoàn thiện hồ sơ công ty
            </p>
            <div className="flex items-center justify-between mt-1">
              <p className="text-2xl font-semibold text-gray-900">82%</p>
              <span className="text-[11px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-600">
                Đề xuất
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Cập nhật thêm mô tả công ty để đạt 100%.
            </p>
          </div>
        </section>

        {/* Middle section: Recent apps + Quick actions */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Applications */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-900">
                Ứng viên gần đây
              </h3>
              <button className="text-xs text-emerald-600 hover:underline">
                Xem tất cả ứng viên
              </button>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                {
                  title: 'Frontend Developer',
                  company: 'Ứng viên: Nguyễn Văn A',
                  status: 'Đã lên lịch phỏng vấn',
                  date: 'Apr 20, 2025',
                },
                {
                  title: 'Backend Engineer',
                  company: 'Ứng viên: Trần Thị B',
                  status: 'Đang sàng lọc',
                  date: 'Apr 18, 2025',
                },
                {
                  title: 'Fullstack Developer',
                  company: 'Ứng viên: Lê Văn C',
                  status: 'Ứng viên mới',
                  date: 'Apr 16, 2025',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="px-5 py-3 flex items-center justify-between text-sm"
                >
                  <div>
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 mb-1">{item.date}</p>
                    <span
                      className={`inline-flex px-2 py-1 rounded-full text-[11px] ${
                        item.status === 'Đã lên lịch phỏng vấn'
                          ? 'bg-blue-50 text-blue-600'
                          : item.status === 'Đang sàng lọc'
                          ? 'bg-amber-50 text-amber-600'
                          : 'bg-gray-50 text-gray-600'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick actions / reminders */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Hành động nhanh
              </h3>
              <div className="space-y-2 text-sm flex flex-wrap">
                <a className="w-full text-left px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 cursor-pointer">
                  <FcAddRow className="inline-flex mx-[5px] text-[16px]" /> Đăng
                  tin tuyển dụng mới
                </a>
                <a className="w-full text-left px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 cursor-pointer">
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

        {/* Bottom: stats */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-900">
              Hoạt động tuần này
            </h3>
            <span className="text-xs text-gray-400">7 ngày gần nhất</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-xs text-gray-500">Lượt xem tin tuyển dụng</p>
              <p className="text-lg font-semibold text-gray-900">120</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Tổng số ứng viên</p>
              <p className="text-lg font-semibold text-gray-900">37</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Tin nhắn từ ứng viên</p>
              <p className="text-lg font-semibold text-gray-900">9</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Lượt xem trang công ty</p>
              <p className="text-lg font-semibold text-gray-900">56</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
