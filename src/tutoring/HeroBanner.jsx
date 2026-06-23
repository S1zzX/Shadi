import { useState } from 'react'
import { API } from '../api'
import mainLogo from '../assets/Mainlogo.png'

const features = [
  'Rèn chữ đẹp',
  'Dạy Toán bằng Tiếng Anh',
  'Dạy Khoa học Tự nhiên bằng Tiếng Anh',
  'Dạy KHXH  bằng Tiếng Anh',
  'STEM  bằng Tiếng Anh',
]

const grades   = Array.from({ length: 12 }, (_, i) => `Lớp ${i + 1}`)
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

function RegisterForm() {
  const [form, setForm]       = useState({ name:'', phone:'', grade:'', subject:'', session:'', note:'' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError]     = useState('')

  const set = (k,v) => { setForm(f=>({...f,[k]:v})); setError('') }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim())  return setError('Vui lòng nhập họ tên.')
    if (!form.phone.trim()) return setError('Vui lòng nhập số điện thoại.')
    if (!form.grade)        return setError('Vui lòng chọn lớp.')
    if (!form.subject)      return setError('Vui lòng chọn môn học.')
    setLoading(true); setError('')
    try {
      const res  = await fetch(`${API}/api/register`, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          full_name: form.name.trim(),
          phone:     form.phone.trim(),
          course:    `${form.subject} – ${form.grade}${form.session?' – Ca '+form.session:''}`,
          location:  form.note.trim() || 'Phước Bình',
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error||'Lỗi không xác định.')
      setSuccess(data.registration?.id||true)
      setForm({name:'',phone:'',grade:'',subject:'',session:'',note:''})
    } catch(err) { setError(err.message) }
    finally { setLoading(false) }
  }

  if (success) return (
    <div className="text-center py-10">
      <div className="text-5xl mb-3">🎉</div>
      <p className="text-green-600 font-black text-lg mb-1">Đăng ký thành công!</p>
      {typeof success==='number' && <p className="text-gray-400 text-xs mb-2">Mã đăng ký: <span className="font-bold text-blue-900">#{success}</span></p>}
      <p className="text-gray-500 text-sm mb-5">Chúng tôi sẽ liên hệ trong vòng 15 phút.</p>
      <button onClick={()=>setSuccess(null)} className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-6 py-2 rounded-full transition-colors">
        Đăng ký thêm
      </button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg px-3 py-2 text-xs">{error}</div>
      )}

      {/* Name */}
      <div>
        <label className="text-xs font-semibold text-gray-600 mb-1 block">
          Họ và tên phụ huynh / học sinh <span className="text-red-500">*</span>
        </label>
        <input type="text" value={form.name} onChange={e=>set('name',e.target.value)}
          placeholder="Nguyễn Văn A"
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"/>
      </div>

      {/* Phone + Grade */}
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1 block">Số điện thoại <span className="text-red-500">*</span></label>
          <input type="tel" value={form.phone} onChange={e=>set('phone',e.target.value)}
            placeholder="0896.677.357"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"/>
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1 block">Lớp <span className="text-red-500">*</span></label>
          <select value={form.grade} onChange={e=>set('grade',e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400 bg-white">
            <option value="">Chọn lớp</option>
            {grades.map(g=><option key={g} value={g}>{g}</option>)}
          </select>
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="text-xs font-semibold text-gray-600 mb-1 block">Môn học <span className="text-red-500">*</span></label>
        <select value={form.subject} onChange={e=>set('subject',e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400 bg-white">
          <option value="">Chọn môn học</option>
          {subjects.map(s=><option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Session */}
      <div>
        <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Ca học mong muốn</label>
        <div className="flex flex-wrap gap-2">
          {sessions.map(s=>(
            <button key={s} type="button" onClick={()=>set('session',form.session===s?'':s)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                form.session===s ? 'bg-yellow-400 border-yellow-400 text-blue-900' : 'border-gray-200 text-gray-600 hover:border-yellow-300'
              }`}>{s}</button>
          ))}
        </div>
      </div>

      {/* Note */}
      <div>
        <label className="text-xs font-semibold text-gray-600 mb-1 block">Ghi chú thêm</label>
        <textarea value={form.note} onChange={e=>set('note',e.target.value)}
          placeholder="Tình trạng học tập, yêu cầu đặc biệt..."
          rows={2} className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400 resize-none"/>
      </div>

      <button type="submit" disabled={loading}
        className="w-full bg-blue-900 hover:bg-blue-800 disabled:bg-blue-400 text-white font-black py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide">
        {loading ? (
          <><svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
          </svg>Đang gửi...</>
        ) : '🎯 ĐĂNG KÝ TƯ VẤN MIỄN PHÍ'}
      </button>

      <p className="text-center text-gray-400 text-xs">
        Hoặc gọi ngay{' '}
        <a href="tel:0896677357" className="text-yellow-500 font-bold hover:underline">0896.677.357</a>
      </p>
    </form>
  )
}

export default function HeroBanner() {
  return (
    <section id="home" className="relative overflow-hidden bg-white min-h-screen flex items-center">

      {/* ── Rainbow arcs ────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <svg viewBox="0 0 900 700" className="absolute top-0 right-0 w-[65%] h-full opacity-90" preserveAspectRatio="xMaxYMin slice">
          <defs>
            {[['a1','#f472b6','#fb923c'],['a2','#c084fc','#f472b6'],['a3','#818cf8','#c084fc'],
              ['a4','#38bdf8','#818cf8'],['a5','#4ade80','#38bdf8'],['a6','#fde68a','#4ade80']].map(([id,c1,c2])=>(
              <linearGradient key={id} id={id} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={c1}/>
                <stop offset="100%" stopColor={c2}/>
              </linearGradient>
            ))}
          </defs>
          {[['a6',720],['a5',640],['a4',560],['a3',480],['a2',400],['a1',320]].map(([id,r])=>(
            <path key={id} d={`M 900 -60 A ${r} ${r} 0 0 0 ${900-r} ${r+60}`}
              fill="none" stroke={`url(#${id})`} strokeWidth="58" strokeLinecap="round" opacity="0.75"/>
          ))}
        </svg>
      </div>

      {/* spacer — kids are now positioned relative to the form card below */}

      {/* ── Main content grid ───────────────────────── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left — hero text */}
        <div>
          <div
            className="animate-fade-slide inline-block bg-blue-900 text-white text-sm font-black px-4 py-1.5 rounded mb-4 uppercase tracking-wide"
            style={{animationDelay:'0.0s'}}
          >
            TRUNG TÂM GIA SƯ THẾ HỆ MỚI
          </div>

          <div className="mb-2 animate-fade-slide" style={{animationDelay:'0.15s'}}>
            <span className="animate-bounce-text inline-block text-yellow-400 font-black text-5xl md:text-6xl leading-none drop-shadow-sm">TIỂU HỌC</span>
          </div>
          <div className="mb-5 animate-fade-slide" style={{animationDelay:'0.28s'}}>
            <span className="animate-bounce-text-delay inline-block text-blue-900 font-black text-6xl md:text-7xl leading-none tracking-tight">DẠY KÈM</span>
          </div>

          <div
            className="animate-fade-slide inline-block bg-yellow-400 text-blue-900 font-black text-base px-6 py-2 rounded-full mb-6 shadow-md"
            style={{animationDelay:'0.42s'}}
          >
            130 ĐẠI LỘ 3 – PHƯỚC BÌNH
          </div>

          <ul className="space-y-2 mb-8">
            {features.map((f,i)=>(
              <li key={i} className="animate-fade-slide flex items-center gap-3"
                style={{animationDelay:`${0.6+i*0.18}s`}}>
                <div className="w-6 h-6 rounded border-2 border-blue-900 flex items-center justify-center flex-shrink-0 bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span className="text-gray-800 font-medium text-base">{f}</span>
              </li>
            ))}
          </ul>

          <a href="tel:0896677357"
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-black px-6 py-3 rounded-full shadow-lg transition-colors text-lg">
            <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
            </div>
            0896.677.357
          </a>
        </div>

        {/* Right — registration form */}
        <div id="register" className="relative pt-14">

          {/* Main logo sitting on top of the card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-28 select-none z-20">
            <img src={mainLogo} alt="Logo" className="w-full h-full object-contain mix-blend-multiply drop-shadow-md" />
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <h2 className="text-blue-900 font-black text-xl mb-1 text-center uppercase tracking-wide">
              ĐĂNG KÝ TƯ VẤN
            </h2>
            <p className="text-gray-400 text-xs text-center mb-6">
              Hoàn toàn miễn phí – Phản hồi trong 15 phút
            </p>
            <RegisterForm />
          </div>
        </div>{/* end relative pt-14 wrapper */}

      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 40" className="w-full" preserveAspectRatio="none">
          <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#f8fafc"/>
        </svg>
      </div>
    </section>
  )
}
