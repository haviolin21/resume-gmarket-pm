import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h3>Yuntaek Ha</h3>
          <p>운영 기획 담당자 포트폴리오</p>
          <div className="footer-education">
            <p><strong>학력:</strong> 상명대학교(천안) 금융경영학과 학사 (2010.03 ~ 2016.08)</p>
            <p><strong>교육:</strong> 코드스테이츠 Software Engineering (2020.12 ~ 2021.04) / 코드잇 빅데이터 분석 (2025.02 ~ 2025.03)</p>
          </div>
        </div>
        
        <button onClick={scrollToTop} className="scroll-top-btn">
          ↑ 맨 위로
        </button>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Yuntaek Ha. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
