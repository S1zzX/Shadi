import { useState } from 'react'
import { API } from '../api'

const courses = [
  'Khóa học quản lý mầm non',
  'Khóa học hiệu trưởng mầm non',
  'Khóa học bảo mẫu mầm non',
  'Khóa học cấp dưỡng mầm non',
  'Nghiệp vụ sư phạm mầm non',
  'Tổng hợp các khóa học bồi dưỡng nghiệp vụ sư phạm (update 2022)',
  'Nghiệp vụ sư phạm Tiểu học',
  'Nghiệp vụ sư phạm THCS, THPT',
  'Nghiệp vụ sư phạm giảng viên CĐ, ĐH',
  'Nghiệp vụ sư phạm dạy nghề',
  'Tiêu chuẩn chức danh nghề nghiệp',
  'Văn thư lưu trữ – hành chính vp',
  'Chuyên viên và chuyên viên chính',
  'Các khóa học khác',
]

const addresses = [
  '122/12E Tạ Uyên, Phường 4, Quận 11, TP.HCM',
  '10B Lưu Chí Hiếu, P.Tây Thạnh, Q. Tân Phú',
  '4A-6 Ngô Quyền, P. Tân Thành, Q. Tân Phú',
  '80 GS1, P.Đông Hòa, Tp.Dĩ An, Bình Dương',
  '618 Trưng Nữ Vương, Q. Hải Châu, Đà Nẵng',
  'QL1A, Tân Phú Thanh, Châu Thành A, Hậu Giang',
]

const courses2 = [
  'Khóa học 1',
  'Khóa học 2',
  'Khóa học 3',
  'Khóa học 4',
  'Khóa học 5',
]

export default function MainContent() {
  return (
    <main>
      {/* Hero Section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Left: Popular Courses */}
            <div className="bg-white rounded shadow-sm border border-gray-100 p-4">
              <h2 className="text-red-600 font-bold text-base uppercase mb-1">
                KHÓA HỌC ĐĂNG KÝ NHIỀU
              </h2>
              <p className="text-gray-500 text-xs mb-3">(CLICK ĐỂ XEM KHÓA HỌC)</p>
              <ul className="space-y-1.5">
                {courses.map((course, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <input type="checkbox" className="mt-0.5 accent-red-600 flex-shrink-0" readOnly />
                    <a href="#" className="text-gray-700 text-sm hover:text-red-600 transition-colors leading-snug">
                      {course}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Center: VTE Branding + Addresses */}
            <div className="flex flex-col gap-4">
              {/* Logo & Info */}
              <div className="bg-white rounded shadow-sm border border-gray-100 p-5 flex flex-col items-center text-center">
                {/* VTE Large Logo */}
                <div className="mb-3">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-20 h-20 relative">
                      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                        <defs>
                          <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#e74c3c" />
                            <stop offset="100%" stopColor="#c0392b" />
                          </linearGradient>
                        </defs>
                        {/* Shield/house shape */}
                        <polygon points="10,10 50,5 90,10 90,60 50,95 10,60" fill="url(#redGrad)" />
                        <text x="50" y="58" fontSize="32" fontWeight="900" fill="white" fontFamily="Arial" textAnchor="middle">V</text>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-red-600 font-black text-4xl leading-none">Vvte</div>
                      <div className="text-gray-600 text-[9px] leading-tight tracking-widest uppercase mt-1">Viet Technology</div>
                      <div className="text-gray-600 text-[9px] leading-tight tracking-widest uppercase">and Education</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-red-600 w-full my-3" />

                <h3 className="text-red-600 font-extrabold text-lg mb-1">VIET TECHNOLOGY AND EDUCATION JSC</h3>

                <div className="text-gray-700 text-sm space-y-0.5 mt-1">
                  <p>
                    <span className="font-semibold">MST:</span> 0313212041 cấp ngày 15/04/2015
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span>{' '}
                    <a href="mailto:giaoducconggheviet@gmail.com" className="text-blue-600 hover:underline">
                      giaoducconggheviet@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Hotline:</span>{' '}
                    <a href="tel:02866575522" className="text-red-600 font-semibold">028.66575522</a>
                    {' – '}
                    <a href="tel:0968433499" className="text-red-600 font-semibold">0968.433.499</a>
                  </p>
                </div>
              </div>

              {/* VTE Center addresses */}
              <div className="bg-white rounded shadow-sm border border-gray-100 p-4">
                <h3 className="text-red-600 font-bold text-base uppercase mb-3 text-center">
                  TRUNG TÂM ĐÀO TẠO VTE
                </h3>
                <ul className="space-y-1.5">
                  {addresses.map((addr, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-red-500 mt-0.5 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                      </span>
                      <span>{addr}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Registration Form */}
            <RegistrationForm />

          </div>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="bg-white border-t-4 border-red-600 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <a href="#" className="block text-center">
            <div className="inline-block border-2 border-red-600 px-8 py-3 rounded">
              <p className="text-red-600 font-black text-lg uppercase tracking-wide">
                CHƯƠNG TRÌNH GIẢM HỌC PHÍ NHÂN DỊP KỈ NIỆM 10 NĂM THÀNH LẬP VTE
              </p>
            </div>
          </a>
        </div>
      </div>
    </main>
  )
}

function RegistrationForm() {
  const [form, setForm] = useState({ full_name: '', phone: '', course: '', location: 'Hồ Chí Minh' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const res = await fetch(`${API}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Lỗi không xác định.')
      setSuccess(`Đăng ký thành công! Mã đăng ký: #${data.registration.id}`)
      setForm({ full_name: '', phone: '', course: '', location: 'Hồ Chí Minh' })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded shadow-sm border border-gray-100 p-5">
      <h2 className="text-red-600 font-bold text-base uppercase text-center mb-1">
        FORM TƯ VẤN - ĐĂNG KÝ HỌC
      </h2>
      <div className="text-center text-sm text-gray-600 mb-1">
        Hotline: <a href="tel:0968433499" className="text-red-600 font-semibold">0968.433.499</a>
      </div>
      <div className="text-center text-sm text-gray-600 mb-4">
        Call / Zalo: <a href="tel:0968433499" className="text-red-600 font-semibold">0968.433.499</a>
        <span className="text-gray-500"> (Hỗ trợ 24/7)</span>
      </div>

      {success && (
        <div className="bg-green-50 border border-green-400 text-green-700 rounded px-3 py-2 text-sm mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {success}
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-400 text-red-700 rounded px-3 py-2 text-sm mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          </svg>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tên của bạn <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Điện thoại <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Khóa học <span className="text-red-600">*</span>
          </label>
          <select
            name="course"
            value={form.course}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500 bg-white"
          >
            <option value="">Chọn khóa học</option>
            {courses.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Đăng ký học tại <span className="text-red-600">*</span>
          </label>
          <select
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500 bg-white"
          >
            <option>Hồ Chí Minh</option>
            <option>Hà Nội</option>
            <option>Đà Nẵng</option>
            <option>Bình Dương</option>
            <option>Hậu Giang</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-2.5 rounded transition-colors uppercase tracking-wide text-sm mt-2 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Đang gửi...
            </>
          ) : 'GỬI ĐĂNG KÝ'}
        </button>
      </form>

      <div className="mt-4 pt-3 border-t border-gray-100 text-center">
        <a href="/admin" className="text-xs text-gray-400 hover:text-teal-600 transition-colors">
          Xem danh sách đăng ký →
        </a>
      </div>
    </div>
  )
}
