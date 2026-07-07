<script setup>
const baseUrl = import.meta.env.BASE_URL

const values = [
  {
    num: '01',
    en: 'Response',
    title: '快速應變',
    desc: '緊急故障即時到場，縮短停機時間',
    icon: 'bolt',
  },
  {
    num: '02',
    en: 'Expertise',
    title: '專業施工',
    desc: '資深技師團隊，現場實務經驗豐富',
    icon: 'tool',
  },
  {
    num: '03',
    en: 'Quality',
    title: '品質第一',
    desc: '嚴謹檢測流程，確保維修品質',
    icon: 'check',
  },
  {
    num: '04',
    en: 'Safety',
    title: '安全至上',
    desc: '遵循安全規範，保障人員與設備',
    icon: 'shield',
  },
]
</script>

<template>
  <section id="about" class="about-section fullpage-section">
    <div class="about-bg-texture" :style="{ backgroundImage: `url('${baseUrl}素材3.png')` }"></div>
    <div class="about-bg-accent"></div>

    <div class="about-body container">
      <header class="section-header">
        <div class="header-brand">
          <span class="header-accent" aria-hidden="true"></span>
          <img
            :src="`${baseUrl}星和LOGO.png`"
            alt="星和機電有限公司"
            class="company-logo"
          />
        </div>
        <div class="header-text">
          <span class="section-eyebrow">ABOUT US</span>
          <h2 class="section-title">關於我們</h2>
          <p class="section-subtitle">專業工業機電維護，值得信賴的現場夥伴</p>
        </div>
        <img
          :src="`${baseUrl}素材5.jpg`"
          alt=""
          class="header-emblem"
          aria-hidden="true"
        />
      </header>

      <div class="about-layout">
        <div class="visual-column">
          <div class="image-stack">
            <figure class="main-image">
              <img :src="`${baseUrl}素材2.jpg`" alt="技師進行配電盤檢修作業" />
              <figcaption>現場設備維護</figcaption>
            </figure>
            <div class="auto-badge">
              <img :src="`${baseUrl}素材4.jpg`" alt="" aria-hidden="true" />
              <span>智慧自動化</span>
            </div>
          </div>
        </div>

        <div class="content-column">
          <div class="about-content">
            <p>
              星和機電有限公司專注於工業機電設備維護、天車設備維修及自動化控制系統整合，
              服務範圍涵蓋製造業、加工業、物流倉儲、鋼鐵業、電子業等各類產業，
              為客戶提供穩定、安全、高效率的設備運轉保障。
            </p>
            <p>
              我們擁有多年現場實務經驗與專業技術團隊，熟悉天車、工業機械、配電系統及 PLC 控制技術，
              秉持「快速應變、專業施工、品質第一、安全至上」的服務理念，
              協助客戶降低設備停機風險，提升產線稼動率。
            </p>
            <p>
              我們深知預防性保養與定期巡檢對設備壽命的重要性，
              透過系統化的檢測流程與完善的維護紀錄，
              有效延長設備使用年限，降低營運成本，提升整體設備可靠度。
            </p>
            <p>
              面對自動化與智慧製造的需求，我們提供 PLC 程式撰寫、修改、除錯及系統優化服務，
              協助客戶提升自動化程度，實現更穩定、更高效的生產流程。
            </p>
          </div>

          <div class="values-block">
            <div class="values-head">
              <span class="values-eyebrow">SERVICE PHILOSOPHY</span>
              <h3 class="values-title">服務理念</h3>
            </div>

            <div class="values-panel">
              <article
                v-for="item in values"
                :key="item.title"
                class="value-card"
              >
                <span class="value-num" aria-hidden="true">{{ item.num }}</span>
                <div class="value-icon-wrap">
                  <svg v-if="item.icon === 'bolt'" class="value-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                  </svg>
                  <svg v-else-if="item.icon === 'tool'" class="value-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                  </svg>
                  <svg v-else-if="item.icon === 'check'" class="value-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  <svg v-else class="value-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div class="value-body">
                  <span class="value-en">{{ item.en }}</span>
                  <h4 class="value-name">{{ item.title }}</h4>
                  <p class="value-desc">{{ item.desc }}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  position: relative;
  background: var(--bg);
  padding-top: var(--header-height);
  overflow: hidden;
}

