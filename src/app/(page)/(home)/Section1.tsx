'use client';
import { useEffect, useState } from 'react';
import { CardCompanyItem } from '../../components/card/CardCompanyItem';
import { toast, Toaster } from 'sonner';
import { CardSkeleton } from '../../components/card/CardSkeleton';

export const Section1 = () => {
  const [companyList, setCompanyList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/companies/all`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.success === true) {
          setCompanyList((res.data.data || []).slice(0, 9));
        }
        if (res.success === false) {
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
  }, []);
  return (
    <>
      <Toaster richColors position="top-right" />
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#141414]">
            Top <span className="text-[#00B894]">employers</span>
          </h2>
          <a
            href="/company/list"
            className="text-sm text-[#00B894] font-medium"
          >
            Xem tất cả
          </a>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, idx) => (
              <CardSkeleton key={idx} />
            ))
          ) : companyList.length > 0 ? (
            <CardCompanyItem topEmployers={companyList} />
          ) : (
            <p className="text-sm text-gray-500 col-span-full">
              Hiện chưa có công ty nổi bật.
            </p>
          )}
        </div>
      </section>
    </>
  );
};
