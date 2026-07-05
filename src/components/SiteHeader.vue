<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useContactModal } from '../composables/useContactModal'

const { open: openContact } = useContactModal()

const navItems = [
  { label: '首頁', href: '#home' },
  { label: '關於我們', href: '#about' },
  { label: '產品服務', href: '#products' },
]

const mobileOpen = ref(false)
const scrolled = ref(false)
const activeSection = ref('#home')
const baseUrl = import.meta.env.BASE_URL

const sectionIds = ['home', 'about', 'products']

function handleScroll() {
  scrolled.value = window.scrollY > 10
}

function isActive(href) {
  return activeSection.value === href
}

function closeMobile() {
  mobileOpen.value = false
}

function openContactModal() {
  closeMobile()
  openContact()
}

function setupSectionObserver() {
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean)

  if (!sections.length) return null

  const observer = new IntersectionObserver(
    (entries) => {
      const mostVisible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (mostVisible) {
        activeSection.value = `#${mostVisible.target.id}`
      }
    },
    {
      threshold: [0.25, 0.5, 0.75],
    },
  )

  sections.forEach((section) => observer.observe(section))
  return observer
}

let sectionObserver = null

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  sectionObserver = setupSectionObserver()
})

watch(mobileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  sectionObserver?.disconnect()
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="site-header" :class="{ scrolled }">
    <div class="header-main">
      <div class="container header-main-inner">
        <div class="header-spacer" aria-hidden="true"></div>

        <a href="#home" class="logo">
          <img :src="`${baseUrl}logo.png`" alt="星和機電有限公司 Logo" />
        </a>

        <div class="header-right">
          <nav class="nav-desktop">
            <a
              v-for="item in navItems"
              :key="item.href"
              :href="item.href"
              class="nav-link"
              :class="{ active: isActive(item.href) }"
            >
              {{ item.label }}
            </a>
          </nav>
          <button type="button" class="contact-cta" @click="openContactModal">
            聯絡我們
          </button>
          <button
            class="menu-toggle"
            :class="{ open: mobileOpen }"
            aria-label="選單"
            @click="mobileOpen = !mobileOpen"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>

    <nav class="nav-mobile" :class="{ open: mobileOpen }">
      <a
        v-for="item in navItems"
        :key="item.href"
        :href="item.href"
        class="nav-link"
        :class="{ active: isActive(item.href) }"
        @click="closeMobile"
      >
        {{ item.label }}
      </a>
      <button type="button" class="contact-cta contact-cta-mobile" @click="openContactModal">
        聯絡我們
      </button>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}

.site-header.scrolled {
  box-shadow: var(--shadow-sm);
  border-bottom-color: var(--border);
}

.header-main-inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: var(--header-height);
}

.logo {
  justify-self: center;
}

.logo img {
  height: 60px;
  width: auto;
}

.header-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  grid-column: 3;
}

.nav-desktop {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-right: 12px;
}

.nav-link {
  position: relative;
  padding: 8px 16px;
  font-size: 15px;
  color: var(--text-dark);
  font-weight: 500;
  border-radius: var(--radius);
  transition: color 0.2s, background 0.2s;
}

.nav-link:hover,
.nav-link.active {
  color: var(--primary);
  background: var(--primary-light);
}

.nav-link.active {
  font-weight: 600;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 4px;
  height: 2px;
  background: var(--primary);
  border-radius: 1px;
}

.contact-cta {
  padding: 10px 22px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: var(--radius);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: background 0.2s, box-shadow 0.2s;
  white-space: nowrap;
}

.contact-cta:hover {
  background: var(--primary-dark);
  box-shadow: var(--shadow-sm);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 40px;
  height: 40px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: #fff;
  padding: 8px;
  justify-content: center;
}

.menu-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--text-dark);
  border-radius: 1px;
  transition: transform 0.3s, opacity 0.3s;
}

.menu-toggle.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle.open span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.nav-mobile {
  display: none;
  flex-direction: column;
  background: #fff;
  border-top: 1px solid var(--border);
  padding: 12px 16px calc(16px + env(safe-area-inset-bottom));
  gap: 4px;
  box-shadow: var(--shadow-md);
}

.nav-mobile.open {
  display: flex;
}

.nav-mobile .nav-link {
  padding: 14px 16px;
  border-radius: var(--radius);
}

.nav-mobile .nav-link.active {
  background: var(--primary-light);
  color: var(--primary);
  font-weight: 600;
  border-left: 3px solid var(--primary);
  padding-left: 13px;
}

.nav-mobile .nav-link.active::after {
  display: none;
}

.contact-cta-mobile {
  margin-top: 8px;
  width: 100%;
  padding: 14px 22px;
}

@media (max-width: 992px) {
  .nav-desktop {
    gap: 2px;
  }

  .nav-link {
    padding: 8px 12px;
    font-size: 14px;
  }

  .contact-cta {
    padding: 9px 16px;
    font-size: 13px;
  }
}

@media (max-width: 768px) {
  .header-main-inner {
    grid-template-columns: 1fr auto;
    padding: 0 4px;
  }

  .header-spacer {
    display: none;
  }

  .logo {
    grid-column: 1;
    justify-self: start;
  }

  .logo img {
    height: 38px;
  }

  .header-right {
    grid-column: 2;
  }

  .nav-desktop,
  .header-right .contact-cta {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }
}
</style>
