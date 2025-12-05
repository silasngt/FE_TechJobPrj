export const CardCompanyItem = (props: { topEmployers: any }) => {
  const { topEmployers } = props;
  return (
    <>
      {topEmployers.map((item: any) => (
        <div
          key={item.id}
          className="bg-white rounded-3xl p-5 shadow-[0_15px_40px_rgba(0,0,0,0.04)] flex flex-col items-center text-center"
        >
          <div
            className="w-16 h-16 rounded-2xl mb-3 flex items-center justify-center"
            style={{
              backgroundImage:
                'url(https://th.bing.com/th/id/R.6287255214805d04b927ee0c53c88f64?rik=Hajf3OR9ipXMdQ&riu=http%3a%2f%2ffreelogopng.com%2fimages%2fall_img%2f1656180674shopee-logo-transparent.png&ehk=9Uim1JMb9bW6YMwQi6SDKsI56jFiz6E4jvDwKPNcx8M%3d&risl=&pid=ImgRaw&r=0)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <span className="text-xs font-semibold text-white">Logo</span>
          </div>
          <h3 className="font-semibold text-[15px] mb-1">{item.name}</h3>
          <p className="text-xs text-gray-500 mb-3">{item.location}</p>
          <span className="inline-flex items-center text-xs font-medium text-[#00B894] bg-[#E0FFF7] px-3 py-1 rounded-full">
            {item.jobs}
          </span>
        </div>
      ))}
    </>
  );
};
