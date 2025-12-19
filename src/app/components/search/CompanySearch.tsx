'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const CompanySearch = () => {
  const [cityList, setCityList] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const city = searchParams.get('city') || '';
  const keyword = searchParams.get('keyword') || '';
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

    const query = `?cityId=${city}&keyword=${encodeURIComponent(keyword)}`;
    router.push(`/company/search${query}`);
  };
  const handleFilterCity = (event: any) => {
    event.preventDefault();
    const value = event.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set('city', value);
    } else {
      params.delete('city');
    }
    router.push(`?${params.toString()}`);
  };
  return (
    <>
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
          <input
            type="text"
            placeholder="Tìm theo tên công ty..."
            name="keyword"
            className="flex-1 h-11 px-4 rounded-full border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <select
            name="city"
            className="h-11 px-4 rounded-full border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            defaultValue={city}
            onChange={handleFilterCity}
          >
            <option value="">Tất cả khu vực</option>
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
      </form>
    </>
  );
};
