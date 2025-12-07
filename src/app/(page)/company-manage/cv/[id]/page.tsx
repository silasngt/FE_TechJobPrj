import { SectionDetailCV } from './SectionDetailCV';
import { SectionJobCV } from './SectionJobCV';

export default async function CompanyCvDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;

  const { id } = resolvedParams;

  return (
    <main className="min-h-screen bg-[#f5f7fb]">
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
              Chi tiết CV ứng tuyển
            </h1>
            <p className="text-sm text-gray-500">
              Xem thông tin CV ứng viên cho một vị trí tuyển dụng cụ thể.
            </p>
          </div>
          <a
            href="/company-manage/cv/list"
            className="px-4 py-2 text-sm border border-emerald-500 text-emerald-600 rounded-md hover:bg-emerald-50 transition"
          >
            Quay lại danh sách
          </a>
        </div>

        {/* Thông tin công việc + trạng thái CV */}
        <SectionJobCV id={id} />

        {/*Thông tin ứng viên + CV */}
        <SectionDetailCV id={id} />
      </div>
    </main>
  );
}