.about-bg-texture {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.06;
  pointer-events: none;
}

.about-bg-accent {
  position: absolute;
  top: -20%;
  right: -10%;
  width: 50%;
  height: 60%;
  background: radial-gradient(ellipse, var(--primary-light) 0%, transparent 70%);
  opacity: 0.5;
  pointer-events: none;
}

.about-body {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100dvh - var(--header-height));
  min-height: 0;
  padding-top: clamp(4px, 1vh, 12px);
  padding-bottom: clamp(4px, 1vh, 12px);
}

.section-header {
  display: flex;
  align-items: center;
  gap: clamp(16px, 2.5vw, 28px);
  margin-bottom: clamp(14px, 2.5vh, 24px);
  padding-bottom: clamp(12px, 2vh, 18px);
  border-bottom: 1px solid var(--border);
}

.header-brand {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
}

.header-accent {
  width: 4px;
  height: 52px;
  background: linear-gradient(to bottom, var(--primary), var(--accent));
  border-radius: 2px;
  flex-shrink: 0;
}

.company-logo {
  height: clamp(40px, 5vw, 52px);
  width: auto;
}

.header-text {
  flex: 1;
  min-width: 0;
}

.header-emblem {
  width: clamp(48px, 6vw, 64px);
  height: clamp(48px, 6vw, 64px);
  object-fit: contain;
  flex-shrink: 0;
  opacity: 0.85;
  filter: drop-shadow(0 2px 6px rgba(0, 104, 183, 0.15));
}

.about-layout {
  display: grid;
  grid-template-columns: minmax(260px, 40%) 1fr;
  gap: clamp(20px, 3vw, 40px);
  align-items: stretch;
  min-height: 0;
  flex: 1;
}

.visual-column {
  height: 100%;
  max-height: calc(100vh - var(--header-height) - 130px);
}

.image-stack {
  position: relative;
  height: 100%;
  min-height: 280px;
  display: flex;
  flex-direction: column;
}

.main-image {
  position: relative;
  margin: 0;
  flex: 1;
  min-height: 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-image figcaption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 14px;
  background: linear-gradient(to top, rgba(0, 40, 80, 0.75), transparent);
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
}

.auto-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px 8px 8px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 40px;
  box-shadow: var(--shadow-md);
  z-index: 1;
}

.auto-badge img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: 50%;
}

.auto-badge span {
  font-size: 12px;
  font-weight: 600;
  color: var(--primary);
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.content-column {
  display: flex;
  flex-direction: column;
  gap: clamp(10px, 1.5vh, 16px);
  min-height: 0;
  max-height: calc(100vh - var(--header-height) - 110px);
}

.about-content {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding-right: 6px;
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
}

.about-content p {
  font-size: clamp(13px, 1.4vw, 15px);
  line-height: 1.9;
  color: var(--text);
  margin: 0 0 clamp(10px, 1.5vh, 16px);
  text-align: justify;
}

.about-content p:last-child {
  margin-bottom: 0;
}

.values-block {
  flex-shrink: 0;
  padding-top: clamp(8px, 1.5vh, 14px);
  border-top: 1px solid var(--border);
}

.values-head {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 12px;
}

.values-eyebrow {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--primary);
}

.values-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-dark);
  letter-spacing: 1px;
}

.values-title::before {
  content: '｜';
  margin-right: 4px;
  color: var(--border);
  font-weight: 400;
}

.values-panel {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.value-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 14px 14px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
  transition: box-shadow 0.35s, transform 0.35s, border-color 0.35s;
}

.value-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease;
}

.value-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
  border-color: rgba(0, 104, 183, 0.25);
}

.value-card:hover::before {
  transform: scaleX(1);
}

