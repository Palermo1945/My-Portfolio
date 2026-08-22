import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import FeaturedProject from './components/FeaturedProject'
import Experience from './components/Experience'
import Education from './components/Education'
import Services from './components/Services'
import Resume from './components/Resume'
import AchievementsTestimonials from './components/AchievementsTestimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import useTheme from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <a href="#home" className="visually-hidden">
        Skip to content
      </a>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <FeaturedProject />
        <Experience />
        <Education />
        <Services />
        <Resume />
        <AchievementsTestimonials />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}

export default App
