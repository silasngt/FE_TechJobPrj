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
      <div className="min-h-screen flex flex-col">
        <Header />

        {/* CONTENT */}
        <main className="flex-1 bg-[#f5f7fb]">
          <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
            <JobSearchHeader />
            <JobSearch />
            <JobSearchItem />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
