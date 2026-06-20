const partners = [
  { name: 'Đại học Sư phạm TP.HCM', bg: '#c0392b', abbr: 'ĐH SP' },
  { name: 'Trường CĐ Kinh tế', bg: '#2980b9', abbr: 'CĐ KT' },
  { name: 'Học viện Cán bộ', bg: '#16a085', abbr: 'HV CB' },
  { name: 'Trường ĐH Mở', bg: '#8e44ad', abbr: 'ĐH Mở' },
  { name: 'Đại học Nông Lâm', bg: '#27ae60', abbr: 'ĐH NL' },
  { name: 'Học viện Phụ nữ', bg: '#e67e22', abbr: 'HV PN' },
  { name: 'Đại học Tân Tạo', bg: '#2c3e50', abbr: 'ĐH TT' },
]

export default function Partners() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-gray-800 font-black text-sm uppercase border-b-2 border-gray-300 pb-2 mb-6">
          ĐƠN VỊ LIÊN KẾT
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {partners.map((p, i) => (
            <a
              key={i}
              href="#"
              className="flex-shrink-0 hover:scale-105 transition-transform"
              title={p.name}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xs text-center shadow-md border-2 border-white"
                style={{ backgroundColor: p.bg }}
              >
                <span className="leading-tight px-1">{p.abbr}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
