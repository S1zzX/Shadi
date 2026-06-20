import { useState } from 'react'

const CENTER_NAME = 'Gia Sư Thế Hệ Mới'
const CENTER_REPLY = 'Chào bạn nhé! Vui lòng để lại thông tin tư vấn bên dưới, trung tâm sẽ liên hệ và sắp xếp lịch học thích hợp cho bạn nhé.'

const REVIEWS = [
  {
    id: 1,
    avatar: '👩',
    name: 'Lâm Hà',
    text: 'Cần học cho thử không, mình muốn học thử',
    time: '5 ngày trước',
    likes: 3,
    reply: CENTER_REPLY,
  },
  {
    id: 2,
    avatar: '👦',
    name: 'Nguyễn Phú Tài',
    text: 'Em muốn đăng ký khóa học Toán bằng Tiếng Anh lớp 4',
    time: '5 ngày trước',
    likes: 2,
    reply: 'Chào em nhé! Em vui lòng để lại thông tin tư vấn bên dưới, trung tâm sẽ liên hệ và tư vấn cho em kỹ hơn về chương trình học Toán lớp 4 và làm những cam kết liên quan nhé.',
  },
  {
    id: 3,
    avatar: '🧑',
    name: 'Demis Lâm',
    text: 'Tư vấn giúp em khóa học Toán cho học sinh lớp 3 có cam kết điểm thi với',
    time: '5 ngày trước',
    likes: 5,
    reply: 'Chào em nhé! Em vui lòng để lại thông tin tư vấn bên dưới, trung tâm sẽ liên hệ và tư vấn cho em kỹ hơn về chương trình học Toán lớp 3 và làm những cam kết liên quan nhé.',
  },
  {
    id: 4,
    avatar: '👧',
    name: 'Huỳnh Lan',
    text: 'Em cần tư vấn lớp Tiếng Anh cho lớp 4 lên 5. Em vừa đăng ký rồi a',
    time: '5 ngày trước',
    likes: 4,
    reply: 'Chào em nhé! Em vui lòng để lại thông tin tư vấn bên dưới, trung tâm sẽ liên hệ và tư vấn cho em về chương trình Tiếng Anh lớp 5 phù hợp với trình độ nhé.',
  },
  {
    id: 5,
    avatar: '👨',
    name: 'Trung Phạm',
    text: 'Mình muốn đăng ký gia sư Toán cho con, có cam kết điểm đầu ra hay gì không?',
    time: '5 ngày trước',
    likes: 7,
    reply: 'Chào phụ huynh nhé! Khi đăng ký học gia sư thì sẽ được cam kết thi học kỳ hoặc cam kết các kỳ thi liên quan. Phụ huynh vui lòng để lại thông tin tư vấn bên dưới, trung tâm sẽ liên hệ tư vấn trực tiếp về chương trình gia sư cùng như các vấn đề liên quan như ưu đãi, cam kết, lịch học,…',
  },
  {
    id: 6,
    avatar: '👩‍🦱',
    name: 'Phạm Thu Thủy',
    text: 'Học như này là học bằng video quay sẵn hay học trực tiếp với giáo viên vậy a',
    time: '4 ngày trước',
    likes: 3,
    reply: 'Chào em nhé! Chương trình học tại trung tâm đều là học trực tiếp tương tác trực tiếp với giáo viên. Giúp học viên hỏi đáp các vấn đề thắc mắc trong buổi học với giáo viên nhiệt tình lớp học. Em vui lòng để lại thông tin tư vấn bên dưới, trung tâm sẽ tư vấn cho em về các chương trình học em đang thắc mắc nhé.',
  },
  {
    id: 7,
    avatar: '🌸',
    name: 'Hoa Pham',
    text: 'Con cần đăng ký học Toán Tiếng Anh lớp 2, con đang bị yếu môn này',
    time: '4 ngày trước',
    likes: 6,
    reply: CENTER_REPLY,
  },
  {
    id: 8,
    avatar: '🦋',
    name: 'Huỳnh Thúy Phương',
    text: 'Mình muốn học thử môn STEM bằng Tiếng Anh cho bé lớp 1, hỗ trợ giúp mình',
    time: '4 ngày trước',
    likes: 2,
    reply: CENTER_REPLY,
  },
  {
    id: 9,
    avatar: '🌺',
    name: 'Trần Thu Hoài',
    text: 'Con học lớp 4, điểm Toán còn yếu. Muốn đăng ký khóa Toán bằng Tiếng Anh thì sao a?',
    time: '1 tuần trước',
    likes: 4,
    reply: 'Chào phụ huynh nhé! Trường hợp của con là đã có nền tảng nên có thể tham gia vào các khóa học Toán Tiếng Anh, trung tâm sẽ giúp con dễ dàng đạt điểm 8+ nhé. Em để lại thông tin tư vấn bên dưới, trung tâm sẽ hỗ trợ tư vấn cho em ngay.',
  },
  {
    id: 10,
    avatar: '🧒',
    name: 'Quốc Anh Phạm',
    text: 'Em đăng ký gia sư luyện rèn chữ đẹp cho em trai, học 1 kèm 1 giá sao a',
    time: '4 ngày trước',
    likes: 5,
    reply: 'Chào em nhé! Bạn hãy để lại đầy đủ thông tin tư vấn bên dưới, trung tâm sẽ báo rõ hơn về học phí gia sư 1 kèm 1 nhé.',
  },
]

