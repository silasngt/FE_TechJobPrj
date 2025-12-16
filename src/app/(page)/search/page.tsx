'use client';
import { Header } from '@/src/app/components/header/Header';
import { Footer } from '@/src/app/components/footer/Footer';
import { Search } from '../../components/hero/SearchSection';
import { SearchHomeHeader } from './SearchHomeHeader';
import { SearchHomeItem } from './SearchHomeItem';

export default function JobSearchResultPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb]">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
        {/* ====== TOP BAR: tiêu đề + info kết quả ====== */}
        <SearchHomeHeader />

        {/* <SearchBar /> */}
        <Search />

        {/* ====== KẾT QUẢ JOB ====== */}
        <SearchHomeItem />
      </div>

      <Footer />
    </main>
  );
}
