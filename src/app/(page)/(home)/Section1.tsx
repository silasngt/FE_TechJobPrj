'use client';
import { useEffect, useState } from 'react';
import { CardCompanyItem } from '../../components/card/CardCompanyItem';
import { toast, Toaster } from 'sonner';

export const Section1 = () => {
  const topEmployers = [
    { id: 1, name: 'Shopee', location: 'Ho Chi Minh City', jobs: '120 jobs' },
    { id: 2, name: 'Shopee', location: 'Ho Chi Minh City', jobs: '120 jobs' },
    { id: 3, name: 'Shopee', location: 'Ho Chi Minh City', jobs: '120 jobs' },
    { id: 4, name: 'Shopee', location: 'Ho Chi Minh City', jobs: '120 jobs' },
    { id: 5, name: 'Shopee', location: 'Ho Chi Minh City', jobs: '120 jobs' },
    { id: 6, name: 'Shopee', location: 'Ho Chi Minh City', jobs: '120 jobs' },
  ];
  const [companyList, setCompanyList] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/companies/all`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.success === true) {
          setCompanyList(res.data || []);
        }
        if (res.success === false) {
          toast.error(res.message);
        }
      });
  }, []);
  return (
    <>
      <Toaster richColors position="top-right" />
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#141414]">
            Top <span className="text-[#00B894]">employers</span>
          </h2>
          <a
            href="/company/list"
            className="text-sm text-[#00B894] font-medium"
          >
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
