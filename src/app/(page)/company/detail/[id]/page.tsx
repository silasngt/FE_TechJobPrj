import { Footer } from '@/src/app/components/footer/Footer';
import { Header } from '@/src/app/components/header/Header';
import { SectionDetailCompany } from './SectionDetailCompany';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { CardDetailSkeleton } from '@/src/app/components/card/CardDetailSkeleton';
export const metadata: Metadata = {
  title: 'Chi tiết công ty tuyển dụng - TechJob',
  description:
    'Tìm hiểu chi tiết về các công ty công nghệ hàng đầu đang tuyển dụng trên TechJob. Khám phá văn hóa, cơ hội nghề nghiệp và môi trường làm việc tại các doanh nghiệp này ngay hôm nay!',
};
export default async function CompanyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="min-h-screen flex flex-col bg-[#eaf7f4]">
      <Header />

      {/* CONTENT */}
      <main className="flex-1">
        <Suspense fallback={<CardDetailSkeleton />}>
          <SectionDetailCompany id={id} />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
