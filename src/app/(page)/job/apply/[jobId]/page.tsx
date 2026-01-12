import moment from 'moment';
import { FormApply } from './FormApply';
import { Metadata } from 'next';
import { formatVND } from '@/src/hooks/formatUI';
import { workingFormList } from '@/src/config/workingForm';
import { Header } from '@/src/app/components/header/Header';
import { Footer } from '@/src/app/components/footer/Footer';
export const metadata: Metadata = {
  title: 'Ứng tuyển công việc - TechJob',
  description: 'Gửi đơn ứng tuyển cho công việc bạn quan tâm.',
};
export default async function JobApplyPage({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const resolvedParams = await params;

  const { jobId } = resolvedParams;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs/${jobId}`, {
    cache: 'no-store',
    credentials: 'include',
  });
  const resJobCv = await res.json();
  // console.log(resJobCv);
  const detailJobCV = resJobCv.data.job;

  return (
    <>
      {resJobCv && (
        <main className="min-h-screen bg-[#f5f7fb]">
          <Header />
          <div className="max-w-3xl mx-auto px-4 py-10">
            {/* Job summary card */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-semibold">
                  {detailJobCV.companyName?.trim()?.charAt(0).toUpperCase() ??
                    ''}
                </div>
                <div className="flex-1">
                  <h1 className="text-lg md:text-xl font-semibold text-gray-900">
                    {detailJobCV.title}
                  </h1>
                  <p className="text-xs text-gray-500 mt-1">
                    {detailJobCV.companyName} ·{' '}
                    {detailJobCV.technologies.map((tag: any) => (
                      <span
                        key={tag}
                        className="ml-2 inline-block  bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2 text-[11px] text-gray-500">
                    <span>
                      {' '}
                      <span className="font-semibold text-gray-800">
                        Làm việc tại :
                      </span>{' '}
                      {
                        workingFormList.find(
                          (work) => work.value === detailJobCV.workingForm
                        )?.label
                      }
                    </span>
                    <span>
                      <span className="font-semibold text-gray-800">
                        Mức lương :{' '}
                      </span>
                      {formatVND(detailJobCV.salaryMin)} -{' '}
                      {formatVND(detailJobCV.salaryMax)}
                    </span>
                    <span>
                      <span className="font-semibold text-gray-800">
                        Đăng ngày :{' '}
                      </span>
                      {moment(detailJobCV.createdAt)
                        .locale('vi')
                        .format('DD/MM/YYYY')}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Form apply */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                Gửi đơn ứng tuyển
              </h2>
              <p className="text-xs text-gray-500 mb-6">
                Điền thông tin bên dưới và đính kèm CV của bạn. Nhà tuyển dụng
                sẽ liên hệ lại nếu hồ sơ phù hợp.
              </p>

              <FormApply jobId={jobId} />
            </section>
          </div>
        </main>
      )}
    </>
  );
}
