'use client';
import moment from 'moment';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export const SectionDetailJob = (props: { id: string }) => {
  const { id } = props;
  const [isValid, setIsValid] = useState(false);
  const [images, setImages] = useState<any>([]);
  const [jobRelation, setJobRelation] = useState<any[]>([]);
  const [jobDetail, setJobDetail] = useState<any>();
  // Lấy ra chi tiết công việc
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs/${id}`, {
      method: 'GET',
      credentials: 'include', // Gửi kèm cookie
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          setJobDetail(res.data.job);
          setJobRelation(res.data.relateJobs);
        }
        if (res.success === false) {
          toast.error(res.message);
        }
      });
  });
  // console.log(jobDetail);
  return (
    <>
      {jobDetail && (
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* ====== TOP: JOB + COMPANY ====== */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* JOB HEADER */}
            <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-7">
              {/* Title + Apply */}
              <div className="flex flex-col gap-3 mb-4">
                <div>
                  <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
                    {jobDetail.title}
                  </h1>
                  <p className="text-xs text-gray-500 mt-1">
                    {jobDetail.companyId.companyName}
                  </p>
                </div>

                <a
                  href={`/job/apply/${id}`}
                  className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition"
                >
                  Ứng tuyển ngay
                </a>
              </div>

              {/* Thông tin nhanh */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-600 mb-4">
                <p>
                  <span className="font-semibold text-gray-800">Vị trí:</span>{' '}
                  {jobDetail.position}
                </p>
                <p>
                  <span className="font-semibold text-gray-800">
                    Hình thức làm việc:
                  </span>{' '}
                  {jobDetail.workingForm}
                </p>
                <p>
                  <span className="font-semibold text-gray-800">
                    Mức lương:
                  </span>{' '}
                  {jobDetail.salaryMin}$ – {jobDetail.salaryMin}$
                </p>
                <p>
                  <span className="font-semibold text-gray-800">
                    Ngày đăng:
                  </span>{' '}
                  {moment(jobDetail.createdAt)
                    .locale('vi')
                    .format('DD/MM/YYYY')}
                </p>
              </div>

              {/* Hình ảnh / banner (placeholder) */}
              {jobDetail?.images && jobDetail.images.length > 0 && (
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {jobDetail.images.map((img: string, index: number) => (
                    <div
                      key={index}
                      className={`rounded-xl overflow-hidden bg-gray-100 ${
                        index === 0 ? 'col-span-3 h-40 md:h-52' : 'h-28 md:h-32'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`job-image-${index}`}
                        className="w-full h-full object-cover hover:scale-105 transition"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 text-[11px] mt-3">
                {jobDetail.technologies.map((tag: any) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* COMPANY CARD */}
            <aside className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={jobDetail.companyId.logo}
                    alt={jobDetail.companyId.companyName}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-gray-900">
                    {jobDetail.companyId.companyName}
                  </h2>
                  <p className="text-[11px] text-gray-500">
                    {jobDetail.companyId.companyModel}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-gray-600">
                {jobDetail.companyId.cityId.cityName ? (
                  <>
                    <p>
                      📍{' '}
                      <span className="font-medium">
                        {jobDetail.companyId.cityId.cityName}
                      </span>
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      📍{' '}
                      <span className="font-medium">
                        công ty chưa cập nhật dữ liệu
                      </span>
                    </p>
                  </>
                )}

                <p>
                  👥 Quy mô:{' '}
                  <span className="font-medium">
                    {jobDetail.companyId.companyEmployees}
                  </span>
                </p>
                <p>🕒 Làm việc: {jobDetail.companyId.workingTime}</p>
              </div>

              <button className="mt-2 w-full px-3 py-2 rounded-full border border-emerald-500 text-emerald-600 text-xs font-semibold hover:bg-emerald-50 transition">
                Xem trang công ty
              </button>
            </aside>
          </section>

          {/* ====== DESCRIPTION / RESPONSIBILITIES / REQUIREMENTS ====== */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6">
              {/* Description */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Mô tả công việc
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {jobDetail.description}
                </p>
              </div>
            </div>
          </section>

          {/* ====== OTHER JOBS ====== */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Việc làm công ty đang tuyển dụng
              </h2>
              <Link
                href={`/job/list`}
                className="text-xs text-emerald-600 hover:underline"
              >
                Xem thêm
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {jobRelation.map((job: any, idx: number) => (
                <article
                  key={idx}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-semibold text-gray-900">
                        {job.title}
                      </h3>
                      <span className="text-[11px] px-2 py-0.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600">
                        {job.position}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-1">
                      📍 {job.workingForm}
                    </p>
                    <p className="text-xs text-gray-600 mb-1">
                      Đăng ngày :{' '}
                      {moment(job.createdAt).locale('vi').format('DD/MM/YYYY')}
                    </p>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <Link
                      href={`/job/detail/${job._id}`}
                      className="text-xs text-emerald-600 hover:underline"
                    >
                      Xem chi tiết
                    </Link>
                    <Link
                      href={`/job/apply/${job._id}`}
                      className="px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-semibold hover:bg-emerald-600 transition"
                    >
                      Ứng tuyển
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
};
