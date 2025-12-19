import { Header } from '@/src/app/components/header/Header';
import { SectionDetailJob } from './SectionDetailJob';
import { Footer } from '@/src/app/components/footer/Footer';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Chi tiết công việc - TechJob',
  description: 'Xem chi tiết thông tin công việc và ứng tuyển ngay hôm nay!',
};
export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;

  const { id } = resolvedParams;
  console.log(id);

  return (
    <main className="min-h-screen bg-[#eaf7f4]">
      <Header />
      <SectionDetailJob id={id} />
      <Footer />
    </main>
  );
}
