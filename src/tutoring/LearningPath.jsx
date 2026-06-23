const STEPS = [
  {
    num: 1,
    title: 'Tư vấn & Kiểm tra đầu vào',
    desc: 'Phụ huynh đăng ký tư vấn miễn phí. Giáo viên kiểm tra trình độ và xây dựng lộ trình học tập phù hợp riêng cho từng bé.',
    imgBg: 'from-yellow-100 to-yellow-300', icon: '🧑‍🏫', deco: '📝',
    numBg: 'from-yellow-400 to-orange-400',
  },
  {
    num: 2,
    title: 'Học thử miễn phí buổi đầu',
    desc: 'Bé được tham gia buổi học thử hoàn toàn miễn phí để làm quen với môi trường, giáo viên và phương pháp học tại trung tâm.',
    imgBg: 'from-blue-100 to-blue-300', icon: '🎒', deco: '🐻',
    numBg: 'from-blue-400 to-blue-600',
  },
  {
    num: 3,
    title: 'Bắt đầu khoá học chính thức',
    desc: 'Học theo lịch linh hoạt — sáng, chiều, tối hoặc cuối tuần. Lớp nhỏ 5–10 học sinh, giáo viên chú ý từng em.',
    imgBg: 'from-green-100 to-green-300', icon: '📚', deco: '✂️',
    numBg: 'from-green-400 to-green-600',
  },
  {
    num: 4,
    title: 'Theo dõi tiến độ & Báo cáo',
    desc: 'Phụ huynh nhận báo cáo học tập hàng tháng. Giáo viên liên hệ trực tiếp khi bé cần hỗ trợ thêm.',
    imgBg: 'from-purple-100 to-purple-300', icon: '📊', deco: '🦀',
    numBg: 'from-purple-400 to-purple-600',
  },
  {
    num: 5,
    title: 'Kiểm tra & Cam kết đầu ra',
    desc: 'Cuối khoá, bé được đánh giá kết quả. Trung tâm cam kết điểm số tăng rõ rệt — hoặc học lại miễn phí!',
    imgBg: 'from-red-100 to-red-300', icon: '🏆', deco: '🌟',
    numBg: 'from-red-400 to-red-500',
  },
]

// Row height (image+gap) in px — must match the step row height in the layout
const ROW_H   = 210
const PAD_TOP = 60   // distance from top of steps container to center of badge 1
const CX      = 160  // center X of the SVG (matches center column)
const CURVE   = 110  // how far the bezier control points bow out left/right

function Cloud({ className }) {
  return (
    <div className={`absolute pointer-events-none select-none opacity-50 ${className}`}>
      <svg viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <ellipse cx="70" cy="42" rx="64" ry="20" fill="white"/>
        <ellipse cx="40" cy="32" rx="28" ry="22" fill="white"/>
        <ellipse cx="80" cy="26" rx="34" ry="24" fill="white"/>
        <ellipse cx="108" cy="36" rx="22" ry="18" fill="white"/>
      </svg>
    </div>
  )
}

// Build the SVG S-curve path through all badge centres
function buildPath(steps) {
  const pts = steps.map((_, i) => ({
    x: CX,
    y: PAD_TOP + i * ROW_H,
  }))

  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 0; i < pts.length - 1; i++) {
    const from = pts[i]
    const to   = pts[i + 1]
    const mid  = (from.y + to.y) / 2
    // alternate bow direction: even→right, odd→left
    const bow  = i % 2 === 0 ? CURVE : -CURVE
    d += ` C ${from.x + bow} ${mid}, ${to.x + bow} ${mid}, ${to.x} ${to.y}`
  }
  return d
}

