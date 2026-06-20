export default function FloatingSocial() {
  return (
    <div className="fixed left-3 bottom-32 flex flex-col gap-2 z-50">
      {/* Google Maps */}
      <a
        href="#"
        className="flex flex-col items-center bg-white rounded-lg shadow-md p-1.5 w-12 hover:shadow-lg transition-shadow border border-gray-100"
        title="Tìm đường"
      >
        <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335"/>
            <circle cx="12" cy="9" r="2.5" fill="white"/>
          </svg>
        </div>
        <span className="text-[8px] text-gray-600 mt-0.5 leading-tight text-center">Tìm đường</span>
      </a>

      {/* Zalo */}
      <a
        href="#"
        className="flex flex-col items-center bg-white rounded-lg shadow-md p-1.5 w-12 hover:shadow-lg transition-shadow border border-gray-100"
        title="Chat Zalo"
      >
        <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="text-white font-black text-[10px]">Za</span>
        </div>
        <span className="text-[8px] text-gray-600 mt-0.5 leading-tight text-center">Chat Zalo</span>
      </a>

      {/* Messenger */}
      <a
        href="#"
        className="flex flex-col items-center bg-white rounded-lg shadow-md p-1.5 w-12 hover:shadow-lg transition-shadow border border-gray-100"
        title="Messenger"
      >
        <div className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="messengerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00B2FF" />
                <stop offset="100%" stopColor="#006AFF" />
              </linearGradient>
            </defs>
            <circle cx="12" cy="12" r="12" fill="url(#messengerGrad)" />
            <path d="M12 5C8.13 5 5 7.91 5 11.5c0 1.9.82 3.6 2.14 4.8V18l2.07-1.14C9.7 17.24 10.83 17.5 12 17.5c3.87 0 7-2.91 7-6.5S15.87 5 12 5zm.7 8.75l-1.78-1.9-3.47 1.9 3.82-4.06 1.82 1.9 3.43-1.9-3.82 4.06z" fill="white" />
          </svg>
        </div>
        <span className="text-[8px] text-gray-600 mt-0.5 leading-tight text-center">Messenger</span>
      </a>

      {/* Register */}
      <a
        href="#"
        className="flex flex-col items-center bg-white rounded-lg shadow-md p-1.5 w-12 hover:shadow-lg transition-shadow border border-gray-100"
        title="Đăng ký"
      >
        <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </div>
        <span className="text-[8px] text-gray-600 mt-0.5 leading-tight text-center">Đăng ký</span>
      </a>
    </div>
  )
}
