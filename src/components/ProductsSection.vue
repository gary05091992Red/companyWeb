<script setup>
import { useContactModal } from '../composables/useContactModal'

const { open: openContact } = useContactModal()
const baseUrl = import.meta.env.BASE_URL

const services = [
  {
    icon: '🏗',
    title: '天車設備維修與保養',
    desc: '起重設備全系列維護，確保安全高效運轉',
    items: [
      '橋式起重機（Overhead Crane）維修',
      '單軌吊車（Monorail Hoist）維修',
      '電動吊車、電動葫蘆維護',
      '天車軌道、行走機構檢修',
      '天車年度保養、定期巡檢',
      '天車電控系統維修與改善',
    ],
  },
  {
    icon: '⚙',
    title: '工業機電設備維護',
    desc: '工廠核心設備保養，降低故障停機風險',
    items: [
      '工業馬達維修與更換',
      '配電盤、控制盤檢修',
      '變頻器（Inverter）故障診斷',
      '感測器、控制元件更換',
      '工廠配電系統維護',
      '各類工業設備故障排除',
    ],
  },
  {
    icon: '💻',
    title: 'PLC 自動化控制系統',
    desc: '自動化整合與程式優化，提升產線效率',
    items: [
      'PLC 程式撰寫、修改與優化',
      'PLC 故障診斷與維修',
      '人機介面（HMI）設定',
      '自動化控制系統改善',
      '電控系統整合規劃',
      '現場設備試車與技術支援',
    ],
  },
]
</script>

<template>
  <section id="products" class="products-section fullpage-section">
    <div class="products-body">
      <div class="products-main container">
        <header class="section-header center">
          <span class="section-eyebrow">PRODUCTS & SERVICES</span>
          <h2 class="section-title">產品服務</h2>
          <p class="section-subtitle">三大核心服務，全方位守護您的工業設備</p>
        </header>

        <div class="services-grid">
          <article v-for="service in services" :key="service.title" class="service-card" :class="{ 'has-banner': service.image }">
            <div v-if="service.image" class="card-banner">
              <img :src="`${baseUrl}${service.image}`" :alt="service.title" />
            </div>
            <div class="card-top">
              <span v-if="service.icon" class="card-icon" aria-hidden="true">{{ service.icon }}</span>
              <div>
                <h3 class="card-title">{{ service.title }}</h3>
                <p class="card-desc">{{ service.desc }}</p>
              </div>
            </div>
            <ul class="service-list">
              <li v-for="item in service.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </div>

      <footer class="site-footer">
        <div class="container footer-inner">
          <div class="footer-brand">
            <img :src="`${baseUrl}logo.png`" alt="星和機電有限公司 Logo" class="footer-logo" />
            <p class="footer-slogan">快速應變 · 專業施工 · 品質第一 · 安全至上</p>
          </div>
          <nav class="footer-nav">
            <a href="#home">首頁</a>
            <a href="#about">關於我們</a>
            <a href="#products">產品服務</a>
            <button type="button" class="footer-contact" @click="openContact">聯絡我們</button>
          </nav>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <p>&copy; {{ new Date().getFullYear() }} 星和機電有限公司. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.products-section {
  background: var(--bg-subtle);
  padding-top: var(--header-height);
}

.products-body {
  display: flex;
  flex-direction: column;
  height: calc(100dvh - var(--header-height));
  width: 100%;
}

.products-main {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: clamp(8px, 2vh, 16px);
  padding-bottom: clamp(8px, 2vh, 16px);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(16px, 2.5vw, 24px);
  align-items: stretch;
}

.service-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: clamp(20px, 2.5vh, 28px) clamp(18px, 2vw, 24px);
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s;
  overflow: hidden;
}

.service-card.has-banner {
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
}

.service-card.has-banner .card-top,
.service-card.has-banner .service-list {
  padding-left: clamp(18px, 2vw, 24px);
  padding-right: clamp(18px, 2vw, 24px);
}

.service-card.has-banner .card-top {
  padding-top: clamp(16px, 2vh, 20px);
}

.service-card.has-banner .service-list {
  padding-bottom: clamp(20px, 2.5vh, 28px);
}

.card-banner {
  width: 100%;
  height: clamp(120px, 18vh, 160px);
  overflow: hidden;
}

.card-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 40%;
  transition: transform 0.4s ease;
}

.service-card.has-banner:hover .card-banner img {
  transform: scale(1.04);
}

.service-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
  border-color: var(--primary-light);
}

.card-top {
  display: flex;
  gap: 14px;
  margin-bottom: 18px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--border);
}

.card-icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-light);
  border-radius: var(--radius);
  font-size: 22px;
}

.card-title {
  font-size: clamp(15px, 1.6vw, 17px);
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 6px;
  line-height: 1.4;
}

.card-desc {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0;
}

.service-list {
  flex: 1;
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-list li {
  position: relative;
  padding-left: 14px;
  margin-bottom: 7px;
  font-size: clamp(12px, 1.3vw, 14px);
  color: var(--text);
  line-height: 1.55;
}

.service-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 5px;
  height: 5px;
  background: var(--primary);
  border-radius: 50%;
}

.site-footer {
  flex-shrink: 0;
  background: var(--bg-dark);
  color: rgba(255, 255, 255, 0.7);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: clamp(16px, 2.5vh, 24px) clamp(20px, 4vw, 48px);
}

.footer-logo {
  height: 36px;
  width: auto;
  margin-bottom: 6px;
  opacity: 0.95;
}

.footer-slogan {
  font-size: 13px;
  margin: 0;
  color: rgba(255, 255, 255, 0.55);
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 28px;
  align-items: center;
}

.footer-nav a,
.footer-contact {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.2s;
}

.footer-nav a:hover,
.footer-contact:hover {
  color: #fff;
}

.footer-contact {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px 0;
  text-align: center;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.45);
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .services-grid .service-card:last-child {
    grid-column: 1 / -1;
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .products-main {
    justify-content: flex-start;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .section-header.center {
    margin-bottom: 16px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    max-width: none;
    gap: 12px;
  }

  .services-grid .service-card:last-child {
    grid-column: auto;
  }

  .service-card.has-banner {
    padding-top: 0;
  }

  .service-card {
    padding: 18px 16px;
  }

  .service-card.has-banner .card-top {
    padding-top: 14px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .service-card.has-banner .service-list {
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 18px;
  }

  .card-banner {
    height: 140px;
  }

  .service-card:hover {
    transform: none;
  }

  .card-top {
    margin-bottom: 14px;
    padding-bottom: 14px;
    gap: 12px;
  }

  .card-icon {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  .card-title {
    font-size: 15px;
  }

  .card-desc {
    font-size: 12px;
  }

  .service-list li {
    font-size: 13px;
    margin-bottom: 6px;
  }

  .footer-inner {
    flex-direction: column;
    text-align: center;
    gap: 16px;
    padding: 16px;
  }

  .footer-logo {
    height: 32px;
    margin: 0 auto 6px;
  }

  .footer-slogan {
    font-size: 12px;
    line-height: 1.6;
  }

  .footer-nav {
    justify-content: center;
    gap: 8px 20px;
  }

  .footer-nav a,
  .footer-contact {
    font-size: 13px;
  }

  .footer-bottom {
    padding: 10px 0 calc(10px + env(safe-area-inset-bottom));
    font-size: 11px;
  }
}

@media (max-width: 480px) {
  .footer-nav {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
