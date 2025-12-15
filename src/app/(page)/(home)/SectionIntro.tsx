export const SectionIntro = () => {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-10">
            <p className="inline-flex px-3 py-1 rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-600 uppercase tracking-wide">
              Vì sao nên chọn TechJob?
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">
              Kết nối <span className="text-emerald-500">developer</span> với
              những công ty công nghệ phù hợp
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Từ sinh viên mới ra trường đến senior engineer, TechJob giúp bạn
              tìm được công việc mơ ước và hỗ trợ nhà tuyển dụng tiếp cận đúng
              ứng viên nhanh hơn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#F5FBFF] rounded-2xl p-5 shadow-sm">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 mb-3">
                💼
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Dành cho người tìm việc
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Tìm kiếm job theo kỹ năng, thành phố, mức lương. Lưu job yêu
                thích và theo dõi trạng thái CV đã ứng tuyển.
              </p>
            </div>

            <div className="bg-[#F5FBFF] rounded-2xl p-5 shadow-sm">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 mb-3">
                🏢
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Dành cho nhà tuyển dụng
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Tạo tin tuyển dụng, quản lý CV ứng viên, cập nhật trạng thái
                duyệt / từ chối nhanh chóng trong một bảng điều khiển.
              </p>
            </div>

            <div className="bg-[#F5FBFF] rounded-2xl p-5 shadow-sm">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-sky-500/10 text-sky-500 mb-3">
                🔐
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Minh bạch & dễ theo dõi
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Giao diện rõ ràng, timeline ứng tuyển trực quan, thông báo trạng
                thái giúp cả hai bên luôn nắm được tiến trình tuyển dụng.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
