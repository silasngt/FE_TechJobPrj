import { SiderCompany } from '@/src/app/components/sider-bar/SiderCompany';
import { FormEdit } from './FormEdit';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Chỉnh sửa tin tuyển dụng - TechJob',
  description: 'Chỉnh sửa thông tin tin tuyển dụng của công ty bạn.',
};
export default async function CompanyJobEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <div className="min-h-screen bg-[#f5f7fb] flex">
        {/* SIDEBAR COMPANY */}
        <SiderCompany />

        {/* MAIN CONTENT */}
        <main className="flex-1 px-10 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Chỉnh sửa tin tuyển dụng
              </h2>
              <p className="text-sm text-gray-500">
                Nhập các thông tin bên dưới để chỉnh sửa tin tuyển dụng cho công
                ty.
              </p>
            </div>
            <a
              href="/company-manage/job/list"
              className="px-4 py-2 text-sm border border-emerald-500 text-emerald-600 rounded-md hover:bg-emerald-50 transition"
            >
              Quay lại danh sách việc làm
            </a>
          </div>

          {/* FORM */}
          <FormEdit id={id} />
        </main>
      </div>
    </>
  );
}
