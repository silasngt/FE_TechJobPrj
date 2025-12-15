import { Footer } from '@/src/app/components/footer/Footer';
import { Header } from '@/src/app/components/header/Header';
import { SectionDetailCompany } from './SectionDetailCompany';

export default async function CompanyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;

  const { id } = resolvedParams;
  // console.log(id);
  return (
    <main className="min-h-screen bg-[#eaf7f4]">
      <Header />
      <SectionDetailCompany id={id} />
      <Footer />
    </main>
  );
}
