import { SiderUser } from '@/src/app/components/sider-bar/SiderUser';
import Link from 'next/link';
import { DetailCv } from './DetailCv';

export default async function DetailCvUserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;

  const { id } = resolvedParams;
  return (
    <>
      <div className="min-h-screen bg-[#f5f7fb] flex">
        <SiderUser />

        <div className="flex-1 px-10 py-8 bg-[#f5f7fb] min-h-screen">
          <div>
            <Link
              href="/user-manage/cv/list"
              className="text-emerald-600  mb-4 inline-block rounded-xl px-3 py-1 border border-emerald-500 hover:bg-emerald-50 transition"
            >
              Quay lại danh sách CV
            </Link>
          </div>
          <DetailCv id={id} />
        </div>
      </div>
    </>
  );
}
