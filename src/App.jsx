import TopBar from './components/TopBar'
import Header from './components/Header'
import MainContent from './components/MainContent'
import PhoneBar from './components/PhoneBar'
import WhyChooseUs from './components/WhyChooseUs'
import CoursesGrid from './components/CoursesGrid'
import Partners from './components/Partners'
import Footer from './components/Footer'
import FloatingSocial from './components/FloatingSocial'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <TopBar />
      <Header />
      <MainContent />
      <PhoneBar />
      <WhyChooseUs />
      <CoursesGrid />
      <Partners />
      <Footer />
      <FloatingSocial />
    </div>
  )
}

export default App
