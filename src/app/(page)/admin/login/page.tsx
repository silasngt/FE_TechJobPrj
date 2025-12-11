import { Toaster, toast } from 'sonner';
import { FormLoginAdmin } from './FormLoginAdmin';

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f7fb] px-4">
      <Toaster richColors position="top-right" />

      <div className="w-full max-w-md bg-white border border-gray-200 shadow-sm rounded-lg p-8">
        {/* Logo + title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            TechJob Admin
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Đăng nhập để truy cập trang quản trị
          </p>
        </div>

        {/* Form */}
        <FormLoginAdmin />
      </div>
    </div>
  );
}
