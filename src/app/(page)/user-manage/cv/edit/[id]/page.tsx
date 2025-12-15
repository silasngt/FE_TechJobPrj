import { SiderUser } from '@/src/app/components/sider-bar/SiderUser';
import { Toaster, toast } from 'sonner';
import { FormEditCv } from './FormEditCv';

interface UserCvInfo {
  fullName: string;
  email: string;
  phone: string;
  fileName?: string;
}

export default async function UserCvEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;

  const { id } = resolvedParams;

  return (
    <>
      <Toaster richColors position="top-right" />
      <div className="min-h-screen bg-[#f5f7fb] flex">
        {/* SIDEBAR */}
        <SiderUser />

        {/* MAIN */}
        <main className="flex-1 px-10 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Chỉnh sửa CV
              </h2>
              <p className="text-sm text-gray-500">
                Cập nhật số điện thoại và file CV của bạn.
              </p>
            </div>
            <a
              href="/user-manage/cv/list"
              className="px-4 py-2 text-sm border border-emerald-500 text-emerald-600 rounded-md hover:bg-emerald-50 transition"
            >
              Quay lại danh sách CV
            </a>
          </div>

          {/* FORM */}
          <FormEditCv id={id} />
        </main>
      </div>
    </>
  );
}
