'use client';
import { useEffect, useState } from 'react';
import { CardJobItem } from '../../components/card/CardJobItem';
import { CardSkeleton } from '../../components/card/CardSkeleton';

export const Section2 = () => {
  const [jobList, setJobList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs/all`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.success === true) {
          setJobList((res.data.data || []).slice(0, 11));
        }
      })
      .catch((err) => {
        console.error(err);
        setJobList([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  // console.log(jobList);
  return (
    <section className="max-w-6xl mx-auto px-4 pb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#141414]">
          Feature <span className="text-[#00B894]">jobs</span>
        </h2>
        <a href="/job/list" className="text-sm text-[#00B894] font-medium">
          Xem tất cả
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {isLoading ? (
          Array.from({ length: 9 }).map((_, idx) => <CardSkeleton key={idx} />)
        ) : jobList.length > 0 ? (
          <CardJobItem featureJobs={jobList} />
        ) : (
          <p className="text-sm text-gray-500 col-span-full">
            Hiện chưa có việc làm nổi bật.
          </p>
        )}
      </div>
    </section>
  );
};
