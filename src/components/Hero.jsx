import { motion } from 'framer-motion';
import { Mail, Phone, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-grid">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h2 className="greeting">안녕하세요,</h2>
            <h1 className="name">
              운영의 한계를 데이터와 시스템으로 극복하는<br />
              <span className="name-highlight">운영 전문가 하윤택입니다.</span>
            </h1>
            
            <div className="pitch">
              <p>
                저는 온·오프라인이 결합된 거래 환경에서 운영 구조를 데이터로 분석하고, 
                시스템화하여 서비스 안정성과 수익성을 동시에 확보해 온 운영 기획 담당자입니다.
              </p>
              <p>
                커머스 및 예약 플랫폼에서 고객, 오프라인 파트너(매장), 내부 조직 간의 복잡한 운영 이슈를 해결하며 
                전환율 개선과 비용 절감을 실현해 왔습니다. 특히, 단순 이슈 대응에 머무르지 않고 반복 업무를 SOP와 시스템 기반으로 표준화하여 24시간 대응 체계를 구축하는 등 운영 효율을 극대화하는 데 강점이 있습니다.
              </p>
              <p>
                이러한 경험을 바탕으로 지마켓 Pricing Planning 조직에서도 데이터 기반으로 문제를 정의하고, 
                고객이 신뢰할 수 있는 가격 경험과 운영 구조를 만드는 데 기여하고자 합니다.
              </p>
            </div>
            
            <div className="contact-info">
              <div className="contact-group">
                <span className="contact-label">연락처</span>
                <div className="contact-value">010-4795-3330</div>
              </div>
              <div className="contact-group">
                <span className="contact-label">이메일</span>
                <div className="contact-value">yuntaek.ha@gmail.com</div>
              </div>
            </div>

            <div className="hero-actions">
              <a href="/resume-yuntaekha.pdf" download className="download-btn">
                이력서 다운로드 (PDF) <Download size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-graphic-wrapper"
          >
            <img src="/hero-graphic.png" alt="Data and Growth Graphic" className="hero-graphic" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
