<script setup>
import { useContactModal } from '../composables/useContactModal'

const { open: openContact } = useContactModal()

const products = [
  {
    icon: '⚡',
    title: '智慧系統整合',
    desc: '提供企業級系統規劃與整合服務，優化營運流程，提升整體效率。',
  },
  {
    icon: '🔧',
    title: '專業設備供應',
    desc: '嚴選高品質設備與零組件，滿足各產業的專業需求與應用場景。',
  },
  {
    icon: '📊',
    title: '數據分析方案',
    desc: '運用大數據與 AI 技術，協助企業洞察趨勢，做出精準決策。',
  },
  {
    icon: '🛡️',
    title: '資安防護服務',
    desc: '全方位的網路安全解決方案，保障企業數位資產與營運安全。',
  },
  {
    icon: '🌱',
    title: '永續能源方案',
    desc: '推動綠色能源應用，協助企業達成 ESG 目標與碳排減量。',
  },
  {
    icon: '🤝',
    title: '技術諮詢顧問',
    desc: '資深顧問團隊提供專業建議，陪伴企業數位轉型每一步。',
  },
]
</script>

<template>
  <section id="products" class="section products">
    <div class="container">
      <h2 class="section-title">產品服務</h2>
      <p class="section-subtitle">PRODUCTS & SERVICES</p>

      <div class="product-grid">
        <div v-for="item in products" :key="item.title" class="product-card">
          <div class="card-icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
          <button type="button" class="card-link" @click="openContact">
            了解更多
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.products {
  background: var(--bg-gray);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.product-card {
  background: #fff;
  padding: 36px 28px;
  border-radius: 4px;
  border: 1px solid var(--border);
  transition: box-shadow 0.3s, transform 0.3s;
}

.product-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-4px);
}

.card-icon {
  font-size: 32px;
  margin-bottom: 20px;
}

.product-card h3 {
  font-size: 18px;
  margin-bottom: 12px;
}

.product-card p {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text);
  margin-bottom: 20px;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--primary);
  font-weight: 500;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
  transition: gap 0.2s;
}

.card-link:hover {
  gap: 10px;
}

@media (max-width: 992px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
