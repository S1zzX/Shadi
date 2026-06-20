import { useState } from 'react'

const navItems = [
  { label: 'HOME', href: '#', icon: '🏠', active: true },
  { label: 'NỘI DUNG ĐÀO TẠO', href: '#', hasDropdown: true },
  { label: 'TIN TỨC', href: '#', hasDropdown: false },
  { label: 'DÀNH CHO HỌC VIÊN', href: '#', hasDropdown: true },
  { label: 'BLOG VTE', href: '#' },
  { label: 'MORE', href: '#', hasDropdown: true },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <div className="flex items-center">
            <div className="w-12 h-12 relative">
              {/* VTE Logo SVG */}
              <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <polygon points="0,0 40,0 20,80" fill="#c0392b" />
                <polygon points="40,0 80,0 60,80" fill="#c0392b" />
                <polygon points="20,80 60,80 40,0" fill="white" />
                <text x="12" y="38" fontSize="22" fontWeight="bold" fill="white" fontFamily="Arial">V</text>
                <text x="42" y="38" fontSize="22" fontWeight="bold" fill="white" fontFamily="Arial">V</text>
              </svg>
            </div>
            <div className="ml-1">
              <span className="text-red-600 font-black text-3xl leading-none tracking-tight">Vvte</span>
              <div className="text-gray-500 text-[7px] leading-tight tracking-widest uppercase">Viet Technology and Education</div>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-1 px-3 py-5 text-[13px] font-semibold transition-colors whitespace-nowrap
                ${item.active
                  ? 'bg-red-600 text-white'
                  : 'text-gray-700 hover:bg-red-600 hover:text-white'
                }`}
            >
              {item.label === 'HOME' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              )}
              {item.label}
              {item.hasDropdown && (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`block px-4 py-3 text-sm font-semibold border-b border-gray-100
                ${item.active ? 'bg-red-600 text-white' : 'text-gray-700 hover:bg-red-50'}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
