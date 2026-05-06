import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Yuntaek Ha.</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#competencies">Competencies</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#motivation">Motivation</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
