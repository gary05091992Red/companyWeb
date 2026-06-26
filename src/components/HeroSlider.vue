<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useContactModal } from '../composables/useContactModal'

const { open: openContact } = useContactModal()

const slides = [
  {
    tag: '星和科技',
    title: '關於我們',
    subtitle: '以創新技術驅動產業升級，打造永續未來',
    cta: '了解更多',
    ctaLink: '#intro',
    gradient: 'linear-gradient(135deg, #0a2540 0%, #0073c2 50%, #1a6b8a 100%)',
  },
  {
    tag: '專業團隊',
    title: '值得信賴的夥伴',
    subtitle: '深耕產業多年，提供全方位解決方案',
    cta: '查看服務',
    ctaLink: '#products',
    gradient: 'linear-gradient(135deg, #1a3a5c 0%, #005a99 50%, #2d8bc9 100%)',
  },
  {
    tag: '永續經營',
    title: '共創美好明天',
    subtitle: '秉持誠信、創新、共贏的企業精神',
    cta: '聯絡我們',
    ctaAction: 'contact',
    gradient: 'linear-gradient(135deg, #0d2137 0%, #0066aa 60%, #4a9fd4 100%)',
  },
]

const current = ref(0)
let timer = null

function goTo(index) {
  current.value = index
}

function prev() {
  current.value = (current.value - 1 + slides.length) % slides.length
}

function next() {
  current.value = (current.value + 1) % slides.length
}

function startAutoPlay() {
  timer = setInterval(next, 6000)
}

function stopAutoPlay() {
  clearInterval(timer)
}

onMounted(startAutoPlay)
onUnmounted(stopAutoPlay)
</script>

<template>
  <section id="about" class="hero">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="slide"
      :class="{ active: index === current }"
      :style="{ background: slide.gradient }"
    >
      <div class="slide-overlay"></div>
      <div class="slide-content container">
        <p class="slide-tag">{{ slide.tag }}</p>
        <h1 class="slide-title">{{ slide.title }}</h1>
        <p class="slide-subtitle">{{ slide.subtitle }}</p>
        <a
          v-if="slide.ctaLink"
          :href="slide.ctaLink"
          class="btn-primary"
        >{{ slide.cta }}</a>
        <button
          v-else-if="slide.ctaAction === 'contact'"
          type="button"
          class="btn-primary"
          @click="openContact"
        >{{ slide.cta }}</button>
      </div>
    </div>

    <button class="arrow arrow-left" aria-label="上一張" @click="prev(); stopAutoPlay(); startAutoPlay()">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M15 6l-6 6 6 6" />
      </svg>
    </button>
    <button class="arrow arrow-right" aria-label="下一張" @click="next(); stopAutoPlay(); startAutoPlay()">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M9 6l6 6-6 6" />
      </svg>
    </button>

    <div class="dots">
      <button
        v-for="(_, index) in slides"
        :key="index"
        class="dot"
        :class="{ active: index === current }"
        :aria-label="`第 ${index + 1} 張`"
        @click="goTo(index)"
      />
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: calc(100vh - var(--header-height));
  min-height: 520px;
  max-height: 720px;
  margin-top: var(--header-height);
  overflow: hidden;
}

.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.8s ease;
}

.slide.active {
  opacity: 1;
}

.slide-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 70% 50%, rgba(255, 255, 255, 0.06) 0%, transparent 60%),
    linear-gradient(to right, rgba(0, 0, 0, 0.35) 0%, transparent 60%);
}

.slide-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 80px;
  color: #fff;
}

.slide-tag {
  font-size: 15px;
  letter-spacing: 2px;
  margin-bottom: 12px;
  opacity: 0.9;
}

.slide-title {
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
  letter-spacing: 3px;
}

.slide-subtitle {
  font-size: 18px;
  max-width: 520px;
  margin-bottom: 32px;
  opacity: 0.9;
  line-height: 1.7;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  padding: 12px;
  transition: color 0.2s;
}

.arrow:hover {
  color: #fff;
}

.arrow-left {
  left: 16px;
}

.arrow-right {
  right: 16px;
}

.dots {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.6);
  background: transparent;
  padding: 0;
  transition: background 0.3s;
}

.dot.active {
  background: #fff;
  border-color: #fff;
}

@media (max-width: 768px) {
  .hero {
    height: calc(100vh - var(--header-height));
    min-height: 440px;
    margin-top: var(--header-height);
  }

  .slide-title {
    font-size: 32px;
  }

  .slide-subtitle {
    font-size: 15px;
  }

  .arrow {
    display: none;
  }
}
</style>
