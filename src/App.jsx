import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Competencies from './components/Competencies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Motivation from './components/Motivation'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Competencies />
      <Experience />
      <Projects />
      <Motivation />
      <Footer />
    </div>
  )
}

export default App
