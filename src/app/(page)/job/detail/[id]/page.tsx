import { Header } from '@/src/app/components/header/Header';
import { SectionDetailJob } from './SectionDetailJob';
import { Footer } from '@/src/app/components/footer/Footer';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { CardDetailSkeleton } from '@/src/app/components/card/CardDetailSkeleton';
export const metadata: Metadata = {
  title: 'Chi tiết công việc - TechJob',
  description: 'Xem chi tiết thông tin công việc và ứng tuyển ngay hôm nay!',
};
export default async function JobDetailPage({
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
          <SectionDetailJob id={id} />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
