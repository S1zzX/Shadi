export default function TutoringFooter() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-black text-blue-900 text-lg">G</div>
            <div>
              <div className="font-black text-sm">GIA SƯ THẾ HỆ MỚI</div>
              <div className="text-blue-300 text-xs">Tiểu học dạy kèm</div>
            </div>
          </div>
          <p className="text-blue-200 text-sm leading-relaxed">
            Trung tâm gia sư chuyên dạy kèm Tiểu học với phương pháp hiện đại, giảng dạy bằng Tiếng Anh.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-black text-sm uppercase mb-3 text-yellow-400">Liên hệ</h4>
          <ul className="space-y-2 text-sm text-blue-200">
            <li className="flex items-start gap-2">
              <span className="mt-0.5">📍</span>
              <span>130 Đại Lộ 3, Phước Bình, TP.HCM</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:0896677357" className="hover:text-yellow-400 transition-colors font-semibold">0896.677.357</a>
            </li>
            <li className="flex items-center gap-2">
              <span>🕐</span>
              <span>Thứ 2 – Chủ nhật: 7:00 – 21:00</span>
            </li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="font-black text-sm uppercase mb-3 text-yellow-400">Khóa học</h4>
          <ul className="space-y-1.5 text-sm text-blue-200">
            {['Rèn chữ đẹp', 'Toán bằng Tiếng Anh', 'Khoa học Tự nhiên', 'KHXH bằng Tiếng Anh', 'STEM bằng Tiếng Anh'].map(c => (
              <li key={c} className="flex items-center gap-2 hover:text-yellow-400 transition-colors cursor-pointer">
                <span className="text-yellow-400">›</span> {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800 py-4 text-center text-blue-400 text-xs">
        © 2026 Gia Sư Thế Hệ Mới – 130 Đại Lộ 3, Phước Bình. All rights reserved.
      </div>

      {/* Floating phone button */}
      <a
        href="tel:0896677357"
        className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-blue-900 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-colors z-50 animate-bounce"
        title="Gọi ngay"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
        </svg>
      </a>
    </footer>
  )
}
