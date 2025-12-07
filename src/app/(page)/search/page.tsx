'use client';

import { useState } from 'react';
import { Header } from '@/src/app/components/header/Header';
import { Footer } from '@/src/app/components/footer/Footer';
import { CardJobItem } from '@/src/app/components/card/CardJobItem';
import { CardSkeleton } from '@/src/app/components/card/CardSkeleton';
import { Search } from '../../components/hero/SearchSection';

export default function JobSearchResultPage() {
  //thay bằng dữ liệu thật sau khi user bấm search
  const [keyword] = useState<string>('Frontend Developer');
  const [totalResult] = useState<number>(24);
  const [isLoading] = useState<boolean>(false);
  const [jobList] = useState<any[]>([
    // mock tạm 1–2 job để xem layout
    {
      jobId: '1',
      title: 'Frontend Developer (ReactJS)',
      companyName: 'Shopee',
      salaryMin: 1000,
      salaryMax: 2000,
      position: 'Middle',
      workingForm: 'Hybrid • HCMC',
      technologies: 'ReactJS, TypeScript, Tailwind',
      logo: '/images/logo-shopee.png',
    },
    {
      jobId: '2',
      title: 'Backend Developer (NodeJS)',
      companyName: 'Grab',
      salaryMin: 1200,
      salaryMax: 2300,
      position: 'Senior',
      workingForm: 'Onsite • Hà Nội',
      technologies: 'NodeJS, NestJS, PostgreSQL',
      logo: '/images/logo-grab.png',
    },
  ]);

  return (
    <main className="min-h-screen bg-[#f5f7fb]">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
        {/* ====== TOP BAR: tiêu đề + info kết quả ====== */}
        <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-emerald-500 font-semibold">
              KẾT QUẢ TÌM KIẾM
            </p>
            <h1 className="mt-1 text-2xl md:text-3xl font-bold text-gray-900">
              Việc làm cho <span className="text-emerald-500">“{keyword}”</span>
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Tìm thấy{' '}
              <span className="font-semibold text-gray-800">
                {totalResult} cơ hội
              </span>{' '}
              phù hợp với từ khoá bạn đã nhập.
            </p>
          </div>

          {/* Nhãn filter đang áp dụng (có thể bind từ state) */}
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-600">
              Thành phố: <span className="font-semibold">Tất cả</span>
            </span>
          </div>
        </section>

        {/* <SearchBar /> */}
        <Search />

        {/* ====== KẾT QUẢ JOB ====== */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs text-gray-500">Các công việc phù hợp</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {isLoading ? (
              Array.from({ length: 8 }).map((_, idx) => (
                <CardSkeleton key={idx} />
              ))
            ) : jobList.length > 0 ? (
              <CardJobItem featureJobs={jobList} />
            ) : (
              <p className="text-sm text-gray-500 col-span-full">
                Không tìm thấy việc làm phù hợp. Hãy thử từ khoá khác hoặc điều
                chỉnh bộ lọc.
              </p>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
