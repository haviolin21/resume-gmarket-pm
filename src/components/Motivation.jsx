import { motion } from 'framer-motion';
import './Motivation.css';

const Motivation = () => {
  return (
    <section id="motivation" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">Why Gmarket?</h2>
          <div className="motivation-card">
            <h3 className="motivation-quote">
              "상상하는 모든 거래가 가능해지는 플랫폼"
            </h3>
            <p className="motivation-text">
              지마켓은 단순히 상품을 판매하는 플랫폼이 아니라, 고객의 쇼핑 경험을 지속적으로 확장하는 플랫폼이라고 생각합니다. 
              1년에 2번 진행되는 빅스마일데이, 매일 새로운 혜택을 제공하는 슈퍼딜, 빠른 배송 경험의 스타배송, 구매 혜택을 강화하는 꼭 멤버십 등은 
              고객이 더 편리하고 즐겁게 쇼핑할 수 있도록 설계된 서비스라고 느꼈습니다.
            </p>
            <p className="motivation-text">
              특히 이러한 서비스들은 지마켓의 Vision인 ‘상상하는 모든 거래가 가능해지는 플랫폼’을 실제로 실행하고 있는 사례라고 생각했습니다. 
              단순히 상품을 판매하는 것을 넘어 가격, 혜택, 배송, 멤버십까지 고객이 쇼핑 과정에서 체감하는 경험 전반을 지속적으로 연결하고 확장해 나간다는 점이 인상 깊었습니다.
            </p>
            <p className="motivation-text">
              또한 지마켓 DNA 중 <strong className="highlight">‘모든 일의 시작과 끝에는 고객이 있어야 한다’</strong>는 원칙에도 깊이 공감했습니다. 
              결국 커머스에서 가장 중요한 것은 고객이며, 고객 경험을 중심으로 끊임없이 서비스를 개선하는 플랫폼이 장기적으로 더 성장할 수 있다고 생각합니다.
            </p>
            <p className="motivation-text">
              저 역시 고객이 신뢰할 수 있는 가격 경험과 운영 구조를 만드는 일에 지속적으로 관심을 가져왔으며, 
              지마켓 Pricing Planning 조직에서도 고객 중심 관점에서 더 나은 커머스 경험을 만드는 데 기여하고자 지원했습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Motivation;
