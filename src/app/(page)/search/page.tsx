'use client';
import { Header } from '@/src/app/components/header/Header';
import { Footer } from '@/src/app/components/footer/Footer';
import { Search } from '../../components/hero/SearchSection';
import { SearchHomeHeader } from './SearchHomeHeader';
import { SearchHomeItem } from './SearchHomeItem';
import { Suspense } from 'react';

export default function JobSearchResultPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* CONTENT */}
      <main className="flex-1 bg-[#f5f7fb]">
        <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
          <Suspense>
            <SearchHomeHeader />
            <Search />
            <SearchHomeItem />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  );
}
