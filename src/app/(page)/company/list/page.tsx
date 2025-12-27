'use client';
import { Suspense, useEffect, useState } from 'react';
import { Footer } from '../../../components/footer/Footer';
import { Header } from '../../../components/header/Header';
import { toast } from 'sonner';
import { CardCompanyItem } from '@/src/app/components/card/CardCompanyItem';
import { CompanySearch } from '@/src/app/components/search/CompanySearch';
import { CardSkeleton } from '@/src/app/components/card/CardSkeleton';
export const dynamic = 'force-dynamic';
export default function CompanyListPage() {
  const [companyList, setCompanyList] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/companies/all?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.success === true) {
          setIsLoading;
          setCompanyList(res.data.data || []);
          setTotalPage(res.data.totalPage || 0);
        }
        if (res.success === false) {
          setIsLoading(false);
          toast.error(res.message);
        }
      })
      .catch((err) => {
        console.error(err);
        setCompanyList([]);
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
      {' '}
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
                    Tìm hiểu thông tin doanh nghiệp, môi trường làm việc và các
                    vị trí đang tuyển để lựa chọn nơi phù hợp nhất cho hành
                    trình sự nghiệp của bạn.
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
                      {companyList.length}+
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
          <Suspense>
            {/* Search / filter  */}
            <CompanySearch />
          </Suspense>

          {/* Company cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {isLoading ? (
              Array.from({ length: 8 }).map((_, idx) => (
                <CardSkeleton key={idx} />
              ))
            ) : companyList.length > 0 ? (
              <CardCompanyItem topEmployers={companyList} />
            ) : (
              <p className="text-sm text-gray-500 col-span-full">
                Hiện chưa có công ty .
              </p>
            )}
          </section>
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
