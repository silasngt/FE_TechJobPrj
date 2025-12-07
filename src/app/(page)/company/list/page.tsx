'use client';
import { Footer } from '../../../components/footer/Footer';
import { Header } from '../../../components/header/Header';
const mockCompanies = [
  {
    id: '1',
    name: 'Shopee',
    city: 'Ho Chi Minh City',
    jobs: 120,
    logo: 'https://via.placeholder.com/80x80.png?text=S',
  },
  {
    id: '2',
    name: 'Grab',
    city: 'Ha Noi',
    jobs: 80,
    logo: 'https://via.placeholder.com/80x80.png?text=G',
  },
  {
    id: '3',
    name: 'VNG Corporation',
    city: 'Ho Chi Minh City',
    jobs: 45,
    logo: 'https://via.placeholder.com/80x80.png?text=V',
  },
  {
    id: '4',
    name: 'FPT Software',
    city: 'Da Nang',
    jobs: 60,
    logo: 'https://via.placeholder.com/80x80.png?text=F',
  },
];

export default function CompanyListPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb]">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Title + intro */}
        {/* Title + intro */}
        <section className="mb-10">
          <div className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-white px-6 py-7 md:px-8 md:py-9">
            {/* decorative blur */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-200/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-300/20 rounded-full blur-3xl" />

            <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              {/* Left content */}
              <div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200">
                  🏢 Doanh nghiệp tuyển dụng nổi bật
                </span>

                <h1 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                  Khám phá các
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
                    {' '}
                    công ty công nghệ
                  </span>
                  <br className="hidden sm:block" />
                  đang tăng trưởng mạnh mẽ
                </h1>

                <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl">
                  Tìm hiểu thông tin doanh nghiệp, môi trường làm việc và các vị
                  trí đang tuyển để lựa chọn nơi phù hợp nhất cho hành trình sự
                  nghiệp của bạn.
                </p>

                {/* highlights */}
                <div className="mt-5 flex flex-wrap items-center gap-4 text-xs md:text-sm">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700">
                    💼 Nhiều lĩnh vực
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700">
                    🌍 Trải khắp Việt Nam
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700">
                    🚀 Tuyển dụng liên tục
                  </span>
                </div>
              </div>

              {/* Right stats */}
              <div className="flex md:flex-col gap-3 min-w-[160px]">
                <div className="bg-white rounded-xl border border-emerald-100 px-4 py-3 shadow-sm">
                  <p className="text-[11px] text-gray-500">Tổng công ty</p>
                  <p className="text-lg font-bold text-emerald-600">
                    {mockCompanies.length}+
                  </p>
                </div>

                <div className="bg-white rounded-xl border border-gray-100 px-4 py-3 shadow-sm">
                  <p className="text-[11px] text-gray-500">
                    Việc làm đang tuyển
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    Hơn 300+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search / filter (simple) */}
        <section className="mb-6">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
            <input
              type="text"
              placeholder="Tìm theo tên công ty..."
              className="flex-1 h-11 px-4 rounded-full border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <select className="h-11 px-4 rounded-full border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="">Tất cả thành phố</option>
              <option>Ho Chi Minh City</option>
              <option>Ha Noi</option>
              <option>Da Nang</option>
            </select>
          </div>
        </section>

        {/* Company cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {mockCompanies.map((company) => (
            <a
              key={company.id}
              href={`/companies/${company.id}`}
              className="group block bg-white rounded-[24px] shadow-sm border border-gray-100 px-6 py-6 text-center hover:shadow-md hover:-translate-y-[2px] transition"
            >
              {/* Logo */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-[20px] bg-[#ffe8dd] flex items-center justify-center overflow-hidden">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name + city */}
              <p className="text-base font-semibold text-gray-900 mb-1">
                {company.name}
              </p>
              <p className="text-xs text-gray-500 mb-3">{company.city}</p>

              {/* Jobs pill – giống mẫu */}
              <span className="inline-flex px-4 py-1 rounded-full bg-[#D9FFF4] text-[12px] font-semibold text-emerald-600">
                {company.jobs} jobs
              </span>
            </a>
          ))}
        </section>
      </div>
      <Footer />
    </main>
  );
}
