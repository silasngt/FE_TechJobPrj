import { Footer } from '@/src/app/components/footer/Footer';
import { Header } from '@/src/app/components/header/Header';

export default function CompanyDetailPage() {
  // Sau này bạn sẽ nhận data từ BE (props / fetch) và map vào UI này
  return (
    <main className="min-h-screen bg-[#eaf7f4]">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* ====== HERO COMPANY ====== */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Logo */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-3xl font-bold">
              S
            </div>

            {/* Tên + tags */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  Stripe Việt Nam
                </h1>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-100">
                  Đang tuyển dụng
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Công ty công nghệ tài chính / Thanh toán trực tuyến
              </p>
            </div>
          </div>

          {/* Info badges */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-lg">📅</span>
              <div>
                <p className="text-[11px] uppercase text-gray-400 tracking-wide">
                  Thành lập
                </p>
                <p className="text-gray-800 font-medium">Tháng 7, 2018</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">👥</span>
              <div>
                <p className="text-[11px] uppercase text-gray-400 tracking-wide">
                  Quy mô
                </p>
                <p className="text-gray-800 font-medium">400+ nhân viên</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">📍</span>
              <div>
                <p className="text-[11px] uppercase text-gray-400 tracking-wide">
                  Địa điểm
                </p>
                <p className="text-gray-800 font-medium">
                  TP. Hồ Chí Minh, Việt Nam
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">💼</span>
              <div>
                <p className="text-[11px] uppercase text-gray-400 tracking-wide">
                  Lĩnh vực
                </p>
                <p className="text-gray-800 font-medium">Fintech / SaaS</p>
              </div>
            </div>
          </div>
        </section>

        {/* ====== COMPANY OVERVIEW ====== */}
        <section className="mb-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Tổng quan về công ty
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Stripe là nền tảng thanh toán giúp doanh nghiệp mọi quy mô nhận và
              xử lý giao dịch trực tuyến một cách đơn giản. Tại Việt Nam, Stripe
              tập trung xây dựng đội ngũ kỹ sư và sản phẩm phù hợp với thị
              trường Đông Nam Á, tối ưu trải nghiệm thanh toán và bảo mật.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Môi trường làm việc đề cao sự chủ động, minh bạch và học hỏi liên
              tục. Các thành viên có cơ hội tham gia vào những bài toán lớn về
              scale hệ thống, xử lý dữ liệu và trải nghiệm người dùng với hàng
              triệu giao dịch mỗi ngày.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Stripe Việt Nam hướng đến việc xây dựng đội ngũ kỹ sư, sản phẩm và
              vận hành đẳng cấp quốc tế, đồng thời mang lại những giá trị thiết
              thực cho hệ sinh thái startup, SME và các doanh nghiệp trong khu
              vực.
            </p>
          </div>
        </section>

        {/* ====== GALLERY (ẢNH VĂN HÓA) ====== */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Bạn thay các div này bằng <img src="..."/> sau */}
            <div className="md:row-span-2 rounded-2xl overflow-hidden bg-gray-200 h-64 md:h-full">
              <div className="w-full h-full bg-[url('/images/company-1.jpg')] bg-cover bg-center" />
            </div>
            <div className="rounded-2xl overflow-hidden bg-gray-200 h-32 md:h-40">
              <div className="w-full h-full bg-[url('/images/company-2.jpg')] bg-cover bg-center" />
            </div>
            <div className="rounded-2xl overflow-hidden bg-gray-200 h-32 md:h-40">
              <div className="w-full h-full bg-[url('/images/company-3.jpg')] bg-cover bg-center" />
            </div>
            <div className="rounded-2xl overflow-hidden bg-gray-200 h-32 md:h-40">
              <div className="w-full h-full bg-[url('/images/company-4.jpg')] bg-cover bg-center" />
            </div>
          </div>
        </section>

        {/* ====== JOB LISTINGS ====== */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Vị trí đang tuyển
            </h2>
            <span className="text-xs text-gray-500">
              6 vị trí đang mở tại Stripe Việt Nam
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'Visual Designer',
                location: 'Quận 1, TP. HCM',
                type: 'Toàn thời gian',
                level: 'Middle / Senior',
                posted: '3 ngày trước',
              },
              {
                title: 'Frontend Developer',
                location: 'Remote / HCM',
                type: 'Toàn thời gian',
                level: 'Senior',
                posted: '1 tuần trước',
              },
              {
                title: 'Backend Engineer',
                location: 'TP. HCM',
                type: 'Toàn thời gian',
                level: 'Middle',
                posted: '5 ngày trước',
              },
              {
                title: 'Product Designer',
                location: 'TP. HCM',
                type: 'Toàn thời gian',
                level: 'Junior / Middle',
                posted: '2 tuần trước',
              },
              {
                title: 'QA Engineer',
                location: 'TP. HCM',
                type: 'Toàn thời gian',
                level: 'Junior',
                posted: '1 tháng trước',
              },
              {
                title: 'Technical Writer',
                location: 'Remote',
                type: 'Part-time',
                level: 'Freelance',
                posted: 'Mới đăng',
              },
            ].map((job, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-gray-900">
                      {job.title}
                    </h3>
                    <span className="text-[11px] px-2 py-0.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">
                    📍 {job.location}
                  </p>
                  <p className="text-xs text-gray-600 mb-1">
                    💼 Cấp bậc: <span className="font-medium">{job.level}</span>
                  </p>
                  <p className="text-[11px] text-gray-400">
                    🕒 Đăng {job.posted}
                  </p>
                </div>

                <div className="mt-3 flex justify-between items-center">
                  <button className="text-xs text-emerald-600 hover:underline">
                    Xem chi tiết
                  </button>
                  <button className="px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-semibold hover:bg-emerald-600 transition">
                    Ứng tuyển ngay
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
