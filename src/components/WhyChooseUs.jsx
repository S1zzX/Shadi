const stats = [
  { number: '06', label: 'VĂN PHÒNG TUYỂN SINH', color: 'text-yellow-400' },
  { number: '50 +', label: 'ĐƠN VỊ ĐỐI TÁC ĐÀO TẠO THƯỜNG XUYÊN', color: 'text-yellow-400' },
  { number: '09', label: 'NĂM KINH NGHIỆM', color: 'text-yellow-400' },
  { number: '600 +', label: 'KHÓA HỌC ĐÃ ĐƯỢC TỔ CHỨC', color: 'text-white' },
  { number: '10', label: 'CƠ SỞ LIÊN KẾT ĐÀO TẠO', color: 'text-yellow-400' },
  { number: '40.000 +', label: 'HỌC VIÊN ĐĂNG KÝ THAM GIA KHÓA HỌC', color: 'text-white' },
]

const benefits = [
  'Lịch khai giảng được cập nhật liên tục hàng tháng',
  'Đội ngũ nhân viên tận tâm chu đáo, hỗ trợ 24/7',
  'Giảng viên là các thầy cô có nhiều năm kinh nghiệm',
  'Thời gian học linh hoạt theo nhu cầu của học viên',
  'Chương trình học theo đúng thông tư quy định',
  'Thủ tục đăng ký nhanh gọn, tư vấn miễn phí',
  'Tuyển sinh và tổ chức khóa học trên toàn quốc',
  'Hỗ trợ giới thiệu việc làm phù hợp các lĩnh vực',
]

export default function WhyChooseUs() {
  return (
    <div className="bg-teal-800 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white font-black text-3xl mb-8 uppercase tracking-wide">
          TẠI SAO BẠN NÊN{' '}
          <span className="text-red-400">CHỌN CHÚNG TÔI?</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`font-black text-4xl leading-none ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-white text-xs uppercase mt-1 leading-snug tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Benefits checklist */}
          <div className="space-y-2">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="text-white text-sm leading-snug">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
