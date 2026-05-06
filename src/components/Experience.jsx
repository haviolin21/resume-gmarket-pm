import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    company: '김캐디',
    role: '리드 (운영팀)',
    period: '2025.06 – 2026.02 (9개월)',
    reason: '희망퇴직 진행에 따른 퇴사',
    achievements: [
      'IVR 기반 예약 자동화를 도입하여 24시간 예약 대응 체계를 구축하고, 연간 약 2억 원의 운영 비용 절감',
      '오프라인 파트너(매장) VOC 및 운영 데이터를 기반으로 예약 프로세스를 개선하여 콜 응대율 10% → 80% 향상',
      '운영 데이터 분석을 통해 병목 구간 및 개선 과제를 도출하고, 실제 시스템 개선에 반영하여 운영 리소스 절감 및 고객 경험 개선',
      'SOP 및 운영 가이드라인 표준화를 통해 서비스 운영 안정성 및 확장 대응 체계 구축'
    ],
    roles: [
      '운영 지표 모니터링 및 이슈 대응 프로세스 관리',
      '파트너·고객·내부 조직 간 운영 정책 및 이슈 조율',
      '운영 요구사항 정의 및 제품/기술팀 협업을 통한 시스템 개선'
    ]
  },
  {
    company: '중고나라',
    role: '매니저 (결제제휴사업팀)',
    period: '2022.03 – 2024.04 (2년 2개월)',
    reason: '개인 휴식 및 커리어 재정비',
    achievements: [
      '유저 행동 데이터(탐색–채팅–결제) 기반 결제 퍼널 분석 및 병목 구간 개선을 통해 중고나라 페이 결제액 2.4배 성장 견인',
      '카페–앱 간 채팅 흐름 및 사용자 전환 구조를 개선하여 결제액 3,800만 원 → 8.4억 원 성장, NRU 1.6배 증가 및 상품 등록 수 2배 증가 달성',
      '사기 의심 채팅 키워드 탐지 정책 및 이상 징후 모니터링을 구축하여 사기 피해 건수 60% 감소 및 거래 신뢰도 향상',
      '결제 모니터링 및 대응 프로세스 자동화를 통해 운영 효율 향상 및 이슈 대응 속도 개선'
    ],
    roles: [
      '카페·앱·결제 시스템이 연결된 서비스 운영 프로세스 및 제휴 구조 관리',
      '사용자 행동 데이터 기반 전환 병목 구간 분석 및 개선 과제 도출',
      '운영 요구사항 정의 및 제품/개발 조직 협업'
    ]
  },
  {
    company: '브랜즈컴퍼니(주)',
    role: '팀장 (마케팅기획)',
    period: '2021.05 – 2022.01 (9개월)',
    reason: '플랫폼 기반 서비스 운영 및 데이터 분석 경험 확장을 위한 이직',
    achievements: [
      '쿠팡 로켓배송 채널 운영 및 상품 운영 구조 개선을 통해 월 평균 10% 이상의 매출 성장 견인',
      '판매 데이터 기반 발주 전략 개선 및 재고 운영 최적화를 통해 재고 안정성 및 운영 효율 향상',
      '시장 수요 및 운영 리소스를 고려한 상품 라인업 37% 확장 및 안정적인 채널 운영 체계 구축'
    ],
    roles: [
      '쿠팡 로켓배송 연계 입고·판매·재고 관리 등 채널 운영 프로세스 관리',
      '판매 데이터 기반 수요 예측 및 발주·재고 운영 최적화'
    ]
  },
  {
    company: '쿠팡(주)',
    role: 'L4 (Pricing Operation)',
    period: '2020.04 – 2020.08 (5개월)',
    reason: '서비스 구조 및 개발 이해도 확장을 위한 학업 진행',
    achievements: [
      '마스크 등 수급 불안정 상품에 대한 가격 정책 운영을 통해 시장 상황에 맞는 가격 안정성 관리',
      '가격 비교 예외 케이스 분석 및 로직 개선을 통해 예외율 감소 및 운영 안정성 향상',
      '블랙셀러·화이트셀러 대응 기준 구체화를 통한 가격 정책 운영 일관성 확보',
      'SQL 기반 운영 데이터 분석을 통해 가격 운영 프로세스 효율 개선'
    ],
    roles: [
      '시장 가격 모니터링 및 카테고리별 가격 이슈 대응',
      '가격 검수 및 예외 케이스 대응 프로세스 운영'
    ]
  },
  {
    company: '(주)위메프',
    role: '사원 (판촉운영팀)',
    period: '2017.12 – 2020.03 (2년 4개월)',
    reason: '대규모 플랫폼 운영 경험 확장을 위한 이직',
    achievements: [
      '상위 20% TOP SKU 중심의 판촉 전략 운영을 통해 운영 효율 및 ROI 개선',
      '가격 비교 시스템 구축 프로젝트 참여를 통해 상품 노출 및 구매 전환 개선 기여',
      '식품 카테고리 가격 비교 기반 판촉 운영을 통해 GMV 및 수익성 목표 달성'
    ],
    roles: [
      '식품 카테고리 가격 비교 기반 판촉 운영 및 성과 분석',
      '가격 비교 페이지 노출 구조 및 운영 정책 관리'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section alt">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">총 경력 7년의 운영 및 기획 경험</p>
        
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx} 
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="company-name">{exp.company}</h3>
                  <span className="role">{exp.role}</span>
                  <span className="period">{exp.period}</span>
                </div>
                
                <div className="experience-details">
                  <div className="detail-group">
                    <h4>주요 성과</h4>
                    <ul>
                      {exp.achievements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="detail-group">
                    <h4>주요 역할</h4>
                    <ul>
                      {exp.roles.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
