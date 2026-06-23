import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from '../api'
import mainLogo from '../assets/Mainlogo.png'

const NAVY   = '#1E2370'
const YELLOW = '#FFC900'

const STATUS_COLORS = {
  pending:   'bg-yellow-100 text-yellow-800 border border-yellow-300',
  confirmed: 'bg-green-100 text-green-800 border border-green-300',
  cancelled: 'bg-red-100 text-red-700 border border-red-300',
}
const STATUS_LABELS = {
  pending:   'Chờ xử lý',
  confirmed: 'Đã xác nhận',
  cancelled: 'Đã huỷ',
}

const STAT_CARDS = [
  { key: 'total',     label: 'Tổng đăng ký', icon: '📋', navy: true  },
  { key: 'pending',   label: 'Chờ xử lý',    icon: '⏳', yellow: true },
  { key: 'confirmed', label: 'Đã xác nhận',  icon: '✅', green: true  },
  { key: 'cancelled', label: 'Đã huỷ',       icon: '❌', red: true    },
]

function authHeaders() {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('vte_token')}`,
  }
}

export default function Admin() {
  const [registrations, setRegistrations] = useState([])
  const [stats, setStats]                 = useState(null)
  const [loading, setLoading]             = useState(true)
  const [error, setError]                 = useState(null)
  const [search, setSearch]               = useState('')
  const [filterStatus, setFilterStatus]   = useState('all')
  const navigate = useNavigate()
  const username = localStorage.getItem('vte_username') || 'Admin'

  const handleLogout = () => {
    localStorage.removeItem('vte_token')
    localStorage.removeItem('vte_username')
    navigate('/admin/login')
  }

  const fetchData = async () => {
    try {
      const [regRes, statsRes] = await Promise.all([
        fetch(`${API}/api/registrations`, { headers: authHeaders() }),
        fetch(`${API}/api/stats`,         { headers: authHeaders() }),
      ])
      if (regRes.status === 401) { handleLogout(); return }
      setRegistrations(await regRes.json())
      setStats(await statsRes.json())
    } catch {
      setError('Không thể kết nối server. Hãy đảm bảo server đang chạy.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchData() }, [])

  const handleStatusChange = async (id, status) => {
    await fetch(`${API}/api/registrations/${id}/status`, {
      method: 'PATCH', headers: authHeaders(), body: JSON.stringify({ status }),
    })
    fetchData()
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Xoá đăng ký này?')) return
    await fetch(`${API}/api/registrations/${id}`, { method: 'DELETE', headers: authHeaders() })
    fetchData()
  }

  const filtered = registrations.filter((r) => {
    const matchStatus = filterStatus === 'all' || r.status === filterStatus
    const q = search.toLowerCase()
    return matchStatus && (
      r.full_name.toLowerCase().includes(q) ||
      r.phone.includes(q) ||
      r.course.toLowerCase().includes(q) ||
      r.location.toLowerCase().includes(q)
    )
  })

  const cardStyle = (c) => {
    if (c.navy)   return { background: NAVY,      color: '#fff' }
    if (c.yellow) return { background: YELLOW,    color: NAVY }
    if (c.green)  return { background: '#22c55e', color: '#fff' }
    if (c.red)    return { background: '#ef4444', color: '#fff' }
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* ── Navbar ──────────────────────────────────── */}
      <header style={{ background: NAVY }} className="shadow-lg">
        <div className="max-w-7xl mx-auto px-5 py-2.5 flex items-center justify-between">

          {/* Logo + breadcrumb */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-2">
              <img src={mainLogo} alt="Logo" className="h-10 w-auto object-contain mix-blend-screen" />
              <span className="font-black text-sm hidden sm:block" style={{ color: YELLOW }}>
                Gia Sư Thế Hệ Mới
              </span>
            </a>
            <span className="text-blue-400">/</span>
            <h1 className="text-white font-bold text-sm">Quản lý đăng ký</h1>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button onClick={fetchData}
              className="text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors border border-white/20 hover:bg-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Làm mới
            </button>

            <div className="flex items-center gap-2 rounded-full px-3 py-1.5 border border-white/20 bg-white/10">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black"
                style={{ background: YELLOW, color: NAVY }}>
                {username[0]?.toUpperCase()}
              </div>
              <span className="text-white text-xs font-medium hidden sm:block">{username}</span>
              <span className="text-blue-400 mx-0.5">|</span>
              <button onClick={handleLogout}
                className="text-xs text-red-300 hover:text-red-200 transition-colors flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-7">

        {/* ── Page title ──────────────────────────────── */}
        <div className="mb-6">
          <h2 className="font-black text-2xl" style={{ color: NAVY }}>Danh sách đăng ký</h2>
          <p className="text-gray-400 text-sm mt-0.5">Quản lý và xử lý tất cả yêu cầu tư vấn từ phụ huynh & học sinh</p>
        </div>

        {/* ── Stat cards ──────────────────────────────── */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-7">
            {STAT_CARDS.map((s) => (
              <div key={s.key} className="rounded-2xl p-5 shadow-md flex items-center gap-4" style={cardStyle(s)}>
                <span className="text-3xl">{s.icon}</span>
                <div>
                  <div className="text-3xl font-black leading-none">{stats[s.key]}</div>
                  <div className="text-xs mt-1 font-medium opacity-80">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Filters ─────────────────────────────────── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-5 flex flex-wrap gap-3 items-center">
          <div className="relative flex-1 min-w-48">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="text" placeholder="Tìm tên, SĐT, khóa học..."
              value={search} onChange={e => setSearch(e.target.value)}
              className="w-full border border-gray-200 rounded-xl pl-9 pr-3 py-2 text-sm focus:outline-none transition"
              onFocus={e => e.target.style.borderColor = YELLOW}
              onBlur={e  => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}
            className="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none"
            onFocus={e => e.target.style.borderColor = YELLOW}
            onBlur={e  => e.target.style.borderColor = '#e5e7eb'}>
            <option value="all">Tất cả trạng thái</option>
            <option value="pending">Chờ xử lý</option>
            <option value="confirmed">Đã xác nhận</option>
            <option value="cancelled">Đã huỷ</option>
          </select>
          <span className="text-gray-400 text-sm font-medium ml-auto">
            {filtered.length} kết quả
          </span>
        </div>

        {/* ── Error ───────────────────────────────────── */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl p-4 mb-5 text-sm flex items-center gap-2">
            <span>⚠️</span>{error}
          </div>
        )}

        {/* ── Loading ─────────────────────────────────── */}
        {loading && (
          <div className="text-center py-16">
            <div className="inline-block animate-spin w-8 h-8 border-4 border-t-transparent rounded-full mb-3"
              style={{ borderColor: `${YELLOW} ${YELLOW} ${YELLOW} transparent` }} />
            <p className="text-gray-400 text-sm">Đang tải dữ liệu...</p>
          </div>
        )}

        {/* ── Table ───────────────────────────────────── */}
        {!loading && !error && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: NAVY }} className="text-white">
                    {['#','Họ tên','Điện thoại','Khóa học','Lớp / Nơi học','Thời gian','Trạng thái','Thao tác'].map(h => (
                      <th key={h} className="px-4 py-3.5 text-left font-semibold text-xs uppercase tracking-wide">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="text-center py-14">
                        <div className="text-4xl mb-2">📭</div>
                        <p className="text-gray-400 text-sm">Không có đăng ký nào.</p>
                      </td>
                    </tr>
                  ) : filtered.map((r, i) => (
                    <tr key={r.id}
                      className={`transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}`}
                      style={{}} onMouseEnter={e=>e.currentTarget.style.background='#fffbeb'} onMouseLeave={e=>e.currentTarget.style.background=''}>
                      <td className="px-4 py-3.5">
                        <span className="w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
                          style={{ background: '#eef0fc', color: NAVY }}>
                          {r.id}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 font-semibold text-gray-800">{r.full_name}</td>
                      <td className="px-4 py-3.5">
                        <a href={`tel:${r.phone}`} className="font-medium transition-colors hover:underline"
                          style={{ color: NAVY }}>{r.phone}</a>
                      </td>
                      <td className="px-4 py-3.5 text-gray-700 max-w-44">
                        <span className="line-clamp-2 text-xs leading-relaxed">{r.course}</span>
                      </td>
                      <td className="px-4 py-3.5 text-gray-600 text-xs">{r.location}</td>
                      <td className="px-4 py-3.5 text-gray-400 text-xs whitespace-nowrap">{r.created_at}</td>
                      <td className="px-4 py-3.5">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[r.status]}`}>
                          {STATUS_LABELS[r.status]}
                        </span>
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center justify-center gap-1">
                          {r.status !== 'confirmed' && (
                            <button onClick={() => handleStatusChange(r.id, 'confirmed')} title="Xác nhận"
                              className="w-7 h-7 rounded-lg bg-green-50 hover:bg-green-100 text-green-600 flex items-center justify-center transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            </button>
                          )}
                          {r.status !== 'cancelled' && (
                            <button onClick={() => handleStatusChange(r.id, 'cancelled')} title="Huỷ"
                              className="w-7 h-7 rounded-lg bg-yellow-50 hover:bg-yellow-100 flex items-center justify-center transition-colors"
                              style={{ color: NAVY }}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                              </svg>
                            </button>
                          )}
                          <button onClick={() => handleDelete(r.id)} title="Xoá"
                            className="w-7 h-7 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 flex items-center justify-center transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filtered.length > 0 && (
              <div className="px-4 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
                <span className="text-xs text-gray-400">
                  Hiển thị <span className="font-semibold" style={{ color: NAVY }}>{filtered.length}</span> / {registrations.length} đăng ký
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ background: YELLOW }} />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
