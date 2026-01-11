'use client';
import { CardJobItem } from '@/src/app/components/card/CardJobItem';
import { CardSkeleton } from '@/src/app/components/card/CardSkeleton';
import { Footer } from '@/src/app/components/footer/Footer';
import { Header } from '@/src/app/components/header/Header';
import { JobSearch } from '@/src/app/components/search/JobSearch';
import { Metadata } from 'next';
import { Suspense, useEffect, useState } from 'react';

export default function JobListPage() {
  const [jobList, setJobList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs/all?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.success === true) {
          setIsLoading(false);
          setJobList(res.data.data || []);
          setTotalPage(res.data.totalPage || 0);
        }
      })
      .catch((err) => {
        // console.error(err);
        setJobList([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page]);
  const handlePagination = (event: any) => {
    const value = event.target.value;
    setPage(parseInt(value));
  };
  return (
    <>
      <main className="min-h-screen bg-[#f5f7fb]">
        <Header />
        <div className="max-w-6xl mx-auto px-4 py-10">
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
                    🚀 Cơ hội công nghệ đang mở
                  </span>

                  <h1 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                    Tìm công việc
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
                      {' '}
                      phù hợp nhất
                    </span>
                    <br className="hidden sm:block" />
                    cho sự nghiệp của bạn
                  </h1>

                  <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl">
                    Khám phá hàng trăm vị trí công nghệ từ các công ty uy tín.
                    Lọc theo kỹ năng, cấp bậc và địa điểm để nhanh chóng tìm
                    được công việc đúng với mục tiêu của bạn.
                  </p>

                  {/* Quick highlights */}
                  <div className="mt-5 flex flex-wrap items-center gap-4 text-xs md:text-sm">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700">
                      💼 Nhiều cấp bậc
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700">
                      🌍 Đa khu vực
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700">
                      ⏱️ Cập nhật liên tục
                    </span>
                  </div>
                </div>

                {/* Right stats */}
                <div className="flex md:flex-col gap-3">
                  <div className="bg-white rounded-xl border border-emerald-100 px-4 py-3 shadow-sm">
                    <p className="text-[11px] text-gray-500">
                      Việc làm hiện có
                    </p>
                    <p className="text-lg font-bold text-emerald-600">
                      {isLoading ? 'Đang tải...' : jobList.length}
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-100 px-4 py-3 shadow-sm">
                    <p className="text-[11px] text-gray-500">
                      Lĩnh vực nổi bật
                    </p>
                    <p className="text-xs font-semibold text-gray-700">
                      Frontend • Backend • DevOps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Suspense>
            {/* Search / filter */}
            <JobSearch />
          </Suspense>

          {/* Job cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {isLoading ? (
              Array.from({ length: 9 }).map((_, idx) => (
                <CardSkeleton key={idx} />
              ))
            ) : jobList.length > 0 ? (
              <CardJobItem featureJobs={jobList} />
            ) : (
              <p className="text-sm text-gray-500 col-span-full">
                Hiện chưa có việc làm nổi bật.
              </p>
            )}
          </div>
          {totalPage && (
            <div className="mt-[30px]">
              <select
                onChange={handlePagination}
                className="border border-[#DEDEDE] rounded-[8px] py-[12px] px-[18px] font-[400] text-[16px] text-[#414042] outline-none"
              >
                {Array(totalPage)
                  .fill('')
                  .map((_, index) => (
                    <option key={index} value={index + 1}>
                      Trang {index + 1}
                    </option>
                  ))}
              </select>
            </div>
          )}
        </div>

        <Footer />
      </main>
    </>
  );
}
