'use client';
import { SiderAdmin } from '@/src/app/components/sider-bar/SiderAdmin';
import { useAuth } from '@/src/hooks/useAuth';
import { StatisticSection } from './StatisticSection';
import { SystemInsightSection } from './InsightSection';
export const dynamic = 'force-dynamic';
export default function AdminDashboardPage() {
  const { infoAdmin } = useAuth();

  return (
    <>
      {' '}
      <div className="min-h-screen bg-[#f5f7fb] flex">
        <SiderAdmin />

        <main className="flex-1 px-10 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Admin Dashboard
              </h2>
              <p className="text-sm text-gray-500">
                Tổng quan nhanh về hệ thống company và user.
              </p>
            </div>
          </div>
          {infoAdmin && (
            <>
              <SystemInsightSection />
            </>
          )}
        </main>
      </div>
    </>
  );
}
