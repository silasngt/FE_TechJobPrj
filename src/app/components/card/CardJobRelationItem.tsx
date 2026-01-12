import { workingFormList } from '@/src/config/workingForm';
import { useAuth } from '@/src/hooks/useAuth';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const CardJobRelationItem = (props: { job: any; address: string }) => {
  const { job } = props;
  const router = useRouter();
  const { isLogin } = useAuth();
  const handleApply = (id: string) => {
    if (!isLogin) {
      toast.warning('Vui lòng đăng nhập để ứng tuyển');
      return;
    }
    router.push(`/job/apply/${id}`);
  };
  const workingForm = workingFormList.find(
    (work) => work.value === job.workingForm
  )?.label;
  return (
    <>
      <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col justify-between hover:shadow-md transition-shadow">
        <Link href={`/job/detail/${job.jobId}`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-900">{job.title}</h3>
            <span className="text-[11px] px-2 py-0.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600">
              {workingForm}
            </span>
          </div>
          <p className="text-xs text-gray-600 mb-1">
            <span className="font-medium text-gray-700">
              {' '}
              Chi nhánh làm việc :
            </span>{' '}
            {job.cityName}
          </p>
          <p className="text-xs text-gray-600 mb-1">
            Đăng ngày :{' '}
            {moment(job.createdAt).locale('vi').format('DD/MM/YYYY')}
          </p>
          {/* Số người đã ứng tuyển */}
          <p className="text-xs text-gray-600">
            Đã có <span className="font-semibold">{job.totalApplicants}</span>{' '}
            người ứng tuyển
          </p>
        </Link>
        <div className="mt-3 flex justify-between items-center">
          <button
            onClick={() => handleApply(job.jobId)}
            className="px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-semibold hover:bg-emerald-600 transition"
          >
            Ứng tuyển
          </button>
        </div>
      </article>
    </>
  );
};
