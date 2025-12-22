import { Metadata } from 'next';
import { FormRegisterCompany } from './FormRegister';
import { LogoTabCompanySection } from '@/src/app/components/sectiontab/LogoTabSection';

export const metadata: Metadata = {
  title: 'Đăng ký (Công ty)',
  description: 'Mô tả trang đăng ký (Công ty)...',
};

export default function CompanyRegisterPage() {
  return (
    <>
      <div className="min-h-screen flex bg-white">
        {/* LEFT PANEL - COMPANY VERSION (Light Blue theme) */}
        <div className="hidden lg:flex lg:w-5/12 xl:w-1/2 bg-gradient-to-br from-[#E3FBFB] to-[#D0F8F8] relative overflow-hidden flex-col justify-between items-center p-10">
          {/* Quote Section */}
          <div className="text-center max-w-lg pt-8">
            <p className="text-4xl font-bold text-slate-900 mb-6 leading-relaxed">
              Đăng tuyển dụng & tuyển nhân tài
            </p>
            <p className="text-lg text-slate-700 mb-8">
              Kết nối với hàng nghìn nhà phát triển và chuyên gia công nghệ có
              kỹ năng
            </p>
          </div>

          {/* 4 Features Cards - Light Blue Theme */}
          <div className="grid grid-cols-2 gap-4 flex-1 w-full max-w-sm my-8">
            {/* Card 1 */}
            <div className="bg-blue-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="text-4xl mb-3">💼</div>
              <p className="font-semibold text-slate-900 text-sm">
                50K+ Nhà tuyển dụng hàng đầu
              </p>
              <p className="text-xs text-slate-700">
                Sẵn sàng tham gia với chúng tôi
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-green-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="text-4xl mb-3">🎯</div>
              <p className="font-semibold text-slate-900 text-sm">
                Sự phù hợp hoàn hảo
              </p>
              <p className="text-xs text-slate-700">
                Được thiết kế riêng cho bạn
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-purple-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="text-4xl mb-3">⚡</div>
              <p className="font-semibold text-slate-900 text-sm">
                Tuyển dụng nhanh
              </p>
              <p className="text-xs text-slate-700">Phản hồi nhanh chóng</p>
            </div>

            {/* Card 4 */}
            <div className="bg-orange-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="text-4xl mb-3">👑</div>
              <p className="font-semibold text-slate-900 text-sm">
                Những công ty hàng đầu
              </p>
              <p className="text-xs text-slate-700">Nhà tuyển dụng hàng đầu</p>
            </div>
          </div>

          {/* Rating Card */}
          <div className="flex items-center justify-center gap-3 pb-8">
            <div className="h-12 w-12 rounded-full bg-teal-500 flex items-center justify-center shadow-md">
              <span className="text-2xl">⭐</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-slate-900">4.9/5 Sao</p>
              <p className="text-sm text-gray-500">Từ 10,000+ đánh giá</p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-8 md:px-16 py-10">
          <div className="w-full max-w-md">
            <LogoTabCompanySection />

            <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2 text-center">
              Đăng tuyển dụng & thuê nhân tài
            </h1>
            <p className="text-slate-700 text-sm text-center mb-6">
              Xây dựng đội ngũ mơ ước với TechJob
            </p>

            {/* Sign up with Google */}
            <button
              type="button"
              className="w-full border border-gray-200 rounded-lg py-3 px-4 flex items-center justify-center gap-2 text-sm font-medium text-slate-700 hover:bg-blue-50 mb-5 transition"
            >
              <span className="text-lg">+</span>
              <span>Đăng ký với Google</span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs text-gray-400">
                Hoặc đăng ký bằng Email
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Form */}
            <FormRegisterCompany />

            {/* Login link */}
            <p className="mt-4 text-xs text-slate-700">
              Bạn đã có tài khoản?{' '}
              <a
                href="/company/login"
                className="text-teal-500 font-medium hover:underline"
              >
                Đăng nhập
              </a>
            </p>

            {/* Terms */}
            <p className="mt-4 text-[10px] leading-relaxed text-slate-500">
              Bằng việc nhấn 'Đăng ký', bạn xác nhận rằng bạn đã đọc và chấp
              nhận <span className="text-teal-500">Điều khoản Dịch vụ</span> và{' '}
              <span className="text-teal-500">Chính sách Bảo mật</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
