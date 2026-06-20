const express = require('express')
const cors    = require('cors')
const jwt     = require('jsonwebtoken')
const bcrypt  = require('bcryptjs')
const Database = require('better-sqlite3')
const path    = require('path')

const app  = express()
const PORT = 3001
const DB_PATH = path.join(__dirname, 'vte_registrations.db')

// ── Secret & admin credentials ──────────────────────────────────────────────
const JWT_SECRET = process.env.JWT_SECRET || 'vte-super-secret-key-2026'
const ADMIN_USERNAME = process.env.ADMIN_USER || 'admin'
// Default password: vte@2026  (bcrypt hash generated once at startup)
const ADMIN_PASSWORD_PLAIN = process.env.ADMIN_PASS || 'vte@2026'
const ADMIN_PASSWORD_HASH  = bcrypt.hashSync(ADMIN_PASSWORD_PLAIN, 10)

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(cors({
  origin: (origin, cb) => {
    // allow any localhost origin (any port) and non-browser tools
    if (!origin || /^http:\/\/localhost(:\d+)?$/.test(origin)) return cb(null, true)
    cb(new Error('Not allowed by CORS'))
  }
}))
app.use(express.json())

// ── Auth middleware ─────────────────────────────────────────────────────────
function requireAuth(req, res, next) {
  const header = req.headers.authorization
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Chưa đăng nhập.' })
  }
  try {
    req.admin = jwt.verify(header.slice(7), JWT_SECRET)
    next()
  } catch {
    return res.status(401).json({ error: 'Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.' })
  }
}

// ── Database setup ──────────────────────────────────────────────────────────
const db = new Database(DB_PATH)

db.exec(`
  CREATE TABLE IF NOT EXISTS registrations (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name   TEXT    NOT NULL,
    phone       TEXT    NOT NULL,
    course      TEXT    NOT NULL,
    location    TEXT    NOT NULL,
    status      TEXT    NOT NULL DEFAULT 'pending',
    created_at  TEXT    NOT NULL DEFAULT (datetime('now', 'localtime'))
  );
  CREATE INDEX IF NOT EXISTS idx_phone      ON registrations(phone);
  CREATE INDEX IF NOT EXISTS idx_course     ON registrations(course);
  CREATE INDEX IF NOT EXISTS idx_created_at ON registrations(created_at);
`)

// ── Prepared statements ─────────────────────────────────────────────────────
const insertReg    = db.prepare(`INSERT INTO registrations (full_name, phone, course, location) VALUES (@full_name, @phone, @course, @location)`)
const getAllRegs    = db.prepare(`SELECT * FROM registrations ORDER BY created_at DESC`)
const getRegById   = db.prepare(`SELECT * FROM registrations WHERE id = ?`)
const updateStatus = db.prepare(`UPDATE registrations SET status = ? WHERE id = ?`)
const deleteReg    = db.prepare(`DELETE FROM registrations WHERE id = ?`)
const getStats     = db.prepare(`
  SELECT
    COUNT(*)                                               AS total,
    SUM(CASE WHEN status='pending'   THEN 1 ELSE 0 END)   AS pending,
    SUM(CASE WHEN status='confirmed' THEN 1 ELSE 0 END)   AS confirmed,
    SUM(CASE WHEN status='cancelled' THEN 1 ELSE 0 END)   AS cancelled
  FROM registrations
`)

// ── Public routes ───────────────────────────────────────────────────────────

// POST /api/login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res.status(400).json({ error: 'Vui lòng nhập tên đăng nhập và mật khẩu.' })
  }
  if (username !== ADMIN_USERNAME || !bcrypt.compareSync(password, ADMIN_PASSWORD_HASH)) {
    return res.status(401).json({ error: 'Tên đăng nhập hoặc mật khẩu không đúng.' })
  }
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '8h' })
  res.json({ token, username })
})

// POST /api/register  (public — anyone can submit the form)
app.post('/api/register', (req, res) => {
  const { full_name, phone, course, location } = req.body
  if (!full_name?.trim()) return res.status(400).json({ error: 'Vui lòng nhập tên của bạn.' })
  if (!phone?.trim())     return res.status(400).json({ error: 'Vui lòng nhập số điện thoại.' })
  if (!course?.trim())    return res.status(400).json({ error: 'Vui lòng chọn khóa học.' })
  if (!location?.trim())  return res.status(400).json({ error: 'Vui lòng chọn địa điểm học.' })

  const phoneRegex = /^(0|\+84)[0-9]{8,10}$/
  if (!phoneRegex.test(phone.replace(/\./g, ''))) {
    return res.status(400).json({ error: 'Số điện thoại không hợp lệ.' })
  }
  try {
    const result = insertReg.run({ full_name: full_name.trim(), phone: phone.trim(), course, location })
    const newReg = getRegById.get(result.lastInsertRowid)
    res.status(201).json({ message: 'Đăng ký thành công!', registration: newReg })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Lỗi server. Vui lòng thử lại.' })
  }
})

// ── Protected admin routes (require JWT) ────────────────────────────────────

app.get('/api/registrations',         requireAuth, (req, res) => res.json(getAllRegs.all()))
app.get('/api/registrations/:id',     requireAuth, (req, res) => {
  const row = getRegById.get(Number(req.params.id))
  if (!row) return res.status(404).json({ error: 'Không tìm thấy.' })
  res.json(row)
})
app.patch('/api/registrations/:id/status', requireAuth, (req, res) => {
  const { status } = req.body
  if (!['pending','confirmed','cancelled'].includes(status)) {
    return res.status(400).json({ error: 'Trạng thái không hợp lệ.' })
  }
  const r = updateStatus.run(status, Number(req.params.id))
  if (r.changes === 0) return res.status(404).json({ error: 'Không tìm thấy.' })
  res.json({ message: 'Đã cập nhật.', id: Number(req.params.id), status })
})
app.delete('/api/registrations/:id',  requireAuth, (req, res) => {
  const r = deleteReg.run(Number(req.params.id))
  if (r.changes === 0) return res.status(404).json({ error: 'Không tìm thấy.' })
  res.json({ message: 'Đã xoá.' })
})
app.get('/api/stats', requireAuth, (req, res) => res.json(getStats.get()))

// ── Start ───────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅  VTE API running  → http://localhost:${PORT}`)
  console.log(`📦  Database        → ${DB_PATH}`)
  console.log(`🔐  Admin login     → username: ${ADMIN_USERNAME}  |  password: ${ADMIN_PASSWORD_PLAIN}`)
})
