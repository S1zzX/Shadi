const features = [
  'Rèn chữ đẹp',
  'Dạy Toán bằng Tiếng Anh',
  'Dạy Khoa học Tự nhiên bằng Tiếng Anh',
  'Dạy KHXH  bằng Tiếng Anh',
  'STEM  bằng Tiếng Anh',
]

export default function HeroBanner() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Rainbow arc background */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        {/* Gradient arcs */}
        <svg viewBox="0 0 800 600" className="absolute top-0 right-0 w-full h-full opacity-90" preserveAspectRatio="xMaxYMin slice">
          <defs>
            <linearGradient id="arc1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
            <linearGradient id="arc2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
            <linearGradient id="arc3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
            <linearGradient id="arc4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
            <linearGradient id="arc5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
          {/* Arcs stacked */}
          <path d="M 800 -50 A 600 600 0 0 0 200 400" fill="none" stroke="url(#arc5)" strokeWidth="55" strokeLinecap="round" opacity="0.7"/>
          <path d="M 800 -50 A 540 540 0 0 0 260 400" fill="none" stroke="url(#arc4)" strokeWidth="55" strokeLinecap="round" opacity="0.7"/>
          <path d="M 800 -50 A 480 480 0 0 0 320 400" fill="none" stroke="url(#arc3)" strokeWidth="55" strokeLinecap="round" opacity="0.7"/>
          <path d="M 800 -50 A 420 420 0 0 0 380 400" fill="none" stroke="url(#arc2)" strokeWidth="55" strokeLinecap="round" opacity="0.7"/>
          <path d="M 800 -50 A 360 360 0 0 0 440 400" fill="none" stroke="url(#arc1)" strokeWidth="55" strokeLinecap="round" opacity="0.7"/>
        </svg>

        {/* Mushrooms left */}
        <div className="absolute bottom-0 left-0 flex items-end gap-1 pb-4 pl-2 opacity-70">
          <div className="text-5xl">🍄</div>
          <div className="text-3xl mb-2">🍄</div>
        </div>

        {/* Cloud */}
        <div className="absolute top-6 right-8 text-4xl opacity-60">☁️</div>
        <div className="absolute top-16 right-28 text-2xl opacity-40">☁️</div>
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[520px]">

        {/* Left text */}
        <div className="z-10">
          {/* Tag */}
          <div
            className="animate-fade-slide inline-block bg-blue-900 text-white text-sm font-black px-4 py-1.5 rounded mb-4 uppercase tracking-wide"
            style={{ animationDelay: '0.0s' }}
          >
            TRUNG TÂM GIA SƯ THẾ HỆ MỚI
          </div>

          {/* Main title */}
          <div className="mb-2 animate-fade-slide" style={{ animationDelay: '0.15s' }}>
            <span className="animate-bounce-text inline-block text-yellow-400 font-black text-5xl md:text-6xl leading-none drop-shadow-sm">TIỂU HỌC</span>
          </div>
          <div className="mb-5 animate-fade-slide" style={{ animationDelay: '0.28s' }}>
            <span className="animate-bounce-text-delay inline-block text-blue-900 font-black text-6xl md:text-7xl leading-none tracking-tight">DẠY KÈM</span>
          </div>

          {/* Address badge */}
          <div
            className="animate-fade-slide inline-block bg-yellow-400 text-blue-900 font-black text-base px-6 py-2 rounded-full mb-6 shadow-md"
            style={{ animationDelay: '0.42s' }}
          >
            130 ĐẠI LỘ 3 – PHƯỚC BÌNH
          </div>

          {/* Feature list */}
          <ul className="space-y-2 mb-8">
            {features.map((f, i) => (
              <li
                key={i}
                className="animate-fade-slide flex items-center gap-3"
                style={{ animationDelay: `${0.6 + i * 0.18}s` }}
              >
                <div className="w-6 h-6 rounded border-2 border-blue-900 flex items-center justify-center flex-shrink-0 bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium text-base">{f}</span>
              </li>
            ))}
          </ul>

          {/* Phone button */}
          <a
            href="tel:0896677357"
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-black px-6 py-3 rounded-full shadow-lg transition-colors text-lg"
          >
            <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
            </div>
            0896.677.357
          </a>
        </div>

        {/* Right illustration */}
        <div className="z-10 flex justify-center items-end">
          <div className="relative">
            {/* Book illustration */}
            <div className="w-56 h-56 md:w-72 md:h-72 relative">
              {/* Large open book */}
              <svg viewBox="0 0 300 260" className="w-full h-full drop-shadow-xl">
                {/* Book pages */}
                <ellipse cx="150" cy="220" rx="140" ry="18" fill="#e8a44a" opacity="0.4"/>
                {/* Left page */}
                <path d="M 20 60 Q 20 200 150 210 Q 20 200 20 60 Z" fill="#f97316" />
                <path d="M 20 60 Q 85 55 150 210 L 150 210 Q 20 200 20 60 Z" fill="#fb923c" />
                {/* Right page */}
                <path d="M 280 60 Q 280 200 150 210 Q 280 200 280 60 Z" fill="#fbbf24" />
                <path d="M 280 60 Q 215 55 150 210 L 150 210 Q 280 200 280 60 Z" fill="#fcd34d" />
                {/* Book spine */}
                <path d="M 148 55 Q 150 130 150 210" stroke="#92400e" strokeWidth="4" fill="none"/>
                {/* Book cover */}
                <path d="M 25 62 Q 87 52 148 58 Q 87 52 25 62 Z" fill="#9a3412"/>
                <path d="M 275 62 Q 213 52 152 58 Q 213 52 275 62 Z" fill="#78350f"/>

                {/* Kid 1 - sitting reading on left */}
                <circle cx="85" cy="48" r="18" fill="#fed7aa"/>
                <rect x="70" y="62" width="30" height="28" rx="4" fill="#dc2626"/>
                <rect x="72" y="88" width="12" height="22" rx="3" fill="#1e40af"/>
                <rect x="86" y="88" width="12" height="22" rx="3" fill="#1e40af"/>
                {/* Arms */}
                <rect x="58" y="66" width="15" height="8" rx="4" fill="#dc2626"/>
                <rect x="97" y="66" width="15" height="8" rx="4" fill="#dc2626"/>
                {/* Book in hand */}
                <rect x="55" y="68" width="20" height="14" rx="2" fill="#fef3c7" stroke="#92400e" strokeWidth="1"/>
                {/* Hair */}
                <path d="M 68 40 Q 85 30 102 40 Q 95 30 85 28 Q 75 28 68 40 Z" fill="#92400e"/>

                {/* Kid 2 - sitting with laptop on right */}
                <circle cx="215" cy="52" r="18" fill="#fed7aa"/>
                <rect x="200" y="66" width="30" height="28" rx="4" fill="#f59e0b"/>
                <rect x="202" y="92" width="12" height="22" rx="3" fill="#1e3a8a"/>
                <rect x="216" y="92" width="12" height="22" rx="3" fill="#1e3a8a"/>
                {/* Laptop */}
                <rect x="195" y="76" width="28" height="18" rx="2" fill="#374151" opacity="0.9"/>
                <rect x="197" y="78" width="24" height="13" rx="1" fill="#60a5fa"/>
                {/* Backpack left */}
                <rect x="182" y="72" width="20" height="24" rx="4" fill="#2563eb"/>
                <circle cx="192" cy="80" r="4" fill="#1d4ed8"/>
                {/* Hair */}
                <path d="M 198 44 Q 215 34 232 44 Q 225 34 215 32 Q 205 32 198 44 Z" fill="#1c1917"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="relative h-12 overflow-hidden">
        <svg viewBox="0 0 1440 48" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" fill="#f8fafc"/>
        </svg>
      </div>
    </section>
  )
}
