'use client';

export default function JobApplyPage() {
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   console.log(Object.fromEntries(formData.entries()));
  // };

  return (
    <main className="min-h-screen bg-[#f5f7fb]">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Job summary card */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-8">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-semibold">
              S
            </div>
            <div className="flex-1">
              <h1 className="text-lg md:text-xl font-semibold text-gray-900">
                Social Media Assistant
              </h1>
              <p className="text-xs text-gray-500 mt-1">
                Stripe Việt Nam · Marketing · Full-time
              </p>
              <div className="flex flex-wrap gap-3 mt-2 text-[11px] text-gray-500">
                <span>📍 Quận 1, TP. Hồ Chí Minh</span>
                <span>💰 Thoả thuận</span>
                <span>🕒 Đăng 3 ngày trước</span>
              </div>
            </div>
          </div>
        </section>

        {/* Form apply */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
            Gửi đơn ứng tuyển
          </h2>
          <p className="text-xs text-gray-500 mb-6">
            Điền thông tin bên dưới và đính kèm CV của bạn. Nhà tuyển dụng sẽ
            liên hệ lại nếu hồ sơ phù hợp.
          </p>

          <form className="space-y-4 text-sm">
            {/* Full name */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700">
                Họ và tên <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="Nhập họ và tên của bạn"
                className="h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Nhập địa chỉ email"
                className="h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700">
                Số điện thoại <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Nhập số điện thoại liên hệ"
                className="h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Attach resume */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700">
                Đính kèm CV <span className="text-red-500">*</span>
              </label>
              <label className="mt-1 flex items-center justify-center w-full h-24 border-2 border-dashed border-emerald-200 rounded-lg bg-emerald-50/40 cursor-pointer hover:bg-emerald-50 transition">
                <div className="text-center">
                  <p className="text-xs font-medium text-emerald-700">
                    Nhấn để chọn CV hoặc kéo thả vào đây
                  </p>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Hỗ trợ PDF, DOC, DOCX · Tối đa 5MB
                  </p>
                </div>
                <input
                  type="file"
                  name="resume"
                  required
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
              </label>
            </div>

            {/* Terms */}
            <p className="text-[11px] text-gray-500 mt-3">
              Bằng cách gửi đơn, bạn xác nhận rằng bạn đồng ý với{' '}
              <a href="#" className="text-emerald-600 hover:underline">
                Điều khoản sử dụng
              </a>{' '}
              và{' '}
              <a href="#" className="text-emerald-600 hover:underline">
                Chính sách bảo mật
              </a>{' '}
              của TechJob.
            </p>

            {/* Actions */}
            <div className="mt-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
              <a
                href="/job/detail/1"
                className="order-2 md:order-1 text-xs text-gray-500 hover:text-emerald-600 underline-offset-2 hover:underline"
              >
                ← Quay lại trang chi tiết công việc
              </a>

              <button
                type="submit"
                className="order-1 md:order-2 w-full md:w-auto px-6 py-2.5 bg-emerald-500 text-white text-sm font-semibold rounded-md hover:bg-emerald-600 transition"
              >
                Gửi đơn ứng tuyển
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