function Avatar({ emoji, name }) {
  const colors = ['bg-blue-100', 'bg-pink-100', 'bg-yellow-100', 'bg-green-100', 'bg-purple-100']
  const color = colors[name.length % colors.length]
  return (
    <div className={`w-9 h-9 rounded-full ${color} flex items-center justify-center text-lg flex-shrink-0`}>
      {emoji}
    </div>
  )
}

function StarRating({ count = 5 }) {
  return (
    <div className="flex">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review, expanded, onToggle }) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(review.likes)

  const handleLike = () => {
    if (!liked) { setLikeCount(c => c + 1); setLiked(true) }
    else        { setLikeCount(c => c - 1); setLiked(false) }
  }

  return (
    <div className="border-b border-gray-100 pb-4 last:border-0">
      {/* User comment */}
      <div className="flex gap-3">
        <Avatar emoji={review.avatar} name={review.name} />
        <div className="flex-1 min-w-0">
          <div className="bg-gray-50 rounded-2xl rounded-tl-none px-4 py-3">
            <p className="font-bold text-gray-800 text-sm">{review.name}</p>
            <p className="text-gray-700 text-sm mt-0.5 leading-relaxed">{review.text}</p>
          </div>
          <div className="flex items-center gap-4 mt-1.5 ml-2">
            <button
              onClick={handleLike}
              className={`text-xs font-semibold transition-colors ${liked ? 'text-blue-600' : 'text-gray-400 hover:text-blue-500'}`}
            >
              👍 Thích {likeCount > 0 && <span className="ml-0.5">· {likeCount}</span>}
            </button>
            <button
              onClick={onToggle}
              className="text-xs font-semibold text-gray-400 hover:text-blue-500 transition-colors"
            >
              💬 Phản hồi
            </button>
            <span className="text-xs text-gray-400">{review.time}</span>
          </div>

          {/* Center reply */}
          {review.reply && (
            <div className="flex gap-2 mt-3">
              <div className="w-7 h-7 rounded-full bg-blue-900 flex items-center justify-center text-white text-xs font-black flex-shrink-0">
                G
              </div>
              <div className="flex-1">
                <div className="bg-blue-50 rounded-2xl rounded-tl-none px-3 py-2.5">
                  <p className="font-bold text-blue-900 text-xs">{CENTER_NAME}</p>
                  <p className="text-gray-700 text-xs mt-0.5 leading-relaxed">{review.reply}</p>
                </div>
                <div className="flex items-center gap-3 mt-1 ml-2">
                  <span className="text-xs text-gray-400 font-semibold">👍 Thích</span>
                  <span className="text-xs text-gray-400 font-semibold">💬 Phản hồi</span>
                  <span className="text-xs text-gray-400">{review.time}</span>
                </div>
              </div>
            </div>
          )}

          {/* Reply input (toggle) */}
          {expanded && (
            <div className="flex gap-2 mt-3">
              <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs flex-shrink-0">👤</div>
              <input
                type="text"
                placeholder="Viết phản hồi..."
                className="flex-1 bg-gray-100 rounded-full px-3 py-1.5 text-xs focus:outline-none focus:bg-white focus:ring-1 focus:ring-yellow-400 border border-gray-200"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ReviewsSection() {
  const [expanded, setExpanded] = useState(null)
  const [showAll, setShowAll]   = useState(false)
  const [newComment, setNewComment] = useState('')
  const [submitted, setSubmitted]   = useState(false)

  const visible = showAll ? REVIEWS : REVIEWS.slice(0, 5)

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    if (newComment.trim()) { setSubmitted(true); setNewComment('') }
  }

  return (
    <section id="reviews" className="bg-white py-14 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-blue-900 font-black text-2xl">
              {REVIEWS.length + (submitted ? 1 : 0)} Bình luận
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <StarRating />
              <span className="text-gray-500 text-sm">Học viên đánh giá</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Sắp xếp theo</span>
            <select className="border border-gray-200 rounded-lg px-2 py-1 text-xs bg-white focus:outline-none focus:border-yellow-400">
              <option>Lượt thích</option>
              <option>Mới nhất</option>
              <option>Cũ nhất</option>
            </select>
          </div>
        </div>

        {/* Write comment */}
        <div className="mb-8">
          {submitted && (
            <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 text-sm mb-3 flex items-center gap-2">
              <span>✅</span> Bình luận của bạn đã được gửi. Chúng tôi sẽ phản hồi sớm!
            </div>
          )}
          <form onSubmit={handleCommentSubmit} className="flex gap-3">
            <div className="w-9 h-9 rounded-full bg-yellow-100 flex items-center justify-center text-lg flex-shrink-0">👤</div>
            <div className="flex-1 flex gap-2">
              <input
                type="text"
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                placeholder="Viết bình luận của bạn..."
                className="flex-1 border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
              />
              <button
                type="submit"
                className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors flex-shrink-0"
              >
                Gửi
              </button>
            </div>
          </form>
        </div>

        {/* Reviews list */}
        <div className="space-y-5">
          {visible.map(r => (
            <ReviewCard
              key={r.id}
              review={r}
              expanded={expanded === r.id}
              onToggle={() => setExpanded(expanded === r.id ? null : r.id)}
            />
          ))}
        </div>

        {/* Show more */}
        {!showAll && REVIEWS.length > 5 && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-6 w-full border border-gray-200 hover:border-yellow-400 text-gray-600 hover:text-blue-900 font-semibold py-2.5 rounded-xl text-sm transition-colors"
          >
            Xem thêm {REVIEWS.length - 5} bình luận ↓
          </button>
        )}
      </div>
    </section>
  )
}
