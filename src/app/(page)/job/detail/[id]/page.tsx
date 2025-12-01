export default function JobDetailPage() {
  return (
    <main className="min-h-screen bg-[#eaf7f4]">
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* ====== TOP: JOB + COMPANY ====== */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* JOB HEADER */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-7">
            {/* Title + Apply */}
            <div className="flex flex-col gap-3 mb-4">
              <div>
                <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Automotive Software Engineer (C++, OOP, Middleware)
                </h1>
                <p className="text-xs text-gray-500 mt-1">
                  Lĩnh vực: Phần mềm ô tô · Mã job: JOB-2025-001
                </p>
              </div>

              <a
                href="/job/apply/1"
                className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition"
              >
                Ứng tuyển ngay
              </a>
            </div>

            {/* Thông tin nhanh */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-600 mb-4">
              <p>
                <span className="font-semibold text-gray-800">Vị trí:</span> Mid
                / Senior Engineer
              </p>
              <p>
                <span className="font-semibold text-gray-800">Địa điểm:</span>{' '}
                Quận 1, TP. Hồ Chí Minh
              </p>
              <p>
                <span className="font-semibold text-gray-800">Mức lương:</span>{' '}
                1.800$ – 2.800$
              </p>
              <p>
                <span className="font-semibold text-gray-800">Hình thức:</span>{' '}
                Full-time · Hybrid
              </p>
              <p>
                <span className="font-semibold text-gray-800">Ngày đăng:</span>{' '}
                20/04/2025
              </p>
            </div>

            {/* Hình ảnh / banner (placeholder) */}
            <div className="grid grid-cols-3 gap-2 mb-2">
              <div className="col-span-3 md:col-span-3 rounded-xl overflow-hidden h-32 md:h-40 bg-gray-200">
                <div className="w-full h-full bg-[url('/images/job-banner.jpg')] bg-cover bg-center" />
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 text-[11px] mt-3">
              {['C++', 'Embedded', 'Automotive', 'OOP', 'Linux'].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* COMPANY CARD */}
          <aside className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-2xl font-bold">
                S
              </div>
              <div>
                <h2 className="text-sm font-semibold text-gray-900">
                  Stripe Việt Nam
                </h2>
                <p className="text-[11px] text-gray-500">
                  Công nghệ tài chính · Thanh toán
                </p>
              </div>
            </div>

            <div className="space-y-2 text-xs text-gray-600">
              <p>
                📍 <span className="font-medium">TP. Hồ Chí Minh</span>
              </p>
              <p>
                👥 Quy mô: <span className="font-medium">400+ nhân viên</span>
              </p>
              <p>🕒 Làm việc: Thứ 2 – Thứ 6</p>
              <p>
                🌐 Website:{' '}
                <a
                  href="https://stripe.com"
                  className="text-emerald-600 hover:underline"
                >
                  stripe.com
                </a>
              </p>
            </div>

            <button className="mt-2 w-full px-3 py-2 rounded-full border border-emerald-500 text-emerald-600 text-xs font-semibold hover:bg-emerald-50 transition">
              Xem trang công ty
            </button>
          </aside>
        </section>

        {/* ====== DESCRIPTION / RESPONSIBILITIES / REQUIREMENTS ====== */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6">
            {/* Description */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Mô tả công việc
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Bạn sẽ tham gia vào đội ngũ phát triển hệ thống phần mềm cho các
                dòng xe thế hệ mới, tập trung vào nền tảng middleware và tích
                hợp với các module điều khiển khác. Công việc bao gồm phát triển
                tính năng mới, tối ưu hiệu năng, cải thiện độ ổn định và tham
                gia review kiến trúc hệ thống.
              </p>
            </div>

            {/* Responsibilities */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Trách nhiệm chính
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>
                  Phát triển và bảo trì các module phần mềm nhúng sử dụng C++.
                </li>
                <li>
                  Làm việc chặt chẽ với team kiến trúc, kiểm thử và hardware để
                  đảm bảo chất lượng sản phẩm.
                </li>
                <li>
                  Tham gia review code, đề xuất cải tiến về hiệu năng và cấu
                  trúc.
                </li>
                <li>
                  Viết tài liệu kỹ thuật, hướng dẫn sử dụng và quy trình tích
                  hợp.
                </li>
                <li>
                  Hỗ trợ phân tích lỗi từ hiện trường và đề xuất hướng khắc
                  phục.
                </li>
              </ul>
            </div>

            {/* Requirements / Who you are */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Yêu cầu ứng viên
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>
                  Tốt nghiệp Đại học/Cao đẳng ngành CNTT, Kỹ thuật máy tính,
                  Điện–Điện tử hoặc tương đương.
                </li>
                <li>
                  Có kinh nghiệm lập trình C++ (OOP, STL) từ 2 năm trở lên.
                </li>
                <li>
                  Hiểu biết về hệ điều hành Linux, hệ thống nhúng là một lợi
                  thế.
                </li>
                <li>
                  Có khả năng đọc hiểu tài liệu tiếng Anh, giao tiếp cơ bản.
                </li>
                <li>Kỹ năng làm việc nhóm và giải quyết vấn đề tốt.</li>
              </ul>
            </div>

            {/* Nice to have */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Ưu tiên (Nice to have)
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Đã từng làm việc trong lĩnh vực Automotive / Embedded.</li>
                <li>
                  Có kinh nghiệm với AUTOSAR, CAN, UDS hoặc các giao thức trên
                  xe.
                </li>
                <li>
                  Đã tham gia các dự án lớn, hệ thống phân tán hoặc real-time.
                </li>
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Quyền lợi
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Mức lương cạnh tranh, review lương 1–2 lần/năm.</li>
                <li>Thưởng dự án, thưởng hiệu suất, tháng lương 13.</li>
                <li>
                  Bảo hiểm full lương, gói bảo hiểm sức khỏe mở rộng cho nhân
                  viên.
                </li>
                <li>Môi trường làm việc quốc tế, cơ hội onsite.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ====== OTHER JOBS ====== */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Việc làm tương tự
            </h2>
            <button className="text-xs text-emerald-600 hover:underline">
              Xem thêm
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'Visual Designer',
                location: 'Đà Nẵng · Onsite',
                type: 'Full-time',
              },
              {
                title: 'Frontend Developer (ReactJS)',
                location: 'Hà Nội · Hybrid',
                type: 'Full-time',
              },
              {
                title: 'Backend Engineer (Node.js)',
                location: 'TP. HCM · Remote',
                type: 'Full-time',
              },
              {
                title: 'QA Engineer',
                location: 'TP. HCM · Onsite',
                type: 'Full-time',
              },
              {
                title: 'Product Owner',
                location: 'TP. HCM · Hybrid',
                type: 'Full-time',
              },
              {
                title: 'DevOps Engineer',
                location: 'Remote',
                type: 'Full-time',
              },
            ].map((job, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-gray-900">
                      {job.title}
                    </h3>
                    <span className="text-[11px] px-2 py-0.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">
                    📍 {job.location}
                  </p>
                  <p className="text-[11px] text-gray-400">
                    Mức lương thoả thuận · Ứng tuyển trước 30/04/2025
                  </p>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <button className="text-xs text-emerald-600 hover:underline">
                    Xem chi tiết
                  </button>
                  <a
                    href="/job/apply/1"
                    className="px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-semibold hover:bg-emerald-600 transition"
                  >
                    Ứng tuyển
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
