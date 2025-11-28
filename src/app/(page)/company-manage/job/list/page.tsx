import { SiderCompany } from '@/src/app/components/sider-bar/SiderCompany';
import { FcAddRow } from 'react-icons/fc';

export default function CompanyJobManage() {
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      location: 'Hồ Chí Minh',
      postedAt: '15/04/2025',
      status: 'Đang mở', // 'Đang mở' | 'Đã đóng'
      applicants: 12,
    },
    {
      id: 2,
      title: 'Backend Engineer',
      location: 'Remote',
      postedAt: '10/04/2025',
      status: 'Đang mở',
      applicants: 7,
    },
    {
      id: 3,
      title: 'Product Manager',
      location: 'Hà Nội',
      postedAt: '01/04/2025',
      status: 'Đã đóng',
      applicants: 20,
    },
  ];

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
        <section className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-sm font-semibold text-gray-900">
              Danh sách tin tuyển dụng
            </h3>
            <span className="text-xs text-gray-500">
              Tổng: {jobs.length} tin
            </span>
          </div>

          <div className="divide-y divide-gray-100">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="px-5 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm"
              >
                {/* Info */}
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{job.title}</p>
                  <p className="text-xs text-gray-600">
                    Địa điểm:{' '}
                    <span className="font-semibold">{job.location}</span>
                  </p>
                  <p className="text-[11px] text-gray-400 mt-1">
                    Ngày đăng: {job.postedAt}
                  </p>
                </div>

                {/* Right: status, applicants, actions */}
                <div className="flex flex-col md:items-end gap-2 min-w-[230px]">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-[11px] font-medium ${getJobStatusClass(
                        job.status
                      )}`}
                    >
                      {job.status}
                    </span>
                    <span className="text-xs text-gray-500">
                      {job.applicants} ứng viên
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={`/company/jobs/${job.id}/candidates`}
                      className="px-3 py-1.5 text-xs rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
                    >
                      Xem chi tiết
                    </a>
                    <a
                      href={`/company/jobs/${job.id}/edit`}
                      className="px-3 py-1.5 text-xs rounded-md border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition"
                    >
                      Chỉnh sửa
                    </a>
                    <button className="px-3 py-1.5 text-xs rounded-md bg-red-500 text-white font-semibold hover:bg-red-600 transition">
                      Đóng tin
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {jobs.length === 0 && (
              <div className="px-5 py-6 text-sm text-gray-500">
                Chưa có tin tuyển dụng nào. Hãy đăng tin mới để thu hút ứng
                viên.
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
