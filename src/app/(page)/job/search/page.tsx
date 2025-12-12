'use client';
import { Footer } from '@/src/app/components/footer/Footer';
import { Header } from '@/src/app/components/header/Header';
import { JobSearch } from '@/src/app/components/search/JobSearch';
import { useState } from 'react';
import { JobSearchItem } from './JobSearchItem';
import { JobSearchHeader } from './JobSearchHeader';

export default function SearchJobPage() {
  return (
    <>
      <main className="min-h-screen bg-[#f5f7fb]">
        <Header />

        <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
          {/* ====== TOP BAR: tiêu đề + info kết quả ====== */}

          <JobSearchHeader />

          {/* <SearchBar /> */}
          <JobSearch />

          {/* ====== KẾT QUẢ JOB ====== */}
          <JobSearchItem />
        </div>

        <Footer />
      </main>
    </>
  );
}
