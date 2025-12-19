'use client';
import { useEffect, useState } from 'react';

export const SectionLogoMarquee = () => {
  const [logos, setLogos] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/companies/all`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.success === true) {
          setLogos(res.data || []);
        }
      });
  }, []);

  // nhân đôi mảng để tạo hiệu ứng cuộn liên tục
  const loopLogos = [...logos, ...logos];
  return (
    <>
      {loopLogos.length > 0 && (
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
                        src={logo.logo}
                        alt={logo.companyName}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-semibold text-gray-800">
                      {logo.companyName}
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
      )}
    </>
  );
};
