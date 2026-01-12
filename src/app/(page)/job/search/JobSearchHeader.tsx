import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const JobSearchHeader = () => {
  const searchParams = useSearchParams();
  const city = searchParams.get('city') || '';
  const keyword = searchParams.get('keyword') || '';
  const position = searchParams.get('position') || '';
  const [totalJob, setTotalJob] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/jobs/search?keyword=${keyword}&position=${position}&cityId=${city}`
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.success === true) {
          setTotalJob(res.data.data);
        }
      });
  }, [city, keyword, position]);
  return (
    <>
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
              {totalJob.length} cơ hội
            </span>{' '}
            phù hợp với từ khoá bạn đã nhập.
          </p>
        </div>
      </section>
    </>
  );
};
