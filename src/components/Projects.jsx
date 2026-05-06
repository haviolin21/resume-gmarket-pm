import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: '예약 담당자 IVR 대체',
    period: '25.07.29 ~ 25.09.21',
    summaryBullets: [
      '미운영 시간대 예약 성공률 50% → 70%로 개선, 인건비 연 약 2억 원 → 월 200만 원 수준으로 대폭 절감',
      'IVR 기반 예약 프로세스로 24시간 예약 커버',
      '예약 성공률·운영 시간대별 성과 지표 대시보드 구축'
    ],
    detail: {
      intro: "김캐디는 매장 예약 관리를 위한 사장님 솔루션을 운영하고 있으며, 솔루션 사용이 어려운 매장이나 예약을 놓친 경우를 보완하기 위해 프리랜서 형태의 '예약 담당자' 구조를 운영하고 있었습니다.\n\n해당 운영 방식은 예약 담당자 근무 시간 외에는 대응이 불가능해 새벽 시간대 예약이 누락되는 문제가 있었고, 재택 근무 기반 운영으로 인해 예약 처리 품질이 일정하지 않아 비효율이 존재했습니다.\n\n입사 후 운영 전반을 파악하는 과정에서 예약 담당자가 처리하는 예약이 전체 결제액에서 차지하는 비중이 1%도 되지 않음을 확인하고, 반면 새벽 시간대에는 200건 중 절반가량이 누락되는 것을 발견하였습니다.\n\n이러한 분석을 바탕으로 인력 중심 운영을 IVR로 대체하여 운영 효율을 개선하자는 가설을 수립했습니다. 초기 테스트를 통해 매장 인터뷰를 병행하여 거부감이 없음을 확인 후 전면 도입했고, 큰 비용 절감과 업무 안정성을 가져왔습니다.\n\n본 프로젝트를 통해 운영 리스크가 높은 영역을 데이터로 구조화하고, 내외부 관련자들을 설득하며 도입과 안착까지 성공적으로 완수하는 경험을 했습니다.",
      problem: "예약 담당자 미운영 시간대에는 전화 예약 대응이 불가하여, 고객 예약 실패·매출 손실·운영 리소스 비효율이 동시에 발생하는 문제를 확인하였습니다.",
      execution: "IVR 통화 방식에 대한 사용자 거부감 사전 조사 후 도입. 도입 전·후 예약 성과 및 운영 비용 비교, 대시보드를 구축해 성과를 검증했습니다.",
      result: "미운영 시간대 성공률을 크게 높이고, 전체 거래 성과 개선 및 운영 리스크 감소에 기여함."
    }
  },
  {
    id: 2,
    title: '중고나라 페이 결제 2배 증가',
    period: '23.04.07 ~ 23.12.31',
    summaryBullets: [
      '2023년 최고 결제액 달성 및 2.4배 상승',
      '결제 퍼널(탐색-채팅-결제) 이탈률 분석 및 카페 채팅 유도 기능 개발',
      '상위 거래자 세그먼트 추출 및 VIP 관리로 거래액 20% 상승 효과'
    ],
    detail: {
      intro: "2023년 중고나라 페이 결제액 상승 목표 달성을 위해 목적 조직인 결제제휴사업팀이 신설되었습니다. 저는 데이터 분석 및 보고, 운영 업무를 담당하며 퍼널 분석, 상위 결제자 관리 등을 주도했습니다.\n\nSQL을 활용해 결제 퍼널을 분석한 결과 강한 이탈이 '채팅 구간'에서 발생함을 발견했고, 특히 앱 내 카페 연동 상품과 관련해 판매자와의 상호작용 병목이 발생함을 찾았습니다. 이에 '카페 채팅 앱 유도' 기능을 구현해 이탈을 방지했습니다.\n\n또한 중고거래 횟수와 가격이 큰 주요 상위 300명을 뽑아 빠른 CS와 리워드 혜택을 제공하여 해당 군의 앱 내 결제액을 20% 상승시켰습니다.\n\n최종적으로 거래 수수료 감면 이벤트 효율을 입증하는 분석을 병행하여, 결제가 가장 저조한 시간대를 타겟으로 이탈 유저까지 복귀시켰고, 페이 결제액 2.4배 성장 및 부서 KPI를 성공적으로 견인했습니다.",
      problem: "결제액 저조 문제 해결을 위해 사용자 행동 데이터를 분석하였고 결제 퍼널에서 이탈률 개선이 필요한 구간을 확인하였습니다.",
      execution: "앱 내 크롤링 된 카페 상품에서 발생하는 채팅 이탈 병목을 막고자 앱 내 채팅 시 카페 댓글 유도 기능을 구현하고 상위 10% 결제자를 집중 관리했습니다.",
      result: "타겟 고객 관리와 퍼널 보수를 통해 23년 최고 결제액 달성 및 사업팀 KPI 목표 초과 달성."
    }
  },
  {
    id: 3,
    title: '위메프 판촉 효율화',
    period: '19.08.05 ~ 19.11.29',
    summaryBullets: [
      '거래액 상위 20% TOP SKU 집중 판촉을 통해 식품 카테고리 매출 상승 및 카테고리 1등 달성',
      '판촉 비용 대비 GMV 효율 및 마진 대폭 개선',
      '실시간 데이터 분석 및 피드백을 통한 신속한 전략 수정 및 실행'
    ],
    detail: {
      intro: "위메프 전체 상품 매출 저조 문제를 해결하기 위해, 상품 판촉 효율화 프로젝트를 진행했습니다. 기존에는 카테고리 기준 수수료를 충족하는 모든 상품에 대해 판촉을 진행했지만, 판촉 비용 대비 GMV 상승률이 저조한 문제가 있었습니다. 또한, 모든 상품에 동일한 판촉률을 적용하다 보니, 판촉 효율성이 떨어지고, 판매자 간 가격 경쟁을 유도하지 못했습니다. 이에 따라, 공급가가 우수한 상품에 차등적으로 판촉을 적용하고, 판매자 간 경쟁을 유도하여 판촉 비용을 최적화하고, 매출 상승 효과를 극대화하고자 했습니다.\n\n식품 카테고리의 결제 데이터를 분석한 결과, 거래액 상위 20%의 SKU가 전체 결제액의 약 80% 이상을 차지하는 파레토 법칙이 적용됨을 확인했습니다. 이에 따라, 거래액 상위 20% TOP SKU에 집중적인 판촉을 진행하면, 카테고리 전체 매출이 상승할 것이라는 가설을 설정했습니다. 또한, 공급가가 우수한 SKU에 차등적인 판촉률을 적용하여, 비용 효율성을 높이고 판매자 간 경쟁을 유도함으로써 마진을 개선하고자 했습니다.\n\n가설 검증을 위해, 작은 실험을 진행했습니다. 거래 데이터를 기반으로 결제금액 비중을 확인한 결과, 상위 20% SKU가 전체 결제액의 80% 이상을 차지함을 확인했습니다. 이에 따라, 상위 20% SKU에 집중적인 판촉을 진행하고, 판촉률을 차등 적용하여 비용 효율화와 매출 상승을 실현하고자 했습니다. 작은 실험에서 긍정적인 결과가 도출되자, 본격적으로 모든 실에서 판촉 담당자들이 모여 판촉 운영팀을 구성하고, 각 카테고리를 담당하며 판촉 전략을 개선했습니다.\n\n네이버, 다나와, 에누리, 다음 등 제휴 채널 가격비교 판촉을 진행하며, 가격 비교 경쟁을 통해 효율적인 판촉 전략을 설계했습니다. 상위 20% SKU 중 절반 이상을 차지하는 TOP 150개의 SKU를 수기로 집중 관리하며, 실시간 가격 대응 및 MD와 협업하여 공급가 개선을 통해 판촉 효율화를 달성했습니다.\n\n추석, 설, 위메프 데이 등 특별 행사 기간에는, TOP SKU에 집중적인 프로모션 비용 투자 및 집중적인 노출을 통해, 거래액 목표 달성 및 카테고리 1등 달성에 성공했습니다. 판매자와의 협업을 통해 공급가를 개선하고, 마진을 개선하면서도 매출 상승을 이뤄냈습니다.",
      problem: "식품 카테고리의 매출 저조 문제 해결을 위해, 판촉 전략의 효율성 개선 및 매출 증대 방안 필요성 확인",
      execution: "거래액 상위 20% TOP SKU 선정 및 집중 판촉 계획 수립 및 실행, 판촉 기간 동안 매출 데이터 수집 및 분석, 판촉 전후 매출 변화 비교를 통해 효과 검증",
      result: "거래액 상위 20% TOP SKU 집중 판촉을 통해 식품 카테고리 매출 상승, 카테고리 1등 달성 및 목표 매출 초과 달성"
    }
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="section alt">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <motion.div 
              key={proj.id} 
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="project-card-inner">
                <span className="project-period">{proj.period}</span>
                <h3 className="project-title">{proj.title}</h3>
                
                <ul className="project-summary-list">
                  {proj.summaryBullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
              
              <button className="view-details-btn" onClick={() => openModal(proj)}>
                자세히 보기 <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="modal-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
              
              <span className="modal-period">{selectedProject.period}</span>
              <h3 className="modal-title">{selectedProject.title}</h3>
              
              <div className="modal-body">
                <div className="modal-section-group">
                  <h4 className="modal-section-title">문제 정의 및 실행 결과</h4>
                  
                  <div className="modal-section-item">
                    <span className="badge badge-problem">문제</span>
                    <p>{selectedProject.detail.problem}</p>
                  </div>
                  
                  <div className="modal-section-item">
                    <span className="badge badge-execution">실행</span>
                    <p>{selectedProject.detail.execution}</p>
                  </div>
                  
                  <div className="modal-section-item">
                    <span className="badge badge-result">결과</span>
                    <p>{selectedProject.detail.result}</p>
                  </div>
                </div>

                <div className="modal-intro">
                  <h4 className="modal-section-title">상세 내용</h4>
                  {selectedProject.detail.intro.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
