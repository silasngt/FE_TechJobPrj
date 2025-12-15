import { SiderUser } from '@/src/app/components/sider-bar/SiderUser';
import { FcBriefcase, FcCurrencyExchange, FcLeave } from 'react-icons/fc';
import { ListCvUser } from './ListCvUser';

export default function MyApplicationPage() {
  return (
    <>
      <div className="min-h-screen bg-[#f5f7fb] flex">
        <SiderUser />

        <div className="flex-1 px-10 py-8 bg-[#f5f7fb] min-h-screen">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Quản lý hồ sơ ứng tuyển
              </h2>
              <p className="text-sm text-gray-500">
                Danh sách các công việc bạn đã ứng tuyển.
              </p>
            </div>
            <a
              href="/"
              className="px-4 py-2 text-sm border border-emerald-500 text-emerald-600 rounded-md hover:bg-emerald-50 transition"
            >
              Quay lại trang chủ
            </a>
          </div>

          {/* List CV User */}
          <ListCvUser />
        </div>
      </div>
    </>
  );
}
