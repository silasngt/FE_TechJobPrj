import { SiderUser } from '@/src/app/components/sider-bar/SiderUser';
import { FcBriefcase, FcCurrencyExchange, FcLeave } from 'react-icons/fc';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';

export default function MyApplicationPage() {
  // mock data – sau này bạn thay bằng dữ liệu từ API
  const applications = [
    {
      id: 1,
      title: 'Senior IT Risks Management Specialist',
      company: 'Công ty ABCDE',
      salary: '2.000$ - 5.000$',
      level: 'Manager',
      workType: 'Linh hoạt',
      status: 'Chưa duyệt', // 'Chưa duyệt' | 'Đã duyệt' | 'Từ chối'
    },
    {
      id: 2,
      title: 'Senior IT Risks Management Specialist',
      company: 'Công ty ABCDE',
      salary: '2.000$ - 5.000$',
      level: 'Manager',
      workType: 'Linh hoạt',
      status: 'Đã duyệt',
    },
    {
      id: 3,
      title: 'Senior IT Risks Management Specialist',
      company: 'Công ty ABCDE',
      salary: '2.000$ - 5.000$',
      level: 'Manager',
      workType: 'Linh hoạt',
      status: 'Từ chối',
    },
  ];

  const getStatusStyle = (status: string) => {
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
    <>
      <div className="min-h-screen bg-[#f5f7fb] flex">
        {/* SIDEBAR */}
        <SiderUser />
        <div className="flex-1 px-10 py-8 bg-[#f5f7fb] min-h-screen">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                My Applications
              </h2>
              <p className="text-sm text-gray-500">
                Danh sách các công việc bạn đã ứng tuyển.
              </p>
            </div>
            <a
              href="/"
              className="px-4 py-2 text-sm border border-emerald-500 text-emerald-600 rounded-md hover:bg-emerald-50 transition"
            >
              Back to homepage
            </a>
          </div>
          {/* List applications */}
          <div className="space-y-4">
            {applications.map((app) => (
              <div
                key={app.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                {/* Left: info */}
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                    {app.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-2">
                    Công ty:{' '}
                    <span className="font-semibold text-gray-800">
                      {app.company}
                    </span>
                  </p>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-xs md:text-sm text-gray-600">
                    <p>
                      <FcCurrencyExchange className="inline-flex mx-[5px] text-[16px]" />
                      Mức lương:{' '}
                      <span className="font-semibold text-emerald-600">
                        {app.salary}
                      </span>
                    </p>
                    <p>
                      <FcBriefcase className="inline-flex mx-[5px] text-[16px]" />{' '}
                      Vị trí: <span className="font-semibold">{app.level}</span>
                    </p>
                    <p>
                      <FcLeave className="inline-flex mx-[5px] text-[16px]" />{' '}
                      Hình thức:{' '}
                      <span className="font-semibold">{app.workType}</span>
                    </p>
                  </div>
                </div>

                {/* Right: status + actions */}
                <div className="flex flex-col items-start md:items-end gap-3 min-w-[180px]">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                      app.status
                    )}`}
                  >
                    Trạng thái: {app.status}
                  </span>

                  <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-4 py-2 text-xs md:text-sm rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">
                      Xem
                    </button>
                    <button className="flex-1 md:flex-none px-4 py-2 text-xs md:text-sm rounded-md bg-red-500 text-white font-semibold hover:bg-red-600 transition">
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {applications.length === 0 && (
              <div className="mt-6 text-sm text-gray-500">
                Bạn chưa ứng tuyển công việc nào.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
