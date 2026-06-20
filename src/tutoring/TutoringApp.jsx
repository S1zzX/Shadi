import TutoringNav from './TutoringNav'
import HeroBanner from './HeroBanner'
import CourseSlider from './CourseSlider'
import RegisterSection from './RegisterSection'
import ReviewsSection from './ReviewsSection'
import TutoringFooter from './TutoringFooter'

export default function TutoringApp() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <TutoringNav />
      <HeroBanner />
      <CourseSlider />
      <RegisterSection />
      <ReviewsSection />
      <TutoringFooter />
    </div>
  )
}
