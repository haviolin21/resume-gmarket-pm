import { ChevronUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} HA YUNTAEK. All rights reserved.</p>
        <p className="footer-disclaimer">본 이력서에 기재된 사항은 모두 사실과 다름없음을 확인합니다.</p>
      </div>
      
      <button onClick={scrollToTop} className="floating-top-btn" aria-label="Scroll to top">
        <ChevronUp size={24} />
        <span>TOP</span>
      </button>
    </footer>
  );
};

export default Footer;
