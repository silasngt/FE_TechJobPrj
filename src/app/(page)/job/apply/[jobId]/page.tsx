import moment from 'moment';
import { FormApply } from './FormApply';

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
          <div className="max-w-3xl mx-auto px-4 py-10">
            {/* Job summary card */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-semibold">
                  S
                </div>
                <div className="flex-1">
                  <h1 className="text-lg md:text-xl font-semibold text-gray-900">
                    {detailJobCV.title}
                  </h1>
                  <p className="text-xs text-gray-500 mt-1">
                    {detailJobCV.companyId.companyName} ·{' '}
                    {detailJobCV.technologies}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2 text-[11px] text-gray-500">
                    <span>📍 {detailJobCV.workingForm}</span>
                    <span>
                      💰 {detailJobCV.salaryMin}$ - {detailJobCV.salaryMax}$
                    </span>
                    <span>
                      🕒Đăng ngày :{' '}
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
