'use client';

import { workingFormList } from '@/src/config/workingForm';
import moment from 'moment';
import { useEffect, useState } from 'react';

export const JobList = () => {
  const [jobList, setJobList] = useState<any[]>([]);
  const [totalJob, setTotalJob] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/companies/jobs`, {
      method: 'GET',
      credentials: 'include', // Gửi kèm cookie
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          setJobList(res.data.jobs || []);
          setTotalJob(res.data.totalJob);
          // setTotalPage(res.totalPage);
        }
      });
  }, [page]);
  const handlePagination = (event: any) => {
    const value = event.target.value;
    setPage(parseInt(value));
  };
  const handleDeleteSuccess = (deleteid: string) => {
    setJobList((prev) => prev.filter((job) => job.id !== deleteid));
  };
  console.log('jobList', jobList);
  return (
    <>
      <section className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-sm font-semibold text-gray-900">
            Danh sách tin tuyển dụng
          </h3>
          <span className="text-xs text-gray-500">Tổng: {totalJob} tin</span>
        </div>

        <div className="divide-y divide-gray-100">
          {jobList.map((job, index) => {
            const workingForm = workingFormList.find(
              (work) => work.value === job.workingForm
            )?.label;
            return (
              <div
                key={index}
                className="px-5 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm"
              >
                {/* Info */}
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{job.title}</p>
                  <p className="text-xs text-gray-600">
                    Hình thức làm việc:{' '}
                    <span className="font-semibold">{workingForm}</span>
                  </p>
                  <p className="text-[11px] text-gray-400 mt-1">
                    Ngày đăng:{' '}
                    {moment(job.createdAt).locale('vi').format('DD/MM/YYYY')}
                  </p>
                </div>

                {/* Right: status, applicants, actions */}
                <div className="flex flex-col md:items-end gap-2 min-w-[230px]">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex px-3 py-1 rounded-full text-[11px] font-medium">
                      {job.status}
                    </span>
                    <span className="text-xs text-gray-500">
                      {job.totalApplicants} ứng viên
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={`/company/jobs/${job.id}/candidates`}
                      className="px-3 py-1.5 text-xs rounded-md bg-yellow-500 text-blue-700 font-semibold hover:bg-yellow-600 transition"
                    >
                      Đóng tin
                    </a>
                    <a
                      href={`/company-manage/job/edit/${job.id}`}
                      className="px-3 py-1.5 text-xs rounded-md border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition"
                    >
                      Chỉnh sửa
                    </a>
                    <button className="px-3 py-1.5 text-xs rounded-md bg-red-500 text-white font-semibold hover:bg-red-600 transition">
                      Xóa tin
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {totalJob === 0 && (
            <div className="px-5 py-6 text-sm text-gray-500">
              Chưa có tin tuyển dụng nào. Hãy đăng tin mới để thu hút ứng viên.
            </div>
          )}
        </div>
      </section>
    </>
  );
};
