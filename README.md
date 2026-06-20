# Gia Sư Thế Hệ Mới — Tutoring Center Website

A full-stack tutoring center landing page built with **React + Vite + Tailwind CSS** (frontend) and **Node.js + Express + SQLite** (backend).

---

## 📦 Tech Stack

| Layer    | Technology |
|----------|-----------|
| Frontend | React 19, Vite 8, Tailwind CSS v4 |
| Routing  | React Router DOM v7 |
| Backend  | Node.js, Express 5 |
| Database | SQLite (via `better-sqlite3`) |
| Auth     | JWT (`jsonwebtoken`) + bcrypt (`bcryptjs`) |

---

## 🚀 Quick Start

### 1. Clone the repo
```bash
git clone <your-repo-url>
cd <repo-folder>
```

### 2. Install frontend dependencies
```bash
npm install
```

### 3. Install backend dependencies
```bash
cd server
npm install
cd ..
```

### 4. Run both servers with one command
```bash
npm run dev
```

| Server   | URL |
|----------|-----|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:3001 |

---

## 📁 Project Structure

```
├── src/
│   ├── tutoring/          # Main tutoring site
│   │   ├── TutoringApp.jsx
│   │   ├── TutoringNav.jsx
│   │   ├── HeroBanner.jsx
│   │   ├── CourseSlider.jsx
│   │   ├── RegisterSection.jsx
│   │   ├── ReviewsSection.jsx
│   │   └── TutoringFooter.jsx
│   ├── pages/
│   │   ├── Admin.jsx      # Admin dashboard (protected)
│   │   └── Login.jsx      # Admin login page
│   ├── components/
│   │   └── ProtectedRoute.jsx
│   ├── api.js             # API base URL config
│   ├── App.jsx            # VTE legacy site
│   └── main.jsx           # Router entry point
├── server/
│   ├── index.js           # Express API + SQLite setup
│   └── package.json
├── package.json
└── vite.config.js
```

---

## 🔗 Pages / Routes

| Route | Description |
|-------|-------------|
| `/` | Tutoring center landing page |
| `/vte` | Original VTE website |
| `/admin/login` | Admin login |
| `/admin` | Admin dashboard *(requires login)* |

---

## 🔐 Admin Login

| Field | Value |
|-------|-------|
| Username | `admin` |
| Password | `vte@2026` |

> To change credentials, set environment variables before running:
> ```bash
> set ADMIN_USER=yourname
> set ADMIN_PASS=yourpassword
> npm run dev
> ```

---

## 🗄️ Database

SQLite database is created automatically at `server/vte_registrations.db` on first run.

### `registrations` table

| Column | Type | Description |
|--------|------|-------------|
| `id` | INTEGER | Auto-increment primary key |
| `full_name` | TEXT | Student/parent name |
| `phone` | TEXT | Contact phone number |
| `course` | TEXT | Course + grade + session |
| `location` | TEXT | Study location / note |
| `status` | TEXT | `pending` / `confirmed` / `cancelled` |
| `created_at` | TEXT | Registration timestamp |

### API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/api/login` | ❌ | Admin login → returns JWT |
| `POST` | `/api/register` | ❌ | Submit registration form |
| `GET` | `/api/registrations` | ✅ | List all registrations |
| `GET` | `/api/registrations/:id` | ✅ | Get single registration |
| `PATCH` | `/api/registrations/:id/status` | ✅ | Update status |
| `DELETE` | `/api/registrations/:id` | ✅ | Delete registration |
| `GET` | `/api/stats` | ✅ | Summary counts by status |

---

## 📋 Frontend Dependencies (`package.json`)

```json
"dependencies": {
  "react": "^19.x",
  "react-dom": "^19.x",
  "react-router-dom": "^7.x"
},
"devDependencies": {
  "@tailwindcss/vite": "^4.x",
  "@vitejs/plugin-react": "^6.x",
  "concurrently": "^10.x",
  "tailwindcss": "^4.x",
  "vite": "^8.x"
}
```

## 📋 Backend Dependencies (`server/package.json`)

```json
"dependencies": {
  "bcryptjs": "^2.x",
  "better-sqlite3": "^12.x",
  "cors": "^2.x",
  "express": "^5.x",
  "jsonwebtoken": "^9.x"
}
```

---

## 🌐 Courses Available

- Khoá học Tiền Tiểu học
- Khoá học Tiểu học
- Khoá học Tiếng Anh
- Khoá học Luyện thi lớp 6 Chuyên
- Khoá học Kỹ năng
- Khoá học Nghệ thuật
- Khoá học Lập trình

---

© 2026 Gia Sư Thế Hệ Mới — 130 Đại Lộ 3, Phước Bình, TP.HCM
