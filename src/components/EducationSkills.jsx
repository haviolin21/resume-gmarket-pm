import { motion } from 'framer-motion';
import './EducationSkills.css';

const EducationSkills = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="edu-skills-grid">
          
          {/* Left Column: Education */}
          <motion.div 
            className="edu-column"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="section-title left-align">Education</h2>
            
            <div className="edu-item">
              <span className="edu-period">2010.03 ~ 2016.08</span>
              <h3 className="edu-title">상명대학교(천안)</h3>
              <p className="edu-major">학사 / 금융경영학과</p>
            </div>

            <div className="edu-item">
              <span className="edu-period">2020.12 ~ 2021.04</span>
              <h3 className="edu-title">소프트웨어 엔지니어링 (코드스테이츠)</h3>
              <p className="edu-major">Software Engineering 트랙</p>
              <ul className="edu-desc">
                <li>웹 서비스 구조 및 데이터베이스 기본 이해</li>
                <li>Git 기반 협업 및 팀 프로젝트 경험</li>
                <li>개발 조직 협업을 위한 기술 커뮤니케이션 역량 보유</li>
              </ul>
            </div>

            <div className="edu-item">
              <span className="edu-period">2025.02 ~ 2025.03</span>
              <h3 className="edu-title">빅데이터 분석 (코드잇)</h3>
              <p className="edu-major">Python, 데이터 마이닝</p>
              <ul className="edu-desc">
                <li>Python(Pandas) 활용 데이터 전처리 및 탐색적 분석(EDA)</li>
                <li>Matplotlib 활용 데이터 시각화 및 인사이트 도출</li>
                <li>데이터 기반 가설 설정 및 운영 개선 리포트 작성 역량 습득</li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Skills */}
          <motion.div 
            className="skills-column"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="section-title left-align">기타 역량 및 자격</h2>
            
            <div className="skill-item">
              <h3 className="skill-title">Data & IT</h3>
              <p className="skill-desc">
                SQL 기반 데이터 추출·분석 및 운영 지표 관리 가능. AI 툴(ChatGPT, Gemini 등)을 활용한 데이터 정리·문서화 및 업무 효율화 경험.
              </p>
            </div>
            
            <div className="skill-item">
              <h3 className="skill-title">운영 & 시스템 구축</h3>
              <p className="skill-desc">
                신규 Admin Tool 전환 및 운영 안정화 참여 경험. 운영 요구사항 정의 및 기능 개선 요청, QA 테스트 등 제품 개선 리딩.
              </p>
            </div>
            
            <div className="skill-item">
              <h3 className="skill-title">협업 & 커뮤니케이션</h3>
              <p className="skill-desc">
                개발 조직 협업 및 다양한 이해관계자 간 조율 역량. Slack, Notion 기반 협업 및 문서화 가이드라인 수립 경험.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
