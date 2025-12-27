import { Footer } from '@/src/app/components/footer/Footer';
import { Header } from '@/src/app/components/header/Header';
import { CompanySearch } from '@/src/app/components/search/CompanySearch';

import { CompanySearchHeader } from './CompanySearchHeader';
import { CompanySearchItem } from './CompanySearchItem';
import { Suspense } from 'react';

export default function CompanySearchPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />

        {/* CONTENT */}
        <main className="flex-1 bg-[#f5f7fb]">
          <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
            <Suspense>
              <CompanySearchHeader />
              <CompanySearch />
              <CompanySearchItem />
            </Suspense>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
