'use client';
import { CardJobRelationItem } from '@/src/app/components/card/CardJobRelationItem';
import moment from 'moment';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'sonner';

export const SectionDetailCompany = (props: { id: string }) => {
  const { id } = props;
  const [isValid, setIsValid] = useState(false);
  const [images, setImages] = useState<any>([]);
  const [jobRelation, setJobRelation] = useState<any[]>([]);
  const [companyDetail, setDetailCompany] = useState<any>();
  // Lấy ra chi tiết công ty
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/companies/${id}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.success === true) {
          setDetailCompany(res.company);
          setJobRelation(res.data);
        }
      });
  }, []);
  return (
    <>
      {companyDetail && <Toaster position="top-right" richColors closeButton />}
      {companyDetail && (
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* ====== HERO COMPANY ====== */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Logo */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-3xl font-bold">
                <img
                  src={companyDetail.logo}
                  alt={companyDetail.companyName}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Tên + tags */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
                    {companyDetail.companyName}
                  </h1>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-100">
                    {companyDetail.companyModel}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  Công ty đang tuyển {jobRelation.length} vị trí công việc
                </p>
              </div>
            </div>

            {/* Info badges */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-lg">📅</span>
                <div>
                  <p className="text-[11px] uppercase text-gray-400 tracking-wide">
                    Thời gian làm việc
                  </p>
                  <p className="text-gray-800 font-medium">
                    {companyDetail.workingTime}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">👥</span>
                <div>
                  <p className="text-[11px] uppercase text-gray-400 tracking-wide">
                    Quy mô
                  </p>
                  <p className="text-gray-800 font-medium">
                    {companyDetail.companyEmployees}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">📍</span>
                <div>
                  <p className="text-[11px] uppercase text-gray-400 tracking-wide">
                    Địa điểm
                  </p>
                  <p className="text-gray-800 font-medium">
                    {companyDetail.address}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">💼</span>
                <div>
                  <p className="text-[11px] uppercase text-gray-400 tracking-wide">
                    Liên hệ
                  </p>
                  <p className="text-gray-800 font-medium">
                    {companyDetail.phone}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ====== COMPANY OVERVIEW ====== */}
          <section className="mb-10">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Tổng quan về công ty
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {companyDetail.description}
              </p>
            </div>
          </section>

          {/* ====== GALLERY (ẢNH VĂN HÓA) ====== */}
          <section className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {companyDetail.images.map((img: any, idx: number) => (
                <div
                  key={idx}
                  className="w-full h-48 rounded-2xl overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`Company Image ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* ====== JOB LISTINGS ====== */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Vị trí đang tuyển của công ty
              </h2>
              <span className="text-xs text-gray-500">
                {jobRelation.length} vị trí đang mở tại{' '}
                {companyDetail.companyName}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {jobRelation.map((job: any, idx: number) => (
                <CardJobRelationItem
                  key={idx}
                  job={job}
                  address={companyDetail.address}
                />
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
};
