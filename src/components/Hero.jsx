import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h2 className="greeting">운영 기획 담당자</h2>
          <h1 className="name">하윤택</h1>
          <p className="pitch">
            데이터 기반으로 문제를 정의하고, 실행 가능한 프로세스로 운영을 개선합니다.<br />
            고객이 신뢰할 수 있는 가격 경험과 운영 구조를 만듭니다.
          </p>
          <div className="contact-info">
            <a href="mailto:yuntaek.ha@gmail.com" className="contact-item">
              <Mail size={18} />
              <span>yuntaek.ha@gmail.com</span>
            </a>
            <div className="contact-item">
              <Phone size={18} />
              <span>010-4795-3330</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
