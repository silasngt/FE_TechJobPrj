'use client';
import { SiderAdmin } from '@/src/app/components/sider-bar/SiderAdmin';
import { Toaster, toast } from 'sonner';
import { CompanyList } from './CompanyList';
import { useAuth } from '@/src/hooks/useAuth';

export default function AdminCompanyManagementPage() {
  const { infoAdmin } = useAuth();
  // console.log(infoUser);
  return (
    <>
      {infoAdmin && (
        <div className="min-h-screen bg-[#f5f7fb] flex">
          <Toaster richColors position="top-right" />
          <SiderAdmin />

          <main className="flex-1 px-10 py-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Company Management
                </h2>
                <p className="text-sm text-gray-500">
                  Quản lý danh sách công ty và trạng thái tài khoản.
                </p>
              </div>
            </div>

            {/* Company list */}
            <CompanyList />
          </main>
        </div>
      )}
    </>
  );
}
