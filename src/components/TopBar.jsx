export default function TopBar() {
  return (
    <div className="bg-white border-b border-gray-200 text-sm py-1.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 text-gray-700 font-medium">
          <span className="uppercase text-xs tracking-wide">Monday, June 8, 2026</span>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-red-600 transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-4.724A1 1 0 013 14.382V6a1 1 0 011-1h16a1 1 0 011 1v8.382a1 1 0 01-.553.894L15 20" />
            </svg>
            BẢN ĐỒ
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-red-600 transition-colors">ĐĂNG KÝ TRỰC TUYẾN</a>
          <span className="text-gray-300">|</span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white px-3 py-0.5 rounded flex items-center gap-1 hover:bg-blue-800 transition-colors text-xs"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
            Facebook
          </a>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Tìm khóa học"
            className="border border-gray-300 rounded px-3 py-1 text-xs w-40 focus:outline-none focus:border-red-500"
          />
          <button className="text-gray-600 hover:text-red-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
