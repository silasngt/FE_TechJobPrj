import { workingFormList } from '@/src/config/workingForm';
import { formatVND } from '@/src/hooks/formatUI';
import { useAuth } from '@/src/hooks/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const CardJobItem = (props: { featureJobs: any[] }) => {
  const { featureJobs } = props;
  const router = useRouter();
  const { isLogin } = useAuth();

  // Lấy tối đa 8 job
  const limitedJobs = (featureJobs || []).slice(0, 9);
  const handleApply = (id: string) => {
    if (!isLogin) {
      toast.warning('Vui lòng đăng nhập để ứng tuyển');
      return;
    }
    router.push(`/job/apply/${id}`);
  };

  return (
    <>
      {limitedJobs.map((job: any, index: number) => {
        const tags =
          typeof job.technologies === 'string'
            ? job.technologies.split(',').map((t: string) => t.trim())
            : [];
        const workingForm = workingFormList.find(
          (work) => work.value === job.workingForm
        )?.label;
        return (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between hover:shadow-[0_14px_35px_rgba(0,0,0,0.06)] hover:-translate-y-[2px] transition"
          >
            <div>
              {/* TAGS */}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {tags.map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-[10px] font-semibold px-2 py-1 rounded-full bg-[#E0FFF7] text-[#00B894]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Logo */}
              <Link href={`/job/detail/${job.jobId}`}>
                <div className="w-10 h-10 mb-3 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center overflow-hidden">
                  {job.logo ? (
                    <img
                      src={job.logo}
                      alt={job.companyName || job.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-[10px] text-gray-400">Logo</span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-[14px] font-semibold mb-1 line-clamp-2">
                  {job.title}
                </h3>

                {/* Company & Position */}
                <p className="text-xs text-gray-500 mb-1">
                  <span className="font-medium text-gray-700">
                    {job.companyName}
                  </span>{' '}
                  • {job.position}
                </p>

                {/* Salary */}
                <div className="mt-2 inline-flex items-center bg-gradient-to-r from-[#E0FFF7] to-[#F0FFFE] px-3 py-2 rounded-lg">
                  <span className="text-xs font-semibold text-[#00B894] ml-1">
                    {formatVND(job.salaryMin)} - {formatVND(job.salaryMax)}
                  </span>
                </div>
              </Link>
            </div>

            {/* Bottom: working form + apply */}
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[11px] text-gray-500 truncate max-w-[70%]">
                {workingForm}
              </span>
              <button
                onClick={() => handleApply(job.jobId)}
                className="px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-semibold hover:bg-emerald-600 transition"
              >
                Ứng tuyển
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
