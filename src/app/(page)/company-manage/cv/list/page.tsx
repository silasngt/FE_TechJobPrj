import { SiderCompany } from '@/src/app/components/sider-bar/SiderCompany';

export default function CompanyCvManage() {
  const candidates = [
    {
      id: 1,
      jobTitle: 'Frontend Developer',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@example.com',
      appliedAt: '20/04/2025',
      status: 'Chưa duyệt', // 'Chưa duyệt' | 'Đã duyệt' | 'Từ chối'
    },
    {
      id: 2,
      jobTitle: 'Backend Engineer',
      name: 'Trần Thị B',
      email: 'tranthib@example.com',
      appliedAt: '18/04/2025',
      status: 'Đã duyệt',
    },
    {
      id: 3,
      jobTitle: 'Fullstack Developer',
      name: 'Lê Văn C',
      email: 'levanc@example.com',
      appliedAt: '16/04/2025',
      status: 'Từ chối',
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Đã duyệt':
        return 'bg-emerald-50 text-emerald-600 border border-emerald-200';
      case 'Từ chối':
        return 'bg-red-50 text-red-600 border border-red-200';
      default:
        return 'bg-amber-50 text-amber-600 border border-amber-200';
    }
  };

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
        <section className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-sm font-semibold text-gray-900">
              Danh sách CV
            </h3>
            <span className="text-xs text-gray-500">
              Tổng: {candidates.length} ứng viên
            </span>
          </div>

          <div className="divide-y divide-gray-100">
            {candidates.map((c) => (
              <div
                key={c.id}
                className="px-5 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm"
              >
                {/* Info */}
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{c.jobTitle}</p>
                  <p className="text-xs text-gray-600">
                    Ứng viên:{' '}
                    <span className="font-semibold text-gray-800">
                      {c.name}
                    </span>{' '}
                    · {c.email}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-1">
                    Ngày ứng tuyển: {c.appliedAt}
                  </p>
                </div>

                {/* Status + actions */}
                <div className="flex flex-col md:items-end gap-2 min-w-[220px]">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-[11px] font-medium ${getStatusClass(
                      c.status
                    )}`}
                  >
                    Trạng thái: {c.status}
                  </span>

                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 text-xs rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">
                      Xem CV
                    </button>

                    {/* 2 nút đổi trạng thái  */}
                    <button className="px-3 py-1.5 text-xs rounded-md bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition">
                      Đã duyệt
                    </button>
                    <button className="px-3 py-1.5 text-xs rounded-md bg-red-500 text-white font-semibold hover:bg-red-600 transition">
                      Từ chối
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {candidates.length === 0 && (
              <div className="px-5 py-6 text-sm text-gray-500">
                Chưa có ứng viên nào ứng tuyển.
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