export default function LearningPath() {
  const svgH = PAD_TOP + (STEPS.length - 1) * ROW_H + PAD_TOP

  return (
    <section className="relative bg-gradient-to-b from-sky-100 to-blue-50 py-16 px-4 overflow-hidden">

      {/* Clouds */}
      <Cloud className="w-44 top-2 left-2" />
      <Cloud className="w-36 top-0 right-4" />
      <Cloud className="w-32 bottom-4 left-8" />
      <Cloud className="w-40 bottom-2 right-4" />

      {/* Airplane */}
      <div className="absolute top-6 right-20 text-4xl opacity-25 rotate-12 select-none pointer-events-none">✈️</div>

      <div className="max-w-3xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-block bg-yellow-400 text-blue-900 font-black text-xs px-3 py-1 rounded-full uppercase tracking-widest mb-3">
            Quy trình học tập
          </div>
          <h2 className="text-blue-900 font-black text-3xl md:text-4xl">
            LỘ TRÌNH <span className="text-yellow-500">HỌC TẬP</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2">5 bước đồng hành cùng con từ ngày đầu đến khi thành công</p>
        </div>

        {/* Steps + SVG connector overlay */}
        <div className="relative">

          {/* ── SVG S-curve connector ─────────────────── */}
          <svg
            className="absolute inset-0 w-full pointer-events-none z-0"
            style={{ height: svgH }}
            viewBox={`0 0 320 ${svgH}`}
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d={buildPath(STEPS)}
              fill="none"
              stroke="#93c5fd"
              strokeWidth="3"
              strokeDasharray="10 8"
              strokeLinecap="round"
            />
          </svg>

          {/* ── Steps ─────────────────────────────────── */}
          <div className="space-y-0">
            {STEPS.map((step, i) => {
              const isLeft = i % 2 === 0   // image on left for even, right for odd
              return (
                <div
                  key={step.num}
                  className="relative flex items-center"
                  style={{ height: ROW_H }}
                >
                  {isLeft ? (
                    <>
                      {/* Image — left */}
                      <div className="flex-1 flex justify-end pr-6 z-10">
                        <ImageCard step={step} />
                      </div>

                      {/* Number badge — center */}
                      <NumBadge step={step} />

                      {/* Text — right */}
                      <div className="flex-1 pl-6 z-10">
                        <TextCard step={step} />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Text — left */}
                      <div className="flex-1 flex justify-end pr-6 z-10">
                        <TextCard step={step} />
                      </div>

                      {/* Number badge — center */}
                      <NumBadge step={step} />

                      {/* Image — right */}
                      <div className="flex-1 pl-6 z-10">
                        <ImageCard step={step} />
                      </div>
                    </>
                  )}

                  {/* Floating deco emoji */}
                  <span
                    className="absolute text-2xl opacity-25 pointer-events-none select-none"
                    style={{
                      [isLeft ? 'right' : 'left']: '12%',
                      top: '18%',
                    }}
                  >
                    {step.deco}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl shadow-md px-6 py-4 border border-gray-100">
            <span className="text-2xl">✈️</span>
            <div className="text-left">
              <p className="text-blue-900 font-black text-sm">Sẵn sàng bắt đầu hành trình?</p>
              <p className="text-gray-400 text-xs">Đăng ký ngay hôm nay — học thử miễn phí!</p>
            </div>
            <a
              href="#register"
              className="ml-2 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-black px-5 py-2 rounded-full text-sm transition-colors shadow"
            >
              Đăng ký →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

function NumBadge({ step }) {
  return (
    <div className="z-20 flex-shrink-0">
      <div
        className={`w-11 h-11 rounded-full bg-gradient-to-br ${step.numBg} text-white font-black text-lg flex items-center justify-center shadow-xl ring-4 ring-white`}
      >
        {step.num}
      </div>
    </div>
  )
}

function ImageCard({ step }) {
  return (
    <div
      className={`w-40 h-28 md:w-48 md:h-32 rounded-2xl shadow-lg bg-gradient-to-br ${step.imgBg} flex items-center justify-center relative overflow-hidden`}
      style={{ borderRadius: '1rem 2rem 1rem 2rem' }}
    >
      <span className="text-6xl drop-shadow">{step.icon}</span>
      <span className="absolute bottom-1 right-2 text-xs opacity-30">{step.deco}</span>
    </div>
  )
}

function TextCard({ step }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 border border-gray-100 max-w-[190px]">
      <h3 className="text-blue-900 font-black text-xs mb-1.5 leading-snug">{step.title}</h3>
      <p className="text-gray-500 text-[11px] leading-relaxed">{step.desc}</p>
    </div>
  )
}
