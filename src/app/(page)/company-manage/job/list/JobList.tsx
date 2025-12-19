'use client';
import {
  ButtonDeleteForce,
  ButtonDeleteSoft,
} from '@/src/app/components/button/ButtonDelete';
import { PaginationRole } from '@/src/app/components/pagination/PaginationRole';
import { workingFormList } from '@/src/config/workingForm';
import moment from 'moment';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const JobList = () => {
  const [jobList, setJobList] = useState<any[]>([]);
  const [totalJob, setTotalJob] = useState(0);
  const [page, setPage] = useState(1);
  const searchParams = useSearchParams();
  const position = searchParams.get('position') || '';
  const status = searchParams.get('status') || '';
  const router = useRouter();
  const [totalPage, setTotalPage] = useState(0);
  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/jobs?position=${position}&isDeleted=${status}&page=${page}`,
      {
        method: 'GET',
        credentials: 'include', // Gửi kèm cookie
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log('res', res);
        if (res.success === true) {
          setJobList(res.data.jobs || []);
          setTotalJob(res.data.totalJob);
          // setTotalPage(res.totalPage);
        }
      });
  }, [status, position]);
  // console.log('jobList', jobList);

  // Xử lý cho Phân trang
  const handlePagination = (page: number) => {
    setPage(page);
  };

  // Xử lý cho Delete Soft (Toggle Status)
  const handleToggleStatusSuccess = (id: string) => {
    setJobList((prev) =>
      prev.map((job) =>
        job.jobId === id ? { ...job, isDeleted: !job.isDeleted } : job
      )
    );
  };
  // Xử lý cho Delete Force
  const handleDeleteSuccess = (deleteid: string) => {
    setJobList((prev) => prev.filter((job) => job.jobId !== deleteid));
  };
  const handleFilterPosition = (event: any) => {
    event.preventDefault();
    const value = event.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set('position', value);
    } else {
      params.delete('position');
    }
    router.push(`?${params.toString()}`);
  };
  const handleFilterStatus = (event: any) => {
    event.preventDefault();
    const value = event.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      // Chuyển "true"/"false" string thành boolean
      const boolValue = value === 'true';
      params.set('status', boolValue.toString());
    } else {
      params.delete('status');
    }
    router.push(`?${params.toString()}`);
  };
  return (
    <>
      <div className="mb-4 flex flex-wrap gap-2 items-center">
        {/* Filter Postion */}
        <select
          onChange={handleFilterPosition}
          className="h-9 px-3 rounded-md border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        >
          <option value="">Cấp bậc</option>
          <option value="Intern">Intern</option>
          <option value="Fresher">Fresher</option>
          <option value="Middle">Middle</option>
          <option value="Senior">Senior</option>
        </select>
        {/* Filter Status */}
        <select
          onChange={handleFilterStatus}
          className="h-9 px-3 rounded-md border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        >
          <option value="">Tất cả trạng thái</option>
          <option value="false">Đang mở</option>
          <option value="true">Đã đóng</option>
        </select>
      </div>
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
                    <span
                      className={`inline-flex px-3 py-1.5 rounded-full text-[11px] font-semibold transition-colors ${
                        job.isDeleted
                          ? 'bg-red-100 text-red-700 border border-red-200'
                          : 'bg-green-100 text-green-700 border border-green-200'
                      }`}
                    >
                      {job.isDeleted ? 'Đã xóa' : 'Đang hoạt động'}
                    </span>
                    <span className="text-xs text-gray-500">
                      {job.totalApplicants} ứng viên
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <ButtonDeleteSoft
                      api={`${process.env.NEXT_PUBLIC_API_URL}/jobs/${job.jobId}`}
                      id={job.jobId}
                      isDeleted={job.isDeleted}
                      onDeleteSuccess={handleToggleStatusSuccess}
                    />
                    <a
                      href={`/company-manage/job/edit/${job.jobId}`}
                      className="px-3 py-1.5 text-xs rounded-md border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition"
                    >
                      Chỉnh sửa
                    </a>
                    <ButtonDeleteForce
                      api={`${process.env.NEXT_PUBLIC_API_URL}/companies/jobs/${job.jobId}/force`}
                      id={job.jobId}
                      onDeleteSuccess={handleDeleteSuccess}
                    />
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
      <PaginationRole
        totalPage={totalPage}
        page={page}
        onPageChange={handlePagination}
      />
    </>
  );
};
