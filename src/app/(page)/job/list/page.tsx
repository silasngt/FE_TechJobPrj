'use client';

const mockJobs = [
  {
    id: '1',
    title: 'Test cloud',
    company: 'Công ty ABC',
    location: 'Quận 1 • Ho Chi Minh City',
    salaryMin: 800,
    salaryMax: 1500,
    position: 'Middle',
    logo: '', // ví dụ chưa có logo
  },
  {
    id: '2',
    title: 'Frontend Developer (ReactJS)',
    company: 'Shopee',
    location: 'District 7 • Ho Chi Minh City',
    salaryMin: 1200,
    salaryMax: 2000,
    position: 'Senior',
    logo: '',
  },
  {
    id: '3',
    title: 'Backend Engineer (Node.js)',
    company: 'Grab',
    location: 'Cầu Giấy • Ha Noi',
    salaryMin: 1000,
    salaryMax: 1800,
    position: 'Middle',
    logo: '',
  },
];

export default function JobListPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb]">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Title + intro */}
        <section className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Việc làm đang tuyển dụng
          </h1>
          <p className="mt-2 text-sm text-gray-600 max-w-2xl">
            Tìm kiếm cơ hội nghề nghiệp phù hợp với kỹ năng và mong muốn của bạn
            trong lĩnh vực công nghệ.
          </p>
        </section>

        {/* Search / filter */}
        <section className="mb-6">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
            <input
              type="text"
              placeholder="Nhập vị trí, kỹ năng hoặc công ty..."
              className="flex-1 h-11 px-4 rounded-full border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <select className="h-11 px-4 rounded-full border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="">Tất cả cấp bậc</option>
              <option>Intern</option>
              <option>Junior</option>
              <option>Middle</option>
              <option>Senior</option>
            </select>
            <select className="h-11 px-4 rounded-full border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="">Tất cả khu vực</option>
              <option>Ho Chi Minh City</option>
              <option>Ha Noi</option>
              <option>Da Nang</option>
            </select>
          </div>
        </section>

        {/* Job cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {mockJobs.map((job) => (
            <a
              key={job.id}
              href={`/jobs/${job.id}`}
              className="group block bg-white rounded-[24px] shadow-sm border border-gray-100 px-5 py-5 hover:shadow-md hover:-translate-y-[2px] transition"
            >
              {/* Logo nhỏ ở trên giống mẫu */}
              <div className="w-10 h-10 rounded-[12px] bg-gray-100 flex items-center justify-center mb-3 overflow-hidden">
                {job.logo ? (
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xs text-gray-400">No logo</span>
                )}
              </div>

              {/* Title + company/location */}
              <p className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                {job.title}
              </p>
              <p className="text-xs text-gray-500 mb-1">{job.company}</p>
              <p className="text-xs text-gray-500 mb-3">{job.location}</p>

              {/* Salary pill – giống style của bạn */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#D9FFF4] text-[12px] font-semibold text-emerald-600 mb-3">
                <span className="mr-1">💰</span>
                {job.salaryMin}${' - '}
                {job.salaryMax}$
              </div>

              {/* Bottom: level + Apply */}
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">{job.position}</span>
                <span className="text-emerald-500 font-semibold group-hover:underline">
                  Apply
                </span>
              </div>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}
