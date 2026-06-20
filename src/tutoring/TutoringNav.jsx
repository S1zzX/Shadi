import { useState } from 'react'

export default function TutoringNav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center shadow">
            <svg viewBox="0 0 40 40" className="w-6 h-6">
              <text x="4" y="28" fontSize="22" fontWeight="900" fill="#1e3a8a" fontFamily="Arial">G</text>
            </svg>
          </div>
          <div>
            <div className="text-navy-900 font-black text-sm leading-tight text-blue-900">GIA SƯ THẾ HỆ MỚI</div>
            <div className="text-gray-500 text-[10px]">130 Đại Lộ 3 – Phước Bình</div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
          <a href="#home"     className="hover:text-yellow-500 transition-colors">Trang chủ</a>
          <a href="#courses"  className="hover:text-yellow-500 transition-colors">Khóa học</a>
          <a href="#register" className="hover:text-yellow-500 transition-colors">Đăng ký</a>
          <a href="#reviews"  className="hover:text-yellow-500 transition-colors">Đánh giá</a>
          <a
            href="tel:0896677357"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-black px-4 py-2 rounded-full flex items-center gap-1.5 transition-colors shadow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            0896.677.357
          </a>
        </div>

        {/* Mobile menu btn */}
        <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 px-4 py-3 space-y-3 text-sm font-semibold">
          {['Trang chủ','Khóa học','Đăng ký','Đánh giá'].map(l => (
            <a key={l} href="#" className="block text-gray-700 hover:text-yellow-500" onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a href="tel:0896677357" className="block bg-yellow-400 text-blue-900 font-black px-4 py-2 rounded-full text-center">
            📞 0896.677.357
          </a>
        </div>
      )}
    </nav>
  )
}
