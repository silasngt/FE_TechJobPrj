export const Footer = () => {
  return (
    <>
      <footer
        className="mt-0 text-white"
        style={{
          backgroundImage: "url('../../assets/images/bg-footer.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <img
                src="../../assets/images/logo_techjob.svg"
                alt="TechJob Logo"
                className="mb-[10px]"
              />
              <p className="text-sm text-white/80 max-w-xs">
                TechJob - Nền tảng tuyển dụng và tìm việc làm hàng đầu dành cho
                cộng đồng IT Việt Nam.
              </p>
            </div>

            {/* About */}
            <div>
              <h4 className="font-semibold mb-3 text-sm">Thông tin</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li>
                  <a href="#">Về chúng tôi</a>
                </li>
                <li>
                  <a href="#">Tuyển dụng</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-3 text-sm">Tài nguyên</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li>
                  <a href="#">Tài liệu hướng dẫn</a>
                </li>
                <li>
                  <a href="#">Hướng dẫn</a>
                </li>
                <li>
                  <a href="#">Điều khoản sử dụng</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-3 text-sm">Liên hệ</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li>010412600016 - Thực tập tốt nghiệp </li>
                <li>2251120049 - Nguyễn Giang Thành Tài</li>
                <li>2251120182 - Nguyễn Ngọc Quận</li>
                <li>Trường Đại học GTVT TPHCM</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-white/20 pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/70">
            <span>
              © {new Date().getFullYear()} TechJob. All rights reserved.
            </span>
            <div className="flex gap-4">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
