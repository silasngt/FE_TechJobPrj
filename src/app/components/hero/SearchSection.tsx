'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FcEmptyFilter, FcSearch } from 'react-icons/fc';

export const Search = () => {
  const [cityList, setCityList] = useState<any[]>([]);
  const router = useRouter();
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/cities`, {})
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setCityList(res.data);
      });
  }, []);
  const handleSearch = (event: any) => {
    event.preventDefault();
    const city = event.target.city.value;
    const keyword = event.target.keyword.value;

    // const query = `?cityId=${city}&keyword=${encodeURIComponent(keyword)}`;
    const query = `?keyword=${encodeURIComponent(keyword)}`;
    router.push(`/search${query}`);
  };

  return (
    <>
      {/* SEARCH BAR */}
      <form onSubmit={handleSearch} className="mt-8">
        <div className="bg-white rounded-full shadow-lg px-4 py-3 flex flex-col gap-3 md:flex-row md:items-center md:gap-0">
          {/* Job title */}
          <div className="flex-1 flex items-center gap-2 md:border-r md:border-gray-200 md:pr-4">
            <FcSearch className="inline-flex mx-[5px] text-[16px]" />{' '}
            <input
              type="text"
              placeholder="Hãy tìm công việc phù hợp với bạn"
              name="keyword"
              className="w-full text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Location */}
          <div className="flex-1 flex items-center gap-2 md:px-4">
            <FcEmptyFilter className="inline-flex mx-[5px] text-[16px]" />{' '}
            <select
              name="city"
              defaultValue={'Chọn thành phố'}
              className="w-full flex items-center justify-between text-sm text-gray-700"
            >
              <option value="">Tất cả thành phố</option>
              {cityList && cityList.length > 0 ? (
                cityList.map((city, index) => (
                  <option key={index + 1} value={city._id}>
                    {city.cityName}
                  </option>
                ))
              ) : (
                <option>Đang tải...</option>
              )}
            </select>
          </div>

          {/* Button */}
          <div className="md:pl-4 md:w-auto w-full">
            <button className="w-full bg-[#00D8A4] text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-[#00b891] transition">
              Search my job
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
