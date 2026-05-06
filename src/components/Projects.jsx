import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: '예약 담당자 IVR 자동화 구축',
    period: '25.07.29 ~ 25.09.21',
    problem: '예약 담당자 미운영 시간대 전화 예약 대응 불가로 인한 예약 실패 및 운영 리스크 발생. 프리랜서 기반 운영 구조로 인건비 부담 및 운영 품질 편차 지속.',
    execution: [
      '운영 데이터 분석을 통해 전체 결제액 비중(1% 미만) 대비 새벽 시간대 예약 실패 비중이 높음을 확인',
      '기존 전화 예약 프로세스를 IVR 기반 자동화 구조로 전환 주도',
      'IVR 예약 수락/거절 시나리오 설계 및 파일럿 테스트 진행',
      '운영 KPI 및 예약 성공률 대시보드 구축, 제품/개발 조직 협업을 통한 안정화'
    ],
    results: [
      '미운영 시간대 예약 성공률 50% → 70% 개선',
      '연간 약 2억 원 규모 인건비를 월 200만 원 수준 IVR 비용으로 절감',
      '운영 자동화 기반 24시간 예약 대응 체계 구축'
    ]
  },
  {
    title: '중고나라 페이 결제액 2.4배 성장',
    period: '23.04.07 ~ 23.12.31',
    problem: '결제액 성장 목표 달성을 위해 사용자 행동 데이터 기반 결제 퍼널 개선 및 핵심 사용자 관리 전략 부재.',
    execution: [
      'SQL 기반 퍼널 분석으로 탐색–채팅–결제 중 채팅 단계의 이탈률 확인 (특히 카페 크롤링 상품)',
      '카페 상품 채팅 발생 시 자동 댓글 기반 앱 유입 기능 구현',
      '상위 결제자 세그먼트 분석 및 VIP 운영 정책 수립',
      '수수료 감면 기반 ‘중요일’ 이벤트 기획 및 결제 대시보드 구축'
    ],
    results: [
      '중고나라 페이 결제액 2.4배 성장 달성',
      '카페–앱 연동 기반 결제액 3.8억 → 8.4억 성장',
      '상위 판/구매자 거래액 약 20% 증가'
    ]
  },
  {
    title: '위메프 판촉 효율화',
    period: '19.08.05 ~ 19.11.29',
    problem: '전체 상품 대상 일괄 판촉 운영으로 인해 판촉 비용 대비 매출 효율이 낮고 가격 경쟁력 관리가 비효율적.',
    execution: [
      '거래 데이터 분석을 통해 상위 20% SKU가 전체 거래액의 약 80%를 차지함을 확인',
      'TOP 150 SKU 집중 관리 및 차등 판촉 운영 전략 설계',
      '네이버, 다나와, 에누리 등 가격 비교 채널 실시간 모니터링',
      'MD 협업 기반 공급가 개선 및 판촉 성과 데이터 기반 마진 최적화'
    ],
    results: [
      '식품 카테고리 거래액 및 판촉 효율 개선',
      '카테고리 매출 1위 및 목표 매출 초과 달성',
      '판촉 비용 대비 GMV 효율 및 마진 대폭 개선'
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Key Projects</h2>
        <p className="section-subtitle">문제 정의부터 실행, 성과 창출까지</p>
        
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx} 
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="project-header">
                <h3>{proj.title}</h3>
                <span className="project-period">{proj.period}</span>
              </div>
              
              <div className="project-body">
                <div className="project-section">
                  <h4 className="section-heading problem">문제 정의</h4>
                  <p>{proj.problem}</p>
                </div>
                
                <div className="project-section">
                  <h4 className="section-heading execution">실행</h4>
                  <ul>
                    {proj.execution.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-section">
                  <h4 className="section-heading result">결과</h4>
                  <ul>
                    {proj.results.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
