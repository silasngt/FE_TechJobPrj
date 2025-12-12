'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const JobSearch = () => {
  const [cityList, setCityList] = useState<any[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const city = searchParams.get('city') || '';
  const position = searchParams.get('position') || '';
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
    const position = event.target.position.value;

    const query = `?cityId=${city}&keyword=${encodeURIComponent(
      keyword
    )}&position=${position}`;
    router.push(`/job/search${query}`);
  };
  const handleFilterPosition = (event: any) => {
    event.preventDefault();
    const value = event.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set('position', value);
    } else {
      params.delete('position');
    }
    router.push(`?${params.toString()}`);
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
      <section className="mb-6">
        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row gap-3 items-stretch md:items-center"
        >
          <input
            type="text"
            name="keyword"
            id="keyword"
            defaultValue={keyword}
            placeholder="Nhập vị trí, kỹ năng hoặc công ty..."
            className="flex-1 h-11 px-4 rounded-full border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <select
            name="position"
            className="h-11 px-4 rounded-full border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            onChange={handleFilterPosition}
            defaultValue={position}
          >
            <option value="">Tất cả cấp bậc</option>
            <option value="Intern">Intern</option>
            <option value="Junior">Junior</option>
            <option value="Middle">Middle</option>
            <option value="Senior">Senior</option>
          </select>
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
          {/* <button
            type="submit"
            className="h-11 px-6 rounded-full bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition-colors"
          >
            Tìm kiếm
          </button> */}
        </form>
      </section>
    </>
  );
};
