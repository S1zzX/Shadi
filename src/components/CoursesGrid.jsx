const suPhamCourses = [
  {
    title: 'Tổng hợp các khóa học bồi dưỡng nghiệp vụ sư phạm (update Tháng 12/2022)',
    date: '08/12/2022',
    img: 'https://via.placeholder.com/80x60/e74c3c/white?text=SP',
  },
  {
    title: 'Chứng chỉ Nghiệp vụ sư phạm dành cho giáo viên dạy Tiểu học',
    date: '20/09/2021',
    img: 'https://via.placeholder.com/80x60/3498db/white?text=SP',
  },
  {
    title: 'Chứng chỉ nghiệp vụ sư phạm DÀNH CHO giáo viên dạy THCS, THPT',
    date: '04/08/2021',
    img: 'https://via.placeholder.com/80x60/2ecc71/white?text=SP',
  },
  {
    title: 'Khóa học bồi dưỡng nghiệp vụ sư phạm giảng viên CĐ – ĐH',
    date: '29/11/2016',
    img: 'https://via.placeholder.com/80x60/9b59b6/white?text=SP',
  },
  {
    title: 'Khóa học bồi dưỡng nghiệp vụ sư phạm dạy nghề',
    date: '12/12/2016',
    img: 'https://via.placeholder.com/80x60/f39c12/white?text=SP',
  },
  {
    title: 'Khóa học bồi dưỡng nghiệp vụ sư phạm giáo viên TCCN',
    date: '29/11/2016',
    img: 'https://via.placeholder.com/80x60/1abc9c/white?text=SP',
  },
  {
    title: 'Bồi dưỡng phương pháp và kỹ năng luyện viết chữ đẹp',
    date: '17/12/2017',
    img: 'https://via.placeholder.com/80x60/e67e22/white?text=SP',
  },
]

const mamNonCourses = [
  {
    title: 'Khóa học quản lý mầm non',
    date: '29/11/2016',
    img: 'https://via.placeholder.com/80x60/e74c3c/white?text=MN',
    highlight: true,
  },
  {
    title: 'Khóa học bảo mẫu mầm non',
    date: '29/11/2016',
    img: 'https://via.placeholder.com/80x60/3498db/white?text=MN',
  },
  {
    title: 'Khóa học cấp dưỡng mầm non',
    date: '29/11/2016',
    img: 'https://via.placeholder.com/80x60/2ecc71/white?text=MN',
  },
  {
    title: 'Khóa học hiệu trưởng mầm non',
    date: '29/11/2016',
    img: 'https://via.placeholder.com/80x60/9b59b6/white?text=MN',
  },
  {
    title: 'Nghiệp vụ sư phạm mầm non',
    date: '29/11/2016',
    img: 'https://via.placeholder.com/80x60/f39c12/white?text=MN',
  },
  {
    title: 'Khóa học STEM/STEAM trong trường Mầm non',
    date: '10/10/2019',
    img: 'https://via.placeholder.com/80x60/1abc9c/white?text=MN',
  },
  {
    title: 'Chương trình bồi dưỡng nghiệp vụ sư phạm giáo dục hòa nhập trẻ khuyết tật',
    date: '21/09/2017',
    img: 'https://via.placeholder.com/80x60/e67e22/white?text=MN',
  },
]

const nganHanCourses = [
  { title: 'Chương trình bồi dưỡng cấp chứng chỉ ngạch chuyên viên và chuyên viên chính', date: '24/01/2024' },
  { title: 'Chứng chỉ xoa bóp bấm huyệt, vật lý trị liệu', date: '26/12/2017' },
  { title: 'Bồi dưỡng nghiệp vụ chăm sóc người già', date: '25/12/2017' },
  { title: 'Tập huấn phòng chống lây nhiễm các bệnh qua đường máu, dịch sinh học', date: '16/11/2017' },
  { title: 'Lớp bồi dưỡng nghiệp vụ trưởng cửa hàng kinh doanh xăng dầu', date: '17/03/2017' },
  { title: 'Đào tạo kế toán trưởng', date: '12/11/2016' },
  { title: 'Đào tạo kế toán tổng hợp', date: '12/11/2016' },
]

function CourseCard({ course, hasImage = true }) {
  return (
    <div className="flex gap-3 border-b border-gray-100 pb-3 mb-3 last:border-0 last:mb-0 last:pb-0">
      {hasImage && (
        <img
          src={course.img}
          alt={course.title}
          className="w-16 h-12 object-cover rounded flex-shrink-0 bg-gray-200"
          onError={(e) => { e.target.style.display = 'none' }}
        />
      )}
      <div className="min-w-0">
        <a
          href="#"
          className={`text-sm leading-snug hover:text-red-600 transition-colors block truncate-multiline ${course.highlight ? 'text-red-600 font-semibold' : 'text-gray-800'}`}
          style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
        >
          {course.title}
        </a>
        <div className="text-gray-400 text-xs mt-1">
          Trung tâm đào tạo VTE · {course.date}
        </div>
      </div>
    </div>
  )
}

function Pagination() {
  return (
    <div className="flex gap-1 mt-3">
      <button className="w-6 h-6 border border-gray-300 text-gray-600 text-xs flex items-center justify-center hover:bg-gray-100">‹</button>
      <button className="w-6 h-6 border border-gray-300 text-gray-600 text-xs flex items-center justify-center hover:bg-gray-100">›</button>
    </div>
  )
}

export default function CoursesGrid() {
  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Column 1: Nghiệp vụ sư phạm */}
          <div>
            <h3 className="text-teal-700 font-black text-base uppercase border-b-2 border-teal-700 pb-2 mb-4">
              NGHIỆP VỤ SƯ PHẠM
            </h3>
            {suPhamCourses.map((c, i) => (
              <CourseCard key={i} course={c} />
            ))}
            <Pagination />
          </div>

          {/* Column 2: Nghiệp vụ mầm non */}
          <div>
            <h3 className="text-teal-700 font-black text-base uppercase border-b-2 border-teal-700 pb-2 mb-4">
              NGHIỆP VỤ MẦM NON
            </h3>
            {mamNonCourses.map((c, i) => (
              <CourseCard key={i} course={c} />
            ))}
            <Pagination />
          </div>

          {/* Column 3: Ngắn hạn khác */}
          <div>
            <h3 className="text-teal-700 font-black text-base uppercase border-b-2 border-teal-700 pb-2 mb-4">
              NGẮN HẠN KHÁC
            </h3>
            {nganHanCourses.map((c, i) => (
              <div key={i} className="border-b border-gray-100 pb-3 mb-3 last:border-0">
                <a
                  href="#"
                  className="text-gray-800 text-sm leading-snug hover:text-red-600 transition-colors block"
                  style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                >
                  {c.title}
                </a>
                <div className="text-gray-400 text-xs mt-1">
                  Trung tâm đào tạo VTE · {c.date}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
