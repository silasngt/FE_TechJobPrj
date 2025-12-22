import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-4">
      <div className="max-w-md w-full text-center">
        {/* Icon / number */}
        <div className="relative mb-6">
          <div className="text-[96px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
            404
          </div>
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-24 bg-emerald-200/40 rounded-full blur-3xl" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Trang không tồn tại
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
        </p>

        {/* Actions */}
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition"
          >
            Về trang chủ
          </Link>
        </div>

        {/* Hint */}
        <p className="mt-6 text-xs text-gray-400">
          Nếu bạn nghĩ đây là lỗi, vui lòng liên hệ đội ngũ TechJob.
        </p>
      </div>
    </div>
  );
}
