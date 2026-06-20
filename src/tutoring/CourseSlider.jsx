import { useState, useRef } from 'react'

const COURSES = [
  {
    id: 1,
    title: 'Khoá học Tiền Tiểu học',
    subtitle: 'Dành cho bé 4 – 6 tuổi',
    desc: 'Chuẩn bị hành trang vững chắc trước khi vào lớp 1: làm quen chữ cái, số đếm, tô màu và kỹ năng xã hội.',
    badge: 'Mới nhất', badgeColor: 'bg-green-500',
    age: '4 – 6 tuổi', duration: '3 tháng',
    from: '#fde68a', to: '#fbbf24', icon: '🎒',
    features: ['Làm quen chữ cái & số', 'Tô màu & vẽ sáng tạo', 'Kỹ năng xã hội cơ bản', 'Phát triển ngôn ngữ'],
  },
  {
    id: 2,
    title: 'Khoá học Tiểu học',
    subtitle: 'Lớp 1 – 5',
    desc: 'Rèn chữ đẹp, Toán tư duy, KHTN & KHXH bằng Tiếng Anh. Cam kết điểm số tăng sau 1 tháng học.',
    badge: 'Phổ biến', badgeColor: 'bg-red-500',
    age: '6 – 11 tuổi', duration: '6 tháng',
    from: '#bfdbfe', to: '#3b82f6', icon: '📚',
    features: ['Rèn chữ đẹp', 'Toán tư duy bằng Tiếng Anh', 'KHTN & KHXH', 'Cam kết điểm số'],
  },
  {
    id: 3,
    title: 'Khoá học Tiếng Anh',
    subtitle: 'Giao tiếp & Học thuật',
    desc: 'Phát triển 4 kỹ năng Nghe – Nói – Đọc – Viết. Giáo viên bản ngữ và Việt Nam dày dạn kinh nghiệm.',
    badge: 'Hot', badgeColor: 'bg-orange-500',
    age: 'Mọi lứa tuổi', duration: '3 – 12 tháng',
    from: '#d1fae5', to: '#10b981', icon: '🌍',
    features: ['Nghe – Nói – Đọc – Viết', 'Giáo viên bản ngữ', 'Lớp học tương tác', 'Chứng chỉ quốc tế'],
  },
  {
    id: 4,
    title: 'Luyện thi lớp 6 Chuyên',
    subtitle: 'Trường chuyên & Năng khiếu',
    desc: 'Lộ trình ôn thi bài bản, đề cương sát thực tế, giáo viên có nhiều học sinh đậu trường chuyên.',
    badge: 'Cấp tốc', badgeColor: 'bg-purple-600',
    age: '10 – 12 tuổi', duration: '6 tháng',
    from: '#ede9fe', to: '#8b5cf6', icon: '🏆',
    features: ['Đề cương sát thực tế', 'Luyện đề liên tục', 'Giáo viên kinh nghiệm', 'Cam kết đậu chuyên'],
  },
  {
    id: 5,
    title: 'Khoá học Kỹ năng',
    subtitle: 'Kỹ năng sống & Lãnh đạo',
    desc: 'Rèn luyện tự tin, giao tiếp, làm việc nhóm và tư duy giải quyết vấn đề qua các hoạt động thực tế.',
    badge: 'Mới', badgeColor: 'bg-teal-500',
    age: '6 – 15 tuổi', duration: '2 tháng',
    from: '#ccfbf1', to: '#14b8a6', icon: '🌟',
    features: ['Tự tin giao tiếp', 'Làm việc nhóm', 'Tư duy giải quyết vấn đề', 'Lãnh đạo bản thân'],
  },
  {
    id: 6,
    title: 'Khoá học Nghệ thuật',
    subtitle: 'Vẽ, Nhạc & Thủ công',
    desc: 'Khơi dậy năng khiếu nghệ thuật: vẽ tranh, nhạc cụ cơ bản và làm đồ thủ công sáng tạo.',
    badge: 'Sáng tạo', badgeColor: 'bg-pink-500',
    age: '5 – 12 tuổi', duration: '3 tháng',
    from: '#fce7f3', to: '#ec4899', icon: '🎨',
    features: ['Vẽ tranh sáng tạo', 'Nhạc cụ cơ bản', 'Thủ công mỹ nghệ', 'Triển lãm cuối khoá'],
  },
  {
    id: 7,
    title: 'Khoá học Lập trình',
    subtitle: 'Scratch · Python · Robotics',
    desc: 'Dạy lập trình tư duy qua trò chơi Scratch, Python cơ bản và lắp ráp robot thông minh.',
    badge: 'STEM', badgeColor: 'bg-blue-700',
    age: '7 – 15 tuổi', duration: '3 – 6 tháng',
    from: '#e0f2fe', to: '#0ea5e9', icon: '💻',
    features: ['Lập trình Scratch', 'Python cơ bản', 'Robotics & AI', 'Dự án thực tế'],
  },
]

