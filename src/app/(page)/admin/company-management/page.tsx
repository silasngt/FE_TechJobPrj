'use client';

import { useState } from 'react';
import { SiderAdmin } from '@/src/app/components/sider-bar/SiderAdmin';
import { Toaster, toast } from 'sonner';

interface AdminCompany {
  id: string;
  logo?: string;
  name: string;
  email: string;
  employees: number;
  totalCvApplied: number;
  isBlocked: boolean;
}

export default function AdminCompanyManagementPage() {
  const [companies, setCompanies] = useState<AdminCompany[]>([
    {
      id: 'c1',
      logo: '',
      name: 'Công ty ABC',
      email: 'hr@abc.com',
      employees: 120,
      totalCvApplied: 85,
      isBlocked: false,
    },
    {
      id: 'c2',
      logo: '',
      name: 'Công ty XYZ',
      email: 'contact@xyz.com',
      employees: 45,
      totalCvApplied: 30,
      isBlocked: true,
    },
  ]);

  const handleToggleBlock = (id: string) => {
    setCompanies((prev) =>
      prev.map((c) => (c.id === id ? { ...c, isBlocked: !c.isBlocked } : c))
    );

    toast.success('Cập nhật trạng thái tài khoản company (mock).');
  };

  return (
    <>
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

          {/* Table list */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-5 py-3 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-sm font-semibold text-gray-900">
                Danh sách công ty
              </h3>
              <span className="text-xs text-gray-500">
                Tổng: {companies.length} công ty
              </span>
            </div>

            <div className="divide-y divide-gray-100">
              {companies.map((company) => (
                <div
                  key={company.id}
                  className="px-5 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm"
                >
                  {/* Left */}
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600 overflow-hidden">
                      {company.logo ? (
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        company.name.charAt(0)
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {company.name}
                      </p>
                      <p className="text-xs text-gray-500">{company.email}</p>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex flex-col md:items-end gap-2 min-w-[220px]">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600">
                      <p>
                        Nhân sự:{' '}
                        <span className="font-semibold">
                          {company.employees}
                        </span>
                      </p>
                      <p>
                        CV ứng tuyển:{' '}
                        <span className="font-semibold">
                          {company.totalCvApplied}
                        </span>
                      </p>
                      <span
                        className={`inline-flex px-2 py-1 rounded-full text-[11px] font-semibold ${
                          company.isBlocked
                            ? 'bg-red-50 text-red-600 border border-red-200'
                            : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                        }`}
                      >
                        {company.isBlocked ? 'Đã khóa' : 'Đang hoạt động'}
                      </span>
                    </div>

                    <button
                      onClick={() => handleToggleBlock(company.id)}
                      className={`px-3 py-1.5 text-xs rounded-md font-semibold transition ${
                        company.isBlocked
                          ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                          : 'bg-red-500 text-white hover:bg-red-600'
                      }`}
                    >
                      {company.isBlocked
                        ? 'Mở khóa tài khoản'
                        : 'Khóa tài khoản'}
                    </button>
                  </div>
                </div>
              ))}

              {companies.length === 0 && (
                <div className="px-5 py-6 text-sm text-gray-500">
                  Chưa có công ty nào.
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
