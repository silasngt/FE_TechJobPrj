'use client';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { HeroContent } from '../../components/hero/HeroSection';
import { Section1 } from './Section1';
import { Section2 } from './Section2';

const IntroSection = () => {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-10">
            <p className="inline-flex px-3 py-1 rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-600 uppercase tracking-wide">
              Vì sao nên chọn TechJob?
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">
              Kết nối <span className="text-emerald-500">developer</span> với
              những công ty công nghệ phù hợp
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Từ sinh viên mới ra trường đến senior engineer, TechJob giúp bạn
              tìm được công việc mơ ước và hỗ trợ nhà tuyển dụng tiếp cận đúng
              ứng viên nhanh hơn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#F5FBFF] rounded-2xl p-5 shadow-sm">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 mb-3">
                💼
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Dành cho người tìm việc
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Tìm kiếm job theo kỹ năng, thành phố, mức lương. Lưu job yêu
                thích và theo dõi trạng thái CV đã ứng tuyển.
              </p>
            </div>

            <div className="bg-[#F5FBFF] rounded-2xl p-5 shadow-sm">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 mb-3">
                🏢
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Dành cho nhà tuyển dụng
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Tạo tin tuyển dụng, quản lý CV ứng viên, cập nhật trạng thái
                duyệt / từ chối nhanh chóng trong một bảng điều khiển.
              </p>
            </div>

            <div className="bg-[#F5FBFF] rounded-2xl p-5 shadow-sm">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-sky-500/10 text-sky-500 mb-3">
                🔐
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Minh bạch & dễ theo dõi
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Giao diện rõ ràng, timeline ứng tuyển trực quan, thông báo trạng
                thái giúp cả hai bên luôn nắm được tiến trình tuyển dụng.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const LogoMarquee = () => {
  const logos = [
    { name: 'Shopee', src: '/images/logo-shopee.svg' },
    { name: 'Grab', src: '/images/logo-grab.svg' },
    { name: 'VNG', src: '/images/logo-vng.svg' },
    { name: 'FPT Software', src: '/images/logo-fpt.svg' },
    { name: 'Viettel', src: '/images/logo-viettel.svg' },
  ];

  // nhân đôi mảng để tạo hiệu ứng cuộn liên tục
  const loopLogos = [...logos, ...logos];

  return (
    <>
      <section className="bg-[#E8FBF4]">
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-10">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs md:text-sm font-medium text-emerald-700 uppercase tracking-wide">
              Được tin tưởng bởi các công ty công nghệ
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="logo-marquee flex gap-10 items-center">
              {loopLogos.map((logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 min-w-[140px] bg-white/80 backdrop-blur rounded-full px-4 py-2 shadow-sm border border-white/60"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-semibold text-gray-800">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CSS riêng cho hiệu ứng chạy ngang */}
        <style jsx>{`
          @keyframes logo-marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .logo-marquee {
            width: max-content;
            animation: logo-marquee 28s linear infinite;
          }
        `}</style>
      </section>
    </>
  );
};

export default function Home() {
  fetch('http://localhost:3001', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data.message));

  return (
    <>
      {/* HEADER + HERO */}
      <Header />
      <HeroContent />

      {/* MAIN CONTENT */}
      <main className="bg-[#F5FBFF]">
        {/* INTRO + BENEFITS */}
        <IntroSection />

        {/* TOP EMPLOYERS */}
        <Section1 />

        {/* FEATURE JOBS */}
        <Section2 />

        {/* LOGO SLIDER */}
        <LogoMarquee />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
