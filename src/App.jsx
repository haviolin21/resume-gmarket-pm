import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
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
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      
      <AnimatePresence>
        {showTopBtn && (
          <motion.button 
            className="global-scroll-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} strokeWidth={3} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
