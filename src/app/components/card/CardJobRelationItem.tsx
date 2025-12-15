import moment from 'moment';
import Link from 'next/link';

export const CardJobRelationItem = (props: { job: any; address: string }) => {
  const { job, address } = props;
  return (
    <>
      <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col justify-between hover:shadow-md transition-shadow">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-900">{job.title}</h3>
            <span className="text-[11px] px-2 py-0.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600">
              {job.workingForm}
            </span>
          </div>
          <p className="text-xs text-gray-600 mb-1">📍 {address}</p>
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
            href={`/job/apply/${job.jobId}`}
            className="px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-semibold hover:bg-emerald-600 transition"
          >
            Ứng tuyển
          </Link>
        </div>
      </article>
    </>
  );
};