.value-num {
  position: absolute;
  top: 6px;
  right: 10px;
  font-size: 28px;
  font-weight: 800;
  line-height: 1;
  color: var(--primary-light);
  letter-spacing: -1px;
  user-select: none;
  transition: color 0.3s;
}

.value-card:hover .value-num {
  color: rgba(0, 104, 183, 0.18);
}

.value-icon-wrap {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-light) 0%, #fff 100%);
  border: 1px solid rgba(0, 104, 183, 0.12);
  border-radius: 8px;
  color: var(--primary);
  transition: background 0.3s, color 0.3s, border-color 0.3s;
}

.value-card:hover .value-icon-wrap {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
}

.value-icon {
  width: 20px;
  height: 20px;
}

.value-body {
  position: relative;
  z-index: 1;
}

.value-en {
  display: block;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 4px;
}

.value-name {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 6px;
  letter-spacing: 0.5px;
}

.value-desc {
  font-size: 11px;
  color: var(--text-muted);
  line-height: 1.55;
  margin: 0;
}

@media (max-width: 1024px) {
  .about-body {
    height: calc(100dvh - var(--header-height));
    overflow-y: auto;
    justify-content: flex-start;
    padding-top: 12px;
    padding-bottom: 16px;
    scrollbar-width: thin;
    scrollbar-color: var(--border) transparent;
  }

  .about-layout {
    grid-template-columns: 1fr;
    gap: 24px;
    align-items: stretch;
    overflow: visible;
    max-height: none;
  }

  .visual-column {
    max-height: none;
    flex-shrink: 0;
  }

  .image-stack {
    position: relative;
    min-height: unset;
    max-height: none;
    height: auto;
    display: block;
  }

  .main-image {
    position: relative;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 10;
    max-height: min(42vh, 360px);
    flex: none;
  }

  .auto-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    margin: 0;
    z-index: 1;
  }

  .content-column {
    max-height: none;
    gap: 16px;
  }

  .about-content {
    overflow: visible;
    flex: none;
  }

  .values-panel {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .section-header {
    flex-wrap: nowrap;
    gap: 12px;
    margin-bottom: 16px;
    padding-bottom: 14px;
  }

  .header-emblem {
    display: none;
  }

  .header-accent {
    height: 40px;
  }

  .company-logo {
    height: 36px;
  }

  .header-text .section-subtitle {
    display: none;
  }

  .about-layout {
    gap: 20px;
  }

  .visual-column {
    margin-bottom: 4px;
  }

  .image-stack {
    width: 100%;
  }

  .main-image {
    aspect-ratio: 16 / 10;
    max-height: min(38vh, 280px);
  }

  .main-image figcaption {
    padding: 8px 10px;
    font-size: 11px;
  }

  .auto-badge {
    padding: 6px 12px 6px 6px;
    margin-top: 4px;
  }

  .auto-badge img {
    width: 24px;
    height: 24px;
  }

  .auto-badge span {
    font-size: 11px;
  }

  .about-content p {
    font-size: 14px;
    line-height: 1.75;
    text-align: left;
  }

  .values-head {
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 10px;
  }

  .values-panel {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .value-card {
    padding: 12px 10px 10px;
  }

  .value-num {
    font-size: 20px;
    top: 4px;
    right: 8px;
  }

  .value-icon-wrap {
    width: 34px;
    height: 34px;
  }

  .value-icon {
    width: 17px;
    height: 17px;
  }

  .value-name {
    font-size: 13px;
  }

  .value-desc {
    font-size: 10px;
    line-height: 1.45;
  }
}

@media (max-width: 480px) {
  .main-image {
    aspect-ratio: 4 / 3;
    max-height: none;
  }

  .values-panel {
    grid-template-columns: 1fr;
  }

  .value-card {
    flex-direction: row;
    align-items: flex-start;
    gap: 12px;
    padding: 14px 12px;
  }

  .value-num {
    display: none;
  }

  .value-body {
    flex: 1;
  }
}
</style>
