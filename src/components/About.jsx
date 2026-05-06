import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p className="about-text">
              저는 e-Commerce 및 플랫폼 환경에서 운영 과정에서 발생하는 문제를 데이터 기반으로 분석하고, 
              실행 가능한 프로세스로 개선해 온 운영 기획 담당자입니다.
            </p>
            <p className="about-text">
              위메프와 쿠팡에서는 가격 정책 및 판촉 운영을 수행하며 가격 비교 채널, 상품 노출 구조, 
              내부 정책 간 정합성을 관리했고, 운영 과정에서 발생하는 병목과 비효율을 데이터 기반으로 개선해 왔습니다.
            </p>
            <p className="about-text">
              중고나라에서는 결제 퍼널과 사용자 행동 데이터를 분석하여 거래 구조 및 결제 전환율을 개선했으며, 
              김캐디에서는 예약 프로세스 재설계와 IVR 자동화를 통해 운영 비용 절감과 예약 성공률 개선을 동시에 만들었습니다.
            </p>
            <p className="about-text highlight">
              특히 단순 이슈 대응에 머무르지 않고 반복 업무를 SOP와 시스템 기반으로 표준화하고, 
              Tech·운영·비즈니스 조직과 협업하여 운영 프로세스를 지속적으로 고도화해 온 경험을 강점으로 가지고 있습니다.
            </p>
            <p className="about-text">
              이러한 경험을 바탕으로 지마켓 Pricing Planning 조직에서도 데이터 기반으로 문제를 정의하고, 
              고객이 신뢰할 수 있는 가격 경험과 운영 구조를 만드는 데 기여하고자 합니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
