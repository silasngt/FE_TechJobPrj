import { CardCompanyItem } from '../../components/card/CardCompanyItem';

export const Section1 = () => {
  const topEmployers = [
    { id: 1, name: 'Shopee', location: 'Ho Chi Minh City', jobs: '120 jobs' },
    { id: 2, name: 'Shopee', location: 'Ho Chi Minh City', jobs: '120 jobs' },
    { id: 3, name: 'Shopee', location: 'Ho Chi Minh City', jobs: '120 jobs' },
    { id: 4, name: 'Shopee', location: 'Ho Chi Minh City', jobs: '120 jobs' },
    { id: 5, name: 'Shopee', location: 'Ho Chi Minh City', jobs: '120 jobs' },
    { id: 6, name: 'Shopee', location: 'Ho Chi Minh City', jobs: '120 jobs' },
  ];
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#141414]">
            Top <span className="text-[#00B894]">employers</span>
          </h2>
          <a href="#" className="text-sm text-[#00B894] font-medium">
            View all
          </a>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <CardCompanyItem topEmployers={topEmployers} />
        </div>
      </section>
    </>
  );
};
