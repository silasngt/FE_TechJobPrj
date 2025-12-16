'use client';
import { useEffect, useState } from 'react';
import { CardJobItem } from '../../components/card/CardJobItem';
import { CardSkeleton } from '../../components/card/CardSkeleton';
import { useSearchParams } from 'next/navigation';
import { CardCompanyItem } from '../../components/card/CardCompanyItem';

export const SearchHomeItem = () => {
  const searchParams = useSearchParams();
  const city = searchParams.get('city') || '';
  const keyword = searchParams.get('keyword') || '';
  const [jobList, setJobList] = useState<any[]>([]);
  const [companyList, setCompanyList] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading;
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/search?keyword=${keyword}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.success === true) {
          setJobList(res.data.jobs);
          setCompanyList(res.data.companies);
          setLoading(false);
        }
      });
  }, [keyword]);
  return (
    <>
      <section>
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-gray-500">Các công việc phù hợp</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {isLoading ? (
            Array.from({ length: 10 }).map((_, idx) => (
              <CardSkeleton key={idx} />
            ))
          ) : jobList.length > 0 ? (
            <CardJobItem featureJobs={jobList} />
          ) : companyList.length > 0 ? (
            <CardCompanyItem topEmployers={companyList} />
          ) : (
            <p className="text-sm text-gray-500 col-span-full">
              Không tìm thấy công việc hoặc công ty nào phù hợp.
            </p>
          )}
        </div>
      </section>
    </>
  );
};
