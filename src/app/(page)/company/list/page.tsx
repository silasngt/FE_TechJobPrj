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
        <section className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Công ty nổi bật
          </h1>
          <p className="mt-2 text-sm text-gray-600 max-w-2xl">
            Khám phá những công ty công nghệ hàng đầu, xem vị trí tuyển dụng và
            tìm môi trường phù hợp nhất với bạn.
          </p>
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
