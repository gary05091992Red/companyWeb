<script setup>
const highlights = [
  { number: '20+', label: '年產業經驗' },
  { number: '500+', label: '合作客戶' },
  { number: '30+', label: '專業團隊' },
  { number: '99%', label: '客戶滿意度' },
]
</script>

<template>
  <section id="intro" class="section intro">
    <div class="container">
      <h2 class="section-title">公司介紹</h2>
      <p class="section-subtitle">COMPANY INTRODUCTION</p>

      <div class="intro-grid">
        <div class="intro-text">
          <h3>星和 — 您的專業合作夥伴</h3>
          <p>
            星和成立以來，始終專注於提供高品質的產品與服務。我們以客戶需求為核心，
            結合創新技術與豐富的產業經驗，為企業量身打造最適合的解決方案。
          </p>
          <p>
            從產品研發、系統整合到售後服務，我們提供一站式的專業支援，
            協助客戶在競爭激烈的市場中脫穎而出，實現永續成長。
          </p>
          <ul class="intro-list">
            <li>專業技術團隊，提供客製化解決方案</li>
            <li>嚴格品質管控，確保產品穩定可靠</li>
            <li>完善售後服務，快速回應客戶需求</li>
          </ul>
        </div>

        <div class="intro-visual">
          <div class="visual-card">
            <div class="visual-icon">
              <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
                <rect x="4" y="8" width="40" height="32" rx="2" stroke="#0073c2" stroke-width="2"/>
                <path d="M4 16h40M12 24h8M12 30h16" stroke="#0073c2" stroke-width="2"/>
              </svg>
            </div>
            <p class="visual-label">企業願景</p>
            <p class="visual-desc">成為產業領導品牌，創造永續價值</p>
          </div>
          <div class="visual-card accent">
            <div class="visual-icon">
              <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
                <circle cx="24" cy="24" r="18" stroke="#fff" stroke-width="2"/>
                <path d="M24 14v10l7 7" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <p class="visual-label">企業使命</p>
            <p class="visual-desc">以創新驅動進步，以品質贏得信賴</p>
          </div>
        </div>
      </div>

      <div class="stats">
        <div v-for="item in highlights" :key="item.label" class="stat-item">
          <span class="stat-number">{{ item.number }}</span>
          <span class="stat-label">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro {
  background: var(--bg);
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  margin-bottom: 64px;
}

.intro-text h3 {
  font-size: 22px;
  margin-bottom: 20px;
  color: var(--primary);
}

.intro-text p {
  margin-bottom: 16px;
  line-height: 1.8;
  color: var(--text);
}

.intro-list {
  margin-top: 24px;
  padding: 0;
  list-style: none;
}

.intro-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  color: var(--text);
}

.intro-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 8px;
  height: 8px;
  background: var(--primary);
  border-radius: 50%;
}

.intro-visual {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.visual-card {
  padding: 32px;
  background: var(--bg-gray);
  border-radius: 4px;
  border-left: 4px solid var(--primary);
}

.visual-card.accent {
  background: var(--primary);
  border-left-color: #fff;
  color: #fff;
}

.visual-card.accent .visual-label,
.visual-card.accent .visual-desc {
  color: #fff;
}

.visual-icon {
  margin-bottom: 16px;
}

.visual-label {
  font-size: 13px;
  color: var(--text-light);
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.visual-desc {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-dark);
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding-top: 48px;
  border-top: 1px solid var(--border);
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 36px;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: var(--text-light);
}

@media (max-width: 768px) {
  .intro-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
