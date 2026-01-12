import Link from 'next/link';

export const CardCompanyItem = (props: { topEmployers: any }) => {
  const { topEmployers } = props;
  return (
    <>
      {topEmployers.map((item: any) => (
        <Link
          href={`/company/detail/${item._id}`}
          key={item._id}
          className="bg-white rounded-3xl p-5 shadow-[0_15px_40px_rgba(0,0,0,0.04)] flex flex-col items-center text-center"
        >
          <div
            className="w-16 h-16 rounded-2xl mb-3 flex items-center justify-center"
            style={{
              backgroundImage: `url(${item.logo})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <h3 className="font-semibold text-[15px] mb-1">{item.companyName}</h3>
          <p className="text-xs text-gray-500 mb-3">{item.cityName}</p>
          <span className="inline-flex items-center text-xs font-medium text-[#00B894] bg-[#E0FFF7] px-3 py-1 rounded-full">
            {item.totalJobs} Công việc
          </span>
        </Link>
      ))}
    </>
  );
};
