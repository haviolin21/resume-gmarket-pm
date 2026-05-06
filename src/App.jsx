import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Competencies from './components/Competencies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Motivation from './components/Motivation'
import EducationSkills from './components/EducationSkills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Motivation />
      <Competencies />
      <Experience />
      <Projects />
      <EducationSkills />
      <Footer />
    </div>
  )
}

export default App
