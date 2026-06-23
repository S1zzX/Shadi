import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from '../api'
import mainLogo from '../assets/Mainlogo.png'

const NAVY   = '#1E2370'
const YELLOW = '#FFC900'

export default function Login() {
  const [form, setForm]         = useState({ username: '', password: '' })
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true); setError('')
    try {
      const res  = await fetch(`${API}/api/login`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Đăng nhập thất bại.')
      localStorage.setItem('vte_token',    data.token)
      localStorage.setItem('vte_username', data.username)
      navigate('/admin')
    } catch (err) { setError(err.message) }
    finally { setLoading(false) }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4"
      style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #2d3494 60%, #1a1d5c 100%)` }}>

      {/* Subtle background honeycomb dots */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative w-full max-w-md">

        {/* ── Logo block ─────────────────────────── */}
        <div className="text-center mb-8">
          <div className="inline-flex flex-col items-center gap-1">
            <img src={mainLogo} alt="Logo" className="h-24 w-auto object-contain mix-blend-screen drop-shadow-2xl" />
            <div className="text-white font-black text-lg tracking-wide leading-tight">GIA SƯ THẾ HỆ MỚI</div>
            <div className="text-xs tracking-widest uppercase mt-0.5" style={{ color: YELLOW }}>
              130 Đại Lộ 3 – Phước Bình
            </div>
          </div>
          <p className="text-blue-300 text-sm mt-3">Trang quản trị hệ thống</p>
        </div>

        {/* ── Login card ─────────────────────────── */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Top accent bar */}
          <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${NAVY}, ${YELLOW}, ${NAVY})` }} />

          <div className="p-8">
            <h1 className="font-black text-xl mb-1" style={{ color: NAVY }}>Đăng nhập</h1>
            <p className="text-gray-400 text-sm mb-6">
              Nhập thông tin tài khoản quản trị
            </p>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm mb-5 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Username */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tên đăng nhập</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  <input
                    type="text" autoComplete="username" placeholder="admin"
                    value={form.username} onChange={e => setForm({ ...form, username: e.target.value })}
                    required
                    className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none transition"
                    style={{ '--tw-ring-color': YELLOW }}
                    onFocus={e => e.target.style.borderColor = YELLOW}
                    onBlur={e  => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mật khẩu</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                  <input
                    type={showPass ? 'text' : 'password'} autoComplete="current-password" placeholder="••••••••"
                    value={form.password} onChange={e => setForm({ ...form, password: e.target.value })}
                    required
                    className="w-full border border-gray-200 rounded-xl pl-10 pr-10 py-2.5 text-sm focus:outline-none transition"
                    onFocus={e => e.target.style.borderColor = YELLOW}
                    onBlur={e  => e.target.style.borderColor = '#e5e7eb'}
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    {showPass ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <button type="submit" disabled={loading}
                className="w-full text-white font-black py-3 rounded-xl transition-opacity flex items-center justify-center gap-2 text-sm uppercase tracking-wide mt-2 disabled:opacity-60"
                style={{ background: loading ? '#9099cc' : NAVY }}>
                {loading ? (
                  <><svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                  </svg>Đang đăng nhập...</>
                ) : (
                  <><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>ĐĂNG NHẬP</>
                )}
              </button>
            </form>
          </div>

          <div className="bg-gray-50 px-8 py-3 border-t border-gray-100 text-center">
            <a href="/" className="text-xs text-gray-400 hover:text-blue-700 transition-colors">
              ← Quay về trang chủ
            </a>
          </div>
        </div>

        <p className="text-center text-blue-300 text-xs mt-6">
          © 2026 Gia Sư Thế Hệ Mới – 130 Đại Lộ 3, Phước Bình
        </p>
      </div>
    </div>
  )
}
