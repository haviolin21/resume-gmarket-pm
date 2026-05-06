import { motion } from 'framer-motion';
import { Settings, BarChart2, Zap, Users, ShoppingCart } from 'lucide-react';
import './Competencies.css';

const competencies = [
  {
    icon: <Settings size={32} />,
    title: '운영 프로그램 설계 및 실행 경험',
    items: [
      '운영 정책 및 프로세스 구조화 경험',
      'SOP 수립 및 운영 표준화 기반 효율 개선',
      '운영 이슈 분석 및 실행 과제 리딩 경험'
    ]
  },
  {
    icon: <BarChart2 size={32} />,
    title: '데이터 기반 운영 개선',
    items: [
      'SQL 기반 운영 데이터 분석 및 인사이트 도출',
      '퍼널·전환율·운영 KPI 기반 문제 분석',
      '정책 및 프로세스 개선 성과 검증 경험'
    ]
  },
  {
    icon: <Zap size={32} />,
    title: '운영 자동화 및 프로세스 개선',
    items: [
      '반복 업무 자동화 및 시스템화 경험',
      '운영 병목 구간 분석 및 프로세스 개선',
      'IVR 자동화 기반 비용 절감 및 운영 효율화 경험'
    ]
  },
  {
    icon: <Users size={32} />,
    title: 'Cross-functional 협업 역량',
    items: [
      'Tech·PM·운영 조직과 협업한 문제 해결 경험',
      '현업 요구사항 정의 및 시스템 개선 협업',
      '다양한 이해관계자 간 커뮤니케이션 및 실행 조율 경험'
    ]
  },
  {
    icon: <ShoppingCart size={32} />,
    title: '커머스 플랫폼 운영 경험',
    items: [
      'B2C·C2C 플랫폼 운영 및 구조 개선 경험',
      '가격·거래·결제 프로세스 End-to-End 이해',
      '고객 경험 기반 서비스 운영 정책 개선 경험'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Competencies = () => {
  return (
    <section id="competencies" className="section alt">
      <div className="container">
        <h2 className="section-title">Core Competencies</h2>
        <p className="section-subtitle">문제 해결을 위한 5가지 핵심 역량</p>
        
        <motion.div 
          className="competencies-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {competencies.map((comp, idx) => (
            <motion.div key={idx} className="comp-card" variants={itemVariants}>
              <div className="comp-icon">{comp.icon}</div>
              <h3 className="comp-title">{comp.title}</h3>
              <ul className="comp-list">
                {comp.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Competencies;