export default function CourseSlider() {
  const [current, setCurrent] = useState(0)
  const [locked, setLocked]   = useState(false)
  const isDragging = useRef(false)
  const dragStartX = useRef(null)
  const trackRef   = useRef(null)

  const TRANSITION = 'transform 0.52s cubic-bezier(0.4, 0, 0.2, 1)'

  // Always restore the smooth transition and update index
  const go = (index) => {
    if (locked) return
    setLocked(true)
    if (trackRef.current) trackRef.current.style.transition = TRANSITION
    setCurrent(index)
    setTimeout(() => setLocked(false), 560)
  }

  const prev = () => go((current - 1 + COURSES.length) % COURSES.length)
  const next = () => go((current + 1) % COURSES.length)

  /* ── drag / swipe (touch + mouse) ───────────────── */
  const onDragStart = (e) => {
    if (locked) return
    dragStartX.current = e.clientX ?? e.touches?.[0]?.clientX
    isDragging.current = false
    if (trackRef.current) trackRef.current.style.transition = 'none'
  }

  const onDragMove = (e) => {
    if (dragStartX.current === null) return
    const x    = e.clientX ?? e.touches?.[0]?.clientX
    const diff = x - dragStartX.current
    if (Math.abs(diff) > 5) isDragging.current = true
    if (trackRef.current)
      trackRef.current.style.transform = `translateX(calc(-${current * 100}% + ${diff}px))`
  }

  const onDragEnd = (e) => {
    if (dragStartX.current === null) return
    const x    = e.clientX ?? e.changedTouches?.[0]?.clientX
    const diff = dragStartX.current - x
    dragStartX.current = null

    if (trackRef.current) trackRef.current.style.transition = TRANSITION

    if      (diff >  50) { setLocked(true); setCurrent(c => (c + 1) % COURSES.length); setTimeout(() => setLocked(false), 560) }
    else if (diff < -50) { setLocked(true); setCurrent(c => (c - 1 + COURSES.length) % COURSES.length); setTimeout(() => setLocked(false), 560) }
    else if (trackRef.current)
      trackRef.current.style.transform = `translateX(-${current * 100}%)`
  }

  return (
    <section id="courses" className="bg-gray-50 py-14 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="mb-8">
          <div className="inline-block bg-yellow-400 text-blue-900 font-black text-xs px-3 py-1 rounded-full uppercase tracking-widest mb-2">
            Chương trình học
          </div>
          <h2 className="text-blue-900 font-black text-3xl leading-tight">
            Khóa học <span className="text-yellow-500">nổi bật</span>
          </h2>
        </div>

        {/* Slider viewport */}
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing select-none"
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onTouchStart={onDragStart}
          onTouchMove={onDragMove}
          onTouchEnd={onDragEnd}
        >
          {/* Sliding track — all cards side by side */}
          <div
            ref={trackRef}
            className="flex"
            style={{
              transform: `translateX(-${current * 100}%)`,
              transition: TRANSITION,
              willChange: 'transform',
            }}
          >
            {COURSES.map((course) => (
              <div
                key={course.id}
                className="w-full flex-shrink-0 min-h-[400px] grid grid-cols-1 md:grid-cols-2"
                style={{ background: `linear-gradient(135deg, ${course.from} 0%, ${course.to} 100%)` }}
              >
                {/* Left – text */}
                <div className="flex flex-col justify-center p-10 md:p-14 pointer-events-none">
                  <div className="mb-4">
                    <span className={`${course.badgeColor} text-white text-xs font-black px-3 py-1.5 rounded-full shadow`}>
                      {course.badge}
                    </span>
                  </div>
                  <h3 className="text-blue-900 font-black text-3xl md:text-4xl leading-tight mb-1">{course.title}</h3>
                  <p className="text-yellow-700 font-bold text-base mb-4">{course.subtitle}</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 max-w-sm">{course.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {course.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-800 font-medium">
                        <span className="w-5 h-5 bg-white/70 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-3 flex-wrap pointer-events-auto">
                    <span className="flex items-center gap-1.5 bg-black/15 rounded-full px-3 py-1.5 text-xs text-gray-800 font-semibold">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {course.age}
                    </span>
                    <span className="flex items-center gap-1.5 bg-black/15 rounded-full px-3 py-1.5 text-xs text-gray-800 font-semibold">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </span>
                    <a href="#register" className="bg-blue-900 hover:bg-blue-800 text-white font-black px-6 py-2.5 rounded-full text-sm transition-colors shadow-lg">
                      Đăng ký →
                    </a>
                  </div>
                </div>

                {/* Right – illustration */}
                <div className="hidden md:flex items-center justify-center p-10 relative pointer-events-none">
                  <div className="absolute w-64 h-64 rounded-full bg-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute w-48 h-48 rounded-full bg-white/25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  <span className="text-[140px] relative z-10 drop-shadow-xl leading-none">{course.icon}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Overlay arrow — left */}
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Overlay arrow — right */}
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {COURSES.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-8 h-2.5 bg-blue-900'
                  : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-3">
          {current + 1} / {COURSES.length} khóa học
        </p>
      </div>
    </section>
  )
}
