'use client';
import { CardJobItem } from '@/src/app/components/card/CardJobItem';
import { CardSkeleton } from '@/src/app/components/card/CardSkeleton';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const JobSearchItem = () => {
  const searchParams = useSearchParams();
  const city = searchParams.get('city') || '';
  const keyword = searchParams.get('keyword') || '';
  const position = searchParams.get('position') || '';
  const page = searchParams.get('page') || '';
  const [jobList, setJobList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/jobs/search?keyword=${keyword}&position=${position}&cityId=${city}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.success === true) {
          setJobList(res.data);
          setLoading(false);
        }
      });
  }, [city, keyword, position]);

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
    </>
  );
};
