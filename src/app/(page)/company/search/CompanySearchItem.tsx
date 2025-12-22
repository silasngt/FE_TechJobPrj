'use client';
import { CardCompanyItem } from '@/src/app/components/card/CardCompanyItem';
import { CardJobItem } from '@/src/app/components/card/CardJobItem';
import { CardSkeleton } from '@/src/app/components/card/CardSkeleton';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const CompanySearchItem = () => {
  const searchParams = useSearchParams();
  const city = searchParams.get('city') || '';
  const keyword = searchParams.get('keyword') || '';
  const page = searchParams.get('page') || '';
  const [companyList, setCompanyList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/companies/search?keyword=${keyword}&cityId=${city}`
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.success === true) {
          setCompanyList(res.data.result);
          setLoading(false);
        }
      });
  }, [city, keyword]);

  return (
    <>
      <section>
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-gray-500">Các công việc phù hợp</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {loading ? (
            Array.from({ length: 8 }).map((_, idx) => (
              <CardSkeleton key={idx} />
            ))
          ) : companyList.length > 0 ? (
            <CardCompanyItem topEmployers={companyList} />
          ) : (
            <p className="text-sm text-gray-500 col-span-full">
              Không tìm thấy công ty phù hợp. Hãy thử từ khoá khác hoặc điều
              chỉnh bộ lọc.
            </p>
          )}
        </div>
      </section>
    </>
  );
};
