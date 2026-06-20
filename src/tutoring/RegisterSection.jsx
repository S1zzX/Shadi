import { useState } from 'react'
import { API } from '../api'

const grades = Array.from({ length: 12 }, (_, i) => `Lớp ${i + 1}`)

const subjects = [
  'Khoá học Tiền Tiểu học',
  'Khoá học Tiểu học',
  'Khoá học Tiếng Anh',
  'Khoá học Luyện thi lớp 6 Chuyên',
  'Khoá học Kỹ năng',
  'Khoá học Nghệ thuật',
  'Khoá học Lập trình',
]

const sessions = ['Sáng', 'Chiều', 'Tối', 'Cuối tuần']

export default function RegisterSection() {
  const [form, setForm]       = useState({ name: '', phone: '', grade: '', subject: '', session: '', note: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError]     = useState('')

  const set = (k, v) => { setForm(f => ({ ...f, [k]: v })); setError('') }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim())  return setError('Vui lòng nhập họ tên.')
    if (!form.phone.trim()) return setError('Vui lòng nhập số điện thoại.')
    if (!form.grade)        return setError('Vui lòng chọn lớp.')
    if (!form.subject)      return setError('Vui lòng chọn môn học.')

    setLoading(true)
    setError('')
    try {
      const res  = await fetch(`${API}/api/register`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: form.name.trim(),
          phone:     form.phone.trim(),
          course:    `${form.subject} – ${form.grade}${form.session ? ' – Ca ' + form.session : ''}`,
          location:  form.note.trim() || 'Phước Bình',
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Lỗi không xác định.')
      setSuccess(data.registration?.id || true)
      setForm({ name: '', phone: '', grade: '', subject: '', session: '', note: '' })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="register" className="bg-slate-50 py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left info */}
          <div>
            <div className="inline-block bg-yellow-400 text-blue-900 font-black text-xs px-3 py-1 rounded-full uppercase tracking-widest mb-3">
              Đăng ký ngay
            </div>
            <h2 className="text-blue-900 font-black text-4xl leading-tight mb-4">
              Cho con học thử<br />
              <span className="text-yellow-500">miễn phí</span> buổi đầu!
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Điền thông tin bên cạnh để được tư vấn và sắp xếp lịch học phù hợp. 
              Đội ngũ gia sư tận tâm sẽ liên hệ trong vòng <strong>15 phút</strong>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { n: '500+', l: 'Học sinh' },
                { n: '5★',   l: 'Đánh giá' },
                { n: '10+',  l: 'Gia sư' },
              ].map(s => (
                <div key={s.l} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                  <div className="text-yellow-500 font-black text-2xl">{s.n}</div>
                  <div className="text-gray-500 text-xs mt-1">{s.l}</div>
                </div>
              ))}
            </div>

            {/* Guarantees */}
            <ul className="space-y-2">
              {[
                'Học thử miễn phí buổi đầu tiên',
                'Cam kết điểm số tăng sau 1 tháng',
                'Giáo viên đạt chuẩn, nhiều năm kinh nghiệm',
                'Lịch học linh hoạt theo nhu cầu gia đình',
              ].map((g, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </div>

          {/* Right form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-blue-900 font-black text-xl mb-1 text-center">ĐĂNG KÝ TƯ VẤN</h3>
            <p className="text-gray-400 text-xs text-center mb-6">Hoàn toàn miễn phí – Phản hồi trong 15 phút</p>

            {success ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <div className="text-green-600 font-bold text-lg mb-1">Đăng ký thành công!</div>
                {typeof success === 'number' && (
                  <p className="text-gray-400 text-xs mb-2">Mã đăng ký: <span className="font-bold text-blue-900">#{success}</span></p>
                )}
                <p className="text-gray-500 text-sm mb-5">Chúng tôi sẽ liên hệ với bạn trong vòng 15 phút.</p>
                <button
                  onClick={() => setSuccess(null)}
                  className="bg-yellow-400 text-blue-900 font-bold px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors"
                >
                  Đăng ký thêm
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg px-3 py-2 text-sm">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2">
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">
                      Họ và tên phụ huynh / học sinh <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => set('name', e.target.value)}
                      placeholder="Nguyễn Văn A"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                    />
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => set('phone', e.target.value)}
                      placeholder="0896.677.357"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                    />
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">
                      Lớp <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={form.grade}
                      onChange={e => set('grade', e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400 bg-white"
                    >
                      <option value="">Chọn lớp</option>
                      {grades.map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </div>

                  <div className="col-span-2">
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">
                      Môn học <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={form.subject}
                      onChange={e => set('subject', e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400 bg-white"
                    >
                      <option value="">Chọn môn học</option>
                      {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="col-span-2">
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">Ca học mong muốn</label>
                    <div className="flex flex-wrap gap-2">
                      {sessions.map(s => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => set('session', form.session === s ? '' : s)}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                            form.session === s
                              ? 'bg-yellow-400 border-yellow-400 text-blue-900'
                              : 'border-gray-200 text-gray-600 hover:border-yellow-300'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-2">
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">Ghi chú thêm</label>
                    <textarea
                      value={form.note}
                      onChange={e => set('note', e.target.value)}
                      placeholder="Tình trạng học tập, yêu cầu đặc biệt..."
                      rows={2}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-900 hover:bg-blue-800 disabled:bg-blue-400 text-white font-black py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                      </svg>
                      Đang gửi...
                    </>
                  ) : '🎯 Đăng ký tư vấn miễn phí'}
                </button>

                <p className="text-center text-gray-400 text-xs">
                  Hoặc gọi ngay{' '}
                  <a href="tel:0896677357" className="text-yellow-500 font-bold hover:underline">0896.677.357</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
