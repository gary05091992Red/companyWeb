<script setup>
import { useContactModal } from '../composables/useContactModal'

const { open: openContact } = useContactModal()
const baseUrl = import.meta.env.BASE_URL

const description =
  '專注於工業機電設備維護與自動化系統，提供天車設備維護、工業機電設備保養、PLC控制系統維護與故障排除等專業服務'
</script>

<template>
  <section id="home" class="hero fullpage-section">
    <div class="hero-bg" :style="{ backgroundImage: `url('${baseUrl}banner1.png')` }"></div>
    <div class="hero-overlay"></div>

    <div class="hero-content container">
      <div class="hero-text">
        <p class="hero-eyebrow">INDUSTRIAL ELECTROMECHANICAL</p>
        <h1 class="hero-title">星和機電有限公司</h1>
        <p class="hero-tagline">專業機電維護 · 自動化整合 · 安全至上</p>

        <div class="marquee-bar">
          <div class="marquee-wrap">
            <div class="marquee-track">
              <p class="hero-desc">{{ description }}</p>
              <p class="hero-desc" aria-hidden="true">{{ description }}</p>
            </div>
          </div>
        </div>

        <div class="hero-actions">
          <a href="#about" class="btn-primary">了解更多</a>
          <button type="button" class="btn-outline" @click="openContact">聯絡我們</button>
        </div>
      </div>

      <a href="#about" class="scroll-hint" aria-label="向下捲動">
        <span class="scroll-line"></span>
        <span class="scroll-text">SCROLL</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-color: #0c2d4a;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(105deg, rgba(0, 30, 60, 0.82) 0%, rgba(0, 50, 90, 0.45) 55%, rgba(0, 60, 100, 0.25) 100%),
    linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 40%);
}

.hero-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: var(--header-height);
  padding-bottom: clamp(32px, 6vh, 56px);
  color: #fff;
}

.hero-text {
  max-width: 780px;
  animation: fade-up 0.9s ease both;
}

.hero-eyebrow {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 16px;
}

.hero-title {
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
  letter-spacing: 2px;
  line-height: 1.2;
}

.hero-tagline {
  font-size: clamp(15px, 2vw, 18px);
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 28px;
  letter-spacing: 1px;
}

.marquee-bar {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius);
  padding: 14px 0;
  margin-bottom: 32px;
  overflow: hidden;
}

.marquee-wrap {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 30s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

.hero-desc {
  flex-shrink: 0;
  font-size: clamp(13px, 1.6vw, 16px);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.92);
  white-space: nowrap;
  padding-right: 80px;
  margin: 0;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.scroll-hint {
  position: absolute;
  right: clamp(20px, 4vw, 48px);
  bottom: clamp(32px, 6vh, 56px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.2s;
}

.scroll-hint:hover {
  color: #fff;
}

.scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), transparent);
  animation: scroll-pulse 2s ease infinite;
}

.scroll-text {
  font-size: 10px;
  letter-spacing: 2px;
  writing-mode: vertical-rl;
}

@keyframes marquee-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scroll-pulse {
  0%, 100% { opacity: 0.4; transform: scaleY(0.8); }
  50% { opacity: 1; transform: scaleY(1); }
}

@media (max-width: 768px) {
  .hero-content {
    padding-bottom: 28px;
  }

  .hero-eyebrow {
    font-size: 10px;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }

  .hero-title {
    letter-spacing: 1px;
    margin-bottom: 8px;
  }

  .hero-tagline {
    font-size: 14px;
    margin-bottom: 18px;
    line-height: 1.6;
  }

  .marquee-bar {
    padding: 12px 0;
    margin-bottom: 20px;
  }

  .scroll-hint {
    display: none;
  }

  .marquee-wrap {
    mask-image: none;
    -webkit-mask-image: none;
  }

  .marquee-track {
    animation: none;
    flex-direction: column;
    width: 100%;
    padding: 0 14px;
  }

  .hero-desc {
    white-space: normal;
    padding-right: 0;
    font-size: 13px;
    line-height: 1.65;
  }

  .hero-desc[aria-hidden='true'] {
    display: none;
  }

  .hero-actions {
    flex-direction: column;
    gap: 10px;
  }

  .hero-actions .btn-primary,
  .hero-actions .btn-outline {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .hero-bg {
    background-position: 65% center;
  }

  .hero-title {
    font-size: 26px;
  }
}
</style>
